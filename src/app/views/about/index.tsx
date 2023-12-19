import ViewWrapper from "@/app/ui/layout/view-wrapper";
import { abouts } from "@/assets/data/abouts";
import Image from "next/image";
import React from "react";

import profileImg from "@/assets/images/profile.jpg";
import { NegativePadding } from "@/app/ui/layout/negative-padding";

const About: React.FC = () => {
  return (
    <ViewWrapper className="h-screen">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
      <div className="flex flex-col flex-1 lg:flex-row">
        <div className="flex flex-col lg:w-1/3 bg-base-200 p-7 ">
          <h3 className="text-primary text-sm">~/about</h3>

          <div className="flex justify-between w-full  overflow-hidden ">
            <h1 className="whitespace-nowrap text-secondary text-2xl py-5 ">
              Nice to <br />
              meet you!
            </h1>

            <div className="relative flex-shrink-0 h-full w-1/4 lg:hidden">
              <Image
                className="absolute right-0 bottom-0 object-contain shadow  h-full mask mask-squircle"
                src={profileImg}
                alt="Profile Image"
              ></Image>
            </div>
          </div>

          <div className="flex flex-col gap-5 pr-5">
            {abouts.map((a) => (
              <div key={a.title}>
                <h4 className="underline underline-offset-2 text-sm">
                  {a.title}
                </h4>
                <p className="text-xs mt-1">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <NegativePadding className="flex-1 flex flex-col justify-center items-center lg:justify-center relative pb-10">
          <a
            href="https://www.linkedin.com/in/marlon-s-b6065480/"
            target="_blank"
            className="btn btn-ghost lg:text-xl "
          >
            Text me on Linkedin
          </a>

          <a
            href="mailto:marlon_secundo@outlook.com"
            target="_blank"
            className="btn btn-ghost h-fit p-5 lg:text-xl"
          >
            Mail me at{" "}
            <span className="text-sm lg:text-base">
              marlon_secundo@outlook.com
            </span>
          </a>

          <a
            href="https://github.com/marlonsecundo"
            target="_blank"
            className="btn btn-ghost  h-fit p-5 lg:text-xl"
          >
            See my projects on Github!
          </a>

          <a
            href="resume.pdf"
            target="_blank"
            className="btn btn-ghost h-fit p-5 lg:text-xl"
          >
            Resume
          </a>

          <div className="flex self-center mt-2 lg:text-lg lg:absolute lg:bottom-10">
            <p>{new Date(Date.now()).getFullYear()} /</p>
            <a className="link ml-1 text-secondary">Natal - RN</a>
          </div>
        </NegativePadding>
      </div>
    </ViewWrapper>
  );
};

export default About;
