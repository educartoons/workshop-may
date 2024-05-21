import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, clearUser } from "../store/userSlice";
import { firebaseAuth } from "../db";

type AuthListenerProps = {
  children: React.ReactNode;
};

export default function AuthListener({ children }: AuthListenerProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email!,
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
