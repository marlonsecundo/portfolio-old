import React from "react";
import Image from "next/image";
import { Production } from "@/app/models/production";

interface ProductionCardProps {
  production: Production;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ production }) => {
  return (
    <a className="w-full h-full" href={production.link} target="_blank">
      <div className="card w-full h-full shadow-xl ">
        <figure className="absolute z-0 h-full w-full object-contain opacity-10">
          <Image
            className="object-cover h-full w-full"
            src={{
              src: "/imgs/productions/" + production.imgSrc,
              width: 500,
              height: 500,
            }}
            alt={production.title}
          />
        </figure>

        <div className="card-body z-10">
          <h2 className="card-title">
            <p>{production.title}</p>
            {production.icon}
          </h2>
          <p>{production.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductionCard;
