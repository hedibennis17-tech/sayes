import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ─── Firestore collection paths ──────────────────────────────
export const COLLECTIONS = {
  // Engine 1 — City
  cities: "cities",
  districts: "districts",

  // Engine 2 — Activity (Universal)
  activityTemplates: "activityTemplates",
  activities: "activities",

  // Engine 3 — Tournament
  tournaments: "tournaments",
  matches: "matches",

  // Engine 4 — Places
  places: "places",

  // Engine 5 — People
  users: "users",

  // Engine 6 — Games
  games: "games",
  gameSessions: "gameSessions",

  // Engine 7 — Chat
  chatRooms: "chatRooms",
  messages: (roomId: string) => `chatRooms/${roomId}/messages`,

  // Engine 8 — Business
  businesses: "businesses",

  // Engine 9 — Points
  pointTransactions: "pointTransactions",
  badgeDefinitions: "badgeDefinitions",

  // Engine 10 — Reports / Moderation
  reports: "reports",
} as const;
