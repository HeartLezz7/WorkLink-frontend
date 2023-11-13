import { useEffect } from "react";
import UserCard from "./UserCard";
import { useState } from "react";
import axios from "axios";

export default function AdminManageUser() {
  console.log("first");
  const users = [
    {
      id: 1,
      Name: "Mike Pirom",
      Email: "mikepirom@gmail.com",
      Phone: "1234567890",
    },
    {
      id: 2,
      Name: "John Doe",
      Email: "johndoe@gmail.com",
      Phone: "1234567891",
    },
    {
      id: 3,
      Name: "Jack Pancake",
      Email: "jack@gmail.com",
      Phone: "1234567892",
    },
  ];

  const [search, setSearch] = useState("");
  const [dataType, setDataType] = useState([]);
  useEffect(() => {
    axios
      .get("/admin/getdataType")
      .then((res) => {
        setDataType(res.data.dataType)
      })
      .catch((error) =>
        console.log(error));
  }, [])
  console.log(dataType, "*********");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // const  handleSubmit = async((e) => {
  //     try {
  //       e.userProfile()
  //     } catch (error) {
  //       console.log(error);
  //     }
  // })

  let filterData = [...users];

  // console.log(filterData, "clone");

  if (search) {
    filterData = users.filter((el) => {
      if (el.Name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (el.Email.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (el.Phone.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  }
  return (
    <div className="flex flex-col w-full ">
      <div className="flex p-8  gap-20 ">
        <form className="flex  flex-row  justify-between  items-center h-10  w-64 border rounded-md ">
          <input
            placeholder="search for..."
            className=" p-2 text-primaryDarker"
            onChange={handleInput}
            value={search}
          />

          <input className=" p-2 text-primaryDarker" />
          {/* <img
            src="./icons/SearchPrimary.png"
            alt=""
            className=" text-gradiantPrimaryDark"
          /> */}
        </form>
        <div className="flex gap-5 items-center justify-center ">
          <div className="">
            <p>All</p>
          </div>
          <div className=" text-gradiantPrimaryDark">
            <p>Banned</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {filterData.map((el) => (
          <UserCard key={el.id} data={el} />
        ))}
        {/* <UserCard />
        <UserCard />
        <UserCard />
        <UserCard /> */}
      </div>
    </div>
  );
}
