import DoingWork from "./doingwork/DoingWork";
import OwnerWork from "./ownerwork/OwnerWork";
import UserWallet from "./userwallet/UserWallet";

export default function UserDashBoardPage() {
  return (
    <div className="bg-primaryLight w-full">
      <div
        className=" max-w-[1440px] mx-auto flex gap-8 py-4 px-5"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="overflow-x-hidden h-full md:flex-[2.4] py-3 pl-2 rounded-2xl bg-backgroundWhiteGray whiteDivShadow min-w-[300px]">
          <UserWallet />
        </div>
        {/* <div className="max-w-[1000px] h-full md:flex-[8] flex flex-col gap-5 "> */}
        <div className=" h-full w-[35%]">
          <DoingWork />
        </div>
        <div className=" h-full w-[35%]">
          <OwnerWork />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
