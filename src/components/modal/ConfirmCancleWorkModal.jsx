import { useState, useRef } from "react";
import Loading from "../Loading/Loading";
import { IoMdClose } from "react-icons/io";
import useWork from "../../hooks/useWork";

export default function ConfirmCancleWork({
  setIsCancleOpen,
  workId,
  setIsEditOpen,
}) {
  const [loading, setLoading] = useState(false);
  const { cancleWork } = useWork();

  const handleCancleWork = async () => {
    await cancleWork(workId);
    setIsEditOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[30]"></div>
      <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
        <div className="w-[650px]   ">
          <div className=" overflow-hidden px-2 pt-2 pb-5 rounded-3xl bg-background relative">
            {loading && <Loading />}
            <div
              onClick={() => setIsCancleOpen(false)}
              className="absolute top-0 right-0  w-[40px] h-[40px] bg-textGrayDark flex items-center justify-center rounded-bl-2xl cursor-pointer"
            >
              <IoMdClose size={25} color="fff" />
            </div>
            <div className="text-textNavy text-2xl font-semibold w-full text-center py-2">
              Are you sure to cancle this work?
            </div>

            <div className="flex justify-center w-4/5 mx-auto gap-5">
              <button
                type="button"
                onClick={handleCancleWork}
                className="flex-1 text-whitetext font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark rounded-lg text-2xl py-1.5 text-center place-content-center-center"
              >
                Yes
              </button>
              <button
                onClick={() => setIsCancleOpen(false)}
                type="button"
                className="flex-1 text-whitetext font-semibold bg-textGrayLight  focus:outline-none  shadow-md  text-2xl rounded-lg py-1.5 text-center place-content-center-center whiteDivShadow"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
