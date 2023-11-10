import {
  // STATUS_CANCEL,
  STATUS_FINDING,
  // STATUS_ISSUE,
  STATUS_MAKEDEAL,
  STATUS_ONPROCESS,
  // STATUS_FINDING,
  // STATUS_MAKEDEAL,
  // STATUS_ONPROCESS,
  STATUS_REQUEST,
  STATUS_SUCCESS,
} from "../../configs/constants";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReportItem from "./ReportItem";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const WorkButton = ({ title, workId }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2">
      {title === "Report" && (
        <ReportItem workId={workId} setIsOpen={setIsOpen} />
      )}
      <div className="relative">
        <button
          className={`w-[20rem] ${
            title === "Edit"
              ? "bg-textWhite text-secondaryLight border border-secondaryLight"
              : title === "Report"
              ? "bg-error text-textWhite"
              : "bg-secondaryLight text-textWhite"
          } p-2 rounded-xl text-center`}
        >
          {title}
        </button>
        {title === "Report" && (
          <div className="absolute top-1/2 right-0 transf">
            <BiDotsHorizontalRounded />
          </div>
        )}
      </div>
    </div>
  );
};

export default function ChatStatusWork() {
  const { user } = useAuth();
  // const ownerId = user.id;
  const ownerId = 2;
  const status = STATUS_ONPROCESS;
  const workerId = 2;
  const userId = ownerId;
  return (
    <>
      <div className="h-[calc(100vh-60px)] grid grid-rows-6 col-span-2 relative">
        <div className="row-span-5">
          <div className="bg-secondaryLight text-textWhite text-4xl text-center p-3 font-semibold">
            Status
          </div>
          <div className="flex flex-col items-center gap-10 p-10">
            <div className=" text-secondaryLight font-semibold text-lg">
              Work Detail
            </div>
            <div className="flex flex-col">
              <p className="text-secondary">
                Work id : <span className="text-black">WLPT123456789</span>
              </p>
              <p className="text-secondary">
                Work name :
                <span className="text-black">Take care of animal</span>
              </p>
              <p className="text-secondary">
                Start work : <span className="text-black">26 Oct 2023</span>
              </p>
              <p className="text-secondary">
                Price : <span className="text-black">500 THB</span>
              </p>
              <p>{status}</p>
              <p className="text-secondary">
                Description :{" "}
                <span className="text-black">
                  Your pets are a precious part of your family. So when they
                  fall ill, you want them to be seen by experts who love our
                  animal friends as much as you do.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-1 p-10 flex flex-col items-center justify-center gap-2">
          {userId === ownerId ? (
            ownerId && status === STATUS_FINDING ? (
              <>
                <WorkButton title="Edit" />
                <WorkButton title="Submit" />
              </>
            ) : ownerId && status === STATUS_MAKEDEAL ? (
              <>
                <WorkButton title="Cancel" />
              </>
            ) : ownerId && status === STATUS_ONPROCESS ? (
              <>
                <WorkButton title="Report" />
              </>
            ) : ownerId && status === STATUS_REQUEST ? (
              <>
                <WorkButton title="Success" />
                <WorkButton title="Report" />
              </>
            ) : ownerId && status === STATUS_SUCCESS ? (
              <>
                <WorkButton title="Report" />
              </>
            ) : (
              ""
            )
          ) : workerId && status === STATUS_FINDING ? (
            ""
          ) : workerId && status === STATUS_MAKEDEAL ? (
            <>
              <WorkButton title="Accept" />
              <WorkButton title="Reject" />
            </>
          ) : workerId && status === STATUS_ONPROCESS ? (
            <>
              <WorkButton title="Success" />
              <WorkButton title="Report" />
            </>
          ) : workerId && status === STATUS_REQUEST ? (
            <>
              <WorkButton title="Report" />
            </>
          ) : workerId && status === STATUS_SUCCESS ? (
            <>
              <WorkButton title="Report" />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
