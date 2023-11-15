import axios from "../../configs/axios";
import {
  STATUS_CANCEL,
  STATUS_MAKEDEAL,
  STATUS_ONPROCESS,
  STATUS_REQUEST,
} from "../../configs/constants";
import useChat from "../../hooks/useChat";

export default function WorkButton({ title, workId, workerId }) {
  const { Refresh, setRefresh } = useChat();
  const handleStatusWork = async (status) => {
    try {
      console.log(workerId, "check");
      let workStatus = "";
      if (status === "Submit") {
        workStatus = STATUS_MAKEDEAL;

        await axios.patch("/work/updateStatus", {
          workStatus,
          workId,
          workerId,
        });
      } else if (status === "Accept") {
        workStatus = STATUS_ONPROCESS;
      } else if (status === "Success") {
        workStatus = STATUS_REQUEST;
      } else if (status === "Cancel") {
        workStatus = STATUS_CANCEL;
      }
      await axios.patch("/work/updateStatus", { workStatus, workId });
      setRefresh(!Refresh);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center gap-2 relative">
      <button
        className={`w-[20rem] ${
          title === "Edit"
            ? "bg-textWhite text-secondaryLight border border-secondaryLight"
            : title === "Report"
            ? "bg-error text-textWhite"
            : "bg-secondaryLight text-textWhite"
        } p-2 rounded-xl text-center`}
        onClick={() => handleStatusWork(title)}
      >
        {title}
      </button>
    </div>
  );
}
