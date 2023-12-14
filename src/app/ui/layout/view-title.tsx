import React from "react";

interface ViewTitleProps {
  text: string;
}

const ViewTitle: React.FC<ViewTitleProps> = ({ text }) => {
  return (
    <h1 className="text-4xl md:text-5xl mb-5 text-primary opacity-100">
      {text}
    </h1>
  );
};

export default ViewTitle;
