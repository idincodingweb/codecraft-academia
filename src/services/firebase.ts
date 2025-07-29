// Firebase Configuration - CodeCraft Academia
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCS3IgTtPbeJYsSG4qo-em7dLx9N5U0RGE",
  authDomain: "image-to-prompt-d3acc.firebaseapp.com",
  projectId: "image-to-prompt-d3acc",
  storageBucket: "image-to-prompt-d3acc.firebasestorage.app",
  messagingSenderId: "43661154935",
  appId: "1:43661154935:web:57197a9debfa80766c8472",
  measurementId: "G-0ES490Q4WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;