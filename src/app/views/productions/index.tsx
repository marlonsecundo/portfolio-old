import ViewTitle from "@/app/ui/layout/view-title";
import ViewWrapper from "@/app/ui/layout/view-wrapper";
import { productions } from "@/assets/data/productions";

import React from "react";
import ProductionCard from "./ui/production-card";
import ProductionCardImage from "./ui/production-card-image";

const Productions: React.FC = () => {
  return (
    <ViewWrapper className="h-screen">
      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>

      <div id="apps" className="self-center">
        <ViewTitle text="~/apps"></ViewTitle>
      </div>

      <div className="grid gap-5 grid-cols-3">
        <div className="col-span-2">
          <ProductionCard p={productions[0]}></ProductionCard>
        </div>
        <div className="row-span-2">
          <ProductionCardImage p={productions[6]}></ProductionCardImage>
        </div>

        <div className="">
          <ProductionCard vertical={true} p={productions[1]}></ProductionCard>
        </div>
        <div className="col-span-1 row-span-1">
          <ProductionCardImage p={productions[2]}></ProductionCardImage>
        </div>
        <ProductionCard p={productions[4]}></ProductionCard>

        <div className="col-span-1">
          <ProductionCard p={productions[3]}></ProductionCard>
        </div>
        <div className="col-span-1">
          <ProductionCard p={productions[5]}></ProductionCard>
        </div>
      </div>
    </ViewWrapper>
  );
};

export default Productions;
