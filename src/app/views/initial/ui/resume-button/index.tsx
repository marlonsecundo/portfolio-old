import React from "react";
import { FaFilePdf } from "react-icons/fa6";

const ResumeButton: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 lg:w-fit">
      <p className="text-primary">in a rush?</p>

      <a href="resume.pdf" target="_blank" className="btn btn-primary">
        <FaFilePdf />
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
