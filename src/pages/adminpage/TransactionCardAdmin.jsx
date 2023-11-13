import { useState } from "react";
import WithdrawCheckModal from "../../components/modal/AdminModal/WithdrawCheckModal";
import axios from "axios";
import { useEffect } from "react";

export default function TransactionCardAdmin({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [getstatus, setGetStatus] = useState(null)
  // console.log(data);



  useEffect(() => {
    axios
      .get("/admin/getstatus")
      .then((res) => {
        setGetStatus(res.data.statusApprove)
      })
      .catch((error) =>
        console.log(error));

  }, [])
  console.log(getstatus, "<<<<<<<<<<<<");


  const updateDataType = async (data) => {
    try {
      const res = await axios.post("/admin/updatetype", data)
      console.log(res);
      setGetStatus(res.data.statusApprove)
    } catch (error) {
      console.log(error);
    }

  }


  // console.log(data.status);
  // console.log(data);
  return (
    <div className="flex flex-col w-full p-3">
      <div className="flex justify-between items-center gap-5 border p-4 border-textGrayLight rounded-2xl shadow-lg">
        <div className="flex gap-10 items-center">
          <img
            src="/defaultImage.jpg"
            alt=""
            className=" bg-secondaryDark h-24 rounded-full"
          />
          <div className=" flex flex-col ">
            <div className=" flex ">
              <div className="w-32">Name : </div>
              <div>{data.Name}</div>
            </div>
            <div className=" flex ">
              <div className="w-32">Email : </div>
              <div>{data.Email}</div>
            </div>
            <div className=" flex">
              <div className="w-32">Phone : </div>
              <div>{data.Phone}</div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex ">
            <div className="w-32">Date : </div> <div>{data.Date}</div>
          </div>
          <div className=" flex">
            <div className="w-32">Time : </div> <div>{data.Time}</div>
          </div>
          <div className=" flex">
            <div className="w-32">Type : </div> <div>{data.Type}</div>
          </div>
          <div className=" flex">
            <div className="w-32">Amount : </div> <div>{data.Amount}</div>
          </div>
        </div>

        <div>

          <button className="border  w-40 h-12 rounded  border-gradiantPrimaryLight mx-5 text-primary" onClick={() => setIsOpen(true)}>
            {data.status}
          </button>


          {isOpen &&
            <WithdrawCheckModal onclose={setIsOpen} updateDataType={updateDataType} data={data}
            />
          }

        </div>
      </div>
    </div>
  );
}
