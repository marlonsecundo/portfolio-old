import React from "react";

interface ViewTitleProps {
  text: string;
}

const ViewTitle: React.FC<ViewTitleProps> = ({ text }) => {
  return <h1 className="text-3xl">{text}</h1>;
};

export default ViewTitle;
