import { useEffect, useState } from "react";
import TransctionCardAdmin from "./TransctionCardAdmin";
import axios from "../../configs/axios";

export default function AdminManageTransction() {
  const [allTransaction, setAllTransaction] = useState([]);

  useEffect(() => {
    getTransaction();
  }, []);

  const getTransaction = async () => {
    const res = await axios
      .get("/transaction/alltransaction")
      .then((res) => setAllTransaction(res.data.alltransaction))
      .catch((error) => console.log(error));
    return res;
  };
  console.log(allTransaction);

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
        <div className="cursor-pointer p-2 bg-primaryLight w-20 flex justify-center rounded-xl">
          All
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Waiting
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Success
        </div>
      </div>
      <div>
        {allTransaction.map((el) => (
          <TransctionCardAdmin key={el.id} data={el} />
        ))}

        {/* <TransctionCardAdmin /> */}
      </div>
    </div>
  );
}
