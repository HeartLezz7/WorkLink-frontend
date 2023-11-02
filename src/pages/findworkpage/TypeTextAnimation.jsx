import { TypeAnimation } from "react-type-animation";

export default function TypeTextAnimation() {
  return (
    <div className="text-textNavy mx-auto w-[95%] text-center truncate overflow-ellipsis">
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
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflowL: "ellipsis",
        }}
      />
    </div>
  );
}
