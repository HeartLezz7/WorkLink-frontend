import { useState } from "react";
import axios from "../../configs/axios";

export default function ReportItem({ workId, workerId, setIsOpen }) {
  const [reportMessage, setReportMessage] = useState("");

  const handleInput = (e) => {
    setReportMessage({ [e.target.name]: e.target.value });
  };
  const handleSumbit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/report/createReport", {
        reportMessage: reportMessage.report,
        workId,
        workerId,
      });
      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* <div className="fixed inset-0 bg-backgroundWhiteGray opacity-80 z-30"></div> */}
      <div className=" rounded-xl  z-50 absolute  right-0 top-11 bg-textWhite whiteDivShadow">
        <form
          className="flex flex-col items-center gap-3 p-2 "
          onSubmit={handleSumbit}
        >
          <textarea
            name="report"
            cols="40"
            rows="5"
            onChange={handleInput}
            placeholder="Enter report detail..."
            className="rounded-xl p-2 text-black bg-backgroundWhiteBlue resize-none"
          />
          <div className="w-full flex">
            <button
              className="bg-error text-textWhite py-1  px-3 rounded-2xl w-full"
              type="submit"
            >
              Report
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
