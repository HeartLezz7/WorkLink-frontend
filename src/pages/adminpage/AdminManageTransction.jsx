import { useEffect, useState } from "react";
import TransctionCardAdmin from "./TransactionCardAdmin";
import axios from "../../configs/axios";

export default function AdminManageTransction() {
  const [allTransaction, setAllTransaction] = useState([]);
  const [pending, setPending] = useState([]);
  const [statusPending, setStatusPending] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getTransaction();
  }, []);

  useEffect(() => {
    countPending();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  let filter = [...pending];
  if (search) {
    filter = pending.filter((el) => {
      if (
        el.user.authUser[0].email.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  }

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

  const countPending = async () => {
    const noti = await axios
      .get("/transaction/pendingStatus")
      .then((res) => setStatusPending(res.data.getpendding))
      .catch((error) => console.log(error));
    return noti;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 items-center justify-start p-6 pb-2">
        <div className="flex">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 text-primaryDarker rounded-xl w-72 px-5"
            onChange={handleInput}
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
        <div
          className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl"
          onClick={() => statusTransaction("reject")}
        >
          Reject
        </div>
        {statusPending.length === 0 ? (
          ""
        ) : (
          <p className=" relative flex justify-center items-center bg-secondary rounded-full font-serif right-[178px] bottom-3.5 w-7 h-7 text-textWhite">
            {statusPending.length}
          </p>
        )}
      </div>
      <p className="text-xs px-5 w-full flex justify-end">
        count : {pending.length}
      </p>
      <div>
        {filter.map((el) => (
          <TransctionCardAdmin key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}
