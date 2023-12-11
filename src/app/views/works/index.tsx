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
  // .map(workToWorkCard);
  const frontWorks = works.filter((w) => w.devType === DevType.FRONTEND);
  // .map(workToWorkCard);
  const backendWorks = works.filter((w) => w.devType === DevType.BACKEND);
  // .map(workToWorkCard);

  return (
    <ViewWrapper className="shadow-2xl">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>

      <ViewTitle text="Works"></ViewTitle>
      <p className="mt-1 text-justify">
        During my formation in I.T at IMD I worked on university projects and
        development stages in partnership with companies. Below I show some
        products that I participated in developing/creating.
      </p>

      <h1 className="text-lg text-secondary mt-5">My Productions</h1>

      <ViewWrapper.NegativePadding>
        <Carousel
          items={[
            <ProductionCard production={productions[0]}></ProductionCard>,
            <ProductionCard production={productions[0]}></ProductionCard>,
          ]}
        ></Carousel>
      </ViewWrapper.NegativePadding>

      <h1 className="text-lg text-secondary mt-5">Software Registrations</h1>

      <ViewWrapper.NegativePadding>
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
      </ViewWrapper.NegativePadding>

      <h1 className="text-lg text-secondary mt-5">Mobile</h1>

      <ViewWrapper.NegativePadding>
        <Carousel
          items={mobileWorks.map((m) => (
            <WorkCard key={m.title} work={m}></WorkCard>
          ))}
        ></Carousel>
      </ViewWrapper.NegativePadding>

      <h1 className="text-lg text-secondary mt-5">Frontend / Desktop</h1>

      <ViewWrapper.NegativePadding>
        <Carousel
          items={frontWorks.map((f) => (
            <WorkCard key={f.title} work={f}></WorkCard>
          ))}
        ></Carousel>
      </ViewWrapper.NegativePadding>

      <h1 className="text-lg text-secondary mt-5">Backend</h1>

      <ViewWrapper.NegativePadding>
        <Carousel
          items={backendWorks.map((b) => (
            <WorkCard key={b.title} work={b}></WorkCard>
          ))}
        ></Carousel>
      </ViewWrapper.NegativePadding>

      <h1 className="text-lg text-secondary mt-5">Extras</h1>

      <Slider
        element={
          <div className="flex h-fit gap-5 last:ml-5">
            {extras.map((e) => (
              <ExtraCard key={e.text} extra={e}></ExtraCard>
            ))}
          </div>
        }
      ></Slider>

      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
    </ViewWrapper>
  );
};

export default Works;
