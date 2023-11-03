import { FaStar } from "react-icons/fa";
import UserWallet from "./UserWallet";

export default function UserDashBoardPage() {
  return (
    <div
      className="bg-primaryLight w-full flex flex-col md:flex-row gap-10 py-3 px-5"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="overflow-x-hidden h-full md:flex-[2.4] py-3 pl-2 rounded-2xl bg-backgroundWhiteGray whiteDivShadow   flex-shrink-0 ">
        <UserWallet />
      </div>
      <div className="w-full h-full md:flex-[8] flex flex-col gap-5 ">
        <div className="bg-primary w-full flex-[1] "></div>
        <div className="bg-primary w-full flex-[1]"></div>
      </div>
    </div>
  );
}
const today = new Date();
console.log(today);
