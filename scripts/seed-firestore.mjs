/**
 * Upserts portfolio projects into Firestore.
 *
 * Option A — Rules + email login (default):
 *   1. Publish `firestore.rules` (Console or `npm run deploy:firestore-rules` with Firebase CLI logged in).
 *   2. `.env`: VITE_FIREBASE_* + VITE_ADMIN_EMAIL + VITE_ADMIN_PASSWORD
 *   3. npm run seed:projects
 *
 * Option B — Service account (bypasses security rules; good for local seeding):
 *   `.env`: FIREBASE_SERVICE_ACCOUNT_PATH=./serviceAccount.json
 *   Download JSON from Firebase Console → Project settings → Service accounts → Generate new private key.
 *   npm run seed:projects
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { initializeApp as initClient } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore as getClientFirestore,
  doc,
  setDoc,
  Timestamp as ClientTimestamp,
} from "firebase/firestore";
import { PROJECT_SEEDS } from "../src/data/projectSeeds.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const envPath = join(root, ".env");

function loadDotEnv() {
  if (!existsSync(envPath)) {
    console.error("Missing .env at", envPath);
    process.exit(1);
  }
  const out = {};
  const text = readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const env = loadDotEnv();

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

if (
  !firebaseConfig.apiKey ||
  !firebaseConfig.projectId ||
  !firebaseConfig.appId
) {
  console.error("Firebase env vars are incomplete. Check .env.");
  process.exit(1);
}

const baseMs = Date.now();
const saPathRaw =
  env.FIREBASE_SERVICE_ACCOUNT_PATH ||
  env.GOOGLE_APPLICATION_CREDENTIALS ||
  "";
const saPath = saPathRaw
  ? isAbsolute(saPathRaw)
    ? saPathRaw
    : join(root, saPathRaw.replace(/^\.\//, ""))
  : "";

async function seedWithAdminSdk() {
  const { initializeApp, cert, getApps } = await import("firebase-admin/app");
  const { getFirestore, Timestamp } = await import("firebase-admin/firestore");

  if (!existsSync(saPath)) {
    console.error("Service account file not found:", saPath);
    process.exit(1);
  }

  const serviceAccount = JSON.parse(readFileSync(saPath, "utf8"));
  if (!getApps().length) {
    initializeApp({ credential: cert(serviceAccount) });
  }
  const db = getFirestore();

  let n = 0;
  for (let i = 0; i < PROJECT_SEEDS.length; i += 1) {
    const seed = PROJECT_SEEDS[i];
    const { id, title, description, techStack, link } = seed;
    await db
      .collection("projects")
      .doc(id)
      .set(
        {
          title,
          description,
          techStack,
          link: link || "",
          createdAt: Timestamp.fromMillis(baseMs - i * 120_000),
          updatedAt: Timestamp.fromMillis(baseMs),
        },
        { merge: true }
      );
    n += 1;
    console.log("Upserted (admin):", id);
  }
  console.log(`Done. ${n} projects (Firebase Admin — rules bypassed).`);
}

async function seedWithClientSdk() {
  const email = env.VITE_ADMIN_EMAIL;
  const password = env.VITE_ADMIN_PASSWORD;

  if (!email || !password) {
    console.error(
      "Set VITE_ADMIN_EMAIL and VITE_ADMIN_PASSWORD in .env,\n" +
        "or set FIREBASE_SERVICE_ACCOUNT_PATH to a service-account JSON file.\n"
    );
    process.exit(1);
  }

  const app = initClient(firebaseConfig);
  const auth = getAuth(app);
  const db = getClientFirestore(app);

  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Signed in as", email);
  } catch (e) {
    console.error("Auth failed:", e.message || e);
    process.exit(1);
  }

  let n = 0;
  try {
    for (let i = 0; i < PROJECT_SEEDS.length; i += 1) {
      const seed = PROJECT_SEEDS[i];
      const { id, title, description, techStack, link } = seed;
      const ref = doc(db, "projects", id);
      await setDoc(
        ref,
        {
          title,
          description,
          techStack,
          link: link || "",
          createdAt: ClientTimestamp.fromMillis(baseMs - i * 120_000),
          updatedAt: ClientTimestamp.fromMillis(baseMs),
        },
        { merge: true }
      );
      n += 1;
      console.log("Upserted:", id);
    }
  } catch (e) {
    if (e?.code === "permission-denied") {
      console.error(
        "\nFirestore PERMISSION_DENIED — your project rules are still blocking writes.\n\n" +
          "Fix (pick one):\n" +
          "  1) Firebase Console → Firestore Database → Rules → replace with repo `firestore.rules` → Publish\n" +
          "  2) Install Firebase CLI, run `firebase login`, then from this folder:\n" +
          "       npm run deploy:firestore-rules\n" +
          "     (requires `firebase-tools`: npm i -D firebase-tools)\n" +
          "  3) Add a service account JSON path to .env:\n" +
          "       FIREBASE_SERVICE_ACCOUNT_PATH=./serviceAccount.json\n" +
          "     (download from Console → Project settings → Service accounts)\n" +
          "     Then run npm run seed:projects again — no rules change needed.\n\n" +
          "If you use App Check enforcement, add a debug token or disable enforcement for this test.\n"
      );
    }
    console.error(e.message || e);
    process.exit(1);
  }

  console.log(`Done. ${n} projects in Firestore collection "projects".`);
}

if (saPathRaw && existsSync(saPath)) {
  await seedWithAdminSdk();
} else {
  await seedWithClientSdk();
}

process.exit(0);
