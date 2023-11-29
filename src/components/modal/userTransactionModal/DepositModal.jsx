import { useState, useRef } from "react";
import Loading from "../../Loading/Loading";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../configs/axios";
import { LuImagePlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import InputBorderForm from "../../InputBorderForm";
import useWallet from "../../../hooks/useWallet";
import InputErrorMessage from "../../InputErroMessage";
import toast from "react-hot-toast";

export default function DepositModal({ setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fileEl = useRef(null);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    type: "deposit",
    amount: "",
    slipImage: "",
  });
  const { createTransaction } = useWallet();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!input.amount && !input.slipImage) {
        setError({
          ...error,
          amount: "Input your withdraw amount",
          slipImage: "Add you slip payment",
        });
        return;
      } else if (!input.amount) {
        setError({ ...error, amount: "Input your withdraw amount" });
        return;
      } else if (!input.slipImage) {
        setError({ ...error, slipImage: "Add you slip payment" });
        return;
      }
      await createTransaction(input);
      toast.success("Successfully !");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[30]"></div>
      <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
        <div className="w-[650px]   ">
          {loading && <Loading />}
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
              Deposit Process
            </div>
            <ol
              className=" text-sm text-[10px] font-light p-2"
              style={{ listStyleType: "decimal", listStylePosition: "inside" }}
            >
              <li>
                Input the amount of money you want to transfer to your WorkLink
                wallet.
              </li>
              <li>Scan the QR code to initiate the transfer to WorkLink.</li>
              <li>Upload your receipt and click "Submit."</li>
              <li>Wait for the admin to check within 15 minutes.</li>
              <li>
                If the transaction is correct, the money will automatically be
                added to your wallet.
              </li>
            </ol>
            <main className="px-[30px] py-[10px] flex flex-col items-center gap-[15px]">
              <div className="flex gap-5 items-center">
                <div className="flex flex-col w-[250px] items-center justify-center gap-3">
                  <div className="flex flex-col">
                    <InputBorderForm
                      placeholder={"Amount"}
                      name={"amount"}
                      onChange={handleChangeInput}
                      value={input.value}
                    />
                    {error.amount && (
                      <InputErrorMessage message={error.amount} />
                    )}
                  </div>
                  <div className="w-fit h-fit rounded-md whiteDivShadow flex flex-col justify-center items-center">
                    <img
                      src="/OnlyQR.png"
                      alt=""
                      className="w-[150px] aspect-square"
                    />
                    <div>WorkLink Company</div>
                  </div>
                </div>
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
                          Slip Image
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
            </main>
            <div className="flex justify-center">
              <button className="text-whitetext font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
