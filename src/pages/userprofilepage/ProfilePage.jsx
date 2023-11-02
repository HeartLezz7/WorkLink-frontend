import { RatingStar } from "../../components/RatingStar";
import ShowCase from "./ShowCase";
import UserDetail from "./UserDetail";
import { FaStar } from "react-icons/fa";
export default function UserProfilePage() {
  return (
    <div className="">
      <div className="absolute w-full h-[430px] bg-primaryLight z-[-10]"></div>
      <div className="max-w-[1440px] mx-auto p-10">
        <div className="flex gap-6 pt-[30px]">
          <div className=" flex-[3] flex justify-center  max-w-[400px]">
            <UserDetail />
          </div>
          <div className=" flex-[5] flex flex-col items-start gap-2 p-5 rounded-2xl z-[10] max-w-[900px]">
            <ShowCase />
            <div className="bg-backgroundWhiteBlue w-full rounded-md flex flex-col items-center py-3">
              <div className="w-[100%] place-items-center flex gap-3 my-5 px-5">
                <div className="bg-textGrayDark h-[2px] w-full"></div>
                <h5 className="w-fit mx-auto bg-backgroundWhiteBlue">Review</h5>
                <div className="bg-textGrayDark h-[2px] w-full"></div>
              </div>
              <div className="sm:w-[500px] w-[300px] bg-background/70 p-5 rounded-xl flex flex-col gap-2">
                <div className="flex gap-5 items-center">
                  <div className="rounded-full overflow-hidden w-[50px] shadow-md">
                    <img
                      src="/defaultImage.jpg"
                      className="w-[full] aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-textNavy truncate text-lg font-semibold">
                      reviewBy username lastname
                    </p>
                  </div>
                </div>
                <div className="relative ">
                  <div className="absolute  h-full w-full z-10"></div>
                  <div className="flex justify-center">
                    <RatingStar initialValue={4} />
                  </div>
                </div>
                <div>
                  <p className="w-full">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio officia, ab eaque quo similique facilis voluptates
                    exercitationem totam? Assumenda voluptatem ratione sequi
                    pariatur et adipisci consectetur iure reprehenderit!
                    Dignissimos, ut.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
