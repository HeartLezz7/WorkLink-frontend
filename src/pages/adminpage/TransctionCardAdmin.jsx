export default function TransctionCardAdmin({ data }) {
  return (
    <div className="flex flex-col w-full p-3">
      <div className="flex justify-between items-center gap-5 border px-8 py-4 border-textGrayLight rounded-2xl bg-background shadow-lg">
        <div className="flex gap-10 items-center">
          <img
            src="/defaultImage.jpg"
            alt=""
            className=" bg-secondaryDark h-24 rounded-full"
          />
          <div className=" flex flex-col ">
            <div className=" flex ">
              <div className="w-16">Name : </div>
              <div>
                {data.user.firstName} {data.user.lastName}
              </div>
            </div>
            <div className=" flex ">
              <div className="w-16">Email : </div>
              <div>{data.user.authUser[0].email}</div>
            </div>
            <div className=" flex">
              <div className="w-16">Phone : </div>
              <div>{data.user.authUser[0].phoneNumber}</div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex ">
            <div className="w-20">Date : </div>{" "}
            <div>{data.createdAt.split("T")[0]}</div>
          </div>
          <div className=" flex">
            <div className="w-20">Time : </div>{" "}
            <div>{data.createdAt.split("T")[1]}</div>
          </div>

          <div className=" flex">
            <div className="w-20">Amount : </div> <div>{data.amount}</div>
          </div>
        </div>
        <div>
          {data.status === "pending" ? (
            <button className="border  w-40 h-12 rounded  border-gradiantPrimaryLight mx-5 text-primary">
              {data.status}
            </button>
          ) : (
            <button className="border bg-primary w-40 h-12 rounded  border-gradiantPrimaryLight mx-5 ">
              {data.status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
