import UserDetail from "./UserDetail";
export default function UserProfilePage() {
  return (
    <>
      <div className="absolute w-full h-[430px] bg-primaryLight z-[-5]"></div>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex gap-10">
          <div className=" flex-[3] flex justify-center pt-[100px]">
            <UserDetail />
          </div>
          <div className=" flex-[5] flex justify-center mt-[100px] p-5 bg-background/80 rounded-2xl">
            <div className="flex gap-5 items-center justify-start w-[700px]  h-[250px] p-3 rounded-lg border-2 border-textGrayDark">
              <div className="w-[200px] bg-primary/60 rounded-lg overflow-hidden h-[220px]">
                <img
                  src="/showCase1.png"
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-3 flex justify-center items-center h-[70px]">
                  <p className="line-clamp-2">title</p>
                </div>
              </div>
              <div className="w-[200px] bg-background/80 rounded-lg overflow-hidden h-[220px]">
                <img
                  src="/showCase1.png"
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-3 flex justify-center items-center h-[70px]">
                  <p className="line-clamp-2">title</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
