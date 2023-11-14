import axios from "../../configs/axios";
export default function ReportCard({ id }) {
  const handleReport = async (e) => {
    try {
      if (e.target.name === "approve") {
        axios.patch("/report/submitReport", { message: e.target.name });
        console.log("approve");
      } else if (e.target.name === "reject") {
        axios.patch("/report/submitReport", { message: e.target.name });
        console.log("reject");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="flex justify-between gap-20 h-32 border p-4 border-textGrayLight rounded-2xl shadow-lg bg-background"
      id={id}
    >
      <div className=" flex gap-10 items-center ">
        <img src="./defaultImage.jpg" alt="" className="rounded-full h-24" />
        <div>
          <div className=" flex ">
            <div className="w-32">Reported : </div> <div>hong</div>
          </div>
          <div className=" flex">
            <div className="w-32">ReportBy : </div> <div>heart</div>
          </div>
          <div className=" flex">
            <div className="w-32">WorkId : </div> <div>work</div>
          </div>
          <div className=" flex">
            <div className="w-32">message : </div> <div>i dont know</div>
          </div>
        </div>
      </div>

      <div className=" flex items-center">
        <button
          className=" border  w-40 h-12 rounded-xl bg-primaryDark text-textWhite border-gradiantPrimaryLight mx-5"
          name="approve"
          onClick={handleReport}
        >
          Approve
        </button>
        <button
          className="border  w-40 h-12 rounded-xl  bg-secondaryLight border-secondary"
          name="reject"
          onClick={handleReport}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
