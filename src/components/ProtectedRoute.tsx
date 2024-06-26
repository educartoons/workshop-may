import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "./Spinner";

export default function ProtectedRoute() {
  const { email, loading } = useSelector((state: RootState) => state.user);

  if (loading) {
    return <Spinner />;
  }

  if (email === "") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
