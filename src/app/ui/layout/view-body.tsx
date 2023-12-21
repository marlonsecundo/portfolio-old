"use client";

import { paddingClass } from "@/app/styles/metrics";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ViewBodyProps {
  className?: string;
}

const ViewBody: React.FC<React.PropsWithChildren<ViewBodyProps>> = ({
  children,
  className,
}) => {
  const [containScroll, setContainScroll] = useState(false);

  const lastScrollTop = useRef(0);

  const handleOnScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;

    if (element.scrollTop < lastScrollTop.current) {
      if (element.scrollTop === 0) {
        setContainScroll(false);
      }

      return;
    }

    lastScrollTop.current = element.scrollTop <= 0 ? 0 : element.scrollTop;
    if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
      setContainScroll(false);

      return;
    }

    setContainScroll(true);
  };

  return (
    <div
      // onScroll={handleOnScroll}
      className={twMerge(
        "flex flex-col w-full h-full lg:overflow-y-scroll hide-scrollbar z-0",
        paddingClass,
        className
        // containScroll && "overscroll-contain"
      )}
    >
      {children}
    </div>
  );
};

export default ViewBody;
