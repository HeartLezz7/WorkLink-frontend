import { useState } from "react";
import useWork from "../../hooks/useWork";
import SearchContainer from "./SearchContainer";
import TypeTextAnimation from "./TypeTextAnimation";
import WorkCard from "./WorkCard";
import { useEffect } from "react";

export default function FindWorkPage() {
  const [findingWork, setFindingWork] = useState([]);
  const { allWorks } = useWork();
  useEffect(() => {
    if (allWorks.length > 0) {
      const works = allWorks.filter((work) => work.statusWork === "finding");
      setFindingWork(works);
    }
  }, [allWorks]);
  console.log(findingWork);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute bg-primary w-[900px] rounded-full aspect-square z-[-10] place-context-center left-[-450px] top-[-600px]">
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <div className="bg-primaryDark rounded-full w-[700px] aspect-square z-[-10] "></div>
        </div>
      </div>
      <div className="absolute bg-secondaryLight w-[400px] rounded-full aspect-square z-[-8] place-context-center right-[-50px] top-[80px]">
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <div className="bg-secondary rounded-full w-[300px] aspect-square z-[-10]"></div>
        </div>
      </div>
      <div className="absolute w-full h-[430px] bg-primaryLight z-[-20]"></div>
      <div className="absolute w-full h-[430px] bg-backgroundWhiteBlue top-[430px] z-[-5]"></div>
      <div className="flex flex-col items-center max-w-[1440px] mx-auto ">
        <div className="w-full flex flex-col items-center py-[80px]">
          <h4 className="text-textNavy">Welcome to Worklink</h4>
          <TypeTextAnimation />
        </div>
        <SearchContainer />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 place-content-center p-5 w-fit mx-auto">
          {findingWork.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              workImage={work.workImage}
              title={work.title}
              createdAt={work.createdAt}
              startDate={work.startDate}
              endDate={work.endDate}
              price={work.price}
              statusWork={work.statusWork}
              description={work.description}
              ownerId={work.ownerId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
