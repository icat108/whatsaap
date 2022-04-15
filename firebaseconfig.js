// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRPtLlOba6mTC75d1fGemDTKU55egXOts",
  authDomain: "tester-86663.firebaseapp.com",
  projectId: "tester-86663",
  storageBucket: "tester-86663.appspot.com",
  messagingSenderId: "3977724476",
  appId: "1:3977724476:web:69e3198e875e81f3dc7939",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
