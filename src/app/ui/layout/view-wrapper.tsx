import React from "react";
import { twMerge } from "tailwind-merge";
import Noise from "../noise";
import "./index.css";
interface ViewWrapperProps {
  className?: string | undefined;
  children?: React.ReactNode;
}

interface ViewWrapperComps {
  TopSpace: React.FC;
  NegativePadding: React.FC<ViewWrapperProps>;
}

interface ViewPaddingProps {
  className?: string | undefined;
  children?: React.ReactNode;
}

export const paddingClass = `px-5 xs:px-[10vw] lg:px-[12vw] 2xl:px-[15vw] `;

export const ViewPadding: React.FC<ViewPaddingProps> = ({
  children,
  className,
}) => <div className={twMerge(paddingClass, className)}>{children}</div>;

const ViewWrapper: React.FC<ViewWrapperProps> & ViewWrapperComps = ({
  className,
  children,
}) => {
  return (
    <section
      className={twMerge(
        "bg-base-100 flex flex-col w-full snap-start bg-opacity-60 relative overflow-clip z-0 fix-z-index",
        paddingClass,
        className
      )}
    >
      <Noise></Noise>

      {children}
    </section>
  );
};

ViewWrapper.NegativePadding = ({ children, className }) => (
  <div
    className={twMerge(
      "-mx-5 xs:-mx-[10vw] lg:-mx-[12vw] 2xl:-mx-[15vw]",
      className
    )}
  >
    {children}
  </div>
);

ViewWrapper.TopSpace = () => <div className="mt-10 md:mt-20"></div>;

export default ViewWrapper;
