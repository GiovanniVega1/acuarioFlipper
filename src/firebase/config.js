// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC37vbR1WJ2RER0FvoGDI4jzWR8mf_PhWU",
  authDomain: "react-cursos-a9fe9.firebaseapp.com",
  projectId: "react-cursos-a9fe9",
  storageBucket: "react-cursos-a9fe9.appspot.com",
  messagingSenderId: "857392573116",
  appId: "1:857392573116:web:12d5cbfc9af1615bfb3eb9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );