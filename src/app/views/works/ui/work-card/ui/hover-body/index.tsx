import { Work } from "@/app/models/work";
import TechCard from "@/app/ui/tech-card";
import React from "react";
import { twMerge } from "tailwind-merge";

interface HoverBodyProps {
  work: Work;
  visible: boolean;
}

export const HoverBody: React.FC<HoverBodyProps> = ({ work, visible }) => {
  return (
    <div
      className={twMerge(
        "absolute bg-base-300 h-full w-full z-20 top-0 px-10 flex flex-col justify-between transition-all ease-out duration-300",
        "md:relative md:bg-transparent md:h-auto md:max-w-xs",
        visible ? "h-full" : "h-0 overflow-hidden"
      )}
    >
      <div className="flex flex-col">
        <h5 className="text-lg opacity-0 select-none mb-5">....</h5>

        <p className="self-center mb-4 opacity-0 select-none md:opacity-100 md:select-auto">
          ~
        </p>
        <p className="text-justify">{work.expText}</p>
      </div>

      {/* <div>
        <p className="text-secondary mt-2">BULLET POINTS</p>
        <p>{work.bulletPoints}</p>
      </div> */}

      <div>
        <p className="text-secondary mt-2">TECHS</p>
        <div className="flex flex-wrap gap-3 justify-between">
          {work.technologies.map((t) => (
            <div key={t.title} className="w-10 h-10 ">
              <TechCard tech={t} titleVisible={false}></TechCard>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5"></div>
    </div>
  );
};
