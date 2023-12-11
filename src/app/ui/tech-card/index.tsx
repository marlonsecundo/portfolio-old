import Image from "next/image";
import React from "react";

interface TechCardProps {
  tech: Technology;
  titleVisible?: boolean;
}
const TechCard: React.FC<TechCardProps> = ({ tech, titleVisible = true }) => {
  return (
    <div className="flex flex-col h-full opacity-50 hover:opacity-100 relative justify-center ">
      {titleVisible && (
        <p className="bottom-0 absolute self-center">{tech.title}</p>
      )}
      <Image
        className={
          "absolute object-contain" + (titleVisible ? " max-h-[55%] " : "")
        }
        src={{ src: "/imgs/techs/" + tech.srcImg, width: 100, height: 100 }}
        alt={tech.title}
      ></Image>
    </div>
  );
};

export default TechCard;
