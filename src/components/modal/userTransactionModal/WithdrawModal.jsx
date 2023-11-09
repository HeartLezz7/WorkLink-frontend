import { useState, useRef } from "react";
import Loading from "../../Loading/Loading";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../configs/axios";
import { LuImagePlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import InputBorderForm from "../../InputBorderForm";

export default function WithdrawModal({ setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fileEl = useRef(null);
  const [input, setInput] = useState({
    type: "withdraw",
    amount: "",
    slipImage: "",
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
              Withdraw Process
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
                <div className="flex flex-col w-[250px] items-center justify-center">
                  <InputBorderForm
                    placeholder={"Amount"}
                    name={"amount"}
                    onChange={handleChangeInput}
                    value={input.value}
                  />
                  <div className="w-fit h-fit rounded-md whiteDivShadow flex flex-col justify-center items-center">
                    <img
                      src="/OnlyQR.png"
                      alt=""
                      className="w-[150px] aspect-square"
                    />
                    <div>WorkLink Company</div>
                  </div>
                </div>
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
                        Slip Image
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
