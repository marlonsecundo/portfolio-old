"use client";

import { DevType, Work } from "@/app/models/work";
import React from "react";

import { useHover } from "@uidotdev/usehooks";
import { PhoneBody } from "./ui/phone-body";
import { HoverBody } from "./ui/hover-body";
import { FrontBody } from "./ui/front-body";
import BackendBody from "./ui/backend-body";

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const { title, description, srcImg, expText, devType } = work;

  const [ref, isHovering] = useHover();

  return (
    <section
      ref={ref}
      className="w-full flex flex-col bg-base-200 pt-10 relative"
    >
      <h5 className="text-lg absolute top-0 pt-10 self-center  mb-5 z-30">
        {title}
      </h5>

      <div className="w-full flex flex-col items-center px-10 relative">
        <h5 className="text-lg opacity-0 select-none mb-5">...</h5>

        <p className="text-justify">{description}</p>

        <div className="mt-5"></div>

        {devType === DevType.MOBILE && (
          <PhoneBody srcImg={srcImg} title={title}></PhoneBody>
        )}

        {devType === DevType.FRONTEND && <FrontBody work={work}></FrontBody>}

        {devType === DevType.BACKEND && <BackendBody work={work}></BackendBody>}

        <div className="absolute bottom-0 h-2/3 bg-gradient-to-b from-transparent from-10% to-base-200 to-95% w-full"></div>
      </div>

      <HoverBody
        work={work}
        visible={work.enableHoverEffect !== false && isHovering}
      ></HoverBody>
    </section>
  );
};

export default WorkCard;
