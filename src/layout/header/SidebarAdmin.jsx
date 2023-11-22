import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className=" w-72 h-screen text-primaryDarker font-bold">
      <Link to="/admin">
        <div className="h-24 border cursor-pointer border-textGrayLight flex justify-center items-center bg-textWhite hover:bg-primaryDarker hover:text-textWhite">
          <p>Manage Work</p>
        </div>
      </Link>
      <Link to="/admin/manageuser">
        <div className="h-24 border cursor-pointer border-textGrayLight flex justify-center items-center bg-textWhite  hover:bg-primaryDarker hover:text-textWhite">
          <p>Manage User</p>
        </div>
      </Link>
      <Link to="/admin/managetransection">
        <div className="h-24 border cursor-pointer border-textGrayLight flex justify-center items-center bg-textWhite  hover:bg-primaryDarker hover:text-textWhite">
          <p>Manage Transection</p>
        </div>
      </Link>
      <Link to="/admin/managereport">
        <div className="h-24 border cursor-pointer border-textGrayLight flex justify-center items-center bg-textWhite  hover:bg-primaryDarker hover:text-textWhite ">
          <p>Manage Report</p>
        </div>
      </Link>
    </div>
  );
}
