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
  const rightGra = `absolute z-20 right-0 top-0 bottom-0 ${gradientWidth} h-full bg-gradient-to-l ${gradientBaseColor} from-10% to-transparent to-100%`;

  const leftGra = `absolute z-20 left-0 top-0 bottom-0 ${gradientWidth} h-full bg-gradient-to-r ${gradientBaseColor} from-10% to-transparent to-100%`;

  return (
    <div className="relative h-fit overflow-hidden">
      <div
        className={`flex  w-fit` + (reverse ? " slider-reverse " : " slider ")}
      >
        {element}
        {element}
      </div>
      <div className={leftGra}></div>
      <div className={rightGra}></div>
    </div>
  );
};
