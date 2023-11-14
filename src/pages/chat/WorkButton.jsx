import axios from "../../configs/axios";

export default function WorkButton({ title, workId }) {
  console.log(title, "testt");
  const handleStatusWork = async (status) => {
    try {
      const a = await axios.patch("/work/updateStatus", { status, workId });
      console.log(a.data, "test01");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center gap-2 relative">
      <button
        className={`w-[20rem] ${
          title === "Edit"
            ? "bg-textWhite text-secondaryLight border border-secondaryLight"
            : title === "Report"
            ? "bg-error text-textWhite"
            : "bg-secondaryLight text-textWhite"
        } p-2 rounded-xl text-center`}
        onClick={() => handleStatusWork(title)}
      >
        {title}
      </button>
    </div>
  );
}
