import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const user = useSelector((state: RootState) => state.user);

  if (user.email === "") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
