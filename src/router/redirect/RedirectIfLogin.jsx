import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectIfLogin({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to={`/dashboard`} />;
  }
  return children;
}
