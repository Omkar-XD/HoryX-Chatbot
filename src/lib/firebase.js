// src/lib/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/* ======================
   ENV VALIDATION (CRITICAL)
====================== */

const requiredEnvVars = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
];

requiredEnvVars.forEach((key) => {
  if (!import.meta.env[key]) {
    throw new Error(`❌ Missing Firebase environment variable: ${key}`);
  }
});

/* ======================
   FIREBASE CONFIG
====================== */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/* ======================
   INITIALIZE APP (SAFE)
====================== */

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

/* ======================
   EXPORT SERVICES
====================== */

export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };
