export default function ActionButton({ title, color }) {
  return (
    <button
      className={`${color} rounded-2xl text-whitetext w-[180px] h-[50px]`}
    >
      {title}
    </button>
  );
}
