import plane from "../../../public/icons/plane.png";
import plus from "../../../public/icons/plus.png";

export default function ChatBox() {
  return (
    <div className="grid grid-rows-6 border-x-2 border-x-textGrayLight">
      <div className="row-span-5">
        <div className="bg-primary text-textWhite text-4xl text-center p-3 font-semibold">
          Status
        </div>
      </div>
      <div className="row-span-1 p-10">
        <div className="border flex justify-between items-center px-6 py-3 rounded-xl">
          <div className="flex items-center gap-2">
            <img src={plus} alt="plus" className="w-[40px]" />
            <div>message...</div>
          </div>
          <div>
            <img src={plane} alt="plane" className="w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
