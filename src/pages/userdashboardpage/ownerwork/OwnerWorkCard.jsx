import OwnerWorkModal from "../../../components/modal/ownerworkmodal/OwnerWorkModal";
import getDate from "../../../utils/getDate";
import { useState } from "react";

export default function OwnerWorkCard({ work }) {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  let colorStyle;

  switch (work.statusWork) {
    case "adminReview":
      colorStyle = "#FFC911";
      break;
    case "finding":
      colorStyle = "#FF7127";
      break;
    case "makeDeal":
      colorStyle = "#FF7127";
      break;
    case "onProcess":
      colorStyle = "#1d4ed8";
      break;
    case "requestSuccess":
      colorStyle = "#1d4ed8";
      break;
    case "success":
      colorStyle = "#3CB97F";
      break;
    case "cancel":
      colorStyle = "#DADFE7";
      break;
    case "onIssue":
      colorStyle = "#dc2626";
      break;
  }

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="w-full p-1 bg-background whiteDivShadow rounded-2xl flex cursor-pointer"
      >
        <img
          src={work.workImage}
          className="w-[40%] aspect-video object-cover rounded-2xl"
        />
        <div className="p-1 w-[60%]">
          <div className="text-textNavy truncate ">{work.title}</div>
          <div className="text-sm text-textGrayDark">
            CreateAt : {getDate(work.createdAt)}
          </div>
          <div className="text-sm text-textGrayDark">
            Workdate : {getDate(work.startDate)} {work.endDate && "-"}{" "}
            {getDate(work.endDate)}
          </div>
          <div className="text-sm text-textGrayDark">
            Price : {work.price} Bath
          </div>
          <div
            className={`text-center rounded-full mt-2 `}
            style={{ backgroundColor: `${colorStyle}` }}
          >
            {work.statusWork}
          </div>
        </div>
      </div>
      {isOpen && (
        <OwnerWorkModal setIsOpen={setIsOpen} isOpen={isOpen} work={work} />
      )}
    </>
  );
}
