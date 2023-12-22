"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const scrollLength = width ?? 300;

  return (
    <div className="flex flex-col w-full ">
      <div ref={divRef} className="carousel carousel-center w-full space-x-5 ">
        {items.map((i, index) => (
          <div
            className="carousel-item w-full sm:w-auto justify-center"
            key={index}
          >
            {i}
          </div>
        ))}
      </div>

      <div className="flex z-10 self-center w-full overflow-clip justify-between bg-base-200 rounded-b-xl">
        <button
          onClick={() => divRef.current?.scrollTo(-scrollLength, 0)}
          className="btn btn-ghost btn-sm btn-square"
        >
          <MdKeyboardArrowLeft size={30}></MdKeyboardArrowLeft>
        </button>

        <button
          onClick={() => divRef.current?.scrollTo(scrollLength, 0)}
          className="btn btn-ghost btn-sm btn-square"
        >
          <MdKeyboardArrowRight size={30}></MdKeyboardArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
