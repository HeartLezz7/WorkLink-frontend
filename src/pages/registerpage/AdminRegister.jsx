import { useState } from "react";
import InputForm from "../../components/InputForm";
import ActionButton from "../../components/ActionButton";
import { registerSchema } from "../../utils/auth-validator";
import validateSchema from "../../utils/validate-schema";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import BallAnimation from "../../components/BallAnimation";

export default function AdminRegisterPage() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    adminKey: "",
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const { adminregister, setLoading } = useAuth();

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const result = validateSchema(registerSchema, input);

      if (result.error) {
        console.log(result.error, "validateError ");
        return setError(result.error);
      }
      setError({});
      const user = await adminregister(result.value);
      console.log(user, "user");
      navigate(`/admin`);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="w-screen relative overflow-hidden "
      style={{ height: "calc(100vh)" }}
    >
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
      <div className="w-full h-screen flex items-center justify-center">
        <form
          className="border bg-background/80 border-textGrayLight min-w-min max-w-sm rounded-xl flex flex-col justify-center items-center p-5 gap-[17px] whiteDivShadow"
          onSubmit={handleRegister}
        >
          <div className="text-3xl font-semibold text-primary">WorkLink</div>
          <div className="w-full grid grid-cols-1 grid-rows-5 gap space-y-1.5">
            <div className="grid grid-cols-2 gap-x-1 ">
              <InputForm
                placeholder="firstname"
                name="firstName"
                value={input.firstName}
                onChange={handleInput}
                errorInput={error.firstName}
              />
              <InputForm
                placeholder="lastname"
                name="lastName"
                value={input.lastName}
                onChange={handleInput}
                errorInput={error.lastName}
              />
            </div>
            <InputForm
              placeholder="email"
              name="email"
              value={input.email}
              onChange={handleInput}
              errorInput={error.email}
            />
            <InputForm
              placeholder="mobile"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={handleInput}
              errorInput={error.phoneNumber}
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
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
              value={input.confirmPassword}
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
          </div>
          <ActionButton title="Sign in" />
        </form>
      </div>
    </div>
  );
}
