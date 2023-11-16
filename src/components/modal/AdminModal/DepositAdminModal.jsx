import { useState } from "react";

import axios from "../../../configs/axios";

export default function DepositAdminModal({ setIsOpen, data, open }) {
  const [isHover, setIsHover] = useState(false);
  const [input, setInput] = useState({
    comment: data.comment,
    slipImage: "",
  });
  console.log(input, "comment");

  const walletupdate = { wallet: +data.user.wallet + +data.amount };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await adminReject(input);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const adminConfirm = async () => {
    try {
      await axios.patch(`/transaction/deposit/${data.id}`);
      await axios.patch(
        `/transaction/walletupdate/${data.user.id}`,
        walletupdate
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  const adminReject = async () => {
    try {
      await axios.patch(`/transaction/reject/${data.id}`, input);
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
            <form
              className="px-16 py-5 rounded-3xl bg-background relative w-[800px] flex flex-col justify-center items-center gap-5"
              onSubmit={handleSubmitForm}
            >
              <div
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3"
              >
                <img
                  src="/icons/closeIcon.svg"
                  className="w-[30px] aspect-square object-cover place-content-center hover:bg-textGrayLight bg-textGrayLight/50 rounded-full cursor-pointer"
                />
              </div>
              <div className="text-primary text-3xl font-semibold w-full text-center py-2">
                {data.type}
              </div>
              <main className="w-full flex flex-col items-center gap-[15px]">
                <div
                  onMouseEnter={() => {
                    setIsHover(true);
                  }}
                  onMouseLeave={() => {
                    setIsHover(false);
                  }}
                  className="w-[300px] h-[400px] aspect-square rounded-md overflow-hidden border-2 border-textGrayDark cursor-pointer content-center relative whiteDivShadow"
                >
                  <img src={data.slipImage} alt="" />
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
                <button
                  className="text-textWhite font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center"
                  onClick={() => {
                    adminConfirm();
                    setIsOpen(false);
                  }}
                >
                  Confirm
                </button>
                <button className="text-primary font-semibold border-color-primary bg-white  focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center">
                  Reject
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
