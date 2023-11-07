import { Outlet } from "react-router-dom";
import NavbarAdmin from "./header/NavbarAdmin";
import SideBar from "./header/SidebarAdmin";

export default function LayoutAdmin() {
  return (
    <>
      <NavbarAdmin />
      <div className="flex w-full " style={{ height: "calc(vh - 60px)" }}>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
