import React from "react";

import TechCard from "@/app/ui/tech-card";
import { technologies } from "@/assets/data/technologies";

interface TechCarouselProps {
  techs: Technology[];
  reverse?: boolean;
}

const TechCarousel: React.FC<TechCarouselProps> = ({ techs, reverse }) => {
  const infinityItem = (
    <div className="flex items-center gap-5">
      {techs.map((t, i) => (
        <div
          key={t.title}
          className={`w-20 h-32 p-3 ${i === techs.length - 1 ? " pr-10 " : ""}`}
        >
          <TechCard key={t.title} tech={t}></TechCard>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative h-fit overflow-hidden">
      <div
        className={`flex  w-fit` + (reverse ? " slider-reverse " : " slider ")}
      >
        {infinityItem}
        {infinityItem}
      </div>
    </div>
  );
};

export default TechCarousel;
