"use client";

import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

import noiseImg from "@/assets/images/noise6.png";

const Noise: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute w-full h-full overflow-clip">
      <div className="w-full h-full relative">
        <div
          style={{
            filter: "brightness(0%)",
            background: `url(${noiseImg.src})`,
          }}
          className={twMerge(
            "absolute inset-0 bg-[200px] bg-repeat opacity-50 pointer-events-none  ",
            "top-[-300%] left-[-150%] h-[600%] w-[600%]",
            "lg:animate-grain"
          )}
        />
      </div>
    </div>
  );
};

export default Noise;
