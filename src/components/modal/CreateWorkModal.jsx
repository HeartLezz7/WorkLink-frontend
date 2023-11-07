import { useState, useRef } from "react";
import Loading from "../Loading/Loading";
import useAuth from "../../hooks/useAuth";
import axios from "../../configs/axios";
import { LuImagePlus } from "react-icons/lu";

export default function CreateWorkModal({ setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [defaultImage, setDedaultImage] = useState(null);
  const { user, setUser } = useAuth();
  const fileEl = useRef(null);
  const [input, setInput] = useState({
    title: "",
    catagoryId: "",
    workImage: "",
    description: "",
    price: "",
    addressLat: "",
    addressLong: "",
    startDate: "",
    endDate: "",
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
      //   console.log(formData);
      const res = await axios.patch("work/creatework", formData);

      console.log(res);
      setIsOpen(false);
    } catch (err) {
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
            <div className="text-textNavy text-2xl font-semibold w-full text-center py-2">
              Create delegated work
            </div>
            <main className="px-[30px] py-[10px] flex flex-col items-center gap-2">
              <div
                onMouseEnter={() => {
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                }}
                onClick={() => fileEl.current.click()}
                className="w-[250px] aspect-video rounded-md overflow-hidden border-2 border-textGrayDark cursor-pointer relative whiteDivShadow"
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
                {/* Continue this */}
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
                      Add your work image
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
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={input.title}
                  onChange={handleChangeInput}
                  className="w-[60%] border p-1 border-primary outline-none rounded-md text-sm text-textNavy"
                />
                <select
                  name="categoryId"
                  value={input.catagoryId}
                  onChange={handleChangeInput}
                  className="w-[40%] flex-1 border border-primary text-sm outline-none p-1 rounded-md truncate"
                >
                  <option value="" disabled className="text-sm text-disable">
                    Select category
                  </option>
                  <option value="1" className="text-sm">
                    Computer & technology
                  </option>
                </select>
              </div>
              <div className="flex gap-2 w-full">
                <div className="w-full">
                  <label className="text-textNavy block text-sm">
                    StartDate
                  </label>
                  <input
                    type="date"
                    className="border border-primary text-sm p-1 rounded-md w-full"
                  />
                </div>
                <div className="w-full">
                  <label className="text-textNavy block text-sm">EndDate</label>
                  <input
                    type="date"
                    className="border border-primary text-sm p-1 rounded-md w-full"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="AddressLat"
                  name="addressLat"
                  value={input.addressLat}
                  onChange={handleChangeInput}
                  className=" border p-1 border-primary w-full outline-none rounded-md text-sm text-textNavy"
                />
                <input
                  type="text"
                  placeholder="AddressLong"
                  name="addressLong"
                  value={input.addressLong}
                  onChange={handleChangeInput}
                  className=" border p-1 border-primary w-full outline-none rounded-md text-sm text-textNavy"
                />
              </div>

              <textarea
                name="personalDescription"
                value={input.personalDescription}
                onChange={handleChangeInput}
                className="block w-full outline-none resize-none border border-primary p-1 rounded-md text-sm text-textNavy"
                rows="4"
                placeholder="Work Description"
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
