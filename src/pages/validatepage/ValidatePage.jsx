import { useState } from "react";
import InputForm from "../../components/InputForm";
import validate from "/public/workDefault/validate.png";
import { useRef } from "react";

export default function ValidatePage() {
  const [validateInput, setValidateInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    birthDate: "",
    identifyId: "",
  });

  const idImage = useRef();

  const handleInput = (e) => {
    setValidateInput({ ...validateInput, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-screen h-screen flex gap-4 items-center justify-center px-10 bg-gradient-to-b from-gradiantPrimaryDark to bg-textWhite">
      <div className=" w-1/2">
        <img src={validate} alt="validate" className="w-full" />
      </div>
      <div className=" w-1/2 flex flex-col items-center">
        <div className="text-5xl text-textWhite font-semibold mb-10">
          WorkLink
        </div>
        <div className=" w-full grid grid-rows-3 gap-2">
          <div className="grid grid-cols-2  gap-2">
            <InputForm
              placeholder="Name"
              name="firstName"
              value={validateInput.firstName}
              onChange={handleInput}
              errorInput={validateInput.firstName}
            />
            <InputForm
              placeholder="Surname"
              name="lastName"
              value={validateInput.lastName}
              onChange={handleInput}
              errorInput={validateInput.lastName}
            />
          </div>
          <div className="grid grid-cols-2  gap-2">
            <InputForm
              placeholder="Phone"
              name="phoneNumber"
              value={validateInput.phoneNumber}
              onChange={handleInput}
              errorInput={validateInput.phoneNumber}
            />
            <InputForm
              placeholder="E-mail"
              name="email"
              value={validateInput.email}
              onChange={handleInput}
              errorInput={validateInput.email}
            />
          </div>
          <div className="grid grid-cols-2  gap-2">
            <InputForm
              placeholder="Date of birth"
              name="birthDate"
              value={validateInput.birthDate}
              onChange={handleInput}
              errorInput={validateInput.birthDate}
            />
            <InputForm
              placeholder="ID card"
              name="identifyId"
              value={validateInput.identifyId}
              onChange={handleInput}
              errorInput={validateInput.identifyId}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          <div>
            <button
              type="button"
              className="w-full rounded-2xl border text-secondaryLight bg-textWhite text-xl p-1"
              onClick={() => idImage.current.click()}
            >
              ID card picture
            </button>
            <input type="file" className="hidden" ref={idImage} />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl text-textWhite bg-secondaryLight text-xl p-1"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
