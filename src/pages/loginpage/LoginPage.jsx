import { useState } from "react";
import InputForm from "../../components/InputForm";
import useAuth from "../../hooks/useAuth";
import validateSchema from "../../utils/validate-schema";
import { loginSchema } from "../../utils/auth-validator";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

import { GoogleLogin } from "@react-oauth/google";
import BallBackGround from "../../components/BallBackGround";

export default function LoginPage() {
  const [input, setInput] = useState({ emailOrPhoneNumber: "", password: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const { login, loginGoogle } = useAuth();

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
      await login(result.value);
      toast.success("Successfully login!");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Wrong username or password");
      console.log(err);
    }
  };

  return (
    <div
      className="w-screen relative overflow-hidden "
      style={{ height: "calc(100vh - 60px)" }}
    >
      {/* ball container */}
      <BallBackGround />
      <div className="w-full h-full flex justify-center items-center">
        <form
          className="border border-textGrayLight bg-background/80 min-w-min max-w-sm w-full  rounded-xl flex flex-col justify-center items-center p-5 gap-[17px] whiteDivShadow"
          onSubmit={handleLogin}
        >
          <div className="text-3xl font-semibold text-primary">WorkLink</div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const data = jwtDecode(credentialResponse.credential);
              loginGoogle(data);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
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
