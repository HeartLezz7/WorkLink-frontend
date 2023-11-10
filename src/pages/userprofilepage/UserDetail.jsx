import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

import axios from "../../configs/axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import calculateAge from "../../utils/calculateAge";
import EditProfileModal from "../../components/modal/EditProfileModal";

export default function UserDetail() {
  const [profileData, setProfileData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const { userId } = useParams();
  console.log(profileData);
  useEffect(() => {
    axios
      .get(`/user/getuserprofile/${userId}`)
      .then((res) => {
        let profileAge = calculateAge(res.data.profileData.birthDate);
        console.log(profileAge);
        res.data.profileData.age = profileAge;
        setProfileData(res.data.profileData);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(profileData);
  return (
    <div className="p-5 w-[90%] shadow-lg shadow-primaryDark/70 bg-background/80 rounded-xl h-fit">
      <div className="flex gap-5 items-center">
        <img
          src={profileData?.profileImage}
          className="w-[100px] aspect-square rounded-full object-cover shadow-md"
        />

        <div className="space-y-1">
          <div>
            <p className="text-textNavy truncate text-2xl font-semibold">
              {profileData?.firstName}
            </p>
            <p className="text-textNavy truncate text-2xl font-semibold">
              {profileData?.lastName}
            </p>
          </div>
          <div className="flex items-start gap-1">
            <FaStar color="#FFC911" size={25} />
            <p className="text-xl font-semibold text-textGrayDark">รอข้อมูล</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-3 mt-4">
        {profileData?.authUser?.verifyStatus === "verify" && (
          <p className="text-xl">
            <span className="text-xl font-semibold">Age :</span>{" "}
            {profileData?.age} years
          </p>
        )}

        <p className="text-xl">
          <span className="text-xl font-semibold">Address :</span>{" "}
          {profileData?.address ? profileData?.address : "Not specified"}
        </p>
        <div>
          <p className="text-xl font-semibold">Personal description :</p>
          <p className="">
            {profileData?.personalDescription
              ? profileData?.personalDescription
              : "Not specified"}
          </p>
        </div>
        {userId == user.id ? (
          <div className="w-full flex justify-center">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="bg-textGrayLight text-textGrayDark px-3 py-2 rounded-md font-semibold hover:bg-textGrayDark/50"
            >
              Edit profile
            </button>

            {isOpen && (
              <EditProfileModal
                setIsOpen={setIsOpen}
                profileData={profileData}
                setProfileData={setProfileData}
              />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
