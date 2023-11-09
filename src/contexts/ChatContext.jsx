import axios from "../configs/axios";
import { useState, useEffect, createContext } from "react";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [allChatRoom, setAllChatRoom] = useState([]);

  useEffect(() => {
    axios.get("/chat/get").then((res) => setAllChatRoom(res.data.allChatRoom));
  }, []);

  return (
    <ChatContext.Provider value={{ allChatRoom }}>
      {children}
    </ChatContext.Provider>
  );
}
