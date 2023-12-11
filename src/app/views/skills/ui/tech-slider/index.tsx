import React from "react";

import TechCard from "@/app/ui/tech-card";
import { Slider } from "@/app/ui/slider";

interface TechCarouselProps {
  techs: Technology[];
  reverse?: boolean;
}

export const TechSlider: React.FC<TechCarouselProps> = ({ techs, reverse }) => {
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

  return <Slider element={infinityItem} reverse={reverse}></Slider>;
};
