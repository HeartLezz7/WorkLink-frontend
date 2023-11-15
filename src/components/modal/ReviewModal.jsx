import { useState, useRef } from "react";
import Loading from "../Loading/Loading";
import useAuth from "../../hooks/useAuth";
import axios from "../../configs/axios";
import { LuImagePlus } from "react-icons/lu";
import { RatingStar } from "../RatingStar";

export default function ReviewModal({ setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);
  const [detail, setDetail] = useState("");
  const [rating, setRating] = useState(0);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      //   const { value, error } = schema.validate(input, {
      //     abortEarly: false,
      //   });
      //   if (error) {
      //     return toast.error("กรุณาใส่ข้อมูลให้ถูกต้องและครบถ้วน");
      //   }
      setLoading(true);
      const data = { rating, detail };
      console.log(data);

      // const res = await axios.patch("user/editprofile", formData);

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
            <div className="text-textNavy text-3xl font-semibold w-full text-center py-2">
              Review worker
            </div>
            <main className="px-[30px] py-[10px] flex flex-col items-center gap-[15px]">
              <RatingStar initialValue={rating} setRating={setRating} />
              <textarea
                name="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                className="block w-full outline-none resize-none border-2 border-primary p-2 rounded-md"
                rows="4"
                placeholder="Personal Description"
              />
            </main>
            <div className="flex justify-center">
              <button className="text-whitetext font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center">
                Confirm Success
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
