import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectIfNotVerify({ children }) {
  const { user } = useAuth();
  if (!user.isVerify) {
    return <Navigate to={`/login`} />;
  }
  return children;
}
