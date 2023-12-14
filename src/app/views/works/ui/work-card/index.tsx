"use client";

import { DevType, Work } from "@/app/models/work";
import React, { useState } from "react";

import { useHover } from "@uidotdev/usehooks";
import { PhoneBody } from "./ui/phone-body";
import { HoverBody } from "./ui/hover-body";
import { FrontBody } from "./ui/front-body";
import BackendBody from "./ui/backend-body";
import { twMerge } from "tailwind-merge";

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const { title, description, srcImg, expText, devType } = work;

  const [visible, setVisible] = useState(false);

  return (
    <div
      className={twMerge(
        "flex h-full shadow-md rounded-lg pb-0 relative max-w-sm",
        "bg-gradient-to-br from-base-100 from-20% to-base-300",
        "md:max-w-none",
        "lg:max-h-[35rem] self-end"
      )}
      onClick={() => setVisible((prev) => !prev)}
    >
      <section className="w-full h-full flex flex-col pt-10 relative max-w-sm rounded-lg rounded-b-none">
        <h5 className="text-lg absolute top-0 pt-10 self-center mb-5 z-30">
          {title}
        </h5>

        <div className="w-full h-full flex flex-col items-center px-10 relative overflow-hidden">
          <h5 className="text-lg opacity-0 select-none mb-5">...</h5>

          <p className="text-justify">{description}</p>

          <div className="mt-5 flex-1"></div>

          {devType === DevType.MOBILE && (
            <PhoneBody srcImg={srcImg} title={title}></PhoneBody>
          )}

          {devType === DevType.FRONTEND && <FrontBody work={work}></FrontBody>}

          {devType === DevType.BACKEND && (
            <BackendBody work={work}></BackendBody>
          )}
        </div>
        <div className="absolute bottom-0 h-2/3 bg-gradient-to-b from-transparent from-20% to-base-200 to-100% w-full"></div>
      </section>
      <HoverBody work={work} visible={visible}></HoverBody>
    </div>
  );
};

export default WorkCard;
