export default function ActionButton({ title, color, type = "submit" }) {
  return (
    <button
      className={`${color} rounded-2xl text-whitetext w-[180px] h-[50px]`}
      type={type}
    >
      {title}
    </button>
  );
}
