export default function UserProfilePage() {
  return (
    <>
      <div className="absolute w-full h-[430px] bg-primaryLight z-[-5]"></div>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex gap-10">
          <div className="bg-black flex-[5] flex justify-center">
            <div className="px-5 bg-secondaryLight">
              <div className="rounded-full overflow-hidden w-fit">
                <img
                  src="/defaultImage.jpg"
                  className="w-[150px] aspect-square object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-background flex-[10] w-full">dasljsl</div>
        </div>
      </div>
    </>
  );
}
