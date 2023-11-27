import { useState } from "react";
import InputForm from "../../components/InputForm";
import ActionButton from "../../components/ActionButton";
import { registerSchema } from "../../utils/auth-validator";
import validateSchema from "../../utils/validate-schema";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import BallBackGround from "../../components/BallBackGround";

export default function RegisterPage() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const { register, setLoading } = useAuth();

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const result = validateSchema(registerSchema, input);

      if (result.error) {
        return setError(result.error);
      }
      setError({});
      const user = await register(result.value);
      navigate(`/validate/${user.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="w-screen flex justify-center items-center"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <BallBackGround />
      <form
        className="border bg-background/80 border-textGrayLight min-w-min max-w-sm rounded-xl flex flex-col justify-center items-center p-5 gap-[17px] whiteDivShadow"
        onSubmit={handleRegister}
      >
        <div className="text-3xl font-semibold text-primary">WorkLink</div>
        <div className="w-full grid grid-cols-1 grid-rows-5 gap space-y-1.5">
          <div className="grid grid-cols-2 gap-x-1">
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
        </div>
        <ActionButton title="Sign in" />
      </form>
    </div>
  );
}
