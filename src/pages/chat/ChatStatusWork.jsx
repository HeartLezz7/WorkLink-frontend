import {
  // STATUS_FINDING,
  // STATUS_MAKEDEAL,
  // STATUS_ONPROCESS,
  STATUS_REQUEST,
} from "../../configs/constants";
// import useAuth from "../../hooks/useAuth";

const WorkButton = ({ title }) => {
  return (
    <button
      className={`w-[20rem] ${
        title === "Edit"
          ? "bg-textWhite text-secondaryLight border border-secondaryLight"
          : "bg-secondaryLight text-textWhite"
      } p-3 rounded-xl text-center`}
    >
      {title}
    </button>
  );
};

export default function ChatStatusWork() {
  //   const { user } = useAuth();
  const ownerId = 2;
  return (
    <div className="h-full grid grid-rows-4 col-span-2">
      <div className="row-span-3">
        <div className="bg-secondaryLight text-textWhite text-4xl text-center p-3 font-semibold">
          Status
        </div>
        <div className="flex flex-col items-center gap-10 p-10">
          <div className=" text-secondaryLight font-semibold text-lg">
            Work Detail
          </div>
          <div className="flex flex-col">
            <p className="text-secondary">
              Work id : <span className="text-black">WLPT123456789</span>
            </p>
            <p className="text-secondary">
              Work name :<span className="text-black">Take care of animal</span>
            </p>
            <p className="text-secondary">
              Start work : <span className="text-black">26 Oct 2023</span>
            </p>
            <p className="text-secondary">
              Price : <span className="text-black">500 THB</span>
            </p>
            <p className="text-secondary">
              Description :{" "}
              <span className="text-black">
                Your pets are a precious part of your family. So when they fall
                ill, you want them to be seen by experts who love our animal
                friends as much as you do.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row-span-1 p-10 flex flex-col items-center justify-center gap-2">
        {/* {ownerId && STATUS_FINDING ? (
          <>
            <WorkButton title="Edit" />
            <WorkButton title="Submit" />
          </>
        ) : (
          ""
        )} */}
        {/* {ownerId && STATUS_MAKEDEAL ? (
          <>
            <WorkButton title="Cancel" />
          </>
        ) : (
          <>
            <WorkButton title="Accept" />
            <WorkButton title="Reject" />
          </>
        )} */}
        {/* {ownerId && STATUS_ONPROCESS ? (
          <>
            <WorkButton title="Report" />
          </>
        ) : (
          <>
            <WorkButton title="Success" />
            <WorkButton title="Report" />
          </>
        )} */}
        {ownerId && STATUS_REQUEST ? (
          <>
            <WorkButton title="Complete" />
            <WorkButton title="Report" />
          </>
        ) : (
          <WorkButton title="Report" />
        )}
      </div>
    </div>
  );
}
