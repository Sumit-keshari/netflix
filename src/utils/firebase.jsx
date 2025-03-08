// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTSExwALbljTQI3y6gPZXuYNfShvRjpOw",
  authDomain: "netflixgpt-25e49.firebaseapp.com",
  projectId: "netflixgpt-25e49",
  storageBucket: "netflixgpt-25e49.firebasestorage.app",
  messagingSenderId: "479535668489",
  appId: "1:479535668489:web:42f2fb6b702a2bffbfc7d8",
  measurementId: "G-Y1G64PYSSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();