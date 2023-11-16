import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import ShowCase from "./ShowCase";
import UserDetail from "./UserDetail";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../configs/axios";
import calculateAge from "../../utils/calculateAge";
import Loading from "../../components/Loading/Loading";
import { FaChessKing } from "react-icons/fa";

export default function UserProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/user/getuserprofile/${userId}`)
      .then((res) => {
        let profileAge = calculateAge(res.data.profileData.birthDate);
        console.log(profileAge);
        res.data.profileData.age = profileAge;
        setProfileData(res.data.profileData);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`/user/userprofilereview/${userId}`)
      .then((res) => {
        setReviews(res.data.userReviews);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  console.log(profileData);

  return (
    <div className="">
      {isLoading && <Loading />}
      <div className="absolute w-full h-[340px] bg-primaryLight z-[-10]"></div>
      <div className="max-w-[1440px] mx-auto p-10">
        <div className="flex gap-4 pt-[30px] flex-col md:flex-row">
          <div className="flex flex-shrink-0 justify-center mx-auto   w-[400px]">
            <UserDetail
              profileData={profileData}
              setProfileData={setProfileData}
            />
          </div>
          <div className=" flex-[5] flex flex-col items-start gap-2 p-5 rounded-2xl z-[10] min-w-[350px]">
            <ShowCase profileData={profileData} />
            <div className=" w-full rounded-md flex flex-col items-center py-3">
              <div className="w-[90%] place-items-center flex gap-3 my-5 px-5">
                <div className="bg-textGrayDark h-[2px] w-full"></div>
                <h5 className="w-fit mx-auto text-textNavy">Review</h5>
                <div className="bg-textGrayDark h-[2px] w-full"></div>
              </div>
              <div className="flex flex-col gap-5 w-full">
                {reviews?.length == 0 ? (
                  <div className="w-full text-center text-xl font-bold">
                    No history work
                  </div>
                ) : (
                  reviews?.map((review) => <ReviewCard data={review} />)
                )}
                {/* <ReviewCard /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
