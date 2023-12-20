import ViewTitle from "@/app/ui/layout/view-title";
import ViewWrapper, { ViewPadding } from "@/app/ui/layout/view-wrapper";
import React from "react";
import Education from "./ui/education";
import { technologies } from "@/assets/data/technologies";
import { TechSlider } from "./ui/tech-slider";
import TitleDivider from "@/app/ui/divider";

import "@/app/styles/hide-scrollbar.css";
import ViewDescription from "@/app/ui/layout/view-description";

const Skills: React.FC = () => {
  return (
    <ViewWrapper className="bg-base-200" innerClassName="">
      <ViewWrapper.TopSpace />

      <div id="skills" className="self-center">
        <ViewTitle text=".skills"></ViewTitle>
      </div>

      <ViewDescription>
        Over the past 8 years of learning many languages and coding in dev
        teams, in the last year I have been moving towards the goal of becoming
        a senior developer, always learning new stuff and challenging myself on
        different kinds of projects.
      </ViewDescription>

      <TitleDivider></TitleDivider>

      <div className="flex flex-col">
        <div className="mt-5"></div>
        <p className="text-lg text-secondary self-center">Experience with</p>

        <div className="lg:px-24">
          <div className="rounded-lg overflow-clip rounded-b-none">
            <TechSlider
              techs={technologies.slice(0, technologies.length / 2)}
            ></TechSlider>
          </div>
        </div>

        <div className="lg:px-24">
          <div className="rounded-lg overflow-clip rounded-t-none">
            <TechSlider
              techs={technologies.slice(
                technologies.length / 2,
                technologies.length
              )}
              reverse={true}
            ></TechSlider>
          </div>
        </div>
      </div>

      <Education></Education>

      <ViewWrapper.TopSpace></ViewWrapper.TopSpace>
    </ViewWrapper>
  );
};

export default Skills;
