import axios from "../configs/axios";
import { createContext, useState } from "react";
import { createAccessToken, deleteAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (registerInput) => {
    const res = await axios.post("/auth/register", registerInput);
    console.log(res);
  };

  const login = async (loginInput) => {
    const user = await axios.post("/auth/login", loginInput);
    createAccessToken(user.data.accessToken);
    setUser(user.data.user);
  };

  const logout = () => {
    deleteAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ register, user }}>
      {children}
    </AuthContext.Provider>
  );
}
