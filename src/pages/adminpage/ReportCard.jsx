import { useState } from "react";
import axios from "../../configs/axios";
import ReportModal from "../../components/modal/AdminModal/ReportModal";

export default function ReportCard({ reportObj }) {
  const [isOpen, setIsOpen] = useState(false);

  const clearReport = async () => {
    try {
      await axios.delete(`/report/delete/${reportObj.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleReport = async (e) => {
  //   try {
  //     if (e.target.name === "approve") {
  //       axios.patch("/report/submitReport", { message: e.target.name });
  //       console.log("approve");
  //     } else if (e.target.name === "reject") {
  //       axios.patch("/report/submitReport", { message: e.target.name });
  //       console.log("reject");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="flex justify-between gap-20 h-32 border p-4 border-textGrayLight rounded-2xl shadow-lg bg-background">
      <div className=" flex gap-10 items-center ">
        <img
          src={reportObj.work.workImage}
          alt=""
          className="rounded-full h-24 aspect-square"
        />
        <div>
          <div className=" flex ">
            <div className="w-32">Reported : </div>
            <div>
              {reportObj.reported.firstName} {reportObj.reported.lastName}
            </div>
          </div>
          <div className=" flex">
            <div className="w-32">ReportBy : </div>
            <div>
              {reportObj.reportBy.firstName} {reportObj.reportBy.lastName}
            </div>
          </div>
          <div className=" flex">
            <div className="w-32">Work : </div>
            <div className="overflow-y-scroll h-5 w-[500px] hiddenScrollStyle">
              {reportObj.work.title}
            </div>
          </div>
          <div className=" flex">
            <div className="w-32">message : </div> <div>{reportObj.detail}</div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col ">
        <div className="flex gap-5 font-bold justify-center">
          <div className="text-xl">Status work :</div>{" "}
          <div className="text-xl">{reportObj.work.statusWork}</div>
        </div>
        <div className="flex  h-full items-end">
          <button
            className=" border  w-40 h-12 rounded-xl bg-primaryDark text-textWhite border-gradiantPrimaryLight mx-5"
            name="approve"
            onClick={() => setIsOpen(true)}
          >
            Detail
          </button>
          <ReportModal
            setIsOpen={setIsOpen}
            open={isOpen}
            reportObj={reportObj}
          />
          <button
            className="border  w-40 h-12 rounded-xl  bg-backgroundWhiteGray border-x-textGrayDark"
            name="reject"
            onClick={() => clearReport()}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
