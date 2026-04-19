import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import AdminLoginGate from "../components/dev-draft/admin/AdminLoginGate";
import AdminSidebar from "../components/dev-draft/admin/AdminSidebar";
import AdminHeader from "../components/dev-draft/admin/AdminHeader";
import AdminProjectForm from "../components/dev-draft/admin/AdminProjectForm";
import AdminProjectList from "../components/dev-draft/admin/AdminProjectList";
import AdminBento from "../components/dev-draft/admin/AdminBento";
import { auth, isFirebaseConfigured } from "../firebase/app";
import {
  createProject,
  deleteProject,
  subscribeProjects,
  updateProject,
} from "../services/projectsApi";

const defaultAdminEmail = import.meta.env.VITE_ADMIN_EMAIL ?? "";
const defaultAdminPassword = import.meta.env.VITE_ADMIN_PASSWORD ?? "";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState(defaultAdminEmail);
  const [password, setPassword] = useState(defaultAdminPassword);
  const [authError, setAuthError] = useState("");
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured() || !auth) {
      setAuthReady(true);
      return undefined;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    setAuthError("");
    if (!auth) return;
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
    } catch (err) {
      setAuthError(err.message || "Sign-up failed");
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    setEditing(null);
  };

  const handleSubmitProject = async (payload) => {
    if (!user) return;
    setBusy(true);
    try {
      if (editing) {
        await updateProject(editing.id, payload, user.uid);
        setEditing(null);
      } else {
        await createProject(payload, user.uid);
      }
    } catch (err) {
      alert(err.message || "Could not save project");
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (p) => {
    if (!window.confirm(`Delete “${p.title}”?`)) return;
    setBusy(true);
    try {
      await deleteProject(p.id);
      if (editing?.id === p.id) setEditing(null);
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
        onSignUp={handleSignUp}
      />
    );
  }

  return (
    <div className="admin-root min-h-screen bg-surface font-body text-on-surface selection:bg-primary-container selection:text-primary">
      <AdminSidebar />
      <AdminHeader />
      <main className="signature-smudge-admin min-h-screen p-8 pl-72 pt-24">
        <div className="mx-auto mb-6 flex max-w-6xl items-center justify-end gap-4">
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
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-8">
          <div className="col-span-12 mb-4">
            <div className="flex items-baseline gap-4">
              <h2 className="font-headline text-6xl font-bold tracking-tighter text-on-surface">
                Main_Canvas
              </h2>
              <span className="font-sketch -rotate-2 text-2xl text-primary">
                v2.4 Draft
              </span>
            </div>
            <div className="mt-2 h-1 w-32 bg-primary" />
          </div>
          <AdminProjectForm
            editing={editing}
            onClearEdit={() => setEditing(null)}
            onSubmit={handleSubmitProject}
            busy={busy}
          />
          <AdminProjectList
            projects={projects}
            onEdit={setEditing}
            onDelete={handleDelete}
          />
          <AdminBento />
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
