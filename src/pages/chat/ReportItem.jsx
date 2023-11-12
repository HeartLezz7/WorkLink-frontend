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
      <div className="border border-textGrayDark rounded-xl  z-50 absolute  right-0 top-7 bg-textWhite">
        <form
          className="flex flex-col items-center gap-3 p-2 "
          onSubmit={handleSumbit}
        >
          <textarea
            name="report"
            cols="40"
            rows="5"
            onChange={handleInput}
            className="rounded-lg p-2 border"
          ></textarea>
          <div className="w-full flex">
            <button
              className="bg-error text-textWhite py-2  px-3 rounded-2xl w-full"
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
