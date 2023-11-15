import { useState, useRef } from "react";
import Loading from "../Loading/Loading";
import useAuth from "../../hooks/useAuth";
import axios from "../../configs/axios";
import { LuImagePlus } from "react-icons/lu";
import toast from "react-hot-toast";

export default function EditProfileModal({
  setIsOpen,
  profileData,
  setProfileData,
}) {
  const [loading, setLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { user, setUser } = useAuth();
  const fileEl = useRef(null);
  const [input, setInput] = useState({
    profileImage: user.profileImage,
    address: user.address || "",
    personalDescription: user.personalDescription || "",
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      //   const { value, error } = schema.validate(input, {
      //     abortEarly: false,
      //   });
      //   if (error) {
      //     return toast.error("กรุณาใส่ข้อมูลให้ถูกต้องและครบถ้วน");
      //   }
      setLoading(true);
      for (let key in input) {
        if (input[key]) {
          formData.append(`${key}`, input[key]);
        }
      }
      console.log(formData);
      const res = await axios.patch("user/editprofile", formData);
      setProfileData({
        ...profileData,
        address: res.data.updateProfile.address,
        profileImage: res.data.updateProfile.profileImage,
        personalDescription: res.data.updateProfile.personalDescription,
      });
      setUser(res.data.updateProfile);
      toast.success("Successfully !");
      setIsOpen(false);
    } catch (err) {
      toast.error("Error");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[30]"></div>
      <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
        <div className="w-[450px]   ">
          <form
            className=" overflow-hidden px-2 pt-2 pb-5 rounded-3xl bg-background relative"
            onSubmit={handleSubmitForm}
          >
            {loading && <Loading />}
            <div
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3"
            >
              <img
                src="/icons/closeIcon.svg"
                className="w-[30px] aspect-square object-cover place-content-center hover:bg-textGrayLight bg-textGrayLight/50 rounded-full cursor-pointer"
              />
            </div>
            <div className="text-textNavy text-3xl font-semibold w-full text-center py-2">
              Edit personal profile
            </div>
            <main className="px-[30px] py-[10px] flex flex-col items-center gap-[15px]">
              <div
                onMouseEnter={() => {
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                }}
                onClick={() => fileEl.current.click()}
                className="w-[130px] aspect-square rounded-full overflow-hidden border-2 border-textGrayDark cursor-pointer content-center relative whiteDivShadow"
              >
                {isHover && (
                  <div className="absolute w-full h-full">
                    <div className="w-full h-full bg-textGrayDark/60 flex justify-center items-center">
                      <div className="px-2 py-1 border rounded-md text-textWhite border-textWhite">
                        edit
                      </div>
                    </div>
                  </div>
                )}
                {input.profileImage instanceof File ? (
                  <img
                    src={URL.createObjectURL(input.profileImage)}
                    className="object-cover w-full h-full"
                  />
                ) : input.profileImage ? (
                  <img
                    src={input.profileImage}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <LuImagePlus color="#3CB97F" size={40} />
                    <div className="text-center text-sm whitespace-wrap">
                      ProfileImage
                    </div>
                  </div>
                )}
              </div>

              <input
                type="file"
                className="hidden"
                name="profileImage"
                ref={fileEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setInput({
                      ...input,
                      [e.target.name]: e.target.files[0],
                    });
                  }
                }}
              />

              <input
                type="text"
                placeholder="Address"
                name="address"
                value={input.address}
                onChange={handleChangeInput}
                className=" border-2 p-2 border-primary w-full outline-none rounded-md"
              />

              <textarea
                name="personalDescription"
                value={input.personalDescription}
                onChange={handleChangeInput}
                className="block w-full outline-none resize-none border-2 border-primary p-2 rounded-md"
                rows="4"
                placeholder="Personal Description"
              />
            </main>
            <div className="flex justify-center">
              <button className="text-whitetext font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center">
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
