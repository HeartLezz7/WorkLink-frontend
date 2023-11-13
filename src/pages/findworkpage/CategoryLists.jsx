import { useState } from "react";
import CategoryItem from "./CategoryItem";
import useWork from "../../hooks/useWork";

export default function CategoryLists() {
  const [categoryId, setCategoryId] = useState(0);
  const { searchCatId, setSearchCatId } = useWork();
  //   console.log(categoryId);
  const categoryLists = [
    {
      id: 0,
      onImage: "/categoryIcon/all-on.svg",
      offImage: "/categoryIcon/all-off.svg",
      message1: "All",
      message2: "",
    },
    {
      id: 1,
      onImage: "/categoryIcon/com-on.svg",
      offImage: "/categoryIcon/com-off.svg",
      message1: "Computer",
      message2: "& Technology",
    },
    {
      id: 2,
      onImage: "/categoryIcon/graphic-on.svg",
      offImage: "/categoryIcon/graphic-off.svg",
      message1: "Graphic",
      message2: "& Design",
    },
    {
      id: 3,
      onImage: "/categoryIcon/docu-on.svg",
      offImage: "/categoryIcon/docu-off.svg",
      message1: "Document",
      message2: "",
    },
    {
      id: 4,
      onImage: "/categoryIcon/edu-on.svg",
      offImage: "/categoryIcon/edu-off.svg",
      message1: "Education",
      message2: "& Tutoring",
    },
    {
      id: 5,
      onImage: "/categoryIcon/health-on.svg",
      offImage: "/categoryIcon/health-off.svg",
      message1: "Health",
      message2: "care",
    },
    {
      id: 6,
      onImage: "/categoryIcon/home-on.svg",
      offImage: "/categoryIcon/home-off.svg",
      message1: "Home",
      message2: "service",
    },
    {
      id: 7,
      onImage: "/categoryIcon/transport-on.svg",
      offImage: "/categoryIcon/transport-off.svg",
      message1: "Transport",
      message2: "",
    },
    {
      id: 8,
      onImage: "/categoryIcon/event-on.svg",
      offImage: "/categoryIcon/event-off.svg",
      message1: "Event",
      message2: "",
    },
    {
      id: 9,
      onImage: "/categoryIcon/pet-on.svg",
      offImage: "/categoryIcon/pet-off.svg",
      message1: "Pet care",
      message2: "",
    },
    {
      id: 10,
      onImage: "/categoryIcon/etc-on.svg",
      offImage: "/categoryIcon/etc-off.svg",
      message1: "Etc.",
      message2: "",
    },
  ];
  const handleClick = (id) => {
    // console.log("click");
    setSearchCatId(id);
  };
  //   console.log(isHover);
  return (
    <div className="bg-[#ffffff] w-fit h-[180px] rounded-3xl mt-10 flex items-end p-3 gap-4 whiteDivShadow mx-auto ">
      {categoryLists.map((el) => (
        <CategoryItem
          key={el.id}
          handleClick={handleClick}
          id={el.id}
          imageOn={el.onImage}
          imageOff={el.offImage}
          message1={el.message1}
          message2={el.message2}
          categoryId={searchCatId}
        />
      ))}
    </div>
  );
}
