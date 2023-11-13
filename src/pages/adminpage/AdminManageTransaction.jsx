import { useState } from "react";
import TransctionCardAdmin from "./TransactionCardAdmin";

export default function AdminManageTransaction() {
  const users = [
    {
      id: 1,
      Name: "Mike Pirom",
      Email: "mikepirom@gmail.com",
      Phone: "1234567890",
      Date: "31 Oct 2023",
      Time: "15:35:08",
      Type: "withdraw",
      Amount: 2000,
      status: "pending",
    },
    {
      id: 2,
      Name: "John Doe",
      Email: "johndoe@gmail.com",
      Phone: "1234567891",
      Date: "31 Oct 2023",
      Time: "15:35:08",
      Type: "withdraw",
      Amount: 2000,
      status: "pending",
    },
    {
      id: 3,
      Name: "Jack Pancake",
      Email: "jack@gmail.com",
      Phone: "1234567892",
      Date: "31 Oct 2023",
      Time: "15:35:08",
      Type: "deposit",
      Amount: 2000,
      status: "reject",
    },
  ];

  const [search, setSearch] = useState("");
  // const [filterStatus, setFilterStatus] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  let filterUsers = [...users];
  console.log(filterUsers);

  if (search) {
    filterUsers = users.filter((el) => {
      if (el.Name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (el.Email.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (el.Phone.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      // if (
      //   (search.toLowerCase() === "reject" ||
      //     search.toLowerCase() === "pending") &&
      //   el.status.toLowerCase() === search.toLowerCase()
      // ) {
      //   return true;
      // }
      if (el.status.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }

      return false;
    });
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex p-8 gap-5 ">
        <div className="flex  flex-row  justify-between  items-center h-10  w-64 border rounded ">
          <input
            placeholder="search for..."
            className=" p-2 text-primaryDarker"
            onChange={handleInput}
          >
            {/* <p>Search for...</p> */}
          </input>
          <div className=" p-2 text-primaryDarker">
            <img
              src="./icons/SearchPrimary.png"
              alt=""
              className=" text-gradiantPrimaryDark"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center ">
          <div className=" text-gradiantPrimaryDark">
            <p>All</p>
          </div>
          <button>Waiting</button>
          <div>
            <p>Success</p>
          </div>
        </div>
      </div>
      <div>
        {filterUsers.map((el) => {
          return <TransctionCardAdmin key={el.id} data={el} />;
        })}

        {/* <TransctionCardAdmin /> */}
      </div>
    </div>
  );
}
