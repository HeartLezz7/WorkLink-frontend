import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import CategoryLists from "./CategoryLists";
import ModalMap from "../../components/modal/ModalMap";
import useWork from "../../hooks/useWork";

export default function SearchContainer() {
  const [orderBy, setOrderBy] = useState("all");
  const [address, setAddress] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    searchName,
    setSearchName,
    locationName,
    setLocationName,
    setSearchLocation,
  } = useWork();
  console.log(locationName);

  return (
    <>
      <div className="relative w-[60%]">
        <div className="w-[30px] absolute top-[9px] left-4">
          <BiSearchAlt color="FF7127" size={30} />
        </div>
        <input
          type="text"
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName}
          placeholder="Search"
          className="rounded-full pl-12 py-2 w-full text-2xl shadow-md shadow-primaryDark/50 outline-none text-secondary focus:ring placeholder:text-secondary"
        />
      </div>
      <div className="place-content-center w-[90%]">
        <CategoryLists />
      </div>
      <div className=" flex items-end justify-start w-[80%] mt-10 gap-5">
        <p className="text-textNavy text-2xl font-bold py-1">Filter :</p>
        <p
          onClick={() => {
            setOrderBy("all");
            setLocationName("");
            setSearchLocation();
          }}
          className={` cursor-pointer px-3 font-semibold text-2xl py-1 ${
            orderBy === "all"
              ? "text-textNavy bg-secondaryLight rounded-full"
              : "text-textGrayLight "
          }`}
        >
          All
        </p>
        <div
          onClick={() => {
            setOrderBy("nearme");
            setIsOpen(true);
          }}
          className={`flex items-center cursor-pointer px-3 font-semibold text-2xl py-1 max-w-[500px] ${
            orderBy === "nearme"
              ? "text-textNavy bg-secondaryLight rounded-full"
              : "text-textGrayLight "
          }`}
        >
          {locationName ? (
            <>
              <span className="text-sm py-1 text-start truncate max-w-[400px]">
                {locationName}
              </span>
              <span className="text-sm py-1 text-start w-fit line-clamp-1 ">
                (in 10 km)
              </span>
            </>
          ) : (
            "Near Me (10km)"
          )}
        </div>

        <ModalMap
          open={isOpen}
          onClose={() => setIsOpen(false)}
          setAddress={setAddress}
          address={address}
          onFindingWork={true}
        />

        <p
          onClick={() => {
            setOrderBy("soon");
            setLocationName("");
            setSearchLocation();
          }}
          className={` cursor-pointer px-3 py-1 font-semibold text-2xl ${
            orderBy === "soon"
              ? "text-textNavy bg-secondaryLight rounded-full"
              : "text-textGrayLight "
          }`}
        >
          Remote Work
        </p>
      </div>
    </>
  );
}
