import { useEffect, useState } from "react";
import TransctionCardAdmin from "./TransctionCardAdmin";
import axios from "../../configs/axios";

export default function AdminManageTransction() {
  const [allTransaction, setAllTransaction] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    getTransaction();
  }, []);

  console.log(pending);
  const getTransaction = async () => {
    const res = await axios
      .get("/transaction/alltransaction")
      .then((res) => {
        setAllTransaction(res.data.alltransaction);
        setPending(res.data.alltransaction);
      })
      .catch((error) => console.log(error));
    return res;
  };

  const statusTransaction = (status = "all") => {
    if (status === "all") {
      setPending(allTransaction);
    } else {
      let newTransaction = allTransaction.filter(
        (transaction) => transaction.status === status
      );
      setPending(newTransaction);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 items-center justify-start p-6">
        <div className="flex">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 text-primaryDarker rounded-xl w-72 px-5"
          />
        </div>
        <div
          className="cursor-pointer p-2 bg-primaryLight w-20 flex justify-center rounded-xl"
          onClick={() => statusTransaction("all")}
        >
          All
        </div>
        <div
          className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl"
          onClick={() => statusTransaction("pending")}
        >
          Waiting
        </div>
        <div
          className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl"
          onClick={() => statusTransaction("approve")}
        >
          Success
        </div>
      </div>
      <p className="text-xs px-5 w-full flex justify-end">
        count : {pending.length}
      </p>
      <div>
        {pending.map((el) => (
          <TransctionCardAdmin key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}
