"use client";

import React from "react";

import "./index.css";
import { useMouse, useWindowScroll } from "@uidotdev/usehooks";

const RadialCursorEffect: React.FC = () => {
  const [{ x, y }] = useMouse();
  const [{ y: wY }] = useWindowScroll();

  const mouseY = y - (wY ?? 0);

  return (
    <div className="hidden lg:block absolute w-full h-full  overflow-clip ">
      <div
        className="absolute w-1/2 h-[50vw] radial-gradient rounded-full overflow-clip"
        style={{
          top: `calc(${mouseY}px - 25vw)`,
          left: `calc(${x}px - 25%)`,
        }}
      ></div>
    </div>
  );
};

export default RadialCursorEffect;
