import React from "react";
interface CarouselProps {
  element: React.ReactElement;
  reverse?: boolean;
  gradientBaseColor?: string;
  gradientWidth?: string;
}

export const Slider: React.FC<CarouselProps> = ({
  element,
  reverse,
  gradientBaseColor = "from-base-300",
  gradientWidth = "w-10",
}) => {
  return (
    <div className="relative h-fit overflow-hidden">
      <div
        className={`flex  w-fit` + (reverse ? " slider-reverse " : " slider ")}
      >
        {element}
        {element}
      </div>
      <div
        className={` pointer-events-none absolute z-20 left-0 top-0 bottom-0 w-1/6 md:w-1/5 h-full bg-gradient-to-r ${gradientBaseColor} from-5% to-transparent to-100%`}
      ></div>
      <div
        className={`pointer-events-none absolute z-20 right-0 top-0 bottom-0 w-1/6 md:w-1/5 h-full bg-gradient-to-l ${gradientBaseColor} from-5% to-transparent to-100%`}
      ></div>
    </div>
  );
};
