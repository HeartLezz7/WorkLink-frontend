import { Link, useLocation } from "react-router-dom";
import UserDropDown from "../UserDropDown";
import { BsChatTextFill } from "react-icons/bs";

export default function NavbarAdmin() {
  const { pathname } = useLocation();
  return (
    <nav className="flex items-center justify-between gap-[24px] px-5 text-whitetext w-full font-bold text-2xl  bg-primaryDark h-30">
      <div className="flex items-center gap-5">
        <div className="">
          <img src="/headerLogo.png" />
        </div>
        <div className="  text-textWhite">
          <img src="/icons/Logo Text.png" alt="" className=" text-secondary" />
        </div>
      </div>
      <div className="flex gap-8 items-center justify-center ">
        <Link
          to="/admin"
          className={`text-4xl  hover:scale-105 cursor-pointer active:scale-90 ${
            pathname === "/"
              ? "underline underline-offset-4 scale-105 text-secondary"
              : "text-disable"
          }`}
        >
          <p className="whitespace-nowrap font-bold text-xl ">Home</p>
        </Link>

        <Link
          to="/admin"
          className={`text-3xl font-bold hover:scale-105 cursor-pointer active:scale-90 ${
            pathname === "/"
              ? "underline underline-offset-4 scale-105 text-secondary"
              : "text-disable"
          }`}
        >
          <img src="/icons/icons8-mail-50.png" alt="" className="h-10" />
        </Link>
        <Link
          to="/"
          className={`text-3xl font-bold hover:scale-105 cursor-pointer active:scale-90 ${
            pathname === "/"
              ? "underline underline-offset-4 scale-105 text-secondary"
              : "text-disable"
          }`}
        >
          <BsChatTextFill size={30} />
        </Link>
        <UserDropDown />
      </div>
    </nav>
  );
}
