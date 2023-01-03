import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGStOtjpKxcd3VCRpLkpoiQfwZ7ehRLgk",
  authDomain: "olx-clone-23010.firebaseapp.com",
  projectId: "olx-clone-23010",
  storageBucket: "olx-clone-23010.appspot.com",
  messagingSenderId: "494905026670",
  appId: "1:494905026670:web:21a94788f8f1a93a071e7f",
  measurementId: "G-8JC2H3KXXM",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
