import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useDropdown from "../hooks/useDropdown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function UserDropDown() {
  const { user, logout } = useAuth();
  const { isOpen, setIsOpen, dropDownEl } = useDropdown();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = () => {
    console.log("click");
    logout();
    navigate("/");
    setIsOpen(false);
  };

  const handleProfileNavigate = () => {
    navigate(`/userprofile/${user.id}`);
    setIsOpen(false);
  };
  const handleValidateNavigate = () => {
    navigate(`/validate/${user.id}`);
    setIsOpen(false);
  };

  return (
    <div className="relative h-full" ref={dropDownEl}>
      <div
        className="h-fit aspect-square cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={user.profileImage}
          alt="user"
          className="h-[45px] rounded-full aspect-square object-cover"
        />
      </div>
      {isOpen && (
        <>
          <div className="absolute w-[280px] bg-background right-0 translate-y-3 border border-textGrayLight whiteDivShadow rounded-lg shadow-md px-3 py-1 z-30">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full border-b border-textGrayLight py-1 ">
                <div
                  onClick={handleProfileNavigate}
                  className="cursor-pointer w-full flex items-center gap-4 p-2 hover:bg-backgroundWhiteGray rounded-md overflow-hidden"
                >
                  <img
                    src={user.profileImage}
                    className="h-[60px] aspect-square rounded-full object-cover whiteDivShadow"
                  />
                  <div>
                    <p className="text-primary text-md font-bold truncate w-[75%]">{`${user.firstName} ${user.lastName} `}</p>
                    <div className="flex items-center gap-1">
                      <VscVerifiedFilled
                        color={
                          user.authUser.verifyStatus === "verify"
                            ? "#3CB97F"
                            : user.authUser.verifyStatus === "pending"
                            ? "#FFC911"
                            : "#C1C1C1"
                        }
                        size={25}
                      />
                      <p
                        className={
                          user.authUser.verifyStatus === "verify"
                            ? "text-primary"
                            : user.authUser.verifyStatus === "pending"
                            ? "text-yellow"
                            : "text-textGrayLight"
                        }
                      >
                        {user.authUser.verifyStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-textGrayLight py-1 ">
                <div className="w-full flex items-center gap-4 hover:bg-backgroundWhiteGray px-2 py-1 rounded-md">
                  <div
                    onClick={handleValidateNavigate}
                    className="cursor-pointer w-full px-1 flex items-center gap-3 overflow-hidden"
                  >
                    <img
                      src="/icons/editVerifyIcon.svg"
                      className="w-[32px] aspect-square object-cover"
                    />
                    <p className="text-textGrayDark font-semibold">
                      Edit and verify account
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-textGrayLight py-1 ">
                <div className="w-full flex items-center gap-4 hover:bg-backgroundWhiteGray px-2 py-1 rounded-md">
                  <Link to="/" className="w-full px-1 flex items-center gap-3">
                    <img
                      src="/icons/editIcon.png"
                      className="h-[20px] aspect-square object-cover m-1"
                    />
                    <p className="text-textGrayDark font-semibold">
                      change password
                    </p>
                  </Link>
                </div>
              </div>
              <div className="w-full  py-1 ">
                <div
                  onClick={() => handleLogout()}
                  className="w-full flex items-center gap-4 hover:bg-backgroundWhiteGray px-2 py-1 rounded-md cursor-pointer"
                >
                  <div className="w-full px-1 flex items-center gap-3">
                    <img
                      src="/icons/logoutIcon.png"
                      className="w-[23px] aspect-square object-cover m-1"
                    />
                    <p className="text-textGrayDark text-lg font-semibold">
                      Log out
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
