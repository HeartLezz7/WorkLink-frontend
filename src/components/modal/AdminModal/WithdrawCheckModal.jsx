import { IoMdClose } from "react-icons/io";
import axios from "../../../configs/axios";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import { LuImagePlus } from "react-icons/lu";
import InputErrorMessage from "../../InputErroMessage";
import { useRef } from "react";

export default function WithdrawCheckModal({ setIsOpen, open, data }) {
  const [loading, setLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fileEl = useRef(null);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    slipImage: "",
    comment: "",
  });

  const walletupdate = { wallet: +data.user.wallet - +data.amount };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const adminConfirm = async () => {
    try {
      setLoading(true);
      const formData = new FormData();

      for (let key in input) {
        if (input[key]) {
          formData.append(`${key}`, input[key]);
        }
      }
      await axios.patch(`/transaction/withdraw/${data.id}`, formData);
      await axios.patch(
        `/transaction/walletupdate/${data.user.id}`,
        walletupdate
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const adminReject = async () => {
    try {
      setLoading(true);
      await axios.patch(`/transaction/reject/${data.id}`, input);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await adminConfirm(input);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/70 z-[30]"></div>
          <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
            <div className="w-[650px]   ">
              <form
                className=" overflow-hidden px-2 pt-2 pb-5 rounded-3xl bg-background relative"
                onSubmit={handleSubmitForm}
              >
                {loading && <Loading />}
                <div
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-0  w-[40px] h-[40px] bg-textGrayDark flex items-center justify-center rounded-bl-2xl cursor-pointer"
                >
                  <IoMdClose size={25} color="fff" />
                </div>
                <div className="text-textNavy text-2xl font-semibold w-full text-center py-2">
                  {data.type}
                </div>

                <main className="px-[30px] py-[10px] flex flex-col items-center gap-[15px]">
                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div
                        onMouseEnter={() => {
                          setIsHover(true);
                        }}
                        onMouseLeave={() => {
                          setIsHover(false);
                        }}
                        onClick={() => fileEl.current.click()}
                        className="w-[250px] h-[300px] rounded-md overflow-hidden border-2 border-textGrayDark cursor-pointer content-center relative whiteDivShadow"
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
                        {input.slipImage instanceof File ? (
                          <img
                            src={URL.createObjectURL(input.slipImage)}
                            className="object-cover w-full h-full"
                          />
                        ) : input.slipImage ? (
                          <img
                            src={input.slipImage}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                            <LuImagePlus color="#3CB97F" size={40} />
                            <div className="text-center text-sm whitespace-wrap">
                              <img src={data.slipImage} alt="" />
                            </div>
                          </div>
                        )}
                      </div>
                      {error.slipImage && (
                        <InputErrorMessage message={error.slipImage} />
                      )}
                    </div>

                    <input
                      type="file"
                      className="hidden"
                      name="slipImage"
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
                  </div>
                  <div className="w-full flex flex-col gap-3 ">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-10 font-bold">
                        <p className="w-20">User :</p>
                        <p className="text-primary text-xl">
                          {data.user.firstName} {data.user.lastName}
                        </p>
                      </div>
                      <div className="flex gap-10 font-bold">
                        <p className="w-20">Type :</p>
                        <p className="text-primary text-xl">{data.type}</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex gap-10 font-bold w-full">
                        <p className="w-20">Amount :</p>
                        <p className="text-primary text-xl">{data.amount}</p>
                        <p className=" right-5 text-xl">THB</p>
                      </div>
                    </div>
                    <div className="flex gap-5 font-bold">
                      <p>Comment</p>
                      <textarea
                        name="comment"
                        value={input.comment}
                        onChange={handleChangeInput}
                        className="block w-[600px] outline-none resize-none border-2 border-primary p-2 rounded-md"
                        rows="4"
                        placeholder="Admin Description"
                      />
                    </div>
                  </div>
                </main>
                <div className="flex justify-center gap-5 w-full">
                  <button className="text-textWhite font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center">
                    Confirm
                  </button>
                  <button
                    className="text-primary font-semibold border-color-primary bg-white  focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center"
                    onClick={() => {
                      setInput(false);
                      adminReject(input);
                    }}
                  >
                    Reject
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
