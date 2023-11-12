import axios from "../configs/axios";
import { useState, useEffect, createContext } from "react";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [allChatRoom, setAllChatRoom] = useState([]);
  const [chatRoom, setChatRoom] = useState({});

  useEffect(() => {
    axios.get("/chat/get").then((res) => setAllChatRoom(res.data.allChatRoom));
  }, []);

  return (
    <ChatContext.Provider value={{ allChatRoom, chatRoom, setChatRoom }}>
      {children}
    </ChatContext.Provider>
  );
}
