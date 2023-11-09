import { useState } from "react";

export default function AdminPage() {
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
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
        <div className="cursor-pointer p-2 bg-primaryLight w-44 flex justify-center rounded-xl">
          Waiting Review
        </div>
        <div className="cursor-pointer p-2 bg-primaryLight w-32 flex justify-center rounded-xl">
          Issus
        </div>
      </div>
      <div>1</div>
    </div>
  );
}
