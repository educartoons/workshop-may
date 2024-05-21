import { firebaseAuth, db } from "../db";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

type FormUser = {
  fullname: string;
  nickname: string;
  avatar: string;
  email: string;
  password: string;
  repeatpassword: string;
};

async function registerUser(form: FormUser) {
  const { user: registeredUser } = await createUserWithEmailAndPassword(
    firebaseAuth,
    form.email,
    form.password
  );

  const user = {
    uid: registeredUser.uid,
    fullname: form.fullname,
    nickname: form.nickname,
    email: form.email,
    avatar: form.avatar,
  };

  const userDoc = doc(db, "/users", registeredUser.uid);
  await setDoc(userDoc, user);
  return registeredUser;
}

export { registerUser };
