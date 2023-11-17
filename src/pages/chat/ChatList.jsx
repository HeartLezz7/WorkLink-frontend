import search from "../../../public/icons/search.png";
import ChatUser from "./ChatUser";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

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
    <div className="h-[calc(100vh-60px)] col-span-3">
      <div className="px-5 py-3 shadow-md  flex justify-center items-center">
        <div className="relative w-[100%]">
          <div className="w-[30px] absolute top-[10px] left-4">
            <BiSearchAlt color="FF7127" size={25} />
          </div>
          <input
            type="text"
            onChange={handleInput}
            value={searchName}
            placeholder="Search..."
            className="rounded-full pl-12 py-2 w-full text-xl shadow-md shadow-primaryDark/50 outline-none text-secondary focus:ring placeholder:text-secondary"
          />
        </div>
      </div>
      <div className="overflow-y-scroll h-[calc(100vh-135px)] flex flex-col gap-2 px-2 py-2">
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
