import axios from "../configs/axios";
import { createContext, useState, useEffect } from "react";
import {
  getAccessToken,
  createAccessToken,
  deleteAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(user, "user");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => setUser(res.data.user))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (registerInput) => {
    const registerData = await axios.post("/auth/register", registerInput);
    createAccessToken(registerData.data.accessToken);
    setUser(registerData.data.user);
    return registerData.data.user;
  };
  const adminregister = async (adminregister) => {
    const registerData = await axios.post("/admin/register", adminregister);
    createAccessToken(registerData.data.accessToken);
    setUser(registerData.data.createAdmin);
    return registerData.data.createAdmin;
  };

  const login = async (loginInput) => {
    const user = await axios.post("/auth/login", loginInput);
    createAccessToken(user.data.accessToken);
    setUser(user.data.user);
  };
  const adminlogin = async (adminloginInput) => {
    const user = await axios.post("/admin/login", adminloginInput);
    createAccessToken(user.data.accessToken);
    setUser(user.data.user);
  };

  const loginGoogle = async (logingoogleInput) => {
    const user = await axios.post("auth/logingoogle", logingoogleInput);
    createAccessToken(user.data.accessToken);
    setUser(user.data.google);
  };

  const logout = () => {
    deleteAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        user,
        login,
        logout,
        loading,
        setLoading,
        setUser,
        loginGoogle,
        adminlogin,
        adminregister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
