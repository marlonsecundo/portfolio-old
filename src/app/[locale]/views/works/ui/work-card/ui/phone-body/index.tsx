import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/app/constants/page.constants";

interface PhoneBodyProps {
  srcImg: string;
  title: string;
}

export const PhoneBody: React.FC<PhoneBodyProps> = ({ srcImg, title }) => {
  return (
    <div className="h-72 overflow-hidden max-w-xxs hover:scale-110 transition-all">
      <div className="mockup-phone border p-1.5">
        <div className="camera -translate-y-2 scale-[70%]"></div>
        <div className="display border-10">
          <Image
            className="w-full"
            src={{
              src: BASE_URL + "imgs/works/" + srcImg,
              width: 300,
              height: 100,
            }}
            alt={title}
          ></Image>
        </div>
      </div>
    </div>
  );
};
