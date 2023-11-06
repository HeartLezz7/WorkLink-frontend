export default function OwnerWorkCard() {
  return (
    <div className="w-full p-1 bg-background whiteDivShadow rounded-2xl flex cursor-pointer">
      <img src="/workImage.jpg" className="w-[40%] object-cover rounded-2xl" />
      <div className="p-1 w-[60%]">
        <div className="text-textNavy truncate ">
          Help manage my account dasdsa
        </div>
        <div className="text-sm text-textGrayDark">CreateAt : 20/02/66</div>
        <div className="text-sm text-textGrayDark">Workdate : 20/02/66</div>
        <div className="text-sm text-textGrayDark">Price : 3000 Bath</div>
        <div className="text-center rounded-full bg-yellow mt-2">
          Waiting Review
        </div>
      </div>
    </div>
  );
}
