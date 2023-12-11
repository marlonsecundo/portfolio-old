import ViewTitle from "@/app/ui/layout/view-title";
import ViewWrapper from "@/app/ui/layout/view-wrapper";
import React from "react";
import Education from "./ui/education";
import { technologies } from "@/assets/data/technologies";
import { TechSlider } from "./ui/tech-slider";

const Skills: React.FC = () => {
  return (
    <div className="bg-base-100">
      <ViewWrapper className="flex bg-base-200 w-full rounded-tr-badge rounded-bl-badge overflow-clip ">
        <ViewWrapper.TopSpace />

        <ViewTitle text="Skills"></ViewTitle>

        <p className="mt-1">
          Over the past 8 years of learning many languages and coding in dev
          teams, in the last year I have been moving towards the goal of
          becoming a senior developer, always learning new stuff and challenging
          myself on different kinds of projects. I currently working as
          Fullstack Developer in Instituto Metrópole Digital.
        </p>

        <div className="mt-4"></div>

        <ViewWrapper.NegativePadding>
          <div className="bg-base-300 flex flex-col pb-5 -mx-5">
            <p className="text-lg text-secondary self-center mt-3">
              Experience with
            </p>

            <TechSlider
              techs={technologies.slice(0, technologies.length / 2)}
            ></TechSlider>

            <TechSlider
              techs={technologies.slice(
                technologies.length / 2,
                technologies.length
              )}
              reverse={true}
            ></TechSlider>
          </div>

          <div className="bg-base-300 flex flex-col gap-3 pb-5 items-center">
            <p className="text-lg text-secondary self-center mt-3">Also...</p>

            <div className="flex">
              <a className="btn btn-ghost">SCRUM</a>
              <a className="btn btn-ghost">GIT FLOW</a>
              <a className="btn btn-ghost">S.O.L.I.D</a>
            </div>
          </div>
        </ViewWrapper.NegativePadding>

        <Education></Education>
      </ViewWrapper>
    </div>
  );
};

export default Skills;
