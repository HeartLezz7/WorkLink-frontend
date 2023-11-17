import search from "../../../public/icons/search.png";
import ChatUser from "./ChatUser";
import { useState } from "react";

export default function ChatList({ chatRoom }) {
  const [searchName, setSearchName] = useState("");

  const handleInput = (e) => {
    setSearchName(e.target.value);
  };

  let filterName = [...chatRoom];

  if (searchName) {
    filterName = chatRoom.filter((el) => {
      if (
        el.dealer.firstName.toLowerCase().includes(searchName.toLowerCase()) ||
        el.creater.firstName.toLowerCase().includes(searchName.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  }
  return (
    <div className="h-[calc(100vh-60px)]">
      <div className="p-5 border-b h-[100px] flex justify-center items-center">
        <div className="w-full border flex justify-between items-center px-3 py-3 rounded-xl gap-2">
          <div className="w-full flex justify-between items-center px-1  rounded-xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full flex justify-between items-center px-3 py-2 rounded-xl"
              onChange={handleInput}
            />
          </div>
          <div>
            <img src={search} alt="search" className="w-[30px]" />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll h-[calc(100vh-160px)]">
        {filterName.map((chat) => (
          <ChatUser
            key={chat.id}
            chatRoom={chatRoom}
            roomId={chat.id}
            creater={chat.creater}
            dealer={chat.dealer}
            workId={chat.workId}
            chatTime={chat.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
