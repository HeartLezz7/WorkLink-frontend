export default function AdminManageTransctionSuccess() {
  return (
    <div>
      <div className="flex p-8 gap-5 ">
        <div className="flex  flex-row  justify-between  items-center h-10  w-64 border rounded ">
          <div className=" p-2 text-primaryDarker">
            <p>Search for...</p>
          </div>
          <div className=" p-2 text-primaryDarker">
            <img
              src="./icons/SearchPrimary.png"
              alt=""
              className=" text-gradiantPrimaryDark"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center ">
          <div className="">
            <p>All</p>
          </div>
          <div className="">
            <p>Waiting </p>
          </div>
          <div className=" text-gradiantPrimaryDark">
            <p>Success</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-20 border p-4 border-textGrayLight m-6 rounded-2xl shadow-lg">
        <div className="flex gap-5 ">
          <div className="w-20 rounded-full bg-secondaryLight"> </div>
          <img src="./defaultImage.jpg" alt="" className=" bg-secondaryDark" />
          <div>
            <div className=" flex ">
              <div className="w-32">Name : </div> <div>Mike Prion</div>
            </div>
            <div className=" flex">
              <div className="w-32">Email : </div>{" "}
              <div>mike.pirom@gmail.com</div>
            </div>
            <div className=" flex">
              <div className="w-32">Phone : </div> <div>061234002313</div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex ">
            <div className="w-32">Date : </div> <div>31 Oct 2023</div>
          </div>
          <div className=" flex">
            <div className="w-32">Time : </div> <div>15.35.08</div>
          </div>
          <div className=" flex">
            <div className="w-32">Type : </div> <div>DEPOSIT</div>
          </div>
          <div className=" flex">
            <div className="w-32">Amount : </div> <div>2,000 THB</div>
          </div>
        </div>
        <div>
          <button className="border  w-40 h-12 rounded  border-gradiantPrimaryLight mx-5  bg-gradiantPrimaryLight text-textWhite">
            Success
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-20 border p-4 border-textGrayLight m-6 rounded-2xl shadow-lg">
        <div className="flex gap-5 ">
          <div className="w-20 rounded-full bg-secondaryLight"> </div>
          <img src="./defaultImage.jpg" alt="" className=" bg-secondaryDark" />
          <div>
            <div className=" flex ">
              <div className="w-32">Name : </div> <div>Mike Prion</div>
            </div>
            <div className=" flex">
              <div className="w-32">Email : </div>{" "}
              <div>mike.pirom@gmail.com</div>
            </div>
            <div className=" flex">
              <div className="w-32">Phone : </div> <div>061234002313</div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex ">
            <div className="w-32">Date : </div> <div>31 Oct 2023</div>
          </div>
          <div className=" flex">
            <div className="w-32">Time : </div> <div>15.35.08</div>
          </div>
          <div className=" flex">
            <div className="w-32">Type : </div> <div>DEPOSIT</div>
          </div>
          <div className=" flex">
            <div className="w-32">Amount : </div> <div>1,000 THB</div>
          </div>
        </div>
        <div>
          <button className="border  w-40 h-12 rounded  border-gradiantPrimaryLight mx-5  bg-gradiantPrimaryLight text-textWhite">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}
