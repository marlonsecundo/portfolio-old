import { Work } from "@/app/models/work";
import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/app/constants/page.constants";

interface BackendBodyProps {
  work: Work;
}

const BackendBody: React.FC<BackendBodyProps> = ({ work }) => {
  return (
    <div className="mockup-code -mx-5 hover:scale-110 transition-all">
      <div className="w-full justify-center flex">
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

export default BackendBody;
