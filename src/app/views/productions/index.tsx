import ViewTitle from "@/app/ui/layout/view-title";
import ViewWrapper from "@/app/ui/layout/view-wrapper";
import { productions } from "@/assets/data/productions";

import React from "react";
import ProductionCard from "./ui/production-card";
import ProductionCardImage from "./ui/production-card-image";
import TitleDivider from "@/app/ui/divider";

import "@/app/styles/hide-scrollbar.css";

const Productions: React.FC = () => {
  return (
    <ViewWrapper className="bg-base-200">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>

      <div id="apps" className="self-center">
        <ViewTitle text=".apps"></ViewTitle>
      </div>

      <p className="text-base self-center mb-5 text-center">
        A compilation of clients and personal projects, of sites, games{" "}
        <br></br> and mobiles apps that I created.
      </p>

      <TitleDivider></TitleDivider>

      <div
        className="grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-2 "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="">
          <ProductionCard p={productions[0]}></ProductionCard>
        </div>
        <div className="md:row-span-2">
          <ProductionCardImage p={productions[6]}></ProductionCardImage>
        </div>

        <div className="">
          <ProductionCard vertical={false} p={productions[1]}></ProductionCard>
        </div>
        <div className="lg:col-span-1 lg:row-span-2">
          <ProductionCardImage p={productions[2]}></ProductionCardImage>
        </div>
        <ProductionCard p={productions[4]}></ProductionCard>

        <div className="lg:col-span-1">
          <ProductionCard p={productions[3]}></ProductionCard>
        </div>
        <div className="lg:col-span-1">
          <ProductionCard p={productions[5]}></ProductionCard>
        </div>

        <div className="mb-2 md:col-span-2"></div>
      </div>
    </ViewWrapper>
  );
};

export default Productions;
