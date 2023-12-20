import { Production } from "@/app/models/production";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ProductionCardProps {
  index: number;
  p: Production;
  vertical?: boolean;
  visible: boolean;
}

const ProductionCard: React.FC<ProductionCardProps> = ({
  p,
  vertical,
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
          "card bg-base-300 bg-opacity-40  h-full ",
          "hover:bg-opacity-100 ",
          "transition-all duration-300",
          visible && "animate-fade-down"
        )}
        style={{ animationDelay: `${100 * index}ms` }}
      >
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
