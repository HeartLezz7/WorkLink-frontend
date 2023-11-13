import useChat from "../../hooks/useChat";
import ChatList from "./ChatList";
import { Outlet } from "react-router-dom";

export default function ChatPage() {
  const { allChatRoom } = useChat();

  return (
    <div className="w-full h-[calc(100vh-60px)]  grid grid-cols-5">
      <ChatList chatRoom={allChatRoom} />
      <Outlet />
    </div>
  );
}
