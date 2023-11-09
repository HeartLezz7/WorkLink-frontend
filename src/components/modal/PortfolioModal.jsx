import { useRef } from "react";
import { useState } from "react";
import Loading from "../Loading/Loading";

export default function PortfolioModal({ onSubmit, onSuccess , setIsOpen}) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (file) {
        formData.append("imagePicture", file);
      }
      if (message) {
        formData.append("description", message);
      }
      setLoading(true);
      await onSubmit(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {loading && <Loading/>}
    <form
      className=" overflow-hidden px-2 pt-2 pb-5 rounded-3xl bg-background relative"
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
            <div className="text-textNavy text-3xl font-semibold w-full text-center py-2">
              Add work
            </div>

      {file ? (
        <div
        onClick={() => fileEl.current.click()}
        className="cursor-pointer max-h-52 overflow-x-auto"
        >
          <img src={URL.createObjectURL(file)} alt="post" />
        </div>
      ) : (
        <SelectImageButton onClick={() => fileEl.current.click()} />
        )}

      <input
        type="file"
        className="hidden"
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
        <textarea
          className="block w-full outline-none resize-none border-2 border-primary p-2 rounded-md"
          rows="4"
          placeholder={"description"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex justify-center">
          
      <button className="text-whitetext font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-2xl w-[80%] py-1.5 text-center place-content-center-center mt-3">
                Submit
              </button>
        </div>
    </form>
  </>
  );
}

function SelectImageButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer gap-2"
    >
      <div className="bg-fuchsia-200 h-10 w-10 rounded-full flex items-center justify-center">
        <img src="\public\addimage1.png" />
      </div>
      <span>Add Photo</span>
    </div>
  );
}
