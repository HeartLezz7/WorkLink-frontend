import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();
  let navLists = [
    { id: 1, to: "/", message: "หน้าหลัก" },
    { id: 2, to: "/login", message: "login" },
    { id: 3, to: "/register", message: "register" },
  ];
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
    <nav className="flex items-center justify-end gap-[24px] text-whitetext h-full">
      <Link
        to="/"
        className={`text-2xl font-bold hover:scale-110 cursor-pointer active:scale-90 underline underline-offset-1`}
      >
        <p className="whitespace-nowrap ">Home</p>
      </Link>
      <Link
        to="/login"
        className="text-whitetext font-semibold bg-gradient-to-r from-primaryLight via-primary to-primaryDark hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-graylight shadow-md shadow-primaryDark font-md rounded-lg text-sm px-5 py-2 text-center"
      >
        <p className="whitespace-nowrap ">Login</p>
      </Link>
      <Link
        to="/register"
        className="text-whitetext font-semibold bg-gradient-to-r from-secondaryLight via-secondary to-secondaryDark hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-graylight shadow-md shadow-primaryDark font-md rounded-lg text-sm px-5 py-2 text-center"
      >
        <p className="whitespace-nowrap ">Register</p>
      </Link>
    </nav>
  );
}
