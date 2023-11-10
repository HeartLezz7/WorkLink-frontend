export default function AdminWorkCard({ userObj }) {
  return (
    <div className="p-3 w-full">
      <div className="px-10 py-4 flex items-center shadow-lg justify-between bg-background rounded-2xl">
        <div className="p-2 flex flex-col gap-1">
          <div className="flex">
            <p className="w-28">Tittle :</p> <p>{userObj.title}</p>
          </div>
          <div className="flex overflow-scroll h-32">
            <p className="w-28 ">Work:</p> <p>{userObj.description}</p>
          </div>
          <div className="flex ">
            <p className="w-28">Status Work :</p> <p>{userObj.statusWork}</p>
          </div>
          <div className="flex">
            <p className="w-28">Price :</p> <p>{userObj.price}</p>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="bg-primaryDark p-3 rounded-xl text-backgroundWhiteBlue">
            Accept
          </button>
          <button className="bg-secondaryLight p-3 rounded-xl">Reject</button>
        </div>
      </div>
    </div>
  );
}
