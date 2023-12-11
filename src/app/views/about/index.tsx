import ViewWrapper from "@/app/ui/layout/view-wrapper";
import { abouts } from "@/assets/data/abouts";
import Image from "next/image";
import React from "react";

import profileImg from "@/assets/images/profile.jpg";
// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <div>
      <ViewWrapper className="bg-base-300 h-screen">
        <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
        <h3 className="text-secondary text-xs">ABOUT</h3>

        <div className="flex mt-4 justify-between w-full  overflow-hidden">
          <h1 className="whitespace-nowrap text-secondary text-2xl ">
            Nice to <br />
            meet you!
          </h1>

          <div className="relative flex-shrink-0 h-full w-1/4">
            <Image
              className="absolute right-0 bottom-0 object-contain shadow  h-full mask mask-squircle"
              src={profileImg}
              alt="Profile Image"
            ></Image>
          </div>
        </div>

        <div className="mt-5"></div>

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

        <ViewWrapper.NegativePadding className="flex-1 flex flex-col justify-end">
          <a
            href="https://www.linkedin.com/in/marlon-s-b6065480/"
            target="_blank"
            className="btn btn-ghost"
          >
            Text me on Linkedin
          </a>

          <a
            href="mailto:marlon_secundo@outlook.com"
            target="_blank"
            className="btn btn-ghost h-fit p-5 "
          >
            Mail me at{" "}
            <span className="text-sm">marlon_secundo@outlook.com</span>
          </a>

          <a
            href="https://github.com/marlonsecundo"
            target="_blank"
            className="btn btn-ghost  h-fit p-5 "
          >
            See my projects on Github!
          </a>

          <a
            href="resume.pdf"
            target="_blank"
            className="btn btn-ghost h-fit p-5 "
          >
            Resume
          </a>

          <div className="flex self-center mt-10">
            <p>{new Date(Date.now()).getFullYear()} /</p>
            <a className="link ml-1 text-secondary">Natal - RN</a>
          </div>
        </ViewWrapper.NegativePadding>

        {/* <div className="flex flex-col items-center">
          
          <p className="mt-1">Marlon Secundo</p>
          <p className="text-sm">
            {new Date(Date.now()).getFullYear() - 1999} years old
          </p>
        </div> */}

        <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
      </ViewWrapper>
      <ViewWrapper className="h-screen justify-center items-center gap-5 relative"></ViewWrapper>
    </div>
  );
};

export default About;
