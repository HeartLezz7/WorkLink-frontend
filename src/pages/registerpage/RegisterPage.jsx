import { useState } from "react";
import InputForm from "../../components/InputForm";
import ActionButton from "../../components/ActionButton";
import { registerSchema } from "../../utils/auth-validator";
import validateSchema from "../../utils/validate-schema";
import useAuth from "../../hooks/useAuth";

export default function RegisterPage() {
  const [input, setInput] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateSchema(registerSchema, input);
      console.log(validateError, "validateError ");
      if (validateError) {
        return setError(validateError);
      }
      setError({});
      await register();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      className="m-auto border max-w-md rounded-xl flex flex-col justify-center items-center p-5 gap-[17px]"
      onSubmit={handleRegister}
    >
      <div className="text-3xl font-semibold text-primary">WorkLink</div>
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
      <ActionButton title="Sign in" color=" bg-secondaryLight" />
    </form>
  );
}
