// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a557d.firebaseapp.com",
  projectId: "mern-auth-a557d",
  storageBucket: "mern-auth-a557d.appspot.com",
  messagingSenderId: "627723052438",
  appId: "1:627723052438:web:703d8e06bcb2ac9838a9b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);