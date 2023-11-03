import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();

  //   if (authUser?.status == "User") {
  //     menus = [
  //       { id: 1, to: "/admin/orders", message: "จัดการออเดอร์" },
  //       { id: 2, to: "/admin/menus", message: "จัดการเมนู" },
  //       { id: 3, to: "/admin/", message: "สรุป" },
  //     ];
  //   }
  //   if (authUser?.status == "Admin") {
  //     menus = [
  //       { id: 1, to: "/admin/orders", message: "จัดการออเดอร์" },
  //       { id: 2, to: "/admin/menus", message: "จัดการเมนู" },
  //       { id: 3, to: "/admin/", message: "สรุป" },
  //     ];
  //   }

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
        to="/login"
        className="text-whitetext font-semibold bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-sm px-5 py-1.5 text-center"
      >
        <p className="whitespace-nowrap font-bold text-lg">Login</p>
      </Link>
      <Link
        to="/register"
        className="text-whitetext font-semibold bg-gradient-to-tl from-secondaryLight via-secondary to-secondaryDark hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-secondary shadow-md shadow-primaryDark font-md rounded-lg text-sm px-5 py-1.5 text-center"
      >
        <p className="whitespace-nowrap font-bold text-lg">Register</p>
      </Link>
    </nav>
  );
}
