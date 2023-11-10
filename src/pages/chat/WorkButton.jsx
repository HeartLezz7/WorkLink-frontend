export default function WorkButton({ title }) {
  return (
    <div className="flex flex-col items-center gap-2 relative">
      <div className="relative">
        <button
          className={`w-[20rem] ${
            title === "Edit"
              ? "bg-textWhite text-secondaryLight border border-secondaryLight"
              : title === "Report"
              ? "bg-error text-textWhite"
              : "bg-secondaryLight text-textWhite"
          } p-2 rounded-xl text-center`}
        >
          {title}
        </button>
      </div>
    </div>
  );
}
