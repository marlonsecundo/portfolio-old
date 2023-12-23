import { BASE_URL } from "@/app/constants/page.constants";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface TechCardProps {
  tech: Technology;
  titleVisible?: boolean;
}
const TechCard: React.FC<TechCardProps> = ({ tech, titleVisible = true }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col h-full opacity-40 hover:opacity-100 relative justify-center",
        "transition-opacity duration-500"
      )}
    >
      {titleVisible && (
        <p className="bottom-0 absolute self-center">{tech.title}</p>
      )}
      <Image
        className={
          "absolute object-contain" + (titleVisible ? " max-h-[55%] " : "")
        }
        src={{
          src: BASE_URL + "imgs/techs/" + tech.srcImg,
          width: 100,
          height: 100,
        }}
        alt={tech.title}
      ></Image>
    </div>
  );
};

export default TechCard;
