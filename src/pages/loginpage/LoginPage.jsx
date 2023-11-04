import { useState } from "react";
import InputForm from "../../components/InputForm";
import useAuth from "../../hooks/useAuth";
import validateSchema from "../../utils/validate-schema";
import { loginSchema } from "../../utils/auth-validator";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton";

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
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        className="border border-textGrayLight min-w-min max-w-sm w-full  rounded-xl flex flex-col justify-center items-center p-5 gap-[17px]"
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
  );
}
