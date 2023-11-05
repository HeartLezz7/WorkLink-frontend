export default function OwnerWorkCard() {
  return (
    <div className="w-full p-1 bg-background whiteDivShadow rounded-2xl flex cursor-pointer">
      <img src="/workImage.jpg" className="w-[40%] object-cover rounded-2xl" />
      <div className="p-1 w-full">
        <div>work title</div>
        <div>work:date</div>
        <div>work:price</div>
        <div>work:price</div>
        <div>work:price</div>
        <div className="text-center rounded-full bg-primary">status</div>
      </div>
    </div>
  );
}
