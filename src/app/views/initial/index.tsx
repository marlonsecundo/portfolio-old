import Image from "next/image";
import React from "react";
import profileImg from "@/assets/images/me.png";
import DeveloperText from "./ui/developer-text";
import { FaFilePdf } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ViewWrapper from "@/app/ui/layout/view-wrapper";

const Initial: React.FC = () => {
  return (
    <ViewWrapper className="h-screen flex justify-center items-center relative bg-opacity-95">
      <Image
        className="absolute w-full h-full object-cover -z-10"
        src={{
          src: "/imgs/background.png",
          width: 2560,
          height: 1600,
        }}
        alt="background image"
      ></Image>

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

          <a href="resume.pdf" target="_blank" className="btn btn-primary">
            <FaFilePdf />
            Download Resume
          </a>
        </div>

        <div className="absolute bottom-0 flex gap-0">
          <a
            href="https://www.linkedin.com/in/marlon-s-b6065480/"
            target="_blank"
            className="btn btn-ghost text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/marlonsecundo"
            target="_blank"
            className="btn btn-ghost text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </ViewWrapper>
  );
};

export default Initial;
