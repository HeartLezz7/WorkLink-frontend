import AdminWorkCard from "./AdminWorkCard";

import axios from "../../configs/axios";
import { useEffect, useState } from "react";
import useDropdown from "../../hooks/useDropdown";
import AdminSelectWorkModal from "./AdminSelectWorkModal";

export default function AdminPage() {
  const [allworks, setAllWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [noti, setNoti] = useState([]);
  const { isOpen, setIsOpen, dropDownEl } = useDropdown();

  const [searchUser, setSearchUser] = useState("");
  const handleInput = (e) => {
    setSearchUser(e.target.value);
  };
  let filterWork = [...filterWorks];
  if (searchUser) {
    filterWork = filterWorks.filter((el) => {
      if (el.title.toLowerCase().includes(searchUser.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  useEffect(() => {
    getwork();
  }, []);

  useEffect(() => {
    countReview();
  }, []);

  const getwork = async () => {
    const res = await axios
      .get("/work")
      .then((res) => {
        setAllWorks(res.data.allWork);
        setFilterWorks(res.data.allWork);
      })
      .catch((error) => console.log(error));
    return res;
  };

  const countReview = async () => {
    const wait = await axios
      .get("/work/waitreview")
      .then((res) => setNoti(res.data.reviewWork))
      .catch((error) => console.log(error));
    return wait;
  };

  const status = (status = "all") => {
    if (status === "all") {
      setFilterWorks(allworks);
    } else {
      let filterWorks = allworks.filter((item) => item.statusWork === status);
      setFilterWorks(filterWorks);
    }
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
          onClick={() => status("all")}
        >
          All
        </div>
        <div
          className="cursor-pointer p-2 bg-primaryLight w-44 flex justify-center rounded-xl"
          onClick={() => status("adminReview")}
        >
          Waiting Review
        </div>

        <div
          className="cursor-pointer p-2 flex justify-center items-center bg-primaryLight w-48 rounded-xl"
          onClick={() => setIsOpen(true)}
          ref={dropDownEl}
        >
          Select Status Work
        </div>
        {noti.length === 0 ? (
          ""
        ) : (
          <p className=" relative flex justify-center items-center bg-secondary rounded-full font-serif right-[242px] bottom-3.5 w-7 h-7 text-textWhite">
            {noti.length}
          </p>
        )}
        <div className="relative">
          <AdminSelectWorkModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            status={status}
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <p className="text-xs px-5 w-full flex justify-end">
          count : {filterWorks.length}
        </p>
        {filterWork.map((el) => (
          <AdminWorkCard key={el.id} workObj={el} />
        ))}
      </div>
    </div>
  );
}
