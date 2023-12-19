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
      className="my-2 flex items-center cursor-pointer"
      onClick={() => onClick(index)}
    >
      <p
        className={twMerge(
          selected && "ml-4 mr-2 text-accent animate-fade",
          !selected &&
            "ml-4 mr-2 text-secondary select-none opacity-0 lg:hidden"
        )}
      >
        ~
      </p>

      <div
        className={twMerge(
          "flex opacity-40 hover:opacity-100",
          selected && "text-accent opacity-100 pr-0",
          // !selected && "hover:translate-x-5 transition-all"
          "group transition-all"
        )}
      >
        <div
          className={twMerge(
            "w-0 group-hover:w-9 transition-all",
            selected && "hidden"
          )}
        ></div>
        {text.toLowerCase()}

        <div
          className={twMerge(
            "w-9 group-hover:w-0 transition-all",
            selected && "hidden"
          )}
        ></div>
      </div>
    </li>
  );
};

export default MenuItem;
