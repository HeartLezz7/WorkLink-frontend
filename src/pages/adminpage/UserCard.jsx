import { useNavigate } from "react-router-dom";

export default function UserCard({ userObj }) {
  console.log("userObj", userObj);
  const navigate = useNavigate();
  return (
    <div className=" p-3">
      <div className="flex justify-between gap-20 h-32 border p-4 border-textGrayLight rounded-2xl shadow-lg bg-background">
        <div className=" flex gap-10 items-center ">
          <img
            src={userObj.user.profileImage}
            alt=""
            className="rounded-full h-24 cursor-pointer"
            onClick={() => navigate(`/userprofile/${userObj.id}`)}
          />
          <div>
            <div className=" flex">
              <div className="w-32">Email : </div> <div>{userObj.email}</div>
            </div>
            <div className=" flex ">
              <div className="w-32">Type : </div> <div>{userObj.userType}</div>
            </div>
            <div className=" flex">
              <div className="w-32">PhoneNumber : </div>{" "}
              <div>{userObj.phoneNumber}</div>
            </div>
          </div>
        </div>

        <div className=" flex items-center gap-3">
          <button className="border  w-24 h-12 rounded-xl  bg-primaryLight border-spacing-2">
            {userObj.verifyStatus}
          </button>
          {userObj.isBanned === false ? (
            <button className="border  w-24 h-12 rounded-xl  bg-secondaryLight border-secondary">
              Permit
            </button>
          ) : (
            <button className="border  w-24 h-12 rounded-xl  bg-disable border-spacing-2">
              Ban
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
