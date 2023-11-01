import { TypeAnimation } from "react-type-animation";

export default function TypeTextAnimation() {
  return (
    <div className="text-whitetext mx-auto w-fit text-center">
      <TypeAnimation
        sequence={[
          "Find your best partner here",
          1000,
          "The reward for work well done is the oppotunity to do more",
          1000,
          "Talent makes money, Money makes your dreams",
          1000,
        ]}
        speed={40}
        repeat={Infinity}
        wrapper="h5"
        // style={{ fontSize: "2em" }}
      />
    </div>
  );
}
