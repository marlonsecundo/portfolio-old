import ViewTitle from "@/app/ui/layout/view-title";
import ViewWrapper from "@/app/ui/layout/view-wrapper";
import React from "react";

import chatty from "@/assets/images/works/chatty.png";
import softRegiImg from "@/assets/images/works/brasil.png";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";

const Works: React.FC = () => {
  return (
    <ViewWrapper className="pl-0 pr-0 shadow-2xl">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
      <ViewWrapper.Padding>
        <ViewTitle text="Works"></ViewTitle>
        <p className="mt-1 text-justify">
          During my formation in I.T at IMD I worked on university projects and
          development stages in partnership with companies. Below I show some
          products that I participated in developing/creating.
        </p>
      </ViewWrapper.Padding>

      <ViewWrapper.Padding>
        <h1 className="text-lg text-secondary mt-5">My Productions</h1>
      </ViewWrapper.Padding>
      <div className="card w-full h-40 shadow-xl">
        <figure className="absolute z-0 h-full w-full object-contain opacity-10 pt-20">
          <Image src={chatty} alt="Chatty" />
        </figure>

        <div className="card-body z-10">
          <h2 className="card-title">
            <p>Chatty</p>
            <FaGooglePlay />
          </h2>
          <p>
            Social app with posts, profile, likes and firebase notification.
          </p>
        </div>
      </div>

      <ViewWrapper.Padding>
        <h1 className="text-lg text-secondary mt-5">Software Registrations</h1>
      </ViewWrapper.Padding>

      <div className="flex w-full justify-center gap-5">
        <button className="btn btn-ghost btn-square w-1/3 h-fit p-2">
          <Image src={softRegiImg} alt="Comunica"></Image>
          <p>Comunica</p>
        </button>
        <button className="btn btn-ghost btn-square w-1/3 h-fit p-2">
          <Image src={softRegiImg} alt="Comunica"></Image>
          <p>Adapt</p>
        </button>
      </div>

      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
    </ViewWrapper>
  );
};

export default Works;
