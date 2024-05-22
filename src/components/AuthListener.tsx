import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, clearUser } from "../store/userSlice";
import { firebaseAuth } from "../db";
import { getUser } from "../api/user";

type AuthListenerProps = {
  children: React.ReactNode;
};

export default function AuthListener({ children }: AuthListenerProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const userInfo = await getUser(user.uid);
        dispatch(
          setUser({
            email: user.email!,
            fullname: userInfo?.fullname,
            username: userInfo?.username,
            uid: user.uid,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, []);

  return <>{children}</>;
}
