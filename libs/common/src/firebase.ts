import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyD70XETawowz_lwIETizQIXv-bdRgzRBe8",
  authDomain: "pooc-c1f71.firebaseapp.com",
  projectId: "pooc-c1f71",
  storageBucket: "pooc-c1f71.appspot.com",
  messagingSenderId: "449149776103",
  appId: "1:449149776103:web:786c684ee5e8986633b242",
};

export const app = initializeApp(config);
export const db = getFirestore();
