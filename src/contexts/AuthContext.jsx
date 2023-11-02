import axios from "../configs/axios";
import { createContext, useState } from "react";
import { createAccessToken, deleteAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // useEffect(()=>{
  //   if(getAccessToken()){

  //   }
  // },[])

  // const getUser = async() =>{
  //   const getData = await axios.get()
  // }

  const register = async (registerInput) => {
    const registerData = await axios.post("/auth/register", registerInput);
    createAccessToken(registerData.data.accessToken);
    setUser(registerData.data.user);
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
    <AuthContext.Provider value={{ register, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}