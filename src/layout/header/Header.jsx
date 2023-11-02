import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="bg-primaryDarker h-[60px] w-full text-textWhite shadow-md shadow-black/40 relative z-50">
      <div className="max-w-[1440px] flex gap-1 items-center justify-between mx-auto py-2 px-5">
        <div className="flex items-center text-whitetext">
          <img src="/headerLogo.png" className="h-[40px]" />
        </div>
        <NavBar />
      </div>
    </div>
  );
}
