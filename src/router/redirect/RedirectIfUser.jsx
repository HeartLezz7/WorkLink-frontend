import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectIfUser({ children }) {
  const { user } = useAuth();
  if (!user?.userType === "user") {
    return <Navigate to={`/dashboard`} />;
  }
  return children;
}
