import { useState, useEffect } from "react";
import DoingWorkCard from "./DoingWorkCard";
import axios from "../../../configs/axios";
import { STATUS_FINDING, STATUS_MAKEDEAL } from "../../../configs/constants";
import useWork from "../../../hooks/useWork";
import { Select } from "antd";

export default function DoingWork() {
  const [filter, setFilter] = useState("all");
  const { myDoingWork, mySignWork } = useWork();
  const [filterWork, setFilterWork] = useState(myDoingWork);

  useEffect(() => {
    if (filter === "all") {
      setFilterWork(myDoingWork);
    } else if (filter === "success") {
      const newfil = myDoingWork.filter((work) => work.statusWork === filter);
      setFilterWork(newfil);
    } else if (filter === "onProcess") {
      const newfil = myDoingWork.filter((work) => {
        if (work.statusWork === "makeDeal") {
          return true;
        }
        if (work.statusWork === "onProcess") {
          return true;
        }
        if (work.statusWork === "requestSuccess") {
          return true;
        }
        return false;
      });
      setFilterWork(newfil);
    } else {
      const newfil = myDoingWork.filter((work) => work.statusWork === filter);
      setFilterWork(newfil);
    }
  }, [myDoingWork, filter]);

  const handleChangeFilter = (value) => {
    setFilter(value);
  };

  return (
    <div className="p-1 h-full relative">
      <div className="text-2xl font-bold text-textNavy px-1 absolute top-[-10px] left-[20px] bg-primaryLight">
        My task
      </div>
      <div className="border-2 border-textNavy w-full  rounded-xl  pt-5 pb-3 px-1 h-full overflow-hidden">
        <div className="flex justify-between w-full items-center px-2 pb-2 pt-1">
          <div className="flex gap-3 ">
            <img src="/icons/filter.svg" alt="" className="w-[30px]" />
            <Select
              defaultValue="all"
              style={{
                width: "150px",
              }}
              onChange={handleChangeFilter}
              options={[
                { value: "all", label: "All" },
                { value: "signUp", label: "SignUp" },
                { value: "onProcess", label: "OnProcess" },
                { value: "success", label: "Success" },
                { value: "cancel", label: "Cancel" },
                { value: "onIssue", label: "OnIssue" },
              ]}
            />
          </div>
        </div>
        <div className=" w-full overflow-y-scroll pb-2 rounded-lg h-[93%] flex flex-col gap-3 pr-2">
          {filter === "all" ? (
            <>
              {filterWork.length > 0 &&
                filterWork.map((el) => (
                  <DoingWorkCard key={el.id} work={el} isDoing={true} />
                ))}
              {mySignWork.length > 0 &&
                mySignWork.map((el) => (
                  <DoingWorkCard key={el.id} work={el.work} isDoing={false} />
                ))}
            </>
          ) : filter === "signUp" ? (
            <>
              {" "}
              {mySignWork.length > 0 &&
                mySignWork.map((el) => (
                  <DoingWorkCard key={el.id} work={el.work} isDoing={false} />
                ))}
            </>
          ) : (
            <>
              {filterWork.length > 0 &&
                filterWork.map((el) => (
                  <DoingWorkCard key={el.id} work={el} isDoing={true} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
