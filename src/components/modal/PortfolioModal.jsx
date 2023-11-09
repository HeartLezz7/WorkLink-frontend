import { useRef } from "react";
import { useState } from "react";
import Loading from "../Loading/Loading";

export default function PortfolioModal({ onSubmit, onSuccess }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (file) {
        formData.append("imagePictue", file);
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
      className="flex flex-col gap-4 justify-center text-center"
      onSubmit={handleSubmitForm}
    >
      <div>Photo</div>
      <textarea
        className="block w-full outline-none resize-none rounded-lg bg-primaryLight"
        rows="5"
        placeholder={"description"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
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
      <button className="border-2 bg-background w-20 rounded-md">
        Subbmit
      </button>
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
