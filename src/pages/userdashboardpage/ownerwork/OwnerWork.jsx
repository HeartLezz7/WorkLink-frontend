import { useState } from "react";
import OwnerWorkCard from "./OwnerWorkCard";
import CreateWorkModal from "../../../components/modal/CreateWorkModal";
import useWork from "../../../hooks/useWork";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import { Select } from "antd";

export default function OwnerWork() {
  const [isOpen, setIsOpen] = useState(false);
  const { allWorks } = useWork();
  const [delegatedWork, setDelegatedWork] = useState([]);
  const [filter, setFilter] = useState("all");
  const { user } = useAuth();
  useEffect(() => {
    if (allWorks.length > 0) {
      const ownerWork = allWorks.filter(
        (work) => work.ownerId === user.id && work.statusWork != "cancel"
      );
      if (filter === "all") {
        setDelegatedWork(ownerWork);
      } else if (filter === "onProcess") {
        const filterWork = ownerWork.filter((work) => {
          if (work.statusWork === "makeDeal") {
            return true;
          }
          if (work.statusWork === "onProcess") {
            return true;
          }
          if (work.statusWork === "reqSuccess") {
            return true;
          }
          return false;
        });
        setDelegatedWork(filterWork);
      } else {
        const filterWork = ownerWork.filter(
          (work) => work.statusWork === filter
        );
        setDelegatedWork(filterWork);
      }
    }
  }, [allWorks, filter]);

  const handleChangeFilter = (value) => {
    setFilter(value);
  };

  return (
    <div className="p-1 h-full relative">
      <div className="text-2xl font-bold text-textNavy px-1 absolute top-[-10px] left-[20px] bg-primaryLight truncate">
        Delegated Works
      </div>
      <div className="border-2 border-textNavy w-full  rounded-xl  pt-5 pb-3 px-1 h-full overflow-hidden">
        <div className="flex justify-between items-center px-2 pb-2 pt-1">
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
                { value: "adminReview", label: "AdminReview" },
                { value: "finding", label: "Finding" },
                { value: "onProcess", label: "OnProcess" },
                { value: "success", label: "Success" },
                { value: "cancel", label: "Cancel" },
                { value: "onIssue", label: "OnIssue" },
              ]}
            />
          </div>
          <div className="flex  px-2 pb-2">
            <div
              onClick={() => {
                setIsOpen(true);
              }}
              className="text-whitetext font-semibold bg-gradient-to-tl from-secondaryLight via-secondary to-secondaryDark hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-secondary shadow-md shadow-primaryDark font-md rounded-lg text-sm px-5 py-1.5 text-center cursor-pointer"
            >
              {" "}
              + Create New Work
            </div>
            {isOpen && <CreateWorkModal setIsOpen={setIsOpen} />}
          </div>
        </div>
        <div className=" w-full overflow-y-scroll pb-2 rounded-lg h-[91%] flex flex-col gap-3 pr-2">
          {delegatedWork.map((work) => (
            <OwnerWorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
}
