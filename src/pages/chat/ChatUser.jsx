import search from "../../../public/icons/search.png";
import socket from "../../configs/socket";

export default function ChatUser() {
  function sentRoom(room) {
    socket.emit("join", room);
  }
  return (
    <>
      <div className="flex flex-col border-collapse">
        <div
          className="w-full border border-t-0 flex gap-5 items-center px-2 py-5 "
          onClick={() => sentRoom(1)}
        >
          <img
            src={search}
            alt="search"
            className="w-[100px] rounded-full border "
          />

          <div className="flex flex-col gap-1">
            <div>John Doe</div>
            <div>Work id : WLPT123456789</div>
            <div className="flex justify-between">
              <div>21 Oct 2023</div>
              <div>Now...</div>
            </div>
          </div>
        </div>
        <div
          className="w-full border border-t-0 flex gap-5 items-center px-2 py-5 "
          onClick={() => sentRoom(3)}
        >
          <img
            src={search}
            alt="search"
            className="w-[100px] rounded-full border"
          />

          <div className="flex flex-col gap-1">
            <div>John Doe</div>
            <div>Work id : WLPT123456789</div>
            <div className="flex justify-between">
              <div>21 Oct 2023</div>
              <div>Now...</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
