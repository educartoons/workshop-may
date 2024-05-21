import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kanban-845b7.firebaseapp.com",
  projectId: "kanban-845b7",
  storageBucket: "kanban-845b7.appspot.com",
  messagingSenderId: "1095547538016",
  appId: "1:1095547538016:web:c174bccedbefff73255105",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firebaseAuth = getAuth(app);

async function getUsers() {
  const userCollection = collection(db, "users");
  const userSnapshot = await getDocs(userCollection);

  const userList = userSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return userList;
}

export { app, db, firebaseAuth, getUsers };
