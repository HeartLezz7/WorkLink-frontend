import { useState, useEffect } from "react";
import DoingWorkCard from "./DoingWorkCard";
import axios from "../../../configs/axios";

export default function DoingWork() {
  const [filter, setFilter] = useState("all");
  const [mySignWork, setMySignWork] = useState([]);
  useEffect(() => {
    axios
      .get("/work/mysignwork")
      .then((res) => setMySignWork(res.data.mySignWork))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-1 h-full relative">
      <div className="text-2xl font-bold text-textNavy px-1 absolute top-[-10px] left-[20px] bg-primaryLight">
        My task
      </div>
      <div className="border-2 border-textNavy w-full  rounded-xl  pt-5 pb-3 px-1 h-full overflow-hidden">
        <div className="flex justify-between w-full items-center px-2 py-1">
          <div className="flex gap-3 ">
            <img src="/icons/filter.svg" alt="" className="w-[30px]" />
            <div
              onClick={() => {
                setFilter("all");
              }}
              className={`cursor-pointer text-lg font-semibold text-textGrayDark ${
                filter === "all" ? "bg-secondaryLight" : "bg-textGrayLight"
              }  px-2 rounded-full`}
            >
              all
            </div>
            <div
              onClick={() => {
                setFilter("date");
              }}
              className={`cursor-pointer text-lg font-semibold text-textGrayDark ${
                filter === "date" ? "bg-secondaryLight" : "bg-textGrayLight"
              }  px-2 rounded-full`}
            >
              date
            </div>
            <div
              onClick={() => {
                setFilter("status");
              }}
              className={`cursor-pointer text-lg font-semibold text-textGrayDark ${
                filter === "status" ? "bg-secondaryLight" : "bg-textGrayLight"
              }  px-2 rounded-full`}
            >
              status
            </div>
          </div>
        </div>
        <div className=" w-full overflow-y-scroll pb-2 rounded-lg h-[96%] flex flex-col gap-3 pr-2">
          {mySignWork.length > 0 &&
            mySignWork.map((el) => (
              <DoingWorkCard key={el.id} work={el.work} />
            ))}
        </div>
      </div>
    </div>
  );
}
