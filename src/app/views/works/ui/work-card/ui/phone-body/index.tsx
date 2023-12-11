import React from "react";
import Image from "next/image";

interface PhoneBodyProps {
  srcImg: string;
  title: string;
}

export const PhoneBody: React.FC<PhoneBodyProps> = ({ srcImg, title }) => {
  return (
    <div className="h-72 overflow-hidden -mx-5">
      <div className="mockup-phone border p-1.5">
        <div className="camera -translate-y-1 scale-[80%]"></div>
        <div className="display border-10">
          <Image
            className="w-full "
            src={{ src: "/imgs/works/" + srcImg, width: 300, height: 100 }}
            alt={title}
          ></Image>
        </div>
      </div>
    </div>
  );
};
