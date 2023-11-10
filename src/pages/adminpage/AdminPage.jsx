import { useState } from "react";
import AdminWorkCard from "./AdminWorkCard";
import axios from "axios";
import { useEffect } from "react";

export default function AdminPage() {
  // const [search, setSearch] = useState("");
  // const handleInput = (e) => {
  //   setSearch(e.target.value);
  // };
  // console.log(search);
  const [allworks, setAllWorks] = useState([]);

  useEffect(() => {
    getwork();
  }, []);

  const getwork = async () => {
    const res = await axios
      .get("/work")
      .then((res) => setAllWorks(res.data.allWork))
      .catch((error) => console.log(error));
    return res;
  };

  console.log(allworks);
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 items-center justify-start p-6">
        <div className="flex">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 text-primaryDarker rounded-xl w-72 px-5"
            // onChange={handleInput}
          />
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-20 flex justify-center rounded-xl">
          All
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-44 flex justify-center rounded-xl">
          Waiting Review
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Issus
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        {allworks.map((el) => (
          <AdminWorkCard key={el.id} userObj={el} />
        ))}
      </div>
    </div>
  );
}
