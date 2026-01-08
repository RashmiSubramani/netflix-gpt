// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoUJUqlccO9fJ5sQf5XUmJ-ci4p04wA-8",
  authDomain: "netflixgpt-256a6.firebaseapp.com",
  projectId: "netflixgpt-256a6",
  storageBucket: "netflixgpt-256a6.firebasestorage.app",
  messagingSenderId: "767260095841",
  appId: "1:767260095841:web:56819c8d98ea6a47bc8120",
  measurementId: "G-4GFDFVRRPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
