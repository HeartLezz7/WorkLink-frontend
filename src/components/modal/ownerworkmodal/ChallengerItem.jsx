import { Link } from "react-router-dom";

export default function ChallengerItem({ challenger }) {
  const { user } = challenger;
  return (
    <div className="bg-backgroundWhiteGray hover:bg-primaryLight w-full h-[80px] rounded-md flex items-center justify-between px-3">
      <div className="flex gap-3 items-center w-[75%]">
        <img
          src={user.profileImage}
          alt=""
          className="w-[60px] h-[60px] aspect-square rounded-full object-cover"
        />
        <div className="flex flex-col gap-1 ">
          <div className="text-lg font-semibold w-[75%] truncate">
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
      <div className="bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl px-2 py-1 rounded-md cursor-pointer">
        <div className="text-center font-semibold">Chat</div>
        <div className="text-center font-semibold">& Deal</div>
      </div>
    </div>
  );
}
