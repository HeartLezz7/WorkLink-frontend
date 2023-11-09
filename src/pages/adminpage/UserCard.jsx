import { useNavigate } from "react-router-dom";

export default function UserCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className=" p-3">
      <div className="flex justify-between gap-20 h-32 border p-4 border-textGrayLight rounded-2xl shadow-lg">
        <div className=" flex gap-10 items-center ">
          <img src="./defaultImage.jpg" alt="" className="rounded-full h-24" />
          <div>
            <div className=" flex ">
              <div className="w-32">Name : </div> <div>{data.Name}</div>
            </div>
            <div className=" flex">
              <div className="w-32">Email : </div> <div>{data.Email}</div>
            </div>
            <div className=" flex">
              <div className="w-32">Phone : </div> <div>{data.Phone}</div>
            </div>
          </div>
        </div>

        <div className=" gap-5 ">
          <button
            // onChange={handlInput}
            className=" border  w-40 h-12 rounded  border-gradiantPrimaryLight mx-5"
            onClick={() => navigate(`/auth/profile/${data.id}`)}
          >
            Profile
          </button>
          <button className="border  w-40 h-12 rounded  bg-secondaryLight border-secondary">
            Ban
          </button>
        </div>
      </div>
    </div>
  );
}
