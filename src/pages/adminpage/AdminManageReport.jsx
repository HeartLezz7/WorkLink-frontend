import { useState } from "react";
import ReportCard from "./ReportCard";
import axios from "../../configs/axios";
import { useEffect } from "react";

export default function AdminManageReport() {
  const [allReport, setReport] = useState([]);
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getReport();
  }, []);

  const getReport = async () => {
    const res = await axios
      .get("/report")
      .then((res) => setReport(res.data.getReport))
      .catch((error) => console.log(error));
    return res;
  };

  console.log(allReport);
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 items-center justify-start p-6 pb-2">
        <div className="flex">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 rounded-xl w-[500px] px-5"
            onChange={handleInput}
          />
        </div>
      </div>
      <p className="text-xs px-5 w-full flex justify-end h-1">
        count : {allReport.length}
      </p>
      <div className="flex flex-col w-full p-3 gap-5">
        {allReport.map((el) => (
          <ReportCard key={el.id} reportObj={el} />
        ))}
      </div>
    </div>
  );
}
