import DepositCheckModal from "../../components/modal/AdminModal/DepositCheckModal";
import WithdrawCheckModal from "../../components/modal/AdminModal/WithdrawCheckModal";
import ReviewCard from "./ReviewCard";
import ShowCase from "./ShowCase";
import UserDetail from "./UserDetail";
import { useState } from "react";

export default function UserProfilePage() {
  const [profileReview, setProfileReview] = useState({});

  return (
    <div className="">
      <div className="absolute w-full h-[340px] bg-primaryLight z-[-10]"></div>
      <div className="max-w-[1440px] mx-auto p-10">
        <div className="flex gap-4 pt-[30px]">
          <div className=" flex-[3] flex justify-center  min-w-[400px]">
            <UserDetail />
          </div>
          <div className=" flex-[5] flex flex-col items-start gap-2 p-5 rounded-2xl z-[10] max-w-[900px]">
            <ShowCase />
            <div className=" w-full rounded-md flex flex-col items-center py-3">
              <div className="w-[90%] place-items-center flex gap-3 my-5 px-5">
                <div className="bg-textGrayDark h-[2px] w-full"></div>
                <h5 className="w-fit mx-auto text-textNavy">Review</h5>
                <div className="bg-textGrayDark h-[2px] w-full"></div>
              </div>
              <div className="flex flex-col gap-5">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </div>
            </div>
            <div></div>

            {/* <DepositCheckModal /> */}
            {/* <WithdrawCheckModal /> */}

          </div>
        </div>
      </div>
    </div>
  );
}
