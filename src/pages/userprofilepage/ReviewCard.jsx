import { RatingStar } from "../../components/RatingStar";

export default function ReviewCard({ data }) {
  return (
    <div className=" bg-background/70 w-full p-5 rounded-xl flex flex-col gap-2 shadow-lg shadow-black/70">
      <div className="flex gap-5 items-center">
        <div className="rounded-full overflow-hidden w-[50px] shadow-md">
          <img
            src={data?.reviewBy.profileImage}
            className="w-[full] aspect-square object-cover"
          />
        </div>
        <div className="space-y-1">
          <p className="text-textNavy truncate text-lg font-semibold">
            {data?.reviewBy.firstName} {data?.reviewBy.lastName}
          </p>
        </div>
      </div>
      <div className="relative ">
        <div className="absolute  h-full w-full z-10"></div>
        <div className="flex justify-center">
          <RatingStar initialValue={data?.rating} />
        </div>
      </div>
      <div>
        <p className="w-full">{data?.detail}</p>
      </div>
    </div>
  );
}
