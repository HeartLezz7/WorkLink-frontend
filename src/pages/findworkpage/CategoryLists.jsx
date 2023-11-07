import { useState } from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryLists() {
  const [categoryId, setCategoryId] = useState(0);
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
      onImage: "/categoryIcon/doc-on.svg",
      offImage: "/categoryIcon/doc-off.svg",
      message1: "Document",
      message2: "",
    },
  ];
  const handleClick = (id) => {
    // console.log("click");
    setCategoryId(id);
  };
  //   console.log(isHover);
  return (
    <div className="bg-[#ffffff] min-w-[90%] h-[180px] rounded-3xl mt-10 flex items-end p-3 gap-4 whiteDivShadow ">
      {categoryLists.map((el) => (
        <CategoryItem
          key={el.id}
          handleClick={handleClick}
          id={el.id}
          imageOn={el.onImage}
          imageOff={el.offImage}
          message1={el.message1}
          message2={el.message2}
          categoryId={categoryId}
        />
      ))}
    </div>
  );
}
