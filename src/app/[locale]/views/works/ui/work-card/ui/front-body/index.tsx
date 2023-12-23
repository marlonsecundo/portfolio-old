import React from "react";
import Image from "next/image";
import { Work } from "@/app/models/work";
import { BASE_URL } from "@/app/constants/page.constants";

interface FrontBodyProps {
  work: Work;
}

export const FrontBody: React.FC<FrontBodyProps> = ({ work }) => {
  return (
    <div className="mockup-browser border bg-base-300 pb-20 -mx-5 hover:scale-105 transition-all">
      <div className="mockup-browser-toolbar"></div>

      <div className="w-full flex justify-center">
        <Image
          className="w-3/4 self-center mt-2"
          src={{
            src: BASE_URL + "imgs/works/" + work.srcImg,
            width: 300,
            height: 300,
          }}
          alt={work.title}
        ></Image>
      </div>
    </div>
  );
};
