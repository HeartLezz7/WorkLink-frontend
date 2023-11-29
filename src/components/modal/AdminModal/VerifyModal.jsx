import axios from "../../../configs/axios";

export default function VerifyModal({ open, onClose, userObj }) {
  const verify = async () => {
    try {
      await axios.patch(`/user/verify/${userObj.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    verify();
    onClose();
  };
  return (
    <>
      {open && (
        <>
          <form className=" bg-textGrayLight fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="flex flex-col justify-center items-center bg-primaryLight p-10 rounded-2xl w-4/6 gap-4 ">
              <div className="flex flex-col w-full gap-2">
                <div className="flex flex-col justify-center w-ful items-center">
                  <div className="flex flex-col w-3/4 gap-2 justify-cente">
                    <div className="flex justify-between ">
                      <p>ID : {userObj.id}</p>
                      <p>Wallet: {userObj.user.wallet}</p>
                    </div>
                    <p>
                      Name : {userObj.user.firstName} {userObj.user.lastName}
                    </p>
                    <p>Email : {userObj.email}</p>
                    <p>PhoneNumber : {userObj.phoneNumber}</p>
                    <p>
                      Birth Day :
                      {userObj.user.birthDate === null
                        ? "Don't have Data"
                        : userObj.user.birthDate.split("T")[0]}
                    </p>
                    <p className="h-32 overflow-auto hover:overflow-y-scroll">
                      Description : {userObj.user.personalDescription}
                    </p>
                    <p>
                      Status : {userObj.isBanned === false ? "Nomal" : "Ban"}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col flex-1 justify-center items-center">
                    <p>{userObj.userType}</p>
                    <img
                      className="rounded-full w-48 h-48"
                      src={userObj.user.profileImage}
                      alt="profileImage"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center">
                    <p>Identify Id : {userObj.user.identifyId}</p>
                    <img
                      className=" w-60 h-48"
                      src={userObj.user.identifyImage}
                      alt="identifyImage"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex w-full">
                {userObj.verifyStatus === "pending" ? (
                  <div
                    className="bg-primary p-2 flex justify-center items-center rounded-md font-semibold flex-1  text-white shadow-lg cursor-pointer ml-10"
                    onClick={handleClick}
                  >
                    Verify
                  </div>
                ) : (
                  ""
                )}

                <div
                  className="bg-backgroundWhiteBlue p-2 flex justify-center items-center rounded-md font-semibold flex-1 text-white shadow-lg cursor-pointer ml-10"
                  onClick={onClose}
                >
                  Cancel
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}
