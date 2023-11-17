import { useState } from "react";
import WithdrawModal from "../../../components/modal/userTransactionModal/WithdrawModal";
import DepositModal from "../../../components/modal/userTransactionModal/DepositModal";
import useAuth from "../../../hooks/useAuth";

export default function Wallet() {
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(false);

  const { user } = useAuth();

  return (
    <div className="relative border-2 border-textNavy rounded-lg">
      <p className="text-textNavy bg-backgroundWhiteGray w-fit px-3 absolute top-[-18px] left-[15px] text-2xl">
        My Wallet
      </p>
      <div className="w-[100%] flex flex-col items-center justify-center gap-5 py-3">
        <p className="text-primary pt-4 text-2xl font-semibold">
          {user.wallet} Baht
        </p>
        <div className="w-full flex justify-evenly">
          <button
            onClick={() => setIsDepositOpen(true)}
            className="text-textNavy text-lg font-semibold bg-gradient-to-tr from-gradiantPrimaryDark  to-gradiantPrimaryLight active:bg-gradient-to-bl focus:outline-none  shadow-md shadow-primaryDark font-md rounded-lg active:scale-95 py-1 text-center w-[40%] truncate"
          >
            Deposit
          </button>
          {isDepositOpen && <DepositModal setIsOpen={setIsDepositOpen} />}
          <button
            onClick={() => setIsWithdrawOpen(true)}
            className="text-textGrayDark font-semibold bg-textGrayLight/50 hover:bg-textGrayLight/70  focus:outline-none active:ring-textGrayLight active:scale-95 shadow-md shadow-textGrayDark font-md rounded-lg text-lg py-1 text-center w-[40%] truncate"
          >
            Withdraw
          </button>
          {isWithdrawOpen && <WithdrawModal setIsOpen={setIsWithdrawOpen} />}
        </div>
      </div>
    </div>
  );
}
