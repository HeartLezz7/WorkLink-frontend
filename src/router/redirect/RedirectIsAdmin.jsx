import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function RedirectIsAdmin({ children }) {
  const { user } = useAuth();
  if (user?.authUser?.userType !== 'admin') {
    return <Navigate to={`/`} />;
  }
  return children;
}
