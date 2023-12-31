import { useState, useEffect } from "react";

export default function BallAnimation({
  color,
  startX,
  startY,
  width,
  height,
  header,
  z,
  vx,
  vy,
}) {
  const [position, setPosition] = useState({
    x: startX * (window.innerWidth - width),
    y: startY * (window.innerHeight - (height + header)),
  });
  const [velocity, setVelocity] = useState({ x: vx, y: vy });

  useEffect(() => {
    const updatePosition = () => {
      const newX = position.x + velocity.x;
      const newY = position.y + velocity.y;
      if (newX < 0 || newX > window.innerWidth - width) {
        setVelocity({ ...velocity, x: -velocity.x });
      }
      if (newY < 0 || newY > window.innerHeight - (height + header)) {
        setVelocity({ ...velocity, y: -velocity.y });
      }
      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(updatePosition, 1000 / 60);
    return () => {
      clearInterval(interval);
    };
  }, [position, velocity]);

  return (
    <div
      className={`whiteDivShadow`}
      style={{
        position: "absolute",
        left: position.x + "px",
        top: position.y + "px",
        borderRadius: "50%",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        zIndex: z,
      }}
    ></div>
  );
}
