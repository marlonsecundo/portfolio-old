import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

import noiseImg from "@/assets/images/noise6.png";
import { BASE_URL } from "../constants/page.constants";

const Noise: React.FC = () => {
  return (
    <div className="absolute w-full h-full overflow-clip">
      <div className="w-full h-full relative">
        <div
          style={{
            filter: "brightness(0%)",
            background: `url(${BASE_URL + noiseImg.src})`,
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
