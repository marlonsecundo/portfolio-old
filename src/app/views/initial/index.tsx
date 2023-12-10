import Image from "next/image";
import React from "react";
import profileImg from "@/assets/images/me.png";
import DeveloperText from "./ui/developer-text";
import { FaFilePdf } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ViewWrapper from "@/app/ui/layout/view-wrapper";

const Initial: React.FC = () => {
  return (
    <ViewWrapper className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-full w-3/5"
          alt="Marlon Secundo Profile Picture"
          src={profileImg}
        ></Image>

        <div className="mt-2">
          <DeveloperText></DeveloperText>
        </div>

        <p className="mt-3 text-justify">
          Hi! I am Marlon Secundo, I am a Dev Bachelor in I.T.
        </p>

        <p className="mt-3 text-secondary">and a little more.</p>

        <div className="flex flex-col mt-10">
          <p className="text-primary">in a rush?</p>

          <button className="btn btn-primary">
            <FaFilePdf />
            Download Resume
          </button>
        </div>

        <div className="absolute bottom-2 flex gap-3">
          <a className="">
            <FaLinkedin />
          </a>

          <a>
            <FaGithub />
          </a>
        </div>
      </div>
    </ViewWrapper>
  );
};

export default Initial;
