import React, { useEffect, useState } from "react";
import { Code, CodeLine, codes } from "./codes";
import { getRandomIndexFromArray } from "@/app/utils/get-random-index-from-array";

const useController = () => {
  const [activeCode, setActiveCode] = useState(
    codes[getRandomIndexFromArray(codes, -1)]
  );

  const [activeLines, setActiveLines] = useState<CodeLine[]>(
    activeCode.lines.filter((c, i) => i === 0)
  );

  const finishedCode = activeLines.length - 1 === activeCode.lines.length - 1;

  const handleOnFinishLine = (index: number) => {
    if (index + 1 >= activeCode.lines.length) return;

    setActiveLines((prev) => [...prev, activeCode.lines[index + 1]]);
  };

  useEffect(() => {
    if (finishedCode) {
      const timeId = setTimeout(() => {
        const index = codes.findIndex(
          (c) => c.lines[0].text === activeCode.lines[0].text
        );

        const newCode = codes[getRandomIndexFromArray(codes, index)];

        setActiveCode(newCode);
        setActiveLines(newCode.lines.filter((c, i) => i === 0));
      }, 3000);

      return () => clearTimeout(timeId);
    }
  }, [finishedCode]);

  return { handleOnFinishLine, activeLines, finishedCode, activeCode };
};

export default useController;
