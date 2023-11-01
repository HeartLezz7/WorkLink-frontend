import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="bg-primary h-[60px] w-full">
      <div className="max-w-[1440px] flex gap-1 items-center justify-between mx-auto py-2 px-5">
        <img src="/headerLogo.png" className="h-[40px]" />
        <NavBar />
      </div>
    </div>
  );
}
