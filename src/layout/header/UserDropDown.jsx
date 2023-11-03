import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useDropdown from "../../hooks/useDropdown";
import { useNavigate } from "react-router-dom";

export default function UserDropDown() {
  const { user, logout } = useAuth();
  const { isOpen, setIsOpen, dropDownEl } = useDropdown();
  const navigate = useNavigate();

  const handleNavigate = () => {
    // navigate("/order/trackOrder");
    setIsOpen(false);
  };

  return (
    <div className="relative h-full" ref={dropDownEl}>
      <div
        className="h-full aspect-square cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/defaultImage.jpg" alt="user" className="h-[50px]" />
      </div>
      {isOpen && (
        <>
          <div className="absolute w-80 bg-mybackground right-0 translate-y-3 border-4 border-myyellow rounded-lg shadow-md p-2 z-30">
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <div className="w-full flex flex-col items-start gap-2">
                <p className="text-darktext text-xl font-semibold truncate">{`${user.userProfile.firstName} ${user.userProfile.lastName}`}</p>
              </div>
              <div>
                <button onClick={logout}>ออกจากระบบ</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
