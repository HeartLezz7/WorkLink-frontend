import { FaStar } from "react-icons/fa";
import TransactionCard from "./TransactionCard";
import Wallet from "./Wallet";
import useAuth from "../../../hooks/useAuth";

export default function UserWallet() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col space-y-6 overflow-x-hidden pr-2 max-h-[100%]">
      <div className="flex items-center justify-start gap-5 pl-2">
        <img
          src="/defaultImage.jpg"
          className="w-[80px] aspect-square rounded-full object-cover whiteDivShadow"
        />
        <div className="">
          <div className="space-y-[-2px]">
            <p className="text-textNavy truncate text-2xl font-bold ">
              {user.firstName}
            </p>
            <p className="text-textNavy truncate text-2xl font-bold ">
              {user.lastName}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaStar color="#FFC911" size={20} />
            <p className="text-lg font-semibold text-textGrayDark">รอข้อมูล</p>
          </div>
        </div>
      </div>
      <Wallet />
      <div className="flex flex-col gap-1 min-h-[150px] ">
        <p className="text-2xl font-semibold pl-3">History Transaction</p>
        <div className="px-2 flex flex-col gap-3 overflow-y-scroll">
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </div>
      </div>
    </div>
  );
}
