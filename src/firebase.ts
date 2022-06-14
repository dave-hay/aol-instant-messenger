import { initializeApp }      from "firebase/app";
import { getFirestore }       from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/auth/web/google-signin
const firebaseConfig = {
  apiKey           : process.env.REACT_APP_FIREBASE_KEY,
  authDomain       : process.env.REACT_APP_FIREBASE_AUTH,
  projectId        : process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket    : process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
  appId            : process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId    : process.env.REACT_APP_FIREBASE_MEASUREMENT,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export default db;
