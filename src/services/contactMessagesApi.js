import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "../firebase/app";

const COLLECTION = "contactMessages";

export function subscribeContactMessages(callback, onError) {
  if (!isFirebaseConfigured() || !db) {
    callback([]);
    return () => {};
  }
  const q = query(
    collection(db, COLLECTION),
    orderBy("submittedAt", "desc"),
    limit(200),
  );
  return onSnapshot(
    q,
    (snap) => {
      callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    },
    (err) => {
      console.error(err);
      if (onError) onError(err);
      callback([]);
    },
  );
}

/** Public: landing contact form (no sign-in). */
export async function createContactMessage({ name, email, message }) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  const n = String(name ?? "").trim().slice(0, 200);
  const e = String(email ?? "").trim().slice(0, 320);
  const m = String(message ?? "").trim().slice(0, 8000);
  if (!n || !e || !m) {
    throw new Error("Name, email, and message are required.");
  }
  await addDoc(collection(db, COLLECTION), {
    name: n,
    email: e,
    message: m,
    submittedAt: Timestamp.now(),
  });
}

export async function deleteContactMessage(messageId) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error("Firebase is not configured.");
  }
  await deleteDoc(doc(db, COLLECTION, messageId));
}
