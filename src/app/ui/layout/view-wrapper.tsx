import React from "react";
import { twMerge } from "tailwind-merge";
import Noise from "../noise";
import "./index.css";
import RadialCursorEffect from "../radial-cursor-effect";
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

export const paddingClass = "px-5 xs:px-[5vw] lg:px-[5vw] 2xl:px-[15vw]";

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

      <div
        className={twMerge(
          "flex flex-col w-full h-full overflow-y-scroll hide-scrollbar z-0",
          paddingClass,
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

ViewWrapper.TopSpace = () => <div className="mt-10 md:mt-20"></div>;

export default ViewWrapper;
