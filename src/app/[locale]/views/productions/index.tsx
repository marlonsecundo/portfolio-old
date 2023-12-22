"use client";

import ViewTitle from "@/app/[locale]/ui/layout/view-title";
import ViewWrapper from "@/app/[locale]/ui/layout/view-wrapper";
import { productions } from "@/assets/data/productions";

import React from "react";
import ProductionCard from "./ui/production-card";
import ProductionCardImage from "./ui/production-card-image";
import TitleDivider from "@/app/[locale]/ui/divider";

import "@/app/styles/hide-scrollbar.css";
import ViewDescription from "@/app/[locale]/ui/layout/view-description";
import { useAnimateWhenVisible } from "@/app/hooks/useAnimateWhenVisible";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { RouteParams } from "../../route-params";

const Productions: React.FC = () => {
  const [ref, animate] = useAnimateWhenVisible();

  const p = useParams<RouteParams>();

  const t = useTranslations("apps");

  return (
    <ViewWrapper className="bg-base-200">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>

      <div ref={ref} id="apps" className="self-center">
        <ViewTitle text={t("title")}></ViewTitle>
      </div>

      <ViewDescription className="" animateClass="animate-fade">
        {t("subtitle")}
        <br></br> {t("subtitle2")}
      </ViewDescription>

      <TitleDivider></TitleDivider>

      <div
        className="grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-2 "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex">
          <ProductionCard
            visible={animate}
            index={0}
            p={productions[p.locale][0]}
          ></ProductionCard>
        </div>
        <div className="flex md:row-span-2">
          <ProductionCardImage
            visible={animate}
            index={1}
            p={productions[p.locale][6]}
          ></ProductionCardImage>
        </div>

        <div className="flex">
          <ProductionCard
            visible={animate}
            index={2}
            vertical={false}
            p={productions[p.locale][1]}
          ></ProductionCard>
        </div>
        <div className="flex lg:col-span-1 lg:row-span-2">
          <ProductionCardImage
            visible={animate}
            index={3}
            p={productions[p.locale][2]}
          ></ProductionCardImage>
        </div>
        <ProductionCard
          visible={animate}
          index={4}
          p={productions[p.locale][4]}
        ></ProductionCard>

        <div className="flex lg:col-span-1">
          <ProductionCard
            visible={animate}
            index={5}
            p={productions[p.locale][3]}
          ></ProductionCard>
        </div>
        <div className="flex lg:col-span-1">
          <ProductionCard
            visible={animate}
            index={6}
            p={productions[p.locale][5]}
          ></ProductionCard>
        </div>

        <div className="mb-2 md:col-span-2"></div>
      </div>
    </ViewWrapper>
  );
};

export default Productions;
