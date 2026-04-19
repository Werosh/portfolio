/**
 * Deploys Firestore rules using the same project id as the app (.env → VITE_FIREBASE_PROJECT_ID).
 */
import { spawnSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = join(root, ".env");
const firebaseCli = join(root, "node_modules", "firebase-tools", "lib", "bin", "firebase.js");

function loadProjectId() {
  if (!existsSync(envPath)) {
    console.error("Missing .env at", envPath);
    process.exit(1);
  }
  const text = readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const m = line.match(/^\s*VITE_FIREBASE_PROJECT_ID\s*=\s*(.+)\s*$/);
    if (m) {
      let v = m[1].trim();
      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        v = v.slice(1, -1);
      }
      return v;
    }
  }
  console.error("VITE_FIREBASE_PROJECT_ID not found in .env");
  process.exit(1);
}

if (!existsSync(firebaseCli)) {
  console.error("firebase-tools not installed. Run: npm install");
  process.exit(1);
}

const projectId = loadProjectId();
console.log("Deploying Firestore rules for project:", projectId);

const result = spawnSync(
  process.execPath,
  [
    firebaseCli,
    "deploy",
    "--only",
    "firestore:rules",
    "--project",
    projectId,
  ],
  { stdio: "inherit", cwd: root, shell: false }
);

process.exit(result.status === null ? 1 : result.status);
