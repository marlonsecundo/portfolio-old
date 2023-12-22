"use client";

import ViewTitle from "@/app/[locale]/ui/layout/view-title";
import ViewWrapper from "@/app/[locale]/ui/layout/view-wrapper";
import React, { useMemo, useState } from "react";

import WorkCard from "./ui/work-card";
import { works } from "@/assets/data/works";
import { DevType } from "@/app/models/work";
import TitleDivider from "@/app/[locale]/ui/divider";
import Menu from "./ui/menu";
import "@/app/styles/hide-scrollbar.css";
import { NegativePadding } from "@/app/[locale]/ui/layout/negative-padding";
import ViewDescription from "@/app/[locale]/ui/layout/view-description";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { RouteParams } from "../../route-params";

const Works: React.FC = () => {
  const p = useParams<RouteParams>();

  const [selectedIndex, setSelectedIndex] = useState(works[p.locale][0].title);

  const currrentWork = useMemo(() => {
    return (
      works[p.locale].find((w) => w.title === selectedIndex) ??
      works[p.locale][0]
    );
  }, [selectedIndex]);

  const t = useTranslations("works");

  return (
    <ViewWrapper className="shadow-2xl">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>

      <div id="works" className="self-center">
        <ViewTitle text={t("title")}></ViewTitle>
      </div>

      <ViewDescription className="">{t("subtitle")}</ViewDescription>

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
