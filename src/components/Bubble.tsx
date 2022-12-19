import { useState } from "react";
import { Circle } from "../shared/styles/styles";

export default function Bubble() {
  const [bubbleSize, setBubbleSize] = useState(300);

  const handleClick = () => {
    setBubbleSize((size) => Math.round(size * 1.05));
  };

  return (
    <Circle onClick={handleClick} side={bubbleSize + "px"}>
      <label>0.{bubbleSize}g</label>
    </Circle>
  );
}
