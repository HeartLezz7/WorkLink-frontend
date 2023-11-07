import { useState, useEffect, useRef } from "react";
import axios from "../../../configs/axios";
import getDate from "../../../utils/getDate";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import ChallengerItem from "./ChallengerItem";

export default function OwnerWorkModal({ work, setIsOpen, isOpen }) {
  const [thisWork, setThisWork] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/work/getdelegatedworkbyid/${work.id}`)
      .then((res) => {
        setThisWork(res.data.work);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(thisWork);
  // console.log(thisWork.challenger.length == 0);

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[30]"></div>
      <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
        <div className="">
          <div className=" overflow-hidden px-2 pt-2 pb-5 rounded-3xl bg-background relative">
            <div
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3"
            >
              <img
                src="/icons/closeIcon.svg"
                className="w-[30px] aspect-square object-cover place-content-center hover:bg-textGrayLight bg-textGrayLight/50 rounded-full cursor-pointer"
              />
            </div>
            <div className="text-textNavy text-3xl font-semibold w-full text-center py-2">
              Work infomation
            </div>
            {isLoading ? (
              <Loading />
            ) : (
              <main className="flex items-center h-[500px] w-[800px]">
                <div className="h-full w-[50%] flex flex-col p-3">
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
                    <div>Category : {work.category.category}</div>
                    <div>CreateAt : {getDate(work.createdAt)}</div>
                    <div>Work type : {work.isOnsite ? "Onsite" : "Remote"}</div>
                    {work.isOnsite ? <div>address : </div> : ""}
                    <div>Price : {work.price}</div>
                    <div>
                      Start-End Date: {getDate(work.startDate)}{" "}
                      {work.endDate ? (
                        getDate(work.endDate)
                      ) : (
                        <span className="text-disable">- NotSpecified</span>
                      )}{" "}
                    </div>
                    <div>
                      Description : {work.description} Lorem ipsum dolor sit,
                      amet consectetur adipisicing elit. Doloribus aliquid
                      voluptatem cupiditate? Quisquam beatae nobis cum ea aut
                      quidem deleniti consequatur dolore. Maiores quos enim
                      omnis culpa consequatur, sunt impedit.
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-2">
                    <div className="text-lg py-1 px-3 bg-textGrayLight rounded-lg font-semibold cursor-pointer">
                      Edit
                    </div>
                  </div>
                </div>
                <div className="h-full w-[50%] flex flex-col p-3 border border-textGrayDark rounded-xl">
                  <div className="text-xl font-bold text-center text-textNavy mb-3">
                    Challenger List
                  </div>
                  <div>
                    {thisWork.challenger.length == 0 ? (
                      <div className="text-lg text-center border rounded-md border-textGrayDark">
                        No one sign-up now.
                      </div>
                    ) : (
                      <div className="overflow-y-scroll pr-2 h-full flex flex-col gap-2">
                        {thisWork.challenger.map((el) => (
                          <ChallengerItem challenger={el} />
                        ))}
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
