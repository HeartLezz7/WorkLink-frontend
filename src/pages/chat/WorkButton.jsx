import { toast } from "react-hot-toast";
import axios from "../../configs/axios";
import {
  STATUS_FINDING,
  STATUS_MAKEDEAL,
  STATUS_ONPROCESS,
  STATUS_REQUEST,
} from "../../configs/constants";
import useChat from "../../hooks/useChat";

export default function WorkButton({ title, workId, workerId, price, wallet }) {
  const { Refresh, setRefresh } = useChat();

  const handleStatusWork = async (status) => {
    try {
      console.log(workerId, "check");
      let workStatus = "";
      if (status === "Submit") {
        workStatus = STATUS_MAKEDEAL;
        if (price > wallet) {
          toast.error("Please add money");
        }
        await axios.patch("/work/makeDeal", {
          workStatus,
          workId,
          workerId,
        });
        return;
      } else if (status === "Accept") {
        workStatus = STATUS_ONPROCESS;
        await axios.patch("/work/acceptDeal", {
          workStatus,
          workId,
          workerId,
        });
        return;
      } else if (status === "Reject" || status === "Cancel") {
        workStatus = STATUS_FINDING;
        await axios("/work/rejectDeal", { workStatus, workId, workerId });
        return;
      } else if (status === "Request Success") {
        workStatus = STATUS_REQUEST;
        await axios.patch("/work/updateStatus", { workStatus, workId });
      }

      setRefresh(!Refresh);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center gap-2 relative">
      <button
        className={`w-[20rem] ${
          title === "Reject"
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
