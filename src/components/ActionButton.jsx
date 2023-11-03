export default function ActionButton({ title, type = "submit" }) {
  return (
    <button
      className="rounded-2xl text-textWhite bg-secondaryLight w-[180px] h-[50px]"
      type={type}
    >
      {title}
    </button>
  );
}
