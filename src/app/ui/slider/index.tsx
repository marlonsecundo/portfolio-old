import React from "react";
interface CarouselProps {
  element: React.ReactElement;
  reverse?: boolean;
}

export const Slider: React.FC<CarouselProps> = ({ element, reverse }) => {
  return (
    <div className="relative h-fit overflow-hidden">
      <div
        className={`flex  w-fit` + (reverse ? " slider-reverse " : " slider ")}
      >
        {element}
        {element}
      </div>
    </div>
  );
};
