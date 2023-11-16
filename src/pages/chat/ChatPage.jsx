import { useEffect } from "react";
import useChat from "../../hooks/useChat";
import ChatList from "./ChatList";
import { Outlet } from "react-router-dom";
import { getAccessToken } from "../../utils/local-storage";
import axios from "../../configs/axios";

export default function ChatPage() {
  const { allChatRoom, setAllChatRoom } = useChat();

  useEffect(() => {
    if (getAccessToken()) {
      axios.get("/chat/get").then((res) => {
        setAllChatRoom(res.data.allChatRoom);
      });
    }
  }, []);

  return (
    <div className="w-full h-[calc(100vh-60px)]  grid grid-cols-12">
      <ChatList chatRoom={allChatRoom} />
      <Outlet />
    </div>
  );
}
