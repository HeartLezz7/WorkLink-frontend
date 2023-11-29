import axios from "../../../configs/axios";
import { useState } from "react";

export default function ReportModal({ setIsOpen, open, reportObj }) {
  const [input, setInput] = useState({});

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await updateStatus(input);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async () => {
    try {
      await axios.patch(`/report/changestatus/${reportObj.work.id}`, {
        statusWork: input,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/70 z-[30]"></div>
          <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
            <form
              className="px-16 py-5 rounded-3xl bg-background relative w-[800px] flex flex-col justify-center items-center gap-5"
              onSubmit={handleSubmitForm}
            >
              <div
                className="absolute top-3 right-3"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src="/icons/closeIcon.svg"
                  className="w-[30px] aspect-square object-cover place-content-center hover:bg-textGrayLight bg-textGrayLight/50 rounded-full cursor-pointer"
                />
              </div>
              <main className="w-full flex flex-col items-center gap-[15px]">
                <div className="w-full flex flex-col gap-3 ">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-10 font-bold">
                      <p className="w-20 text-xl text-primary">Work :</p>
                      <p className="text-primary text-xl">
                        {reportObj.work.title}
                      </p>
                    </div>
                    <div className="flex gap-10 font-bold">
                      <p className="w-20">Description&nbsp;:</p>
                      <p className=" overflow-y-scroll max-h-20 hiddenScrollStyle">
                        {reportObj.work.description}
                      </p>
                    </div>
                    <div className="flex gap-10 font-bold">
                      <p className="w-20">Status :</p>
                      <p>{reportObj.work.statusWork}</p>
                    </div>
                    <div className="flex gap-10 font-bold">
                      <p className="w-20">Price :</p>
                      <p>{reportObj.work.price}</p>
                    </div>
                    <div className="flex gap-6 font-bold">
                      <p className="w-24">Start Day :</p>
                      <p>{reportObj.work.startDate.split("T")[0]}</p>
                    </div>

                    <div className="flex gap-10 font-bold">
                      <p className="w-20">Owner :</p>
                      <p>
                        {reportObj.work.owner.firstName}{" "}
                        {reportObj.work.owner.lastName}
                      </p>
                    </div>

                    <div className="flex gap-10 font-bold">
                      <p className="w-20">ReportBy&nbsp;:</p>
                      <p>
                        {reportObj.reportBy.firstName}{" "}
                        {reportObj.reportBy.lastName}
                      </p>
                    </div>
                    <div className="flex gap-10 font-bold">
                      <p className="w-20">detail&nbsp;:</p>
                      <p className="overflow-y-scroll h-10 hiddenScrollStyle">
                        {reportObj.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </main>
              {reportObj.isClear === true ? (
                <div
                  className="bg-textGrayLight w-full flex justify-center p-2 rounded-xl hover:bg-textGrayDark hover:text-textWhite cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </div>
              ) : (
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-4 flex-1 justify-center items-center">
                    <button
                      className="text-textWhite font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-xl w-[80%] py-1.5 text-center place-content-center-center"
                      value="finding"
                      onClick={(e) => setInput(e.target.value)}
                    >
                      Finding
                    </button>
                    <button
                      className="text-textWhite font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-xl w-[80%] py-1.5 text-center place-content-center-center"
                      value="makeDeal"
                      onClick={(e) => setInput(e.target.value)}
                    >
                      MakeDeal
                    </button>
                    <button
                      className="text-textWhite font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-xl w-[80%] py-1.5 text-center place-content-center-center"
                      value="onProcess"
                      onClick={(e) => setInput(e.target.value)}
                    >
                      OnProcess
                    </button>
                  </div>
                  <div className="flex flex-col gap-4 flex-1 justify-center items-center">
                    <button
                      className="text-textWhite font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-xl w-[80%] py-1.5 text-center place-content-center-center"
                      value="requestSuccess"
                      onClick={(e) => setInput(e.target.value)}
                    >
                      RequestSuccess
                    </button>
                    <button
                      className="text-textWhite font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-xl w-[80%] py-1.5 text-center place-content-center-center"
                      value="success"
                      onClick={(e) => setInput(e.target.value)}
                    >
                      Success
                    </button>
                    <button
                      className="text-primary font-semibold border-color-primary bg-white  focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-xl w-[80%] py-1.5 text-center place-content-center-center"
                      name="statusWork"
                      value="cancel"
                      onClick={(e) => setInput(e.target.value)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </>
      )}
    </>
  );
}
