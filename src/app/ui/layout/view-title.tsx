import React from "react";

interface ViewTitleProps {
  text: string;
}

const ViewTitle: React.FC<ViewTitleProps> = ({ text }) => {
  return <h1 className="text-4xl md:text-5xl mb-5 text-primary">{text}</h1>;
};

export default ViewTitle;
