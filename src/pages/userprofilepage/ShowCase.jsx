export default function ShowCase() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <h6 className="text-textNavy">My outstanding</h6>
        <button className="bg-secondary px-3 py-1 rounded-lg text-lg font-semibold">
          Add+
        </button>
      </div>
      <div className="flex gap-5 items-center justify-start p-3 rounded-lg border-2 border-textGrayDark w-fit ">
        <div className="flex gap-3  py-3 ">
          <div className="w-[270px] h-[350px] bg-backgroundWhiteGray rounded-lg overflow-hidden ">
            <img src="/Show1.jpg" className="w-full h-[280px] object-cover" />
            <div className="p-3 flex justify-center items-center h-[70px]">
              <p className="line-clamp-2 text-textGrayDark">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="w-[270px] h-[350px] bg-backgroundWhiteGray rounded-lg overflow-hidden ">
            <img src="/Show2.jpg" className="w-full h-[280px] object-cover" />
            <div className="p-3 flex justify-center items-center h-[70px]">
              <p className="line-clamp-2 text-textGrayDark">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="w-[270px] h-[350px] bg-backgroundWhiteGray rounded-lg overflow-hidden ">
            <img src="/Show3.jpg" className="w-full h-[280px] object-cover" />
            <div className="p-3 flex justify-center items-center h-[70px]">
              <p className="line-clamp-2 text-textGrayDark">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
