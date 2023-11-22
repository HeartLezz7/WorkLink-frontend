import { useState } from "react";
import WithdrawCheckModal from "../../components/modal/AdminModal/WithdrawCheckModal";
import ApproveTransaction from "../../components/modal/AdminModal/ApproveTransaction";
import RejectTransaction from "../../components/modal/AdminModal/RejectTransaction";
import DepositAdminModal from "../../components/modal/AdminModal/DepositAdminModal";

export default function TransactionCardAdmin({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const dateData = new Date(data.createdAt);

  const date = new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(dateData);
  const time = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Asia/Bangkok",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(dateData);

  console.log(data);
  return (
    <div className="flex flex-col w-full p-3">
      <div className="flex justify-between items-center gap-5 border px-8 py-4 border-textGrayLight rounded-2xl bg-background shadow-lg">
        <div className=" flex justify-between flex-1">
          <div className="flex gap-10 items-center">
            <img
              src={data.user.profileImage}
              alt=""
              className=" bg-secondaryDark h-24 w-24 rounded-full"
            />
            <div className=" flex flex-col ">
              <div className=" flex ">
                <div className="w-20">Name : </div>
                <div>
                  {data.user.firstName} {data.user.lastName}
                </div>
              </div>
              <div className=" flex ">
                <div className="w-20">Email : </div>
                <div>{data.user.authUser[0].email}</div>
              </div>
              <div className=" flex">
                <div className="w-20">Phone : </div>
                <div>{data.user.authUser[0].phoneNumber}</div>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex ">
              <div className="w-24">Date : </div> <div>{date}</div>
            </div>
            <div className=" flex">
              <div className="w-24">Time : </div> <div>{time}</div>
            </div>
            <div className=" flex">
              <div className="w-24">Type : </div> <div>{data.type}</div>
            </div>
            <div className=" flex ">
              <div className="w-24">Amount : </div> <div>{data.amount} THB</div>
            </div>
          </div>
        </div>
        <div className="w-80">
          {data.status === "pending" ? (
            <div className="flex justify-end gap-5">
              <button
                className="border w-40 h-12 rounded border-gradiantPrimaryLight mx-5 text-primary hover:bg-opacity-75"
                onClick={() => setIsOpen(true)}
              >
                {data.status}
              </button>
              {data.type === "deposit" ? (
                <DepositAdminModal
                  setIsOpen={setIsOpen}
                  open={isOpen}
                  data={data}
                />
              ) : (
                <WithdrawCheckModal
                  setIsOpen={setIsOpen}
                  open={isOpen}
                  data={data}
                />
              )}
            </div>
          ) : data.status === "reject" ? (
            <div className="flex justify-end">
              <button
                className="border w-40 h-12 rounded mx-5 bg-secondaryLight border-secondary hover:bg-secondaryDark hover:text-textWhite "
                onClick={() => setIsOpen(true)}
              >
                {data.status}
              </button>
              <RejectTransaction
                open={isOpen}
                setIsOpen={setIsOpen}
                data={data}
              />
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                className="border bg-primaryDark w-40 h-12 rounded border-gradiantPrimaryLight mx-5 text-textWhite hover:bg-gradiantPrimaryDark hover:text-black"
                onClick={() => setIsOpen(true)}
              >
                {data.status}
              </button>

              <ApproveTransaction
                open={isOpen}
                setIsOpen={setIsOpen}
                data={data}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
