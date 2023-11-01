import SearchContainer from "./SearchContainer";
import TypeTextAnimation from "./TypeTextAnimation";
import WorkCard from "./WorkCard";

export default function FindWorkPage() {
  return (
    <>
      <div className="absolute w-full h-[430px] bg-primaryLight z-[-5]"></div>
      <div className="flex flex-col items-center max-w-[1440px] mx-auto">
        <div className="w-full flex flex-col items-center py-[80px]">
          <h4 className="text-textNavy">Welcome to Worklink</h4>
          <TypeTextAnimation />
        </div>
        <SearchContainer />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 place-content-center p-5 w-fit mx-auto">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    </>
  );
}
