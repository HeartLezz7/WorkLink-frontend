import { useEffect } from "react";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import ChatStatusWork from "./ChatStatusWork";
import socket from "../../configs/socket";

export default function ChatPage() {
  useEffect(() => {
    socket.connect();
    return () => socket.disconnect();
  }, []);
  return (
    <div className="w-full h-[calc(100vh-60px)]  grid grid-cols-5">
      <ChatList />
      <ChatBox />
      <ChatStatusWork />
    </div>
  );
}
