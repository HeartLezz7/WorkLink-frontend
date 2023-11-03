export default function ChatStatusWork() {
  return (
    <div className="h-full grid grid-rows-6">
      <div className="row-span-5">
        <div className="bg-secondaryLight text-textWhite text-4xl text-center p-3 font-semibold">
          Status
        </div>
        <div className="flex flex-col items-center gap-10 p-10">
          <div className=" text-secondaryLight font-semibold text-lg">
            Work Detail
          </div>
          <div className="flex flex-col">
            <div>Work id : WLPT123456789</div>
            <div>Work name : Take care of animal</div>
            <div>Start work : 26 Oct 2023</div>
            <div>Start Price : 500 THB</div>
            <div>
              Description : Your pets are a precious part of your family. So
              when they fall ill, you want them to be seen by experts who love
              our animal friends as much as you do.
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-1 p-10 flex flex-col items-center">
        <button className="w-[20rem] bg-secondaryLight text-textWhite p-3 rounded-xl text-center">
          Accept
        </button>
      </div>
    </div>
  );
}
