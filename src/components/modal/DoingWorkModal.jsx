import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Loading from "../Loading/Loading";
import getDate from "../../utils/getDate";

export default function DoingWorkModal({ work }) {
  const [isLoading, setIsLoading] = useState();
  //   const [thisWork, setThisWork] = useState({});
  //   useEffect(() => {
  //     axios
  //       .get(`/work/getdelegatedworkbyid/${work.id}`)
  //       .then((res) => {
  //         setThisWork(res.data.work);
  //       })
  //       .catch((err) => console.log(err))
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }, []);
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
                    {work.title}
                  </div>
                  <div className="overflow-y-scroll">
                    <img
                      src={work.workImage}
                      alt=""
                      className="w-[90%] aspect-video object-cover mx-auto rounded-md mb-2"
                    />
                    <div>Status : {work.statusWork}</div>
                    {/* <div>Category : {work.category.category}</div> */}
                    <div>CreateAt : {getDate(work.createdAt)}</div>
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
                </div>
              </main>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
