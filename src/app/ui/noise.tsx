"use client";

import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

const Noise: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute w-full h-full">
      <div className="w-full h-full relative">
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
      </div>
    </div>
  );
};

export default Noise;
