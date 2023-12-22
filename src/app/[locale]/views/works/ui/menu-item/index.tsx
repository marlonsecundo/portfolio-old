"use client";

import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

interface MenuItemProps {
  selected: boolean;
  text: string;
  index: string;
  onClick: (key: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  selected,
  text,
  index,
  onClick,
}) => {
  return (
    <li
      className="my-2 flex items-center flex-col lg:flex-row cursor-pointer "
      onClick={() => onClick(index)}
    >
      {selected && (
        <p className={twMerge("lg:ml-4 lg:mr-2 text-accent animate-fade")}>~</p>
      )}

      <div
        className={twMerge(
          "flex opacity-40 hover:opacity-100",
          selected && "text-accent opacity-100 pr-0",
          // !selected && "hover:translate-x-5 transition-all"
          "group transition-all hover:scale-110 lg:hover:scale-100"
        )}
      >
        <div
          className={twMerge(
            "w-0 lg:group-hover:w-9 transition-all",
            selected && "hidden"
          )}
        ></div>
        {text.toLowerCase()}
      </div>
    </li>
  );
};

export default MenuItem;
