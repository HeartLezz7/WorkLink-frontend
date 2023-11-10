export default function AdminWorkCard() {
  return (
    <div className="p-3 w-full">
      <div className="px-10 py-4 flex items-center shadow-lg justify-between bg-background rounded-2xl">
        <div className="p-2 flex flex-col gap-1">
          <div className="flex">
            <p className="w-28">Tittle :</p> <p>kdlsfjdsklfjsd</p>
          </div>
          <div className="flex">
            <p className="w-28">Work :</p> <p>kdlsfjdsklfjsd</p>
          </div>
          <div className="flex">
            <p className="w-28">Detial :</p> <p>kdlsfjdsklfjsd</p>
          </div>
          <div className="flex">
            <p className="w-28">Price :</p> <p>kdlsfjdsklfjsd</p>
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
