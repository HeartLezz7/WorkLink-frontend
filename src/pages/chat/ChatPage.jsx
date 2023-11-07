import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import ChatStatusWork from "./ChatStatusWork";

export default function ChatPage() {
  return (
    <div className="w-full h-[calc(100vh-60px)]  grid grid-cols-5">
      <ChatList />
      <ChatBox />
      <ChatStatusWork />
    </div>
  );
}