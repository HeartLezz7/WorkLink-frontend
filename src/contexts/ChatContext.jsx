import axios from "../configs/axios";
import { useState, useEffect, createContext } from "react";
import { getAccessToken } from "../utils/local-storage";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [allChatRoom, setAllChatRoom] = useState([]);
  const [chatRoom, setChatRoom] = useState({});
  const [chatMessage, setChatMessage] = useState([]);

  useEffect(() => {
    if (getAccessToken()) {
      axios.get("/chat/get").then((res) => {
        console.log(res.data.allChatRoom, "useEff res");
        setAllChatRoom(res.data.allChatRoom);
      });
    }
  }, []);

  const getChatroomMessage = async (chatRoomId) => {
    try {
      const response = await axios.get(`/chat/getMessage/${chatRoomId}`);
      setChatMessage(response.data.allMessage);
      const foundRoom = allChatRoom.find((room) => {
        return room.id == +chatRoomId;
      });
      console.log(foundRoom, "context");
      setChatRoom(foundRoom);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        allChatRoom,
        chatRoom,
        setChatRoom,
        setAllChatRoom,
        chatMessage,
        getChatroomMessage,
        setChatMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
