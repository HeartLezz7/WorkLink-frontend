import { FaStar } from "react-icons/fa";

export default function UserWallet() {
  return (
    <div className="flex flex-col space-y-6 overflow-y-scroll overflow-x-hidden pr-2 max-h-[100%]">
      <div className="flex items-center justify-start gap-5 flex-2 px-1">
        <img
          src="/defaultImage.jpg"
          className="w-[30%] aspect-square rounded-full object-cover whiteDivShadow"
        />
        <div className="space-y-[-3px] w-[70%]">
          <div className="space-y-[-9px]">
            <h6 className="text-textNavy truncate text-[1.6vw]">Username</h6>
            <h6 className="text-textNavy truncate text-[1.6vw]">Lastname</h6>
          </div>
          <div className="flex items-start gap-1">
            <FaStar color="#FFC911" size={25} />
            <p className="text-xl font-semibold text-textGrayDark">5.0/5.0</p>
          </div>
        </div>
      </div>
      <div className="relative border-4 border-textNavy rounded-lg">
        <h6 className="text-textNavy bg-backgroundWhiteGray w-fit px-3 absolute top-[-18px] left-[15px] text-[1.7vw]">
          My Wallet
        </h6>
        <div className="w-[100%] flex flex-col items-center justify-center gap-5   h-[150px]">
          <h5 className="text-primary pt-4 text-[1.8vw]">0.00 Bath</h5>
          <div className="w-full flex justify-evenly">
            <button className="text-textNavy text-[1.2vw] font-semibold bg-gradient-to-tr from-gradiantPrimaryDark  to-gradiantPrimaryLight active:bg-gradient-to-bl focus:outline-none  shadow-md shadow-primaryDark font-md rounded-lg active:scale-95  px-5 py-1.5 text-center">
              Withdraw
            </button>
            <button className="text-textGrayDark font-semibold bg-textGrayLight/50 hover:bg-textGrayLight/70  focus:outline-none active:ring-textGrayLight active:scale-95 shadow-md shadow-textGrayDark font-md rounded-lg text-[1.2vw] px-5 py-1.5 text-center">
              Deposite
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 max-h-[500px] ">
        <p className="text-2xl font-semibold ">History Transaction</p>
        <div className="p-3 flex flex-col gap-3">
          <div className="flex flex-col gap-1 p-2 rounded-xl border">
            <p className="text-[1vw] truncate">
              TransactionId : fdsa68fe4564ds8ef56d
            </p>
            <p className="text-[1vw] truncate">Type : Withdraw</p>
            {/* <p>Detail : Work title</p> */}
            <p className="text-[1vw] truncate">
              Date-Time : 20/11/65 - 08:00:59
            </p>
            <p className="text-[1vw] truncate">Amount : 500 Bath</p>
            <div className="flex w-full justify-between">
              <p className="text-textNavy font-semibold underline-offset-2 underline text-[1vw] truncate cursor-pointer">
                Proof of payment
              </p>
              <p className="text-secondaryLight font-bold text-[1vw] truncate">
                Status : pending
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-2 rounded-xl border">
            <p className="text-[1vw] truncate">
              TransactionId : fdsa68fe4564ds8ef56d
            </p>
            <p className="text-[1vw] truncate">Type : Withdraw</p>
            {/* <p>Detail : Work title</p> */}
            <p className="text-[1vw] truncate">
              Date-Time : 20/11/65 - 08:00:59
            </p>
            <p className="text-[1vw] truncate">Amount : 500 Bath</p>
            <div className="flex w-full justify-between">
              <p className="text-textNavy font-semibold underline-offset-2 underline text-[1vw] truncate cursor-pointer">
                Proof of payment
              </p>
              <p className="text-secondaryLight font-bold text-[1vw] truncate">
                Status : pending
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
