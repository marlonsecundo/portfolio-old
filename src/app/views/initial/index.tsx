import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ViewWrapper from "@/app/ui/layout/view-wrapper";
import ProfileCard from "./ui/profile-card";
import ResumeButton from "./ui/resume-button";

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
        <div className="flex">
          <div className="hidden lg:block mockup-code bg-base-200 translate-y-1/2 h-3/4 pr-52">
            <pre data-prefix="$">
              <code>npm i daisyui</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>

          <div className="lg:-translate-y-[15%] lg:-translate-x-32">
            <ProfileCard></ProfileCard>
          </div>
        </div>

        <ResumeButton></ResumeButton>

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
