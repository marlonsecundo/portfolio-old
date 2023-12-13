import React from "react";
import { twMerge } from "tailwind-merge";

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

export const paddingClass = `px-5 xs:px-[10vw] lg:px-[20vw] `;

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
        "bg-base-100 flex flex-col w-full snap-start	",
        paddingClass,
        className
      )}
    >
      {children}
    </section>
  );
};

ViewWrapper.NegativePadding = ({ children, className }) => (
  <div className={twMerge("-mx-5 xs:-mx-[10vw] lg:-mx-[20vw]", className)}>
    {children}
  </div>
);

ViewWrapper.TopSpace = () => <div className="mt-10 lg:mt-20"></div>;

export default ViewWrapper;
