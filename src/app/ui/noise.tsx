import React from "react";
import { twMerge } from "tailwind-merge";

const Noise: React.FC = () => {
  return (
    <div
      style={{
        filter: "brightness(0%)",
      }}
      className={twMerge(
        "absolute  inset-0 bg-[200px] bg-repeat opacity-50 pointer-events-none bg-[url('/imgs/noise6.png')] ",
        "top-[-300%] left-[-150%] h-[600%] w-[600%]",
        "animate-grain"
      )}
    />
  );
};

export default Noise;
