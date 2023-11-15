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

const SuccessButton = ({ onClick }) => {
  return <button onClick={onClick}>Success</button>;
};

export default function ChatStatusWork() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  const { user } = useAuth();
  const { allWorks } = useWork();
  const { chatRoom } = useChat();

  const work = allWorks.find((item) => item.id === chatRoom?.workId);

  return (
    <>
      <div className="h-[calc(100vh-60px)] grid grid-rows-6 col-span-2 ">
        <div className="row-span-5 ">
          <div className="bg-secondaryLight text-textWhite text-4xl text-center p-3 font-semibold">
            Status
          </div>
          <div className="flex flex-col items-center gap-10 p-10 relative overflow-y-scroll h-[550px]">
            <div className="absolute top-5 right-5  border rounded-full cursor-pointer">
              <BiDotsHorizontalRounded
                size={20}
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
            <div className=" text-secondaryLight font-semibold text-lg">
              Work Detail
            </div>
            <div className="flex flex-col">
              <p className="text-secondary">
                Work id : <span className="text-black">{work?.id}</span>
              </p>
              <p className="text-secondary">
                Work name :<span className="text-black">{work?.title}</span>
              </p>
              <p className="text-secondary">
                Start work :{" "}
                <span className="text-black">{work?.createdAt}</span>
              </p>
              <p className="text-secondary">
                Price : <span className="text-black">{work?.price}</span>
              </p>
              <p className="text-secondary">
                Status : <span className="text-black">{work?.statusWork}</span>
              </p>
              <p className="text-secondary">
                Description :{" "}
                <span className="text-black">{work?.description}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-1 p-10 flex flex-col items-center justify-center gap-2">
          {user.id === chatRoom?.creater?.id ? (
            chatRoom?.creater?.id && work.statusWork === STATUS_FINDING ? (
              <>
                <WorkButton title="Edit" workId={work?.id} />
                <WorkButton
                  title="Submit"
                  workId={work?.id}
                  workerId={chatRoom?.dealer?.id}
                />
              </>
            ) : chatRoom?.creater?.id &&
              work?.statusWork === STATUS_MAKEDEAL ? (
              <>
                <WorkButton title="Cancel" workId={work?.id} />
              </>
            ) : chatRoom?.creater?.id && work.statusWork === STATUS_REQUEST ? (
              <>
                <WorkButton title="Success" workId={work?.id} />
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
              <SuccessButton
                workId={work?.id}
                onClick={() => setOpenModal(true)}
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
