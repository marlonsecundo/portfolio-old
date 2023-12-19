import React from "react";
import { twMerge } from "tailwind-merge";
import Noise from "../noise";
import "./index.css";

import RadialCursorEffect from "../radial-cursor-effect";
import ViewBody from "./view-body";
import { paddingClass } from "@/app/styles/metrics";
interface ViewWrapperProps {
  className?: string | undefined;
  children?: React.ReactNode;
  innerClassName?: string | undefined;
}

interface ViewWrapperComps {
  TopSpace: React.FC;
}

interface ViewPaddingProps {
  className?: string | undefined;
  children?: React.ReactNode;
}

export const ViewPadding: React.FC<ViewPaddingProps> = ({
  children,
  className,
}) => <div className={twMerge(paddingClass, className)}>{children}</div>;

const ViewWrapper: React.FC<ViewWrapperProps> & ViewWrapperComps = ({
  className,
  children,
  innerClassName,
}) => {
  return (
    <section
      className={twMerge(
        "bg-base-100 flex flex-col w-full snap-start bg-opacity-60 relative h-screen max-h-screen fix-z-index overflow-clip",
        className
      )}
    >
      <Noise></Noise>

      <RadialCursorEffect></RadialCursorEffect>

      <ViewBody className={innerClassName}>{children}</ViewBody>
    </section>
  );
};

ViewWrapper.TopSpace = () => <div className="mt-10 md:mt-20"></div>;

export default ViewWrapper;
