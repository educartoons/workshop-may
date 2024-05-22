import { doc, getDoc } from "firebase/firestore";
import { db } from "../db";

async function getUser(uid: string) {
  const docReference = doc(db, "/users", uid);
  const docSnapshot = await getDoc(docReference);
  return docSnapshot.data();
}

export { getUser };
