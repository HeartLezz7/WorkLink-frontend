export default function AdminSelectWorkModal({ open, onClose, status }) {
  return (
    <>
      {open && (
        <>
          <div className="absolute top-[-20px] right-3.5 z-50">
            <div
              className="cursor-pointer p-2 flex justify-center items-center bg-primaryLight w-48 rounded-t-xl"
              onClick={() => {
                onClose;
                status("finding");
              }}
            >
              finding
            </div>
            <div
              className="cursor-pointer p-2 flex justify-center items-center bg-textWhite w-48"
              onClick={() => {
                onClose;
                status("makeDeal");
              }}
            >
              makeDeal
            </div>
            <div
              className="cursor-pointer p-2 flex justify-center items-center bg-primaryLight w-48"
              onClick={() => {
                onClose;
                status("requestSuccess");
              }}
            >
              requestSuccess
            </div>
            <div
              className="cursor-pointer p-2 flex justify-center items-center bg-textWhite w-48"
              onClick={() => {
                onClose;
                status("success");
              }}
            >
              success
            </div>
            <div
              className="cursor-pointer p-2 flex justify-center items-center bg-primaryLight w-48 "
              onClick={() => {
                onClose;
                status("cancel");
              }}
            >
              cancel
            </div>
            <div
              className="cursor-pointer p-2 flex justify-center items-center bg-textWhite w-48 rounded-b-xl"
              onClick={() => {
                onClose;
                status("onIssue");
              }}
            >
              onIssue
            </div>
          </div>
        </>
      )}
    </>
  );
}
