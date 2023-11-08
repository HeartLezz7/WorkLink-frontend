import { useState } from "react";
import InputForm from "../../components/InputForm";
import useAuth from "../../hooks/useAuth";
import validateSchema from "../../utils/validate-schema";
import { loginSchema } from "../../utils/auth-validator";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton";
import BallAnimation from "../../components/BallAnimation";

export default function LoginPage() {
  const [input, setInput] = useState({ emailOrPhoneNumber: "", password: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const result = validateSchema(loginSchema, input);
      if (result.error) {
        return setError(result.error);
      }
      setError({});
      // console.log("before");
      await login(result.value);
      navigate("/dashboard");
      // console.log("after");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="w-screen relative overflow-hidden"
      style={{ height: "calc(100vh - 60px)" }}
    >
      {/* ball container */}
      <div className="z-[-30] bg-backgroundWhiteBlue w-full h-full absolute">
        <BallAnimation
          color={"#C1C1C1"}
          startX={0.1}
          startY={0.1}
          width={300}
          height={300}
          header={60}
          z={"-15"}
        />
        <BallAnimation
          color={"#BFDFCC"}
          startX={0.1}
          startY={0.6}
          width={400}
          height={400}
          header={60}
          z={"-20"}
        />
        <BallAnimation
          color={"#FF7127"}
          startX={0.3}
          startY={0.2}
          width={400}
          height={400}
          header={60}
          z={"-15"}
        />
        <BallAnimation
          color={"#4C4F54"}
          startX={0.3}
          startY={0.7}
          width={200}
          height={200}
          header={60}
          z={"-10"}
        />
        <BallAnimation
          color={"#3CB97F"}
          startX={0.9}
          startY={0.1}
          width={400}
          height={400}
          header={60}
          z={"-20"}
        />
        <BallAnimation
          color={"#298E5F"}
          startX={0.6}
          startY={0.7}
          width={200}
          height={200}
          header={60}
          z={"-10"}
        />
        <BallAnimation
          color={"#FF8C50"}
          startX={0.7}
          startY={0.2}
          width={200}
          height={200}
          header={60}
          z={"-10"}
        />
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
          <ActionButton title="Log in" />
          <Link to="/register">
            <div>Create new account?</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
