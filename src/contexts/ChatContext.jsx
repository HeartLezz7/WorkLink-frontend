import axios from "../configs/axios";
import { useState, useEffect, createContext } from "react";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [chatRoom, setChatRoom] = useState([]);

  useEffect(() => {
    axios.get("/chat/get").then((res) => setChatRoom(res.data.chatRoom));
  }, []);

  return (
    <ChatContext.Provider value={{ chatRoom }}>{children}</ChatContext.Provider>
  );
}
