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
  // STATUS_SUCCESS,
} from "../../configs/constants";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import WorkButton from "./WorkButton";
import ReportItem from "./ReportItem";
import useAuth from "../../hooks/useAuth";

export default function ChatStatusWork() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const ownerId = 2;
  const status = STATUS_ONPROCESS;
  const workId = 1;
  const workerId = 2;
  const userId = ownerId;
  return (
    <>
      <div className="h-[calc(100vh-60px)] grid grid-rows-6 col-span-2 ">
        <div className="row-span-5 ">
          <div className="bg-secondaryLight text-textWhite text-4xl text-center p-3 font-semibold">
            Status
          </div>
          <div className="flex flex-col items-center gap-10 p-10 relative ">
            <div className="absolute top-5 right-5  border rounded-full cursor-pointer">
              <BiDotsHorizontalRounded
                size={20}
                onClick={() => setIsOpen(!isOpen)}
              />
              {isOpen && (
                <ReportItem
                  workId={workId}
                  workerId={workerId}
                  setIsOpen={setIsOpen}
                />
              )}
            </div>
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
            ) : ownerId && status === STATUS_REQUEST ? (
              <>
                <WorkButton title="Success" />
              </>
            ) : (
              ""
            )
          ) : workerId && status === STATUS_FINDING ? (
            ""
          ) : workerId && status === STATUS_MAKEDEAL ? (
            <>
              <WorkButton title="Accept" />
            </>
          ) : workerId && status === STATUS_ONPROCESS ? (
            <>
              <WorkButton title="Success" />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
