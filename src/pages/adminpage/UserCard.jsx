import { useNavigate } from "react-router-dom";
import VerifyModal from "../../components/modal/AdminModal/VerifyModal";
import { useState } from "react";
import axios from "../../configs/axios";

export default function UserCard({ userObj }) {
  const [isOpen, setIsOpen] = useState(false);

  const banuser = async () => {
    try {
      await axios.patch(`/user/banuser/${userObj.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const unbanuser = async () => {
    try {
      await axios.patch(`/user/unbanuser/${userObj.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className=" p-3">
      <div className="flex justify-between gap-20 h-32 border p-4 border-textGrayLight rounded-2xl shadow-lg bg-background">
        <div className=" flex gap-10 items-center ">
          <img
            src={userObj.user.profileImage}
            alt=""
            className="rounded-full h-24 cursor-pointer aspect-square"
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
          {userObj.verifyStatus === "pending" ? (
            <button
              className="  w-24 h-12 rounded-xl  bg-yellow border-spacing-2 hover:bg-[#EDF241] hover:text-black"
              onClick={() => setIsOpen(true)}
            >
              {userObj.verifyStatus}
            </button>
          ) : userObj.verifyStatus === "verify" ? (
            <button
              className="  w-24 h-12 rounded-xl  bg-primary border-spacing-2 hover:bg-gradiantPrimaryDark hover:text-textWhite"
              onClick={() => setIsOpen(true)}
            >
              {userObj.verifyStatus}
            </button>
          ) : (
            <button
              className="  w-24 h-12 rounded-xl  bg-textGrayLight border-spacing-2 hover:bg-textGrayDark hover:text-textWhite"
              onClick={() => setIsOpen(true)}
            >
              {userObj.verifyStatus}
            </button>
          )}

          {userObj.isBanned === false ? (
            <button
              className=" w-24 h-12 rounded-xl  bg-secondaryLight border-secondary hover:bg-secondaryDark hover:text-textWhite"
              onClick={() => banuser()}
            >
              Permit
            </button>
          ) : (
            <button
              className="border  w-24 h-12 rounded-xl  bg-disable border-spacing-2"
              onClick={() => unbanuser()}
            >
              Ban
            </button>
          )}
        </div>
      </div>
      <div>
        <VerifyModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          userObj={userObj}
        />
      </div>
    </div>
  );
}
