import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className=" w-60 h-[1060px] text-primaryDarker">
      <Link to="/admin">
        <div className="h-24 border cursor-pointer border-textGrayLight flex justify-center items-center">
          <p>Manage Work</p>
        </div>
      </Link>
      <Link to="/admin/manageuser">
        <div className="h-24 border cursor-pointer border-textGrayLight flex justify-center items-center  ">
          <p>Manage User</p>
        </div>
      </Link>
      <Link to="/admin/managetransection">
        <div className="h-24 border cursor-pointer border-textGrayLight flex justify-center items-center ">
          <p>Manage Transection</p>
        </div>
      </Link>
    </div>
  );
}
