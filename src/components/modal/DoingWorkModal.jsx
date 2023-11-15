import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Loading from "../Loading/Loading";
import getDate from "../../utils/getDate";
import { useEffect } from "react";
import axios from "../../configs/axios";
import { Link } from "react-router-dom";
import useWork from "../../hooks/useWork";

export default function DoingWorkModal({ work, setIsOpen, isDoing }) {
  const [isLoading, setIsLoading] = useState();
  const [chatRoomId, setChatRoomId] = useState();
  const { signOut } = useWork();
  useEffect(() => {
    // check chat room
    axios
      .get(`/chat/checkchatroom/${work.id}`)
      .then((res) => {
        setChatRoomId(res.data.chatroom);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSignOut = async () => {
    await signOut(work.id);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[30]"></div>
      <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
        <div className="">
          <div className="overflow-hidden px-2 pt-2 pb-5 rounded-xl bg-background border-2 border-textGrayDark relative">
            <div
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0  w-[40px] h-[40px] bg-textGrayDark flex items-center justify-center rounded-bl-2xl cursor-pointer"
            >
              <IoMdClose size={25} color="fff" />
            </div>
            <div className="text-textNavy text-3xl font-semibold w-full text-center py-2">
              Work infomation
            </div>
            {isLoading ? (
              <Loading />
            ) : (
              <main className="flex items-center h-[450pxpx] w-[400px]">
                <div className="h-full flex flex-col p-3">
                  <div className="text-lg font-semibold first-letter:uppercase p-2">
                    {work.title}
                  </div>
                  <div className="overflow-y-scroll">
                    <img
                      src={work.workImage}
                      alt=""
                      className="w-[90%] aspect-video object-cover mx-auto rounded-md mb-2"
                    />
                    <div>Status : {work.statusWork}</div>
                    <div>Work type : {work.isOnsite ? "Onsite" : "Remote"}</div>
                    {work.isOnsite ? <div>address : </div> : ""}
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
                  <div className="flex gap-3 justify-center items-center">
                    {chatRoomId && (
                      <Link
                        to={`/chatRoom/${chatRoomId}`}
                        className="px-3 py-1 bg-textGrayLight rounded-md cursor-pointer"
                      >
                        Chat
                      </Link>
                    )}
                    {!isDoing && (
                      <div
                        onClick={handleSignOut}
                        className="px-3 py-1 bg-textGrayLight rounded-md cursor-pointer"
                      >
                        Sign out
                      </div>
                    )}
                  </div>
                </div>
              </main>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
