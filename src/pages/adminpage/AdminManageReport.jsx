import { useState } from "react";
import ReportCard from "./ReportCard";

export default function AdminManageReport() {
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  let filterReport = [];

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 items-center justify-start p-6">
        <div className="flex">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 rounded-xl w-72 px-5"
            onChange={handleInput}
          />
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-20 flex justify-center rounded-xl">
          All
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Waiting
        </div>
      </div>
      <div className="flex flex-col w-full p-3">
        {/* {filterReport.map((card) => (
          <> */}
        {/* <ReportCard id={card.id} /> */}
        <ReportCard />
        {/* </>
        ))} */}
      </div>
    </div>
  );
}
