import { useState } from "react";

export default function CategoryItem({
  id,
  imageOn,
  imageOff,
  message1,
  message2,
  categoryId,
  handleClick,
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onClick={() => handleClick(id)}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className="flex flex-col items-center w-fit"
    >
      <img
        src={`${isHover ? imageOn : categoryId === id ? imageOn : imageOff}`}
        alt=""
        className="h-[80px]"
      />
      {isHover ? (
        <div className="bg-textGrayDark/30 w-[60px] h-[20px] rounded-[50%]"></div>
      ) : categoryId === id ? (
        <div className="bg-textGrayDark/30 w-[60px] h-[20px] rounded-[50%]"></div>
      ) : (
        ""
      )}
      <p className="text-center text font-bold text-textGrayDark">{message1}</p>
      {message2 ? (
        <p className="text-center text font-bold text-textGrayDark">
          {" " && message2}
        </p>
      ) : (
        <div className="w-1 h-[28px]"></div>
      )}
    </div>
  );
}
