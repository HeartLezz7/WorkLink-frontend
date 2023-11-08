import search from "../../../public/icons/search.png";
import socket from "../../configs/socket";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ChatUser({ roomId, creater, dealer, workId }) {
  function sentRoom(room) {
    socket.emit("join", room);
  }

  const { user } = useAuth();

  return (
    <Link to={`/chatRoom/${roomId}`}>
      <div className="flex flex-col w-full">
        <div
          className="w-full border border-t-0 flex gap-5 items-center  px-2 py-5 "
          onClick={() => sentRoom(roomId)}
        >
          <img
            src={search}
            alt="search"
            className="w-[100px] rounded-full border "
          />

          <div className="w-full flex flex-col gap-1">
            {creater.id === user.id ? (
              <div>
                {dealer.firstName} {dealer.lastName}
              </div>
            ) : (
              <div>
                {creater.firstName} {creater.lastName}
              </div>
            )}
            <div>Work id : {workId}</div>
            <div className="w-full flex justify-between">
              <div>21 Oct 2023</div>
              <div>Now...</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
