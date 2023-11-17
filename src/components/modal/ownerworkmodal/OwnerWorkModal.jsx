import { useState, useEffect } from "react";
import axios from "../../../configs/axios";
import getDate from "../../../utils/getDate";
import Loading from "../../Loading/Loading";
import ChallengerItem from "./ChallengerItem";
import { IoMdClose } from "react-icons/io";
import EditWorkModal from "../EditWorkModal";
import useWork from "../../../hooks/useWork";

export default function OwnerWorkModal({ work, setIsOpen }) {
  const [thisWork, setThisWork] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { allWorks } = useWork();

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
  }, [allWorks]);

  console.log(thisWork);
  // console.log(thisWork.challenger.length == 0);

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
              <main className="flex items-center h-[500px] w-[800px]">
                <div className="h-full w-[50%] flex flex-col p-3">
                  <div className="text-lg font-semibold first-letter:uppercase p-2">
                    {thisWork.title}
                  </div>
                  <div className="overflow-y-scroll">
                    <img
                      src={thisWork.workImage}
                      alt=""
                      className="w-[90%] aspect-video object-cover mx-auto rounded-md mb-2"
                    />
                    <div>Status : {thisWork.statusWork}</div>
                    <div>Category : {thisWork.category.category}</div>
                    <div>CreateAt : {getDate(thisWork.createdAt)}</div>
                    <div>
                      Work type : {thisWork.isOnsite ? "Onsite" : "Remote"}
                    </div>
                    {thisWork.isOnsite ? (
                      <div>address : {thisWork.addressName}</div>
                    ) : (
                      ""
                    )}
                    <div>Price : {thisWork.price}</div>
                    <div>
                      Start-End Date: {getDate(thisWork.startDate)}
                      {"-"}
                      {thisWork.endDate ? (
                        getDate(thisWork.endDate)
                      ) : (
                        <span className="text-disable">- NotSpecified</span>
                      )}{" "}
                    </div>
                    <div>Description : {thisWork.description}</div>
                  </div>
                  <div className="flex justify-center items-center p-2">
                    <div
                      onClick={() => setIsEditOpen(true)}
                      className="text-lg py-1 px-3 bg-textGrayLight rounded-lg font-semibold cursor-pointer"
                    >
                      Edit
                    </div>
                    {isEditOpen && (
                      <EditWorkModal work={work} setIsOpen={setIsEditOpen} />
                    )}
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
                          <ChallengerItem
                            key={el.id}
                            challenger={el}
                            work={work}
                          />
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
