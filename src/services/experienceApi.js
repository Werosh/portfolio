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
import { parseSortOrder } from "./projectsApi";

const COLLECTION = "experiences";

function docMillis(ts) {
  if (!ts) return 0;
  if (typeof ts.toMillis === "function") return ts.toMillis();
  if (typeof ts.seconds === "number") return ts.seconds * 1000;
  return 0;
}

function sortExperienceDocs(list) {
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

/** Map Firestore document fields → timeline UI entry (side card optional). */
export function mapExperienceToEntry(id, data) {
  const asideText = String(data.asideText ?? "").trim();
  let side = null;
  if (asideText) {
    const kind = data.asideKind === "sketch" ? "sketch" : "quote";
    if (kind === "sketch") {
      side = {
        kind: "sketch",
        text: asideText,
        icon: String(data.asideIcon ?? "").trim() || "stickyNote",
      };
    } else {
      side = {
        kind: "quote",
        text: asideText,
        attribution: String(data.asideCaption ?? "").trim(),
      };
    }
  }
  return {
    id,
    role: data.role ?? "",
    organization: data.organization ?? "",
    period: data.period ?? "",
    location: data.location ?? "",
    description: data.description ?? "",
    side,
  };
}

export function subscribeExperiences(callback, onError) {
  if (!isFirebaseConfigured() || !db) {
    callback([]);
    return () => {};
  }
  const q = query(collection(db, COLLECTION));
  return onSnapshot(
    q,
    (snap) => {
      const sorted = sortExperienceDocs(
        snap.docs.map((d) => ({ id: d.id, ...d.data() })),
      );
      callback(sorted);
    },
    (err) => {
      console.error(err);
      if (onError) onError(err);
      callback([]);
    }
  );
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

export async function createExperience(payload, userId) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  if (!userId) throw new Error("You must be signed in to create an entry.");

  const order = await nextSortOrderIfBlank(payload.sortOrder);

  await addDoc(collection(db, COLLECTION), {
    role: String(payload.role ?? "").trim(),
    organization: String(payload.organization ?? "").trim(),
    period: String(payload.period ?? "").trim(),
    location: String(payload.location ?? "").trim(),
    description: String(payload.description ?? "").trim(),
    asideKind: payload.asideKind === "sketch" ? "sketch" : "quote",
    asideText: String(payload.asideText ?? "").trim(),
    asideCaption: String(payload.asideCaption ?? "").trim(),
    asideIcon: String(payload.asideIcon ?? "").trim(),
    sortOrder: order,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateExperience(experienceId, payload, userId) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  if (!userId) throw new Error("You must be signed in to update an entry.");

  const refDoc = doc(db, COLLECTION, experienceId);
  const patch = {
    role: String(payload.role ?? "").trim(),
    organization: String(payload.organization ?? "").trim(),
    period: String(payload.period ?? "").trim(),
    location: String(payload.location ?? "").trim(),
    description: String(payload.description ?? "").trim(),
    asideKind: payload.asideKind === "sketch" ? "sketch" : "quote",
    asideText: String(payload.asideText ?? "").trim(),
    asideCaption: String(payload.asideCaption ?? "").trim(),
    asideIcon: String(payload.asideIcon ?? "").trim(),
    updatedAt: serverTimestamp(),
  };
  const nextOrder = parseSortOrder(payload.sortOrder);
  if (nextOrder !== null) {
    patch.sortOrder = nextOrder;
  }
  await updateDoc(refDoc, patch);
}

export async function deleteExperience(experienceId) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  await deleteDoc(doc(db, COLLECTION, experienceId));
}
