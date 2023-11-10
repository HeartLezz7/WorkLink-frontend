import { useState } from "react";
import TransctionCardAdmin from "./TransctionCardAdmin";

export default function AdminManageTransction() {
  const users = [
    {
      id: 1,
      Name: "Mike Pirom",
      Email: "mikepirom@gmail.com",
      Phone: "1234567890",
      Date: "31 Oct 2023",
      Time: "15:35:08",
      Type: "WITHDRAW",
      Amount: "2,000 THB",
      status: "PENDING",
    },
    {
      id: 2,
      Name: "John Doe",
      Email: "johndoe@gmail.com",
      Phone: "1234567891",
      Date: "31 Oct 2023",
      Time: "15:35:08",
      Type: "WITHDRAW",
      Amount: "2,000 THB",
      status: "PENDING",
    },
    {
      id: 3,
      Name: "Jack Pancake",
      Email: "jack@gmail.com",
      Phone: "1234567892",
      Date: "31 Oct 2023",
      Time: "15:35:08",
      Type: "DEPOSIT",
      Amount: "1,990 THB",
      status: "REJECT",
    },
  ];

  const [search, setSearch] = useState("");
  // const [filterStatus, setFilterStatus] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  let filterUsers = [...users];

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
      <div className="flex gap-4 items-center justify-start p-6">
        <div className="flex">
          <input
            type="text"
            placeholder="search for..."
            className="p-2 text-primaryDarker rounded-xl w-72 px-5"
            onChange={handleInput}
          />
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-20 flex justify-center rounded-xl">
          All
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Waiting
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Success
        </div>
      </div>
      <div>
        {filterUsers.map((el) => (
          <TransctionCardAdmin key={el.id} data={el} />
        ))}

        {/* <TransctionCardAdmin /> */}
      </div>
    </div>
  );
}
