// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB90C5-EgrAcaecUuI3VAHmXRXwF5NatyU",
  authDomain: "react-notes-94c67.firebaseapp.com",
  projectId: "react-notes-94c67",
  storageBucket: "react-notes-94c67.appspot.com",
  messagingSenderId: "677485178030",
  appId: "1:677485178030:web:1fc35ac7d192f6842d513f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
