import ViewTitle from "@/app/ui/layout/view-title";
import ViewWrapper from "@/app/ui/layout/view-wrapper";
import React, { useEffect, useRef } from "react";

import softRegiImg from "@/assets/images/brasil.png";
import Image from "next/image";
import WorkCard from "./ui/work-card";
import { works } from "@/assets/data/works";
import { DevType } from "@/app/models/work";
import ExtraCard from "./ui/extra-card";
import { extras } from "@/assets/data/extras";
import ProductionCard from "./ui/production-card";
import { productions } from "@/assets/data/productions";
import { Slider } from "@/app/ui/slider";
import Carousel from "@/app/ui/carousel";

const Works: React.FC = () => {
  const mobileWorks = works.filter((w) => w.devType === DevType.MOBILE);
  const frontWorks = works.filter((w) => w.devType === DevType.FRONTEND);
  const backendWorks = works.filter((w) => w.devType === DevType.BACKEND);

  return (
    <ViewWrapper className="shadow-2xl h-screen">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>

      <div id="works" className="self-center">
        <ViewTitle text="~/works"></ViewTitle>
      </div>

      <p className="mt-1  text-base max-w-sm text-center self-center">
        During my formation in I.T at IMD I worked on university projects and
        development stages in partnership with companies. Below I show some
        products that I participated in developing/creating.
      </p>

      <div className="mt-5"></div>

      <div className="flex flex-col md:flex-row justify-between h-full ">
        <div className="flex flex-col">
          <ul>
            <h1 className="text-lg font-bold text-secondary mt-5 uppercase">
              Mobile
            </h1>

            {mobileWorks.map((m) => (
              <li key={m.title}>{m.title}</li>
            ))}

            <h1 className="text-lg font-bold text-secondary mt-5 uppercase">
              Frontend
            </h1>

            {frontWorks.map((f) => (
              <li key={f.title}>{f.title}</li>
            ))}

            <h1 className="text-lg font-bold text-secondary mt-5 uppercase">
              Backend
            </h1>

            {backendWorks.map((b) => (
              <li key={b.title}>{b.title}</li>
            ))}
          </ul>
        </div>

        <div className="">
          <WorkCard work={mobileWorks[0]}></WorkCard>
        </div>
      </div>

      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>

      {/* <div className="flex w-full gap-5 justify-center xs:justify-normal">
        <button className="btn btn-ghost btn-square w-1/3 h-fit p-2 xs:p-4 max-w-[8rem] ">
          <Image src={softRegiImg} alt="Comunica"></Image>
          <p>Comunica</p>
        </button>
        <button className="btn btn-ghost btn-square w-1/3 h-fit p-2 xs:p-4 max-w-[8rem] ">
          <Image src={softRegiImg} alt="Comunica"></Image>
          <p>Adapt</p>
        </button>
      </div> */}
    </ViewWrapper>
  );
};

export default Works;
