"use client";

import React from "react";
import { Line } from "./last-line";
import useController from "./controller";
import { twMerge } from "tailwind-merge";

const Terminal: React.FC = () => {
  const { activeLines, handleOnFinishLine, activeCode } = useController();

  return (
    <div
      className={twMerge(
        "hidden lg:block mockup-code bg-base-200 translate-y-1/2 ",
        "w-full h-full max-w-lg"
      )}
    >
      {activeLines.map((l, i) => (
        <Line
          key={l.text}
          active={
            i === activeLines.length - 1 && i !== activeCode.lines.length - 1
          }
          index={i}
          line={l}
          onFinish={handleOnFinishLine}
        ></Line>
      ))}
    </div>
  );
};

export default Terminal;
