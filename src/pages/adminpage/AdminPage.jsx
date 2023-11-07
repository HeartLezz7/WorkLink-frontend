// import { SearchPrimary } from "../icons";

import WorkCard from "../findworkpage/WorkCard";

export default function AdminPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex p-8 gap-5 ">
        <div className="flex  flex-row  justify-between  items-center h-10  w-64 border rounded ">
          <div className=" p-2 text-primaryDarker">
            <p>Search for...</p>
          </div>
          <div className=" p-2 text-primaryDarker">
            <img
              src="./icons/SearchPrimary.png"
              alt=""
              className=" text-gradiantPrimaryDark"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div className=" text-gradiantPrimaryDark">
            <p>All</p>
          </div>
          <div>
            <p>Waiting reviwe</p>
          </div>
          <div>
            <p>Issue</p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 place-content-center p-5 w-fit mx-auto ">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}
