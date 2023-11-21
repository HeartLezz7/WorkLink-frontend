import {
  STATUS_FINDING,
  STATUS_MAKEDEAL,
  STATUS_ONPROCESS,
  STATUS_REQUEST,
} from "../../configs/constants";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import WorkButton from "./WorkButton";
import ReportItem from "./ReportItem";
import useChat from "../../hooks/useChat";
import useWork from "../../hooks/useWork";
import useAuth from "../../hooks/useAuth";
import ReviewModal from "../../components/modal/ReviewModal";
import EditWorkModal from "../../components/modal/EditWorkModal";
import getDate from "../../utils/getDate";

export default function ChatStatusWork() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const { user } = useAuth();
  const { allWorks } = useWork();

  const { chatRoom } = useChat();

  const work = allWorks.find((item) => item.id === chatRoom?.workId);
  console.log(work?.price, "price");
  console.log(user?.wallet, "wallet");
  return (
    <>
      <div className="h-[calc(100vh-60px)] col-span-4 flex flex-col">
        <div className="bg-secondaryLight text-textWhite text-3xl text-center px-3 py-2 font-bold relative">
          Work detail
          <div className="absolute top-2.5 right-5  border rounded-full cursor-pointer">
            <BiDotsHorizontalRounded
              size={30}
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <ReportItem
                workId={chatRoom?.workId}
                workerId={chatRoom?.dealer?.id}
                setIsOpen={setIsOpen}
              />
            )}
          </div>
        </div>
        <div className="h-full py-2 pl-3 pr-1">
          <div className="flex flex-col items-center relative">
            <div className="text-lg font-semibold first-letter:uppercase p-2">
              {work.title}
              <div className="w-full text-center text-xl text-secondary font-bold">
                Status work : {work.statusWork}
              </div>
            </div>
            <div className="overflow-y-scroll">
              <img
                src={work.workImage}
                alt=""
                className="w-[90%] aspect-video object-cover mx-auto rounded-md mb-2"
              />

              <div>Work type : {work.isOnsite ? "Onsite" : "Remote"}</div>
              {work.isOnsite ? <div>address : {work.addressName}</div> : ""}
              <div>Price : {work.price}</div>
              <div>
                Start-End Date: {getDate(work.startDate)}
                {"-"}
                {work.endDate ? (
                  getDate(work.endDate)
                ) : (
                  <span className="text-disable">- NotSpecified</span>
                )}{" "}
              </div>
              <div>Description : {work.description}</div>
            </div>
          </div>
        </div>
        <div className="row-span-1 p-10 flex flex-col items-center justify-center gap-2">
          {user.id === chatRoom?.creater?.id ? (
            chatRoom?.creater?.id && work.statusWork === STATUS_FINDING ? (
              <>
                <button
                  className="w-[90%]  bg-secondaryLight text-textWhite p-2 rounded-xl text-center cursor-pointer"
                  onClick={() => setOpenEditModal(true)}
                >
                  Edit
                </button>
                {openEditModal && (
                  <EditWorkModal setIsOpen={setOpenEditModal} work={work} />
                )}
                <WorkButton
                  title="Submit"
                  workId={work?.id}
                  workerId={chatRoom?.dealer?.id}
                  price={work?.price}
                  wallet={user?.wallet}
                />
              </>
            ) : chatRoom?.creater?.id &&
              work?.statusWork === STATUS_MAKEDEAL ? (
              <>
                <WorkButton title="Cancel" workId={work?.id} />
              </>
            ) : chatRoom?.creater?.id && work.statusWork === STATUS_REQUEST ? (
              <>
                <button
                  className="w-[90%]  bg-secondaryLight text-textWhite p-2 rounded-xl text-center cursor-pointer"
                  onClick={() => setOpenModal(true)}
                >
                  Success
                </button>
              </>
            ) : (
              ""
            )
          ) : chatRoom?.dealer?.id && work.statusWork === STATUS_FINDING ? (
            ""
          ) : chatRoom?.dealer?.id && work.statusWork === STATUS_MAKEDEAL ? (
            <>
              <WorkButton
                title="Accept"
                workId={work?.id}
                workerId={chatRoom?.dealer?.id}
              />
              <WorkButton
                title="Reject"
                workId={work?.id}
                workerId={chatRoom?.dealer?.id}
              />
            </>
          ) : chatRoom?.dealer?.id && work.statusWork === STATUS_ONPROCESS ? (
            <>
              {/* <SuccessButton
                workId={work?.id}
                onClick={() => setOpenModal(true)}
              /> */}
              <WorkButton
                title="Request Success"
                workId={work?.id}
                workerId={chatRoom?.dealer?.id}
              />
            </>
          ) : (
            ""
          )}
        </div>
        {openModal && (
          <ReviewModal setOpenModal={setOpenModal} workId={work?.id} />
        )}
      </div>
    </>
  );
}
