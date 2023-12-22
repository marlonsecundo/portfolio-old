"use client";

import { useAnimateWhenVisible } from "@/app/hooks/useAnimateWhenVisible";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ViewDescriptionProps {
  className?: string;
  animateClass?: string;
}

const ViewDescription: React.FC<
  React.PropsWithChildren<ViewDescriptionProps>
> = ({ children, className, animateClass = "animate-fadeDown" }) => {
  const [ref, animate] = useAnimateWhenVisible();

  return (
    <p
      ref={ref}
      className={twMerge(
        "text-base max-w-lg self-center text-center mb-5 opacity-0 animate-fill-both",
        className,
        animate && animateClass
      )}
    >
      {children}
    </p>
  );
};

export default ViewDescription;
