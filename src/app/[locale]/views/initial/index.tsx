import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ViewWrapper from "@/app/[locale]/ui/layout/view-wrapper";
import ProfileCard from "./ui/profile-card";
import ResumeButton from "./ui/resume-button";
import Terminal from "./ui/terminal";
import { NegativePadding } from "@/app/[locale]/ui/layout/negative-padding";

const Initial: React.FC = () => {
  return (
    <ViewWrapper innerClassName="justify-center h-screen ">
      <NegativePadding className="">
        <div
          id="home"
          className="flex flex-1 justify-center  lg:scale-[.85] xl:scale-95 lg:-translate-y-1/4"
        >
          <div className="hidden w-full lg:flex lg:flex-col items-end translate-x-10 translate-y-1/3">
            <Terminal></Terminal>
          </div>

          <div className="w-full flex justify-center lg:justify-normal lg:-translate-x-10 ">
            <ProfileCard></ProfileCard>
          </div>
        </div>
      </NegativePadding>

      <div className="self-center lg:hidden">
        <ResumeButton></ResumeButton>
      </div>

      <div className="absolute  bottom-0 self-center  flex gap-0">
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
    </ViewWrapper>
  );
};

export default Initial;
