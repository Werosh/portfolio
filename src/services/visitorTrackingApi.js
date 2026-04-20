import {
  Timestamp,
  collection,
  doc,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "../firebase/app";

const COLLECTION = "visitorLogs";
let hasTrackedThisPageLifetime = false;
let trackingInFlight = null;

function toSafeString(value, max = 300) {
  return String(value ?? "").trim().slice(0, max);
}

function toDocIdFromIp(ip) {
  return encodeURIComponent(ip || "unknown-ip");
}

async function fetchVisitorMeta() {
  // ipwho.is has a free no-key endpoint suitable for lightweight tracking.
  const response = await fetch("https://ipwho.is/");
  if (!response.ok) {
    throw new Error("Could not fetch visitor IP metadata.");
  }
  const payload = await response.json();
  if (!payload?.success || !payload?.ip) {
    throw new Error("Invalid visitor IP response.");
  }
  return payload;
}

export async function trackVisitorFromClient() {
  if (!isFirebaseConfigured() || !db || typeof window === "undefined") {
    return;
  }
  if (hasTrackedThisPageLifetime) {
    return;
  }
  if (trackingInFlight) {
    return trackingInFlight;
  }
  trackingInFlight = (async () => {
    const metadata = await fetchVisitorMeta();
    const now = Timestamp.now();
    const docId = toDocIdFromIp(metadata.ip);
    const docRef = doc(db, COLLECTION, docId);
    const userAgent = toSafeString(window.navigator.userAgent, 1000);
    const language = toSafeString(window.navigator.language, 30);
    const timezone = toSafeString(
      Intl.DateTimeFormat().resolvedOptions().timeZone || metadata.timezone?.id,
      120,
    );

    const sharedPayload = {
      ip: toSafeString(metadata.ip, 120),
      city: toSafeString(metadata.city, 120),
      region: toSafeString(metadata.region, 120),
      country: toSafeString(metadata.country, 120),
      countryCode: toSafeString(metadata.country_code, 5),
      latitude:
        typeof metadata.latitude === "number" ? metadata.latitude : null,
      longitude:
        typeof metadata.longitude === "number" ? metadata.longitude : null,
      timezone,
      isp: toSafeString(metadata.connection?.isp, 300),
      org: toSafeString(metadata.connection?.org, 300),
      asn: toSafeString(metadata.connection?.asn, 30),
      userAgent,
      language,
      source: "ipwho.is",
      updatedAt: now,
      lastSeenAt: now,
    };

    try {
      await updateDoc(docRef, {
        ...sharedPayload,
        visitCount: increment(1),
      });
    } catch {
      await setDoc(docRef, {
        ...sharedPayload,
        createdAt: now,
        visitCount: 1,
      });
    }
  })();

  try {
    await trackingInFlight;
    hasTrackedThisPageLifetime = true;
  } finally {
    trackingInFlight = null;
  }

}

export function subscribeVisitorLogs(callback, onError) {
  if (!isFirebaseConfigured() || !db) {
    callback([]);
    return () => {};
  }
  const q = query(
    collection(db, COLLECTION),
    orderBy("lastSeenAt", "desc"),
    limit(500),
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
