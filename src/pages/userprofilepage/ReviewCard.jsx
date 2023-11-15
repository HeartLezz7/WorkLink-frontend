import { RatingStar } from "../../components/RatingStar";

export default function ReviewCard() {
  return (
    <div className=" bg-background/70 p-5 rounded-xl flex flex-col gap-2 shadow-lg shadow-black/70">
      <div className="flex gap-5 items-center">
        <div className="rounded-full overflow-hidden w-[50px] shadow-md">
          <img
            src="/defaultImage.jpg"
            className="w-[full] aspect-square object-cover"
          />
        </div>
        <div className="space-y-1">
          <p className="text-textNavy truncate text-lg font-semibold">
            reviewBy username lastname
          </p>
        </div>
      </div>
      <div className="relative ">
        <div className="absolute  h-full w-full z-10"></div>
        <div className="flex justify-center">
          <RatingStar initialValue={4} />
        </div>
      </div>
      <div>
        <p className="w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
          officia, ab eaque quo similique facilis voluptates exercitationem
          totam? Assumenda voluptatem ratione sequi pariatur et adipisci
          consectetur iure reprehenderit! Dignissimos, ut.
        </p>
      </div>
    </div>
  );
}
