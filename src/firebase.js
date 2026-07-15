// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQHSbnFc1dDYAIMybWaRBh2nA2oGhzGt0",
  authDomain: "react-ecsite2.firebaseapp.com",
  projectId: "react-ecsite2",
  storageBucket: "react-ecsite2.firebasestorage.app",
  messagingSenderId: "437168221862",
  appId: "1:437168221862:web:f11dfe486facc8a1270e67",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
