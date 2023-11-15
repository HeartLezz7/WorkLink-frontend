import { useState } from "react";

export default function RejectTransaction({ open, setIsOpen, data }) {
  const [isHover, setIsHover] = useState(false);
  console.log(isHover);
  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/70 z-[30]"></div>
          <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
            <form className="px-16 py-5 rounded-3xl bg-background relative w-[800px] flex flex-col justify-center items-center gap-5">
              <div
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3"
              >
                <img
                  src="/icons/closeIcon.svg"
                  className="w-[30px] aspect-square object-cover place-content-center hover:bg-textGrayLight bg-textGrayLight/50 rounded-full cursor-pointer"
                />
              </div>
              <div className="text-primary text-3xl font-semibold w-full text-center py-2">
                Withdraw
              </div>
              <main className="w-full flex flex-col items-center gap-[15px]">
                <div
                  onMouseEnter={() => {
                    setIsHover(true);
                  }}
                  onMouseLeave={() => {
                    setIsHover(false);
                  }}
                  className="w-[300px] h-[400px] aspect-square rounded-md overflow-hidden border-2 border-textGrayDark cursor-pointer content-center relative whiteDivShadow"
                >
                  <img src={data.slipImage} alt="" />
                </div>
                <div className="w-full flex flex-col gap-3 ">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-10 font-bold">
                      <p className="w-20">User :</p>
                      <p className="text-primary text-xl">
                        {data.user.firstName} {data.user.lastName}
                      </p>
                    </div>
                    <div className="flex gap-10 font-bold">
                      <p className="w-20">Type :</p>
                      <p className="text-primary text-xl">{data.type}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex gap-10 font-bold w-full">
                      <p className="w-20">Amount :</p>
                      <p className="text-primary text-xl"> {data.amount} </p>
                      <p className=" right-5 text-xl">THB</p>
                    </div>
                  </div>
                  <div className="flex gap-5 font-bold">
                    <p>Comment</p>
                    <textarea
                      name="comment"
                      className="block w-[600px] outline-none resize-none border-2 border-primary p-2 rounded-md"
                      rows="4"
                    >
                      {data.comment}
                    </textarea>
                  </div>
                </div>
              </main>
            </form>
          </div>
        </>
      )}
    </>
  );
}
