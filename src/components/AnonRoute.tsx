import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "./Spinner";

export default function AnonRoute() {
  const { email, loading } = useSelector((state: RootState) => state.user);

  if (loading) {
    return <Spinner />;
  }

  if (email === "") {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}
