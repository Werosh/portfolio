import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "../firebase/app";

const COLLECTION = "projects";

export function subscribeProjects(callback, onError) {
  if (!isFirebaseConfigured() || !db) {
    callback([]);
    return () => {};
  }
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  return onSnapshot(
    q,
    (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(list);
    },
    (err) => {
      console.error(err);
      if (onError) onError(err);
      callback([]);
    }
  );
}

function parseTechStack(raw) {
  if (!raw) return [];
  if (Array.isArray(raw))
    return raw.map(String).map((s) => s.trim()).filter(Boolean);
  return String(raw)
    .split(/[,|]/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseLink(raw) {
  if (raw == null) return "";
  const s = String(raw).trim();
  return s;
}

export async function createProject(
  { title, description, techStack, link },
  userId
) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  if (!userId) throw new Error("You must be signed in to create a project.");

  await addDoc(collection(db, COLLECTION), {
    title: title.trim(),
    description: description.trim(),
    techStack: parseTechStack(techStack),
    link: parseLink(link),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateProject(
  projectId,
  { title, description, techStack, link },
  userId
) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  if (!userId) throw new Error("You must be signed in to update a project.");

  const refDoc = doc(db, COLLECTION, projectId);
  await updateDoc(refDoc, {
    title: title.trim(),
    description: description.trim(),
    techStack: parseTechStack(techStack),
    link: parseLink(link),
    updatedAt: serverTimestamp(),
  });
}

export async function deleteProject(projectId) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  await deleteDoc(doc(db, COLLECTION, projectId));
}
