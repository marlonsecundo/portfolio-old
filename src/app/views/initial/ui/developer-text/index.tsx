"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const DeveloperText: React.FC = () => {
  const textBase = "Developer";

  const [text, setText] = useState("");

  useEffect(() => {
    const timeId = setTimeout(() => {
      setText((prev) => {
        if (text.length === textBase.length) return prev;

        return textBase.substring(0, text.length + 1);
      });
    }, 100);

    return () => clearTimeout(timeId);
  }, [text]);

  return (
    <div className="text-secondary text-3xl lg:text-5xl font-bold flex">
      <p className="">{text}</p>
      <p
        className={twMerge(
          text.length === textBase.length && "animate-underline"
        )}
      >
        _
      </p>
    </div>
  );
};

export default DeveloperText;
