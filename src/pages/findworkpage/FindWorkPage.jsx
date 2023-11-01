import TypeTextAnimation from "./TypeTextAnimation";
import WorkCard from "./WorkCard";

export default function FindWorkPage() {
  return (
    <>
      <div className="absolute w-full h-[400px] bg-gradient-to-b from-primary to-mybackground z-[-5]"></div>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col items-center py-[80px]">
          <h4 className="text-whitetext">Welcome to Worklink</h4>
          <TypeTextAnimation />
        </div>
        <div className="relative w-[60%]">
          <div className="w-[30px] absolute top-2 left-2">
            <img src="/icons/search.svg" alt="" className="h-full" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="rounded-full pl-10 py-2 w-full text-2xl shadow-md shadow-primaryDark/50 outline-none text-primary focus:ring placeholder:text-primary"
          />
        </div>
        <div className=" flex items-end justify-start w-[80%] mt-10 gap-5">
          <p className="text-primary text-3xl font-bold">OrderBy :</p>
          <p className="text-2xl cursor-pointer px-2 text-primary h-fit">All</p>
          <p className="text-2xl cursor-pointer px-2 h-fit">Near me</p>
          <p className="text-2xl cursor-pointer px-2  h-fit">Coming Soon</p>
        </div>
        <div className="grid grid-cols-3 gap-10 place-content-center p-5 w-fit mx-auto">
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
