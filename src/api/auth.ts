import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { UserRegisterForm } from "../components/RegisterForm";
import { UserLoginForm } from "../components/LoginForm";
import { db, firebaseAuth } from "../db";

async function registerUser(form: UserRegisterForm) {
  const { user: userRegistered } = await createUserWithEmailAndPassword(
    firebaseAuth,
    form.email,
    form.password
  );

  const user = {
    uid: userRegistered.uid,
    fullname: form.fullname,
    email: form.email,
    phone: form.phone,
    username: form.username,
  };

  const userDoc = doc(db, "/users", userRegistered.uid);
  await setDoc(userDoc, user);
  return userRegistered;
}

async function login(form: UserLoginForm) {
  await signInWithEmailAndPassword(firebaseAuth, form.email, form.password);
}

function logout() {
  signOut(firebaseAuth);
}

export { registerUser, login, logout };
