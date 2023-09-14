import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBrqPepBpsq2rYBaA0KNcAbN7rtyIROyW4",
  authDomain: "fortunaapp-c3948.firebaseapp.com",
  projectId: "fortunaapp-c3948",
  storageBucket: "fortunaapp-c3948.appspot.com",
  messagingSenderId: "135481830935",
  appId: "1:135481830935:web:c5812c8f221d2c45d2b652",
  measurementId: "G-Y9W0FED4K7"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);