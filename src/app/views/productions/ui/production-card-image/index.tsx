import { Production } from "@/app/models/production";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ProductionCardImageProps {
  p: Production;
}

const ProductionCardImage: React.FC<ProductionCardImageProps> = ({ p }) => {
  return (
    <a href={p.link} target="_blank" className="">
      <div
        className={twMerge(
          "card bg-base-200 bg-opacity-0 h-full p-3 image-full"
        )}
      >
        {p.imgSrc && (
          <figure>
            <Image
              className="object-cover w-full"
              src={{
                src: "/imgs/productions/" + p.imgSrc,
                width: 700,
                height: 700,
              }}
              alt={p.title}
            ></Image>
          </figure>
        )}

        <div className="card-body flex flex-col items-center justify-center ">
          <p className="flex-grow-0 h-fit font-bold text-xl">{p.title}</p>
          <p className="flex-grow-0 h-fit font-bold text-xl">{p.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductionCardImage;
