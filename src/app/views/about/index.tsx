import ViewWrapper from "@/app/ui/layout/view-wrapper";
import { abouts } from "@/assets/data/abouts";
import Image from "next/image";
import React from "react";

import profileImg from "@/assets/images/profile.jpg";
// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <div>
      <ViewWrapper className="bg-base-200 h-screen">
        <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
        <h3 className="text-secondary text-xs">ABOUT</h3>

        <h1 className="text-secondary text-2xl mt-4">
          Nice to <br />
          meet you!
        </h1>

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

        <div className="flex-1"></div>

        <div className="flex flex-col items-center">
          <Image
            className="w-1/2 shadow rounded-full"
            src={profileImg}
            alt="Profile Image"
          ></Image>

          <p className="mt-1">Marlon Secundo</p>
          <p className="text-sm">
            {new Date(Date.now()).getFullYear() - 1999} years old
          </p>
        </div>

        <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
      </ViewWrapper>
      <ViewWrapper className="h-screen justify-center items-center gap-5 relative">
        <a className="btn btn-ghost text-lg">Text me on Linkedin</a>

        <a className="btn btn-ghost text-lg h-fit p-5 ">
          Mail me at{" "}
          <span className="text-base">marlon_secundo@outlook.com</span>
        </a>

        <a className="btn btn-ghost text-lg  h-fit p-5 ">
          See my projects on Github!
        </a>

        <a className="btn btn-ghost text-lg h-fit p-5 ">Resume</a>

        <div className="absolute bottom-10 flex">
          <p>{new Date(Date.now()).getFullYear()} /</p>
          <a className="link ml-1 text-secondary">Natal - RN</a>
        </div>
      </ViewWrapper>
    </div>
  );
};

export default About;
