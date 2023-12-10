import Image from "next/image";
import React from "react";

interface TechCardProps {
  tech: Technology;
}
const TechCard: React.FC<TechCardProps> = ({ tech }) => {
  return (
    <div className="card h-full opacity-50 hover:opacity-100">
      <p className="mb-2 self-center">{tech.title}</p>
      <Image
        src={{ src: "/imgs/techs/" + tech.srcImg, width: 100, height: 100 }}
        alt={tech.title}
      ></Image>
    </div>
  );
};

export default TechCard;
