// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dd4ac.firebaseapp.com",
  projectId: "mern-estate-dd4ac",
  storageBucket: "mern-estate-dd4ac.appspot.com",
  messagingSenderId: "521478497230",
  appId: "1:521478497230:web:1cdc0703023ca4d2df419f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);