import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtCs6uO1Jtqvte3nePW57LuiAaUkZXGqk",
  authDomain: "todoapp-aa223.firebaseapp.com",
  projectId: "todoapp-aa223",
  storageBucket: "todoapp-aa223.appspot.com",
  messagingSenderId: "281146386340",
  appId: "1:281146386340:web:3eff5d13dc561b6bb54331",
  measurementId: "G-D5TYV190G1",
  databaseURL: "https://todoapp-aa223.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const collectionRef = collection(db, "users");
