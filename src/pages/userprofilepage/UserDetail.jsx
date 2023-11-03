import { FaStar } from "react-icons/fa";

export default function UserDetail() {
  return (
    <div className="p-5 w-[90%] shadow-lg shadow-primaryDark/70 bg-background/80 rounded-xl h-fit">
      <div className="flex gap-5 items-center">
        <div className="rounded-full overflow-hidden w-[150px] shadow-md">
          <img
            src="/defaultImage.jpg"
            className="w-[150px] aspect-square object-cover"
          />
        </div>
        <div className="space-y-1">
          <div>
            <h6 className="text-textNavy truncate">username</h6>
            <h6 className="text-textNavy truncate">lastname</h6>
          </div>
          <div className="flex items-start gap-1">
            <FaStar color="#FFC911" size={25} />
            <p className="text-xl font-semibold text-textGrayDark">5.0/5.0</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-3 mt-4">
        <p className="text-xl">
          <span className="text-xl font-semibold">Age :</span> 25 years
        </p>
        <p className="text-xl">
          <span className="text-xl font-semibold">Address :</span> Bangkok,
          Thailand
        </p>
        <div>
          <p className="text-xl font-semibold">Personal description :</p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            maxime, vel quibusdam beatae eos excepturi necessitatibus voluptatem
            quidem sed praesentium exercitationem libero numquam dolores
            reprehenderit assumenda, dignissimos nemo deleniti doloribus
            reiciendis. Voluptates labore laboriosam eaque quasi facere? Ab
            consequatur voluptatem nobis, ipsa praesentium ipsum mollitia eos
            aspernatur. Animi, cupiditate nobis!
          </p>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-textGrayLight text-textGrayDark px-3 py-2 rounded-md font-semibold">
            Edit profile
          </button>
        </div>
      </div>
    </div>
  );
}
