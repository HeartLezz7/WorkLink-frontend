import getDate from "../../../utils/getDate";
export default function OwnerWorkCard({
  id,
  workImage,
  title,
  createdAt,
  startDate,
  endDate,
  price,
  statusWork,
}) {
  // let colorStyle

  // switch(statusWork){
  //   case("finding")
  //     colorStyle = "bg-yellow"
  //     break

  // }

  return (
    <div className="w-full p-1 bg-background whiteDivShadow rounded-2xl flex cursor-pointer">
      <img src={workImage} className="w-[40%] object-cover rounded-2xl" />
      <div className="p-1 w-[60%]">
        <div className="text-textNavy truncate ">{title}</div>
        <div className="text-sm text-textGrayDark">
          CreateAt : {getDate(createdAt)}
        </div>
        <div className="text-sm text-textGrayDark">
          Workdate : {getDate(startDate)} - {getDate(endDate)}
        </div>
        <div className="text-sm text-textGrayDark">Price : {price} Bath</div>
        <div className={`text-center rounded-full mt-2 ${"bg-yellow"} `}>
          {statusWork}
        </div>
      </div>
    </div>
  );
}
