"use client";

import { useAnimateWhenVisible } from "@/app/hooks/useAnimateWhenVisible";
import { usePreviousMemo } from "@/app/hooks/usePreviousMemo";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import React, { use, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ViewTitleProps {
  text: string;
}

const ViewTitle: React.FC<ViewTitleProps> = ({ text }) => {
  const [ref, animate] = useAnimateWhenVisible();
  return (
    <h1
      ref={ref}
      className={twMerge(
        "text-4xl md:text-5xl xl:text-7xl mb-5 xl:mb-5 text-primary opacity-0 animate-fill-both",
        animate && "animate-fade animate-duration-[1500ms] animate-ease-in"
      )}
    >
      {text}
    </h1>
  );
};

export default ViewTitle;
