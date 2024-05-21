// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5MSA5vNn_Xei8-G387nlsBh1RSXysod8",
  authDomain: "kanban-d888c.firebaseapp.com",
  projectId: "kanban-d888c",
  storageBucket: "kanban-d888c.appspot.com",
  messagingSenderId: "84100165933",
  appId: "1:84100165933:web:a1b6b62505a6ad646c63a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firebaseAuth = getAuth(app);

async function getUsers() {
  const userCollection = collection(db, "users");
  const userSnapshot = await getDocs(userCollection);
  const userList = userSnapshot.docs.map((doc) => doc.data());
  return userList;
}

export { app, db, getUsers, firebaseAuth };
