import { useState } from "react";
import InputForm from "../../components/InputForm";
import validate from "/public/workDefault/validate.png";
import { useRef } from "react";
import { identifySchema } from "../../utils/auth-validator";
import validateSchema from "../../utils/validate-schema";
import axios from "../../configs/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import getDateFormat from "../../utils/getDateFormat";
import Loading from "../../components/Loading/Loading";
import InputErrorMessage from "../../components/InputErroMessage";
import toast from 'react-hot-toast'

const dateFormat = "YYYY-MM-DD";

// hong edit complete

export default function ValidatePage() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [validateInput, setValidateInput] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.authUser.phoneNumber,
    email: user.authUser.email,
    birthDate: null,
    identifyId: user.identifyId || "",
  });
  // console.log(user);

  const [file, setFile] = useState(null);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const idImage = useRef();

  const handleInput = (e) => {
    setValidateInput({ ...validateInput, [e.target.name]: e.target.value });
  };
  const handleChangeDate = (date, dateString) => {
    // console.log(date, dateString);
    setValidateInput({ ...validateInput, birthDate: dateString });
  };

  const disabledDate = (current) => {
    const today = new Date();
    const currentDate = new Date(current.format("YYYY-MM-DD"));
    return currentDate > today;
  };

  const handleFormData = () => {
    const formData = new FormData();

    const { value, error } = validateSchema(identifySchema, validateInput);
    if (error) {
      setError({});
      console.log(error);
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
      setLoading(true);
      const data = handleFormData();
      if(!data){
        console.log(error)
        toast.error("Please add photo of id card")
        return
      }
      console.log(data ,"dataa");
      setError({});
      const res = await axios.patch("/user/validateuser", data);
      // console.log(res.data.user);
      setUser(res.data.user);
      toast.success('Successfully!')
      navigate(`/userprofile/${user.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        style={{ height: "calc(100vh - 60px)" }}
        className="w-screen h-screen  px-10 bg-gradient-to-b from-gradiantPrimaryDark to bg-textWhite"
      >
        {loading && <Loading />}
        <div className="h-full max-w-[1440px] mx-auto flex gap-4 items-center justify-center">
          <div className=" w-1/2">
            <img src={validate} alt="validate" className="w-full" />
          </div>
          <form
            className=" w-1/2 flex flex-col items-center justify-center gap-y-3 h-fit bg-background/80 rounded-2xl p-3 "
            onSubmit={handleValidate}
          >
            <div className="text-3xl text-textNavy font-semibold mb-3">
              Verify and edit your account
            </div>
            <div className=" w-full grid grid-rows-3 gap-y-3 ">
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
                <div className="w-full">
                  <DatePicker
                    defaultValue={
                      validateInput.birthDate &&
                      dayjs(getDateFormat(validateInput.birthDate), dateFormat)
                    }
                    format={dateFormat}
                    onChange={handleChangeDate}
                    disabledDate={disabledDate}
                    className="bg-primaryDark/0 w-full h-[41px]"
                    placeholder="Select your birthdate"
                  />
                  {error.birthDate && (
                    <InputErrorMessage message={error.birthDate} />
                  )}
                </div>
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
                  className="truncate w-full rounded-2xl border text-secondaryLight bg-textWhite text-xl p-1"
                  onClick={() => idImage.current.click()}
                >
                  Add or edit ID card picture
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
            <div className="grid grid-cols-2 gap-2 w-full">
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="file"
                  className="aspect-video rounded-2xl"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
