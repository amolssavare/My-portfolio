// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBnOe0OTzAOrOhTHNaAGNTjA70J2CMm40",
  authDomain: "amul-react-portfolio.firebaseapp.com",
  projectId: "amul-react-portfolio",
  storageBucket: "amul-react-portfolio.appspot.com",
  messagingSenderId: "225995993167",
  appId: "1:225995993167:web:0f0e9e294b940249a2fa3a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
