import React from "react";
import { twMerge } from "tailwind-merge";

interface NegativePaddingProps {
  className?: string | undefined;
  style?: React.CSSProperties;
}
export const NegativePadding = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<NegativePaddingProps>
>((props, ref) => (
  <div
    ref={ref}
    style={props.style}
    className={twMerge(
      "-mx-5 xs:-mx-[5vw] lg:-mx-[5vw] 2xl:-mx-[15vw]",
      props.className
    )}
  >
    {props.children}
  </div>
));

NegativePadding.displayName = "NegativePadding";
