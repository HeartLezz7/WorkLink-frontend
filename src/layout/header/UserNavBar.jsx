import { Link, useLocation } from "react-router-dom";
import UserDropDown from "./UserDropDown";

export default function UserNavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-end gap-[24px] text-whitetext h-full font-bold text-2xl">
      <Link
        to="/"
        className={`text-4xl  hover:scale-105 cursor-pointer active:scale-90 ${
          pathname === "/"
            ? "underline underline-offset-4 scale-105"
            : "text-disable"
        }`}
      >
        <p className="whitespace-nowrap font-bold text-xl ">Home</p>
      </Link>
      <Link
        to="/findwork"
        className={`text-3xl font-bold hover:scale-105 cursor-pointer active:scale-90 ${
          pathname === "/findwork"
            ? "underline underline-offset-4 scale-105"
            : "text-disable"
        }`}
      >
        <p className="whitespace-nowrap font-bold text-xl">Find Work</p>
      </Link>
      <Link
        to="/findwork"
        className={`text-3xl font-bold hover:scale-105 cursor-pointer active:scale-90 ${
          pathname === "/findwork"
            ? "underline underline-offset-4 scale-105"
            : "text-disable"
        }`}
      >
        <p className="whitespace-nowrap font-bold text-xl">Dashboard</p>
      </Link>
      <UserDropDown />
    </nav>
  );
}
