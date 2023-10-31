import { useState } from "react";
import InputForm from "../../components/InputForm";
import ActionButton from "../../components/ActionButton";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="m-auto border max-w-md rounded-xl flex flex-col justify-center items-center p-5 gap-[17px]">
      <div className="text-3xl font-semibold text-primary">WorkLink</div>
      <InputForm
        placeholder="email"
        name="email"
        value={input.email}
        onChange={handleInput}
      />
      <InputForm
        placeholder="mobile"
        name="phoneNumber"
        value={input.phoneNumber}
        onChange={handleInput}
      />
      <InputForm
        type="password"
        placeholder="password"
        name="password"
        value={input.password}
        onChange={handleInput}
      />
      <InputForm
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
        value={input.confirmPassword}
        onChange={handleInput}
      />
      <ActionButton title="Sign in" color=" bg-secondaryLight" />
    </div>
  );
}
