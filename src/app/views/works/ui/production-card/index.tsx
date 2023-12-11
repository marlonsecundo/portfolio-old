import React from "react";
import Image from "next/image";
import { Production } from "@/app/models/production";

interface ProductionCardProps {
  production: Production;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ production }) => {
  return (
    <div className="card w-full h-fit shadow-xl">
      <figure className="absolute z-0 h-full w-full object-contain opacity-10 pt-20">
        <Image
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
  );
};

export default ProductionCard;
