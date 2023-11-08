import { useEffect } from "react";
import ChatList from "./ChatList";
import axios from "../../configs/axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function ChatPage() {
  const [chatRoom, setCahtRoom] = useState([]);

  const { pathname } = useLocation();
  console.log(pathname, "aaa");
  useEffect(() => {
    if (pathname) {
      axios.get("/chat/get").then((res) => setCahtRoom(res.data.chatRoom));
    }
  }, []);

  return (
    <div className="w-full h-[calc(100vh-60px)]  grid grid-cols-5">
      <ChatList chatRoom={chatRoom} />
      <Outlet />
    </div>
  );
}
