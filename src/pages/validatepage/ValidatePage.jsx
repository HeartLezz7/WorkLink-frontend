import { useState } from "react";
import InputForm from "../../components/InputForm";
import validate from "/public/workDefault/validate.png";
import { useRef } from "react";
import { identifySchema } from "../../utils/auth-validator";
import validateSchema from "../../utils/validate-schema";
import axios from "../../configs/axios";

export default function ValidatePage() {
  const [validateInput, setValidateInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    birthDate: "",
    identifyId: "",
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState({});

  const idImage = useRef();

  const handleInput = (e) => {
    setValidateInput({ ...validateInput, [e.target.name]: e.target.value });
  };

  const handleFormData = () => {
    const formData = new FormData();
    const { value, error } = validateSchema(identifySchema, validateInput);
    if (error) {
      setError(error);
      return;
    } else if (file && value) {
      formData.append("identifyImage", file);
      for (let key in value) {
        formData.append(key, value[key]);
      }
      return formData;
    }
  };

  const handleValidate = async (e) => {
    try {
      e.preventDefault();
      const data = handleFormData();
      await axios.post("/user/createprofile", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen flex gap-4 items-center justify-center px-10 bg-gradient-to-b from-gradiantPrimaryDark to bg-textWhite">
      <div className=" w-1/2">
        <img src={validate} alt="validate" className="w-full" />
      </div>
      <form
        className=" w-1/2 flex flex-col items-center gap-2"
        onSubmit={handleValidate}
      >
        <div className="text-5xl text-textWhite font-semibold mb-10">
          WorkLink
        </div>
        <div className=" w-full grid grid-rows-3 ">
          <div className="grid grid-cols-2  gap-2">
            <InputForm
              placeholder="Name"
              name="firstName"
              value={validateInput.firstName}
              onChange={handleInput}
              errorInput={error.firstName}
            />
            <InputForm
              placeholder="Surname"
              name="lastName"
              value={validateInput.lastName}
              onChange={handleInput}
              errorInput={error.lastName}
            />
          </div>
          <div className="grid grid-cols-2  gap-2">
            <InputForm
              placeholder="Phone"
              name="phoneNumber"
              value={validateInput.phoneNumber}
              onChange={handleInput}
              errorInput={error.phoneNumber}
            />
            <InputForm
              placeholder="E-mail"
              name="email"
              value={validateInput.email}
              onChange={handleInput}
              errorInput={error.email}
            />
          </div>
          <div className="grid grid-cols-2  gap-2">
            <InputForm
              type="date"
              placeholder="Date of birth"
              name="birthDate"
              value={validateInput.birthDate}
              onChange={handleInput}
              errorInput={error.birthDate}
            />
            <InputForm
              placeholder="ID card"
              name="identifyId"
              value={validateInput.identifyId}
              onChange={handleInput}
              errorInput={error.identifyId}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="flex flex-col">
            <button
              type="button"
              className="w-full rounded-2xl border text-secondaryLight bg-textWhite text-xl p-1"
              onClick={() => idImage.current.click()}
            >
              ID card picture
            </button>
            <input
              type="file"
              className="hidden"
              ref={idImage}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl text-textWhite bg-secondaryLight text-xl p-1"
          >
            Submit
          </button>
        </div>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="file"
            className="w-96 h-48 rounded-2xl"
          />
        )}
      </form>
    </div>
  );
}
