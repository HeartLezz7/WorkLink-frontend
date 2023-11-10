// import { SearchPrimary } from "../icons";

import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    axios.get("/").then((res) => res.json().then((data) => console.log(data)));
  }, []);

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

      <div></div>
    </div>
  );
}
