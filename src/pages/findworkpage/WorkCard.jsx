import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import getDate from "../../utils/getDate";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import axios from "../../configs/axios";

export default function WorkCard({
  id,
  workImage,
  title,
  createdAt,
  startDate,
  endDate,
  price,
  statusWork,
  description,
  ownerId,
  challenger,
}) {
  const [flipped, set] = useState(false);
  const [isSingUp, setIsSignUp] = useState(false);
  const { user } = useAuth();
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    const isChallenger = challenger.find((el) => el.userId === user.id);
    if (isChallenger) {
      setIsSignUp(true);
    }
  }, []);

  const handleSignUp = async () => {
    try {
      const res = await axios.post(`/work/challenger/${id}`);
      setIsSignUp(true);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative text-textGrayDark ">
      <a.div
        onClick={() => set((state) => !state)}
        className={`p-3 border border-textGrayLight rounded-xl overflow-hidden h-[400px] w-[350px] shadow shadow-black/40 absolute cursor-pointer bg-background whiteDivShadow ${
          flipped ? "z-[-5]" : "z-[5]"
        } `}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      >
        <div className="h-[60%]  overflow-hidden rounded-xl">
          <img src={workImage} className=" min-h-full w-full object-cover" />
        </div>
        <div className=" flex flex-col justify-between h-[40%] pt-3">
          <p className="text-2xl line-clamp-2">{title}</p>
          <div className="flex w-full justify-between">
            <p>
              {getDate(startDate)}-{getDate(endDate)}
            </p>
            <p>{price}</p>
          </div>
        </div>
      </a.div>
      <a.div
        className={`border border-textGrayLight rounded-xl overflow-hidden h-[400px] w-[350px] shadow-lg shadow-black/40 whiteDivShadow `}
        style={{
          opacity,
          transform,
          rotateY: "-180deg",
        }}
      >
        <div className="bg-textWhite flex flex-col justify-between h-full p-3 w-full overflow-hidden">
          <div className="flex flex-col justify-start flex-[8] overflow-y-scroll w-full overflow-hidden">
            <p className=" text-xl font-semibold pt-1 pb-2 text-textNavy">
              {title}
            </p>
            <hr className="w-[95%] mx-auto py-1" />

            <div className="flex gap-2 pb-1">
              <p className=" font-semibold whitespace-nowrap text-lg text-secondary">
                Price :
              </p>
              <p className=" text-lg">{price}</p>
            </div>
            <div className="flex gap-2 pb-1">
              <p className=" font-semibold whitespace-nowrap text-lg text-secondary">
                Duration :
              </p>
              <p className=" text-lg">
                {getDate(startDate)}-{getDate(endDate)}
              </p>
            </div>
            <p className=" font-semibold whitespace-nowrap text-secondary text-lg inline">
              Description :
            </p>
            <p className="w-[full] overflow-clip text-clip inline">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 flex-[2] pt-2">
            {!user ? (
              <button className="bg-disable px-5 py-2 text-sm font-semibold rounded-full text-textGrayDark">
                Need login and verify to sign-up this work
              </button>
            ) : user.authUser.verifyStatus !== "verify" ? (
              <button className="bg-disable px-5 py-2 text-sm font-semibold rounded-full text-textGrayDark">
                Need verify to sign-up this work
              </button>
            ) : user?.id === ownerId ? (
              <button className="bg-disable px-5 py-2 text-xl font-semibold rounded-full text-textGrayDark">
                This is your work.
              </button>
            ) : isSingUp ? (
              <button className="bg-gradient-to-r from-gradiantPrimaryDark  to-gradiantPrimaryLight hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-primaryDark  px-5 py-2 text-xl font-semibold rounded-full text-textWhite">
                Already sign-up this work
              </button>
            ) : (
              <button
                onClick={handleSignUp}
                className="bg-secondary px-5 py-2 text-xl font-semibold rounded-full text-textWhite"
              >
                Sing-Up
              </button>
            )}

            <p
              onClick={() => set((state) => !state)}
              className="text-textGrayDark hover:underline active:text-xl cursor-pointer"
            >
              Close
            </p>
          </div>
        </div>
      </a.div>
    </div>
  );
}
