import { Production } from "@/app/models/production";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ProductionCardProps {
  p: Production;
  vertical?: boolean;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ p, vertical }) => {
  return (
    <a href={p.link} target="_blank">
      <div className="card bg-base-200 bg-opacity-20 h-full">
        <div
          className={twMerge(
            "card-body flex-row items-center justify-between",
            vertical ? "flex-col-reverse justify-evenly" : ""
          )}
        >
          <div className="mr-5">
            <div className="card-title mb-5">{p.title}</div>
            <p>{p.description}</p>
          </div>

          {p.imgSrc && (
            <Image
              className="mask mask-squircle object-cover w-20 h-20"
              src={{
                src: "/imgs/productions/" + p.imgSrc,
                width: 300,
                height: 300,
              }}
              alt={p.title}
            ></Image>
          )}

          {p.icon && <div className="w-20 ">{p.icon}</div>}
        </div>
      </div>
    </a>
  );
};

export default ProductionCard;
