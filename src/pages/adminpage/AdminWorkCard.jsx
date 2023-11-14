import axios from "../../configs/axios";

export default function AdminWorkCard({ workObj }) {
  const adminReview = async () => {
    try {
      await axios.patch(`/work/review/${workObj.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const rejectWrok = async () => {
    try {
      await axios.patch(`/work/reject/${workObj.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 w-full">
      <div className="px-10 py-4 flex items-center shadow-lg justify-between bg-background rounded-2xl">
        <div className="p-2 flex flex-col gap-2 w-full">
          <div className="flex">
            <p className="w-28">Tittle :</p>
            <p className="font-bold">{workObj.title}</p>
          </div>
          <div className="flex ">
            <p className="w-32 ">Work :</p>
            <p className="h-32 w-full overflow-auto hover:overflow-y-scroll">
              {workObj.description}
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              {workObj.statusWork === "adminReview" ? (
                <div className="flex ">
                  <p className="w-28">Status Work :</p>
                  <p className="font-bold">{workObj.statusWork}</p>
                </div>
              ) : (
                ""
              )}
              <div className="flex">
                <p className="w-28">Price :</p>{" "}
                <p className="font-bold">{workObj.price}</p>
              </div>
            </div>
            {workObj.statusWork === "adminReview" ? (
              <div className="flex gap-5 items-end">
                <button
                  className="bg-primaryDark px-10 h-10 rounded-xl text-backgroundWhiteBlue"
                  onClick={() => adminReview()}
                >
                  Accept
                </button>
                <button
                  className="bg-secondaryLight px-10 h-10 rounded-xl"
                  onClick={() => rejectWrok()}
                >
                  Reject
                </button>
              </div>
            ) : (
              <div className="flex gap-5 items-end ">
                Status work :{" "}
                <p className="font-bold text-xl">{workObj.statusWork}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
