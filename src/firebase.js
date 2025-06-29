// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6FGx9QyG2tGe63bQFNfjeTo0s0pD49wA",
  authDomain: "whozzat-f9b97.firebaseapp.com",
  projectId: "whozzat-f9b97",
  storageBucket: "whozzat-f9b97.firebasestorage.app",
  messagingSenderId: "1067260160964",
  appId: "1:1067260160964:web:ceb7d1cb903b83b5855291",
  measurementId: "G-DP4Z8NHGC9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
};
export const storage = getStorage(app);
export { ref, uploadBytes, getDownloadURL };
export const db = getFirestore(app);
export { doc, setDoc, getDoc };
