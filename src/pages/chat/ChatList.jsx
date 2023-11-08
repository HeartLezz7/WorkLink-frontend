import search from "../../../public/icons/search.png";
import ChatUser from "./ChatUser";

export default function ChatList({ chatRoom }) {
  return (
    <div className="h-[calc(100vh-60px)]">
      <div className="p-5 border-b h-[100px] flex justify-center items-center">
        <div className="w-full border flex justify-between items-center px-6 py-3 rounded-xl">
          <div>Search for...</div>
          <div>
            <img src={search} alt="search" className="w-[30px]" />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll h-[calc(100vh-160px)]">
        {chatRoom.map((chat) => (
          <ChatUser
            key={chat.id}
            roomId={chat.id}
            firstName={chat.dealer.firstName}
            lastName={chat.dealer.lastName}
            workId={chat.workId}
          />
        ))}
      </div>
    </div>
  );
}
