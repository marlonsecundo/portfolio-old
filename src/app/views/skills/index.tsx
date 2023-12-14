import ViewTitle from "@/app/ui/layout/view-title";
import ViewWrapper, { ViewPadding } from "@/app/ui/layout/view-wrapper";
import React from "react";
import Education from "./ui/education";
import { technologies } from "@/assets/data/technologies";
import { TechSlider } from "./ui/tech-slider";
import TitleDivider from "@/app/ui/divider";

const Skills: React.FC = () => {
  return (
    <ViewWrapper className="flex bg-base-200 w-full rounded-tr-badge rounded-bl-badge overflow-clip h-screen ">
      <ViewWrapper.TopSpace />

      <div id="skills" className="self-center">
        <ViewTitle text="~/skills"></ViewTitle>
      </div>

      <p className="mt-1 text-base max-w-lg self-center text-center mb-5">
        Over the past 8 years of learning many languages and coding in dev
        teams, in the last year I have been moving towards the goal of becoming
        a senior developer, always learning new stuff and challenging myself on
        different kinds of projects.
      </p>

      <TitleDivider></TitleDivider>

      <div className="flex flex-col">
        <div className="mt-5"></div>
        <p className="text-lg text-secondary self-center">Experience with</p>

        <div className="lg:px-24">
          <TechSlider
            techs={technologies.slice(0, technologies.length / 2)}
          ></TechSlider>
        </div>

        <div className="lg:px-24">
          <TechSlider
            techs={technologies.slice(
              technologies.length / 2,
              technologies.length
            )}
            reverse={true}
          ></TechSlider>
        </div>
      </div>

      <Education></Education>
    </ViewWrapper>
  );
};

export default Skills;
