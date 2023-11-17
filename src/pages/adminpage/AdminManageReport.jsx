import { useState } from "react";
import ReportCard from "./ReportCard";
import axios from "../../configs/axios";
import { useEffect } from "react";

export default function AdminManageReport() {
  const [allReport, setReport] = useState([]);
  const [status, setStatus] = useState([]);
  const [search, setSearch] = useState("");
  const [pending, setPending] = useState([]);

  useEffect(() => {
    getReport();
  }, []);

  useEffect(() => {
    countPending();
  }, []);

  const getReport = async () => {
    const res = await axios
      .get("/report")
      .then((res) => {
        setReport(res.data.getReport);
        setStatus(res.data.getReport);
      })
      .catch((error) => console.log(error));
    return res;
  };

  const statusReport = (status = "all") => {
    if (status === "all") {
      setStatus(allReport);
    } else {
      let newReport = allReport.filter((report) => report.isClear === status);
      setStatus(newReport);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  let filter = [...status];
  if (search) {
    filter = status.filter((el) => {
      if (el.work.title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  }
  const countPending = async () => {
    const noti = await axios
      .get("/report/isclear")
      .then((res) => setPending(res.data.isClear))
      .catch((error) => console.log(error));
    return noti;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 items-center justify-start p-6 pb-2">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 rounded-xl w-72 px-5"
            onChange={handleInput}
          />
          <div
            className="cursor-pointer p-2 bg-primaryLight w-20 flex justify-center rounded-xl"
            onClick={() => statusReport("all")}
          >
            All
          </div>
          <div
            className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl"
            onClick={() => statusReport(false)}
          >
            Pending
          </div>
          <div
            className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl"
            onClick={() => statusReport(true)}
          >
            Clear
          </div>
          {pending.length === 0 ? (
            ""
          ) : (
            <p className=" relative flex justify-center items-center bg-secondary rounded-full font-serif right-[185px] bottom-2 w-7 h-7 text-textWhite">
              {pending.length}
            </p>
          )}
        </div>
      </div>
      <p className="text-xs px-5 w-full flex justify-end h-1">
        count : {filter.length}
      </p>
      <div className="flex flex-col w-full p-3 gap-5">
        {filter.map((el) => (
          <ReportCard key={el.id} reportObj={el} />
        ))}
      </div>
    </div>
  );
}
