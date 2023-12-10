import React from "react";

interface ViewWrapperProps {
  className?: string | undefined;
  children?: React.ReactNode;
}

interface ViewWrapperComps {
  TopSpace: React.FC;
  Padding: React.FC<ViewWrapperProps>;
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

ViewWrapper.Padding = ({ children, className }) => (
  <div className={"px-5" + " " + className}>{children}</div>
);

ViewWrapper.TopSpace = () => <div className="mt-10"></div>;

export default ViewWrapper;
