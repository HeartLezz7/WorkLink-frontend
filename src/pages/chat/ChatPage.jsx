import useChat from "../../hooks/useChat";
import ChatList from "./ChatList";
import { Outlet } from "react-router-dom";

export default function ChatPage() {
  const { chatRoom } = useChat();
  console.log(chatRoom);
  return (
    <div className="w-full h-[calc(100vh-60px)]  grid grid-cols-5">
      <ChatList chatRoom={chatRoom} />
      <Outlet />
    </div>
  );
}
