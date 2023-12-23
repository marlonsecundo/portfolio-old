import { Production } from "@/app/models/production";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useAnimateWhenVisible } from "@/app/hooks/useAnimateWhenVisible";
import { BASE_URL } from "@/app/constants/page.constants";

interface ProductionCardImageProps {
  p: Production;

  index: number;

  visible: boolean;
}

const ProductionCardImage: React.FC<ProductionCardImageProps> = ({
  p,
  index,
  visible,
}) => {
  return (
    <a
      href={p.link}
      target="_blank"
      className="hover:-translate-y-3 transition-all flex-1"
    >
      <div
        className={twMerge(
          "card bg-base-200 bg-opacity-0 h-full p-3 image-full ",
          visible && "animate-fade-down"
        )}
        style={{ animationDelay: `${100 * index}ms` }}
      >
        {p.imgSrc && (
          <figure>
            <Image
              className="object-cover w-full"
              src={{
                src: BASE_URL + "imgs/productions/" + p.imgSrc,
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
