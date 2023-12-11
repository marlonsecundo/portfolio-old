import React from "react";

interface ViewWrapperProps {
  className?: string | undefined;
  children?: React.ReactNode;
}

interface ViewWrapperComps {
  TopSpace: React.FC;
  NegativePadding: React.FC<ViewWrapperProps>;
}

const ViewWrapper: React.FC<ViewWrapperProps> & ViewWrapperComps = ({
  className,
  children,
}) => {
  return (
    <section
      className={"flex flex-col bg-base-100 w-full px-5" + " " + className}
    >
      {children}
    </section>
  );
};

ViewWrapper.NegativePadding = ({ children, className }) => (
  <div className={"-mx-5" + " " + className}>{children}</div>
);

ViewWrapper.TopSpace = () => <div className="mt-10"></div>;

export default ViewWrapper;
