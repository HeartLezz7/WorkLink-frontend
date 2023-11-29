import "./Loading.css";
export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-[#C5E2D1] opacity-80 z-40"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <span className="loader"></span>
      </div>
    </>
  );
}
