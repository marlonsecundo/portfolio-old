"use client";

import ViewTitle from "@/app/ui/layout/view-title";
import ViewWrapper from "@/app/ui/layout/view-wrapper";
import React, { useMemo, useState } from "react";

import WorkCard from "./ui/work-card";
import { works } from "@/assets/data/works";
import { DevType } from "@/app/models/work";
import TitleDivider from "@/app/ui/divider";
import Menu from "./ui/menu";
import "@/app/styles/hide-scrollbar.css";
import { NegativePadding } from "@/app/ui/layout/negative-padding";
import ViewDescription from "@/app/ui/layout/view-description";

const Works: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(works[0].title);

  const currrentWork = useMemo(() => {
    return works.find((w) => w.title === selectedIndex) ?? works[0];
  }, [selectedIndex]);

  return (
    <ViewWrapper className="shadow-2xl">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>

      <div id="works" className="self-center">
        <ViewTitle text=".works"></ViewTitle>
      </div>

      <ViewDescription className="">
        During my formation in I.T at IMD I worked on university projects and
        development stages in partnership with companies. Below I show some
        products that I participated in developing/creating.
      </ViewDescription>

      <div className="mt-5"></div>

      <TitleDivider></TitleDivider>

      <NegativePadding className="xl:mx-0 lg:h-full ">
        <div className="flex flex-col justify-between  h-full lg:mt-0 lg:justify-center lg:gap-10 xl:justify-center lg:flex-row  xl:gap-32  overflow-clip ">
          <Menu index={selectedIndex} onSelectedItem={setSelectedIndex}></Menu>

          <WorkCard work={currrentWork}></WorkCard>
        </div>
      </NegativePadding>

      <div className="hidden lg:block">
        <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
      </div>

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
