import { useState } from "react";
import InputForm from "../../components/InputForm";
import useAuth from "../../hooks/useAuth";
import validateSchema from "../../utils/validate-schema";
import { loginSchema } from "../../utils/auth-validator";

export default function LoginPage() {
  const [input, setInput] = useState({ emailOrPhoneNumber: "", password: "" });
  const [error, setError] = useState({});

  const { login } = useAuth();

  const LoginButton = ({ title }) => {
    return (
      <button className="rounded-2xl text-whitetext bg-secondaryLight w-[180px] h-[50px]">
        {title}
      </button>
    );
  };

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
      console.log("before");
      await login(result.value);
      console.log("after");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="m-auto border max-w-md rounded-xl flex flex-col justify-center items-center p-5 gap-[17px]"
      onSubmit={handleLogin}
    >
      <div className="text-3xl font-semibold text-primary">WorkLink</div>
      <hr className="w-full border border-graylight" />
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
      <LoginButton title="Log in" />
    </form>
  );
}
