import { useState } from "react";
import InputForm from "../../components/InputForm";
import useAuth from "../../hooks/useAuth";
import validateSchema from "../../utils/validate-schema";
import { loginAdminSchema } from "../../utils/auth-validator";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton";
import BallAnimation from "../../components/BallAnimation";
import toast from 'react-hot-toast'

export default function AdminLoginPage() {
  const [input, setInput] = useState({ emailOrPhoneNumber: "", password: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const { adminlogin } = useAuth();

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const result = validateSchema(loginAdminSchema, input);
      if (result.error) {
        return setError(result.error);
      }
      setError({});
      // console.log("before");
      await adminlogin(result.value);
      toast.success('Successfully login!')
      navigate(`/admin`);
      // console.log("after");
    } catch (err) {
      toast.error('Wrong username or password')
      console.log(err);
    }
  };

  return (
    <div
      className="w-screen relative overflow-hidden "
      style={{ height: "calc(100vh)" }}
    >
      {/* ball container */}
      <div className="w-full h-full z-[-30] bg-background absolute">
        <BallAnimation
          color={"#C1C1C1"}
          startX={0.1}
          startY={0.1}
          width={0.3 * window.innerHeight}
          height={0.3 * window.innerHeight}
          header={60}
          z={"-5"}
          vx={-1.5}
          vy={-1.5}
        />
        <BallAnimation
          color={""}
          startX={0.5}
          startY={0.5}
          width={0.2 * window.innerHeight}
          height={0.2 * window.innerHeight}
          header={60}
          z={"-5"}
          vx={-1.5}
          vy={-1.5}
        />
        <BallAnimation
          color={""}
          startX={0.2}
          startY={0.5}
          width={0.3 * window.innerHeight}
          height={0.3 * window.innerHeight}
          header={60}
          z={"-5"}
          vx={-1.5}
          vy={1.5}
        />
        <BallAnimation
          color={""}
          startX={0.8}
          startY={0.5}
          width={0.25 * window.innerHeight}
          height={0.25 * window.innerHeight}
          header={60}
          z={"-5"}
          vx={1.5}
          vy={-1.5}
        />

        <BallAnimation
          color={"#707276"}
          startX={0.3}
          startY={0.7}
          width={0.4 * window.innerHeight}
          height={0.4 * window.innerHeight}
          header={60}
          z={"-10"}
          vx={1}
          vy={-1}
        />
        <BallAnimation
          color={"#FF8C50"}
          startX={0.7}
          startY={0.2}
          width={0.5 * window.innerHeight}
          height={0.5 * window.innerHeight}
          header={60}
          z={"-15"}
          vx={1}
          vy={1}
        />
        <BallAnimation
          color={"#BFDFCC"}
          startX={0.6}
          startY={0.7}
          width={0.6 * window.innerHeight}
          height={0.6 * window.innerHeight}
          header={60}
          z={"-20"}
          vx={-0.8}
          vy={0.8}
        />

        <div className="absolute z-[-30] bg-primaryLight/80 h-[70%] aspect-square rounded-full -translate-x-[50%] -translate-y-[50%] "></div>
        <div className="absolute z-[-30] bg-secondaryLight/80 h-[60%] aspect-square rounded-full translate-x-[25%] translate-y-[25%] bottom-0 right-0 "></div>
        <div className="absolute z-[-30] bg-primaryDark/80 h-[30%] aspect-square rounded-full left-[70%] top-[20%] "></div>
        <div className="absolute z-[-30] bg-textGrayDark/80 h-[25%] aspect-square rounded-full left-[20%] top-[50%] "></div>
        <div className="absolute z-[-30] bg-secondary/80 h-[30%] aspect-square rounded-full left-[5%] top-[90%] "></div>
        <div className="absolute z-[-30] bg-textGrayLight/80 h-[30%] aspect-square rounded-full left-[55%] top-[-10%] "></div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <form
          className="border border-textGrayLight bg-background/80 min-w-min max-w-sm w-full  rounded-xl flex flex-col justify-center items-center p-5 gap-[17px] whiteDivShadow"
          onSubmit={handleLogin}
        >
          <div className="text-3xl font-semibold text-primary">WorkLink</div>
          <hr className="w-full border border-textGrayLight" />
          <InputForm
            placeholder="email or phone number"
            name="emailOrPhoneNumber"
            value={input.emailOrPhoneNumber}
            onChange={handleInput}
            errorInput={error.emailOrPhoneNumber}
          />

          <InputForm
            type="password"
            placeholder="password"
            name="password"
            value={input.password}
            onChange={handleInput}
            errorInput={error.password}
          />
          <InputForm
            type="text"
            placeholder="adminKey"
            name="adminKey"
            value={input.adminKey}
            onChange={handleInput}
            errorInput={error.adminKey}
          />
          <ActionButton title="Log in" />

          <Link to="/adminregister">
            <div>Create Admin account?</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
