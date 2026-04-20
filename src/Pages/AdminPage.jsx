import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import AdminLoginGate from "../components/dev-draft/admin/AdminLoginGate";
import AdminHeader from "../components/dev-draft/admin/AdminHeader";
import AdminProjectForm from "../components/dev-draft/admin/AdminProjectForm";
import AdminProjectList from "../components/dev-draft/admin/AdminProjectList";
import AdminExperienceForm from "../components/dev-draft/admin/AdminExperienceForm";
import AdminExperienceList from "../components/dev-draft/admin/AdminExperienceList";
import AdminContactInbox from "../components/dev-draft/admin/AdminContactInbox";
import AdminBento from "../components/dev-draft/admin/AdminBento";
import AdminVisitorLogs from "../components/dev-draft/admin/AdminVisitorLogs";
import { auth, isFirebaseConfigured } from "../firebase/app";
import {
  createProject,
  deleteProject,
  subscribeProjects,
  updateProject,
} from "../services/projectsApi";
import {
  createExperience,
  deleteExperience,
  subscribeExperiences,
  updateExperience,
} from "../services/experienceApi";
import {
  deleteContactMessage,
  subscribeContactMessages,
} from "../services/contactMessagesApi";
import { subscribeVisitorLogs } from "../services/visitorTrackingApi";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [adminTab, setAdminTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [visitorsRefreshing, setVisitorsRefreshing] = useState(false);
  const [visitorRefreshKey, setVisitorRefreshKey] = useState(0);
  const [editingProject, setEditingProject] = useState(null);
  const [editingExperience, setEditingExperience] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured() || !auth) {
      setAuthReady(true);
      return undefined;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
      if (u) setPassword("");
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (!user || !isFirebaseConfigured()) {
      setProjects([]);
      return undefined;
    }
    return subscribeProjects(setProjects);
  }, [user]);

  useEffect(() => {
    if (!user || !isFirebaseConfigured()) {
      setExperiences([]);
      return undefined;
    }
    return subscribeExperiences(setExperiences);
  }, [user]);

  useEffect(() => {
    if (!user || !isFirebaseConfigured()) {
      setContactMessages([]);
      return undefined;
    }
    return subscribeContactMessages(setContactMessages);
  }, [user]);

  useEffect(() => {
    if (!user || !isFirebaseConfigured()) {
      setVisitors([]);
      return undefined;
    }
    const unsubscribe = subscribeVisitorLogs(
      (rows) => {
        setVisitors(rows);
        setVisitorsRefreshing(false);
      },
      () => {
        setVisitorsRefreshing(false);
      },
    );
    return unsubscribe;
  }, [user, visitorRefreshKey]);

  const handleRefreshVisitors = () => {
    setVisitorsRefreshing(true);
    setVisitorRefreshKey((value) => value + 1);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    if (!auth) return;
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err) {
      setAuthError(err.message || "Sign-in failed");
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    setEditingProject(null);
    setEditingExperience(null);
  };

  const switchTab = (tab) => {
    setAdminTab(tab);
    setEditingProject(null);
    setEditingExperience(null);
  };

  const handleSubmitProject = async (payload) => {
    if (!user) return;
    setBusy(true);
    try {
      if (editingProject) {
        await updateProject(editingProject.id, payload, user.uid);
        setEditingProject(null);
      } else {
        await createProject(payload, user.uid);
      }
    } catch (err) {
      alert(err.message || "Could not save project");
    } finally {
      setBusy(false);
    }
  };

  const handleDeleteProject = async (p) => {
    if (!window.confirm(`Delete “${p.title}”?`)) return;
    setBusy(true);
    try {
      await deleteProject(p.id);
      if (editingProject?.id === p.id) setEditingProject(null);
    } catch (err) {
      alert(err.message || "Delete failed");
    } finally {
      setBusy(false);
    }
  };

  const handleSubmitExperience = async (payload) => {
    if (!user) return;
    setBusy(true);
    try {
      if (editingExperience) {
        await updateExperience(editingExperience.id, payload, user.uid);
        setEditingExperience(null);
      } else {
        await createExperience(payload, user.uid);
      }
    } catch (err) {
      alert(err.message || "Could not save experience entry");
    } finally {
      setBusy(false);
    }
  };

  const handleDeleteExperience = async (row) => {
    if (!window.confirm(`Delete “${row.role}” at ${row.organization}?`)) return;
    setBusy(true);
    try {
      await deleteExperience(row.id);
      if (editingExperience?.id === row.id) setEditingExperience(null);
    } catch (err) {
      alert(err.message || "Delete failed");
    } finally {
      setBusy(false);
    }
  };

  const handleDeleteContact = async (row) => {
    if (!window.confirm(`Delete message from “${row.name || row.email}”?`)) return;
    setBusy(true);
    try {
      await deleteContactMessage(row.id);
    } catch (err) {
      alert(err.message || "Delete failed");
    } finally {
      setBusy(false);
    }
  };

  if (!authReady) {
    return (
      <div className="admin-root flex min-h-screen items-center justify-center bg-surface font-body text-on-surface">
        Initializing…
      </div>
    );
  }

  if (!isFirebaseConfigured()) {
    return (
      <div className="admin-root min-h-screen bg-surface p-10 font-body text-on-surface">
        <h1 className="font-headline text-2xl font-bold">Firebase not configured</h1>
        <p className="mt-4 max-w-xl text-on-surface-variant">
          Add a <code className="text-primary">.env</code> file in the project root
          with:
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-on-surface-variant">
          <li>VITE_FIREBASE_API_KEY</li>
          <li>VITE_FIREBASE_AUTH_DOMAIN</li>
          <li>VITE_FIREBASE_PROJECT_ID</li>
          <li>VITE_FIREBASE_STORAGE_BUCKET</li>
          <li>VITE_FIREBASE_MESSAGING_SENDER_ID</li>
          <li>VITE_FIREBASE_APP_ID</li>
        </ul>
      </div>
    );
  }

  if (!user) {
    return (
      <AdminLoginGate
        email={email}
        password={password}
        authError={authError}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className="admin-root min-h-screen bg-surface font-body text-on-surface selection:bg-primary-container selection:text-primary">
      <AdminHeader />
      <main className="signature-smudge-admin min-h-screen px-4 pb-10 pt-20 sm:px-8 sm:pt-24">
        <div className="mb-6 flex w-full items-center justify-end gap-4">
          <span className="font-body text-sm text-on-surface-variant">
            {user.email}
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="border border-outline-variant px-4 py-2 font-headline text-xs font-bold uppercase tracking-widest hover:border-primary"
          >
            Sign out
          </button>
        </div>
        <div className="grid w-full grid-cols-12 gap-8">
          <div className="col-span-12 mb-4">
            <div className="flex flex-wrap items-baseline gap-4">
              <h2 className="font-headline text-6xl font-bold tracking-tighter text-on-surface">
                Main_Canvas
              </h2>
              <span className="font-sketch -rotate-2 text-2xl text-primary">
                v2.4 Draft
              </span>
            </div>
            <div className="mt-2 h-1 w-32 bg-primary" />
          </div>

          <div className="col-span-12 flex flex-wrap gap-2 border-b border-outline-variant/30 pb-4">
            <button
              type="button"
              onClick={() => switchTab("projects")}
              className={`border px-5 py-2 font-headline text-xs font-bold uppercase tracking-widest transition-colors ${
                adminTab === "projects"
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary"
              }`}
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => switchTab("experience")}
              className={`border px-5 py-2 font-headline text-xs font-bold uppercase tracking-widest transition-colors ${
                adminTab === "experience"
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary"
              }`}
            >
              Experience timeline
            </button>
            <button
              type="button"
              onClick={() => switchTab("inbox")}
              className={`border px-5 py-2 font-headline text-xs font-bold uppercase tracking-widest transition-colors ${
                adminTab === "inbox"
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary"
              }`}
            >
              Inbox
              {contactMessages.length > 0 ? (
                <span className="ml-2 inline-flex min-w-[1.25rem] justify-center rounded bg-on-primary/20 px-1 text-[10px] font-black text-on-primary">
                  {contactMessages.length > 99 ? "99+" : contactMessages.length}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => switchTab("visitors")}
              className={`border px-5 py-2 font-headline text-xs font-bold uppercase tracking-widest transition-colors ${
                adminTab === "visitors"
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary"
              }`}
            >
              Visitors
              {visitors.length > 0 ? (
                <span className="ml-2 inline-flex min-w-[1.25rem] justify-center rounded bg-on-primary/20 px-1 text-[10px] font-black text-on-primary">
                  {visitors.length > 99 ? "99+" : visitors.length}
                </span>
              ) : null}
            </button>
          </div>

          {adminTab === "projects" ? (
            <>
              <AdminProjectForm
                editing={editingProject}
                onClearEdit={() => setEditingProject(null)}
                onSubmit={handleSubmitProject}
                busy={busy}
              />
              <AdminProjectList
                projects={projects}
                onEdit={setEditingProject}
                onDelete={handleDeleteProject}
              />
            </>
          ) : null}
          {adminTab === "experience" ? (
            <>
              <AdminExperienceForm
                editing={editingExperience}
                onClearEdit={() => setEditingExperience(null)}
                onSubmit={handleSubmitExperience}
                busy={busy}
              />
              <AdminExperienceList
                experiences={experiences}
                onEdit={setEditingExperience}
                onDelete={handleDeleteExperience}
              />
            </>
          ) : null}
          {adminTab === "inbox" ? (
            <AdminContactInbox
              messages={contactMessages}
              onDelete={handleDeleteContact}
              busy={busy}
            />
          ) : null}
          {adminTab === "visitors" ? (
            <AdminVisitorLogs
              visitors={visitors}
              onRefresh={handleRefreshVisitors}
              refreshing={visitorsRefreshing}
            />
          ) : null}

          {adminTab !== "inbox" && adminTab !== "visitors" ? <AdminBento /> : null}
        </div>
      </main>
      <div className="pointer-events-none fixed bottom-10 right-10 -rotate-12 select-none opacity-5">
        <span className="font-headline text-9xl font-black uppercase">
          Technical_DRAFT
        </span>
      </div>
    </div>
  );
}
