import { useState, useEffect } from "react";
import { createContext } from "react";
import socket from "../configs/socket";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [chatMessage, setChatMessage] = useState([]);
  // useEffect(() => {
  //   socket.connect();
  //   return () => socket.disconnect();
  // }, []);

  return (
    <ChatContext.Provider value={{ chatMessage, setChatMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
