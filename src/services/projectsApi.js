import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "../firebase/app";

const COLLECTION = "projects";

function docMillis(ts) {
  if (!ts) return 0;
  if (typeof ts.toMillis === "function") return ts.toMillis();
  if (typeof ts.seconds === "number") return ts.seconds * 1000;
  return 0;
}

/** Lower `sortOrder` appears first on the site. Missing sortOrder sorts last, then by newest createdAt. */
export function sortProjectsList(list) {
  return [...list].sort((a, b) => {
    const ao =
      typeof a.sortOrder === "number" && !Number.isNaN(a.sortOrder)
        ? a.sortOrder
        : 999999;
    const bo =
      typeof b.sortOrder === "number" && !Number.isNaN(b.sortOrder)
        ? b.sortOrder
        : 999999;
    if (ao !== bo) return ao - bo;
    return docMillis(b.createdAt) - docMillis(a.createdAt);
  });
}

export function subscribeProjects(callback, onError) {
  if (!isFirebaseConfigured() || !db) {
    callback([]);
    return () => {};
  }
  const q = query(collection(db, COLLECTION));
  return onSnapshot(
    q,
    (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(sortProjectsList(list));
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

/** Integer ≥ 1, or null if blank / invalid (caller decides default). */
export function parseSortOrder(raw) {
  if (raw === undefined || raw === null) return null;
  const s = String(raw).trim();
  if (s === "") return null;
  const n = Number.parseInt(s, 10);
  if (!Number.isFinite(n) || n < 1) return null;
  return n;
}

async function nextSortOrderIfBlank(rawSort) {
  const parsed = parseSortOrder(rawSort);
  if (parsed !== null) return parsed;
  const snap = await getDocs(collection(db, COLLECTION));
  let max = 0;
  snap.forEach((d) => {
    const s = d.data().sortOrder;
    if (typeof s === "number" && !Number.isNaN(s) && s > max) max = s;
  });
  return max + 1;
}

export async function createProject(
  { title, description, techStack, link, sortOrder },
  userId
) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  if (!userId) throw new Error("You must be signed in to create a project.");

  const order = await nextSortOrderIfBlank(sortOrder);

  await addDoc(collection(db, COLLECTION), {
    title: title.trim(),
    description: description.trim(),
    techStack: parseTechStack(techStack),
    link: parseLink(link),
    sortOrder: order,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateProject(
  projectId,
  { title, description, techStack, link, sortOrder },
  userId
) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  if (!userId) throw new Error("You must be signed in to update a project.");

  const refDoc = doc(db, COLLECTION, projectId);
  const patch = {
    title: title.trim(),
    description: description.trim(),
    techStack: parseTechStack(techStack),
    link: parseLink(link),
    updatedAt: serverTimestamp(),
  };
  const nextOrder = parseSortOrder(sortOrder);
  if (nextOrder !== null) {
    patch.sortOrder = nextOrder;
  }
  await updateDoc(refDoc, patch);
}

export async function deleteProject(projectId) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  await deleteDoc(doc(db, COLLECTION, projectId));
}
