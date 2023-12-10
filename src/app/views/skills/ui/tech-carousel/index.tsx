import React from "react";

import TechCard from "@/app/ui/tech-card";
import { technologies } from "@/assets/data/technologies";

interface TechCarouselProps {
  techs: Technology[];
}

const TechCarousel: React.FC<TechCarouselProps> = ({ techs }) => {
  const infinityItem = (
    <div className="flex items-center gap-5">
      {techs.map((t, i) => (
        <div
          key={t.title}
          className={`w-20 h-32 p-3 ${i === techs.length - 1 ? " pr-5 " : ""}`}
        >
          <TechCard key={t.title} tech={t}></TechCard>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative h-fit overflow-hidden">
      <div className={`flex slider w-fit`}>
        {infinityItem}
        {infinityItem}
      </div>
    </div>
  );
};

export default TechCarousel;
