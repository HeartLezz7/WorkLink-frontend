import { useState } from "react";
import getDate from "../../../utils/getDate";
import DoingWorkModal from "../../../components/modal/DoingWorkModal";

export default function SignUpWorkCard({ work }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(work);
  // console.log(isOpen);

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className=" w-full p-1 bg-background whiteDivShadow rounded-2xl flex cursor-pointer"
      >
        <img
          src={work.workImage}
          className="w-[40%] aspect-video object-cover rounded-2xl"
        />
        <div className="p-1 w-[60%]">
          <div className="text-textNavy truncate ">{work.title}</div>
          <div className="text-sm text-textGrayDark">
            Workdate : {getDate(work.startDate)} - {getDate(work.endDate)}
          </div>
          <div className="text-sm text-textGrayDark">
            Price : {work.price} Bath
          </div>
          <div className={`text-center rounded-full mt-2 bg-yellow`}>
            Sign-up
          </div>
        </div>
      </div>
      {isOpen && (
        <DoingWorkModal setIsOpen={setIsOpen} isOpen={isOpen} work={work} />
      )}
    </>
  );
}
