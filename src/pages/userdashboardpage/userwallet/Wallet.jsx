import { useState } from "react";
import WithdrawModal from "../../../components/modal/userTransactionModal/WithdrawModal";

export default function Wallet() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative border-2 border-textNavy rounded-lg">
      <p className="text-textNavy bg-backgroundWhiteGray w-fit px-3 absolute top-[-18px] left-[15px] text-2xl">
        My Wallet
      </p>
      <div className="w-[100%] flex flex-col items-center justify-center gap-5 py-3">
        <p className="text-primary pt-4 text-3xl font-semibold">0.00 Bath</p>
        <div className="w-full flex justify-evenly">
          <button
            onClick={() => setIsOpen(true)}
            className="text-textNavy text-lg font-semibold bg-gradient-to-tr from-gradiantPrimaryDark  to-gradiantPrimaryLight active:bg-gradient-to-bl focus:outline-none  shadow-md shadow-primaryDark font-md rounded-lg active:scale-95 py-1 text-center w-[40%] truncate"
          >
            Withdraw
          </button>
          {isOpen && <WithdrawModal setIsOpen={setIsOpen} />}
          <button className="text-textGrayDark font-semibold bg-textGrayLight/50 hover:bg-textGrayLight/70  focus:outline-none active:ring-textGrayLight active:scale-95 shadow-md shadow-textGrayDark font-md rounded-lg text-lg py-1 text-center w-[40%] truncate">
            Deposite
          </button>
        </div>
      </div>
    </div>
  );
}
