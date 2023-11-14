import axios from "../configs/axios";
import { useState, createContext } from "react";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [allChatRoom, setAllChatRoom] = useState([]);
  const [chatRoom, setChatRoom] = useState({});
  const [chatMessage, setChatMessage] = useState([]);
  const [Refresh, setRefresh] = useState(false);

  const getChatroomMessage = async (chatRoomId) => {
    try {
      const response = await axios.get(`/chat/getMessage/${chatRoomId}`);
      setChatMessage(response.data.allMessage);
      const foundRoom = allChatRoom.find((room) => {
        return room.id == +chatRoomId;
      });
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
        Refresh,
        setRefresh,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
