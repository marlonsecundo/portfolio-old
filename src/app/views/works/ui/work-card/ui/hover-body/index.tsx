import { Work } from "@/app/models/work";
import TechCard from "@/app/ui/tech-card";
import React from "react";

interface HoverBodyProps {
  work: Work;
  visible: boolean;
}

export const HoverBody: React.FC<HoverBodyProps> = ({ work, visible }) => {
  const visibleClass = visible ? " h-full pt-10 " : " h-0 ";

  return (
    <div
      className={
        "z-20 absolute top-0 bg-base-300 px-10 flex flex-col overflow-hidden justify-between transition-all	ease-out duration-300 " +
        visibleClass
      }
    >
      <div>
        <h5 className="text-lg opacity-0 select-none mb-5">....</h5>
        <p className="text-justify">{work.expText}</p>
      </div>

      <div>
        <p className="text-secondary mt-2">BULLET POINTS</p>
        <p>{work.bulletPoints}</p>
      </div>

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
