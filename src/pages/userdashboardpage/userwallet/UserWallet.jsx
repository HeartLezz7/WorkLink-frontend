import { FaStar } from "react-icons/fa";
import TransactionCard from "./TransactionCard";
import Wallet from "./Wallet";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useWallet from "../../../hooks/useWallet";

export default function UserWallet() {
  const { user } = useAuth();
  const { myTransaction, setMyTransaction } = useWallet();

  useEffect(() => {
    axios
      .get(`/transaction/getme/${user.id}`)
      .then((res) => setMyTransaction(res.data.transactions))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col space-y-6 overflow-x-hidden pr-2 max-h-[100%]">
      <div className="flex items-center justify-start gap-5 pl-2">
        <img
          src={user.profileImage}
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
        {myTransaction?.length == 0 ? (
          <>
            <hr />
            <div className="w-full text-center text-lg py-3">
              No transaction history
            </div>
            <hr />
          </>
        ) : (
          <div className="px-2 flex flex-col gap-3 overflow-y-scroll">
            {myTransaction?.map((el) => (
              <TransactionCard key={el.id} detail={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
