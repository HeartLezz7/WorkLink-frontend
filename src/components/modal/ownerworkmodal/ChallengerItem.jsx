import { Link } from "react-router-dom";
import axios from "../../../configs/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function ChallengerItem({ challenger, work }) {
  const { user } = challenger;
  const { user: owner } = useAuth();

  const navigate = useNavigate();

  const createchatRoom = async () => {
    try {
      const getRoom = await axios.get("/chat/get");
      const allChatRoom = [...getRoom.data.allChatRoom];
      const foundRoom = allChatRoom.find(
        (item) =>
          item.chatRoom.createrId == owner.id &&
          item.chatRoom.dealerId == user.id &&
          item.chatRoom.workId == work.id
      );
      if (foundRoom) {
        navigate(`/chatRoom/${foundRoom.chatRoom.id}`);
        return;
      } else {
        const response = await axios.post("/chat/createRoom", {
          workId: work.id,
          dealerId: user.id,
        });
        navigate(`/chatRoom/${response.data.chatRoom.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-backgroundWhiteGray hover:bg-primaryLight w-full h-[80px] rounded-md flex items-center justify-between px-3">
      <div className="flex gap-3 items-center w-[75%]">
        <img
          src={user.profileImage}
          alt=""
          className="w-[60px] h-[60px] aspect-square rounded-full object-cover"
        />
        <div className="flex flex-col gap-1 w-full ">
          <div className="text-lg font-semibold w-[95%] truncate">
            {user.firstName} {user.lastName}
          </div>
          <Link
            to={`/userprofile/${user.id}`}
            className="px-2 py-1 bg-gradient-to-tl from-secondaryLight via-secondary to-secondaryDark hover:bg-gradient-to-br rounded-md cursor-pointer text-sm w-fit"
          >
            Look Profile
          </Link>
        </div>
      </div>
      <div
        className="bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl px-2 py-1 rounded-md cursor-pointer"
        onClick={createchatRoom}
      >
        <div className="text-center font-semibold">Chat</div>
        <div className="text-center font-semibold">& Deal</div>
      </div>
    </div>
  );
}
