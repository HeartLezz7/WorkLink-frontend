import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

export default function WorkCard() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className="relative text-textGrayDark">
      <a.div
        onClick={() => set((state) => !state)}
        className={`rounded-xl overflow-hidden h-[400px] w-[350px] shadow-lg shadow-black/40 absolute cursor-pointer bg-backgroundWhiteBlue ${
          flipped ? "z-[-5]" : "z-[5]"
        } `}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <div className="h-[60%]  overflow-hidden">
          <img
            src="/workDefault/petcareDefault.png"
            className=" min-h-full w-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-between h-[40%] p-3">
          <p className="text-2xl line-clamp-2">
            Need someone take care my dog 1 day
          </p>
          <div className="flex w-full justify-between">
            <p>20/11/67</p>
            <p>400 THB</p>
          </div>
        </div>
      </a.div>
      <a.div
        className={`rounded-xl overflow-hidden h-[400px] w-[350px] shadow-lg shadow-black/40 `}
        style={{
          opacity,
          transform,
          rotateY: "-180deg",
        }}
      >
        <div className="bg-textWhite flex flex-col justify-between h-full p-3">
          <div className="flex flex-col justify-start flex-[8] overflow-y-scroll">
            <p className=" text-xl font-semibold pt-1 pb-2">
              Need someone take care my dog 1 day
            </p>
            <hr className="w-[95%] mx-auto py-1" />

            <div className="flex gap-2 pb-1">
              <p className=" font-semibold whitespace-nowrap text-lg">
                Price :
              </p>
              <p className=" text-lg">400 THB</p>
            </div>
            <div className="flex gap-2 pb-1">
              <p className=" font-semibold whitespace-nowrap text-lg">
                Duration :
              </p>
              <p className=" text-lg">20/11/66 - 20/11/66</p>
            </div>
            <p className="">
              <span className=" font-semibold whitespace-nowrap">
                Description :
              </span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              neque? Quasi similique odit mollitia doloremque dolorum commodi
              voluptatum consequuntur officiis, necessitatibus laboriosam minima
              sit id maiores culpa, ipsam atque iste. Harum, perferendis modi
              minus magni similique, accusantium natus necessitatibus provident
              inventore placeat autem atque sint, alias vitae fugit?
              Repellendus, vero.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 flex-[2] pt-2">
            <button className="bg-secondary px-5 py-2 text-xl font-semibold rounded-full text-textWhite">
              Sing-Up
            </button>
            <p
              onClick={() => set((state) => !state)}
              className="text-textGrayDark underline text-lg cursor-pointer"
            >
              Close
            </p>
          </div>
        </div>
      </a.div>
    </div>
  );
}
