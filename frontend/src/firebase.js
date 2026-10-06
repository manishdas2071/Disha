import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let app = null;
let authInstance = null;

try {
  if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    authInstance = getAuth(app);
  } else {
    console.warn("Firebase configuration is missing or incomplete in .env. Falling back gracefully.");
  }
} catch (error) {
  console.warn("Firebase initialization skipped or encountered error:", error);
}

export const auth = authInstance;
