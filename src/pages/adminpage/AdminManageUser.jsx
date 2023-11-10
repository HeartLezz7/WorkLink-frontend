import axios from "../../configs/axios";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";

export default function AdminManageUser() {
  const [alluser, setAllUser] = useState([]);

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    const res = await axios
      .get("/user")
      .then((res) => setAllUser(res.data.alluser))
      .catch((error) => console.log(error));
    return res;
  };

  console.log(alluser);

  // const [search, setSearch] = useState("");
  // const handleInput = (e) => {
  //   setSearch(e.target.value);
  // };

  // const  handleSubmit = async((e) => {
  //     try {
  //       e.userProfile()
  //     } catch (error) {
  //       console.log(error);
  //     }
  // })

  // let filterData = [...users];

  // console.log(filterData, "clone");

  // if (search) {
  //   filterData = users.filter((el) => {
  //     if (el.Name.toLowerCase().includes(search.toLowerCase())) {
  //       return true;
  //     }
  //     if (el.Email.toLowerCase().includes(search.toLowerCase())) {
  //       return true;
  //     }
  //     if (el.Phone.toLowerCase().includes(search.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  return (
    <div className="flex flex-col w-full ">
      <div className="flex gap-4 items-center justify-start p-6">
        <div className="flex">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 text-primaryDarker rounded-xl w-72 px-5"
            // onChange={handleInput}
          />
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-20 flex justify-center rounded-xl">
          All
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Pending
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Banned
        </div>
      </div>
      <div className="flex flex-col">
        {alluser.map((el) => (
          <UserCard key={el.id} userObj={el} />
        ))}
      </div>
    </div>
  );
}
