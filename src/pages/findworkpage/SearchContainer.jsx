import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import CategoryLists from "./CategoryLists";

export default function SearchContainer() {
  const [orderBy, setOrderBy] = useState("all");
  return (
    <>
      <div className="relative w-[60%]">
        <div className="w-[30px] absolute top-2 left-2">
          <BiSearchAlt color="FF7127" size={30} />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="rounded-full pl-10 py-2 w-full text-2xl shadow-md shadow-primaryDark/50 outline-none text-secondary focus:ring placeholder:text-secondary"
        />
      </div>
      <div className="place-content-center w-[90%]">
        <CategoryLists />
      </div>
      <div className=" flex items-end justify-start w-[80%] mt-10 gap-5">
        <p className="text-textNavy text-2xl font-bold">OrderBy :</p>
        <p
          onClick={() => setOrderBy("all")}
          className={` cursor-pointer px-2 font-semibold text-2xl ${
            orderBy === "all" ? "text-textNavy" : "text-textGrayLight "
          }`}
        >
          All
        </p>
        <p
          onClick={() => setOrderBy("nearme")}
          className={` cursor-pointer px-2 font-semibold text-2xl ${
            orderBy === "nearme" ? "text-textNavy" : "text-textGrayLight "
          }`}
        >
          Near me
        </p>
        <p
          onClick={() => setOrderBy("soon")}
          className={` cursor-pointer px-2 font-semibold text-2xl ${
            orderBy === "soon" ? "text-textNavy" : "text-textGrayLight "
          }`}
        >
          Coming Soon
        </p>
      </div>
    </>
  );
}