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
const DEBUG_KEY = "portfolio_visitor_tracking_debug";

function toSafeString(value, max = 300) {
  return String(value ?? "").trim().slice(0, max);
}

function toDocIdFromIp(ip) {
  return encodeURIComponent(ip || "unknown-ip");
}

async function fetchVisitorMeta() {
  async function fetchPreferredIpv4() {
    try {
      const response = await fetch("https://api4.ipify.org?format=json");
      if (!response.ok) return null;
      const payload = await response.json();
      return payload?.ip ? String(payload.ip) : null;
    } catch {
      return null;
    }
  }

  const preferredIpv4 = await fetchPreferredIpv4();

  const providers = [
    {
      name: "ipwho.is",
      url: preferredIpv4
        ? `https://ipwho.is/${encodeURIComponent(preferredIpv4)}`
        : "https://ipwho.is/",
      map: (payload) => {
        if (!payload?.success || !payload?.ip) return null;
        return payload;
      },
    },
    {
      name: "ipapi.co",
      url: preferredIpv4
        ? `https://ipapi.co/${encodeURIComponent(preferredIpv4)}/json/`
        : "https://ipapi.co/json/",
      map: (payload) => {
        if (!payload?.ip) return null;
        return {
          ip: payload.ip,
          city: payload.city,
          region: payload.region,
          country: payload.country_name,
          country_code: payload.country_code,
          latitude: payload.latitude,
          longitude: payload.longitude,
          connection: {
            asn: payload.asn,
            org: payload.org,
            isp: payload.org,
          },
          timezone: { id: payload.timezone },
        };
      },
    },
  ];

  const errors = [];
  for (const provider of providers) {
    try {
      const response = await fetch(provider.url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const payload = await response.json();
      const normalized = provider.map(payload);
      if (!normalized?.ip) {
        throw new Error("Missing IP in response");
      }
      return { ...normalized, provider: provider.name };
    } catch (err) {
      errors.push(`${provider.name}: ${err.message || "unknown error"}`);
    }
  }

  throw new Error(`All IP providers failed. ${errors.join(" | ")}`);
}

function saveTrackingDebugStatus(status, message = "") {
  if (typeof window === "undefined") return;
  const payload = {
    status,
    message: toSafeString(message, 600),
    at: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(DEBUG_KEY, JSON.stringify(payload));
  } catch {
    // ignore localStorage failures
  }
}

export function getVisitorTrackingDebugStatus() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(DEBUG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
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
      source: toSafeString(metadata.provider || "unknown", 50),
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
    saveTrackingDebugStatus("success", `Tracked via ${metadata.provider}`);
  })();

  try {
    await trackingInFlight;
    hasTrackedThisPageLifetime = true;
  } catch (err) {
    saveTrackingDebugStatus("error", err.message || "Tracking failed");
    throw err;
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
