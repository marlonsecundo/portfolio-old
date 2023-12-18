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
    <li className="my-2 flex items-center " onClick={() => onClick(index)}>
      <p
        className={twMerge(
          selected && "ml-4 mr-2 text-accent",
          !selected &&
            "ml-4 mr-2 text-secondary select-none opacity-0 lg:hidden"
        )}
      >
        ~
      </p>

      <p
        className={twMerge(
          "opacity-40 hover:opacity-100",
          selected && "text-accent opacity-100 pr-0"
        )}
      >
        {text.toLowerCase()}
      </p>

      <p
        className={twMerge(
          "ml-4 mr-2 text-secondary select-none opacity-0",
          selected && "lg:hidden"
        )}
      >
        ~
      </p>
    </li>
  );
};

export default MenuItem;
