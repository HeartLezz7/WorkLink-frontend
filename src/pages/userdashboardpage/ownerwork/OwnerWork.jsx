import { useState } from "react";
import OwnerWorkCard from "./OwnerWorkCard";
import CreateWorkModal from "../../../components/modal/CreateWorkModal";
import useWork from "../../../hooks/useWork";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

export default function OwnerWork() {
  const [isOpen, setIsOpen] = useState(false);
  const { allWorks } = useWork();
  const [delegatedWork, setDelegatedWork] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (allWorks.length > 0) {
      const ownerWork = allWorks.filter((work) => work.ownerId === user.id);

      // console.log(ownerWork);
      setDelegatedWork(ownerWork);
    }
  }, [allWorks]);
  // console.log(delegatedWork);

  return (
    <div className="p-1 h-full relative">
      <div className="text-2xl font-bold text-textNavy px-1 absolute top-[-10px] left-[20px] bg-primaryLight truncate">
        Delegated Works
      </div>
      <div className="border-2 border-textNavy w-full  rounded-xl  pt-5 pb-3 px-1 h-full overflow-hidden">
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
        <div className=" w-full overflow-y-scroll pb-2 rounded-lg h-[96%] flex flex-col gap-3 pr-2">
          {delegatedWork.map((work) => (
            <OwnerWorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
}
