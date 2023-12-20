"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CodeLine } from "./codes";
import { twMerge } from "tailwind-merge";

interface LineProps {
  index: number;
  line: CodeLine;
  active: boolean;
  onFinish: (index: number) => void;
}

export const Line: React.FC<LineProps> = ({
  index,
  line,
  onFinish,
  active,
}) => {
  const [text, setText] = useState(active ? "" : line.text);
  const textFinished = text.length === line.text.length;

  useEffect(() => {
    if (!active) return;

    const timeId = setTimeout(() => {
      setText((prev) => {
        if (text.length === line.text.length) return prev;

        return line.text.substring(0, text.length + 1);
      });
    }, 25);

    return () => clearTimeout(timeId);
  }, [text]);

  useEffect(() => {
    if (!active) return;

    if (textFinished) {
      const timeID = setTimeout(() => {
        onFinish(index);
      }, line.waitingTime);

      return () => clearTimeout(timeID);
    }

    return () => {};
  }, [textFinished]);

  return (
    <pre data-prefix={line.prefix} className={line.colorClass}>
      <code className={twMerge(textFinished && active && "animate-pulseFast")}>
        {text}
      </code>
    </pre>
  );
};
