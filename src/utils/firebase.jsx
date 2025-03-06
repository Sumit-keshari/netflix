// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEeg4xY_RycpOUnpbvVh5o_3lhq0wKb28",
  authDomain: "netflix-4490e.firebaseapp.com",
  projectId: "netflix-4490e",
  storageBucket: "netflix-4490e.firebasestorage.app",
  messagingSenderId: "47766142756",
  appId: "1:47766142756:web:e6911a83b02d7ba4c83db1",
  measurementId: "G-MFLZ5DQLJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);