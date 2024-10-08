import dotenv from 'dotenv';
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID, 
    appId: process.env.FIREBASE_APP_ID
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const graphDataCollection = collection(db, "graphData");