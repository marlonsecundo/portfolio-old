import { Extra } from "@/app/models/extra";
import Image from "next/image";
import React from "react";

interface ExtraCardProps {
  extra: Extra;
}
const ExtraCard: React.FC<ExtraCardProps> = ({ extra }) => {
  return (
    <a href={extra.link} target="_blank">
      <div className="card bg-base-300 w-44 hover:bg-base-200 shadow-lg">
        <div className="card-body flex flex-col items-center  h-full ">
          {extra.icon}
          {extra.imgSrc && (
            <Image
              className="h-7 object-contain"
              src={{
                src: "/imgs/extras/" + extra.imgSrc,
                width: 100,
                height: 100,
              }}
              alt={extra.text}
            ></Image>
          )}
          <p className="whitespace-nowrap h-3">{extra.text}</p>
        </div>
      </div>
    </a>
  );
};

export default ExtraCard;
