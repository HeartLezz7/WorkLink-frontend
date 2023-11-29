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
      className="flex flex-col items-center w-[100px] flex-shrink-0"
    >
      <img
        src={`${isHover ? imageOn : categoryId === id ? imageOn : imageOff}`}
        alt=""
        className=" w-[80%]"
      />
      {isHover ? (
        <div className="bg-textGrayDark/30 w-[60px] h-[20px] rounded-[50%]"></div>
      ) : categoryId === id ? (
        <div className="bg-textGrayDark/30 w-[60px] h-[20px] rounded-[50%]"></div>
      ) : (
        ""
      )}
      <p className="text-center text-sm line-clamp-1 font-bold text-textGrayDark">
        {message1}
      </p>
      {message2 ? (
        <p className="text-center text-sm font-bold line-clamp-1 text-textGrayDark">
          {message2}
        </p>
      ) : (
        <div className="w-1 h-[20px]"></div>
      )}
    </div>
  );
}
