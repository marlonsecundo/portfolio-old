"use client";

import React from "react";
import { Line } from "./last-line";
import useController from "./controller";
import { twMerge } from "tailwind-merge";
import ResumeButton from "../resume-button";

const Terminal: React.FC = () => {
  const { activeLines, handleOnFinishLine, activeCode } = useController();

  return (
    <div className="w-full h-full max-w-lg  animate-fadeRight">
      <ResumeButton></ResumeButton>
      <div className="mt-2"></div>
      <div className={twMerge("mockup-code bg-base-200 h-full", "")}>
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
    </div>
  );
};

export default Terminal;
