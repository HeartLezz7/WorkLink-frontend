import { useEffect } from "react";
import UserCard from "./UserCard";
import axios from "../../configs/axios";
import { useState } from "react";

export default function AdminManageUser() {
  const [alluser, setAllUser] = useState([]);
  const [notiVerify, setNotiVerify] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    getuser();
  }, []);

  useEffect(() => {
    notiverify();
  }, []);

  const handleInput = (e) => {
    setSearchUser(e.target.value);
  };
  let filterUser = [...alluser];
  if (searchUser) {
    filterUser = alluser.filter((el) => {
      if (el.email.toLowerCase().includes(searchUser.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  const getuser = async () => {
    const res = await axios
      .get("/user")
      .then((res) => setAllUser(res.data.alluser))
      .catch((error) => console.log(error));
    return res;
  };

  const notiverify = async () => {
    const noti = await axios
      .get("/user/verifyuser")
      .then((res) => setNotiVerify(res.data.varify))
      .catch((error) => console.log(error));
    return noti;
  };

  const getverify = async () => {
    const verify = await axios
      .get("/user/verifyuser")
      .then((res) => setAllUser(res.data.varify))
      .catch((error) => console.log(error));
    return verify;
  };

  const getbanned = async () => {
    const banned = await axios
      .get("/user/banneduser")
      .then((res) => setAllUser(res.data.isBanned))
      .catch((error) => console.log(error));
    return banned;
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="flex gap-4 items-center justify-start p-6 pb-2">
        <div className="flex">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 text-primaryDarker rounded-xl w-72 px-5"
            onChange={handleInput}
          />
        </div>
        <div
          className="cursor-pointer p-2 bg-primaryLight w-20 flex justify-center rounded-xl hover:bg-primaryDarker hover:text-textWhite"
          onClick={() => getuser()}
        >
          All
        </div>
        <div
          className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl hover:bg-primaryDarker hover:text-textWhite"
          onClick={() => getverify()}
        >
          Pending
        </div>
        <div
          className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl hover:bg-primaryDarker hover:text-textWhite"
          onClick={() => getbanned()}
        >
          Banned
        </div>
        {notiVerify.length === 0 ? (
          ""
        ) : (
          <p className=" relative flex justify-center items-center bg-secondary rounded-full font-serif right-[178px] bottom-3.5 w-7 h-7 text-textWhite">
            {notiVerify.length}
          </p>
        )}
      </div>
      <p className="text-xs px-5 w-full flex justify-end">
        count : {alluser.length}
      </p>
      <div className="flex flex-col">
        {filterUser.map((el) => (
          <UserCard key={el.id} userObj={el} />
        ))}
      </div>
    </div>
  );
}
