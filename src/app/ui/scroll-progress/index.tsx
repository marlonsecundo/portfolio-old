"use client";

import { ViewsIDs } from "@/app/constants/page.constants";
import { usePreviousMemo } from "@/app/hooks/usePreviousMemo";
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import React, { useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";

const ScrollProgress: React.FC = () => {
  const [{ y }] = useWindowScroll();
  const { height } = useWindowSize();

  const scrollY = y ?? 0;
  const viewHeight = height ?? 0;
  const asideRef = useRef<HTMLElement>(null);

  const viewsPostions = useMemo(() => {
    return Object.keys(ViewsIDs).map((_, i) => i * viewHeight);
  }, [height]);

  const [index, _, prevIndex] = usePreviousMemo(
    () => {
      for (let i = 0; i < viewsPostions.length; i++) {
        if (scrollY < viewsPostions[i]) return i - 1;
      }
      return viewsPostions.length - 1;
    },
    [scrollY, viewsPostions],
    0
  );

  console.log({ index, prevIndex });

  return (
    <aside
      ref={asideRef}
      className="hidden fixed md:flex flex-col self-center right-0 top-1/2 -translate-y-1/2 m-10 my-0 z-10 gap-5"
    >
      {Object.keys(ViewsIDs).map((_, i) => (
        <div
          key={i}
          className={twMerge(
            "w-5 h-5 bg-base-300 border-2 border-secondary  animate-fill-both",
            i === index && "animate-squareToCircle",
            i === prevIndex && "animate-circleToSquare"
          )}
        ></div>
      ))}
    </aside>
  );
};

export default ScrollProgress;
