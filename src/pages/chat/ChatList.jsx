import search from "../../../public/icons/search.png";
import ChatUser from "./ChatUser";
export default function ChatList() {
  return (
    <div>
      <div className="p-5 border-b">
        <div className="border flex justify-between items-center px-6 py-3 rounded-xl">
          <div>Search for...</div>
          <div>
            <img src={search} alt="search" className="w-[30px]" />
          </div>
        </div>
      </div>
      <div>
        <ChatUser />
      </div>
    </div>
  );
}
