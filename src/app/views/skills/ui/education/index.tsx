import { educations } from "@/assets/data/educations";
import React from "react";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <div className="bg-base-200 flex flex-col gap-3 items-center pb-5">
      <p className="text-lg text-secondary mt-3">EDUCATION</p>

      {educations.map((e) => (
        <a key={e.link} className="btn btn-square p-3 btn-lg">
          <Image
            className="w-full h-full object-contain"
            src={e.img}
            alt="IFRN Logo"
          ></Image>
        </a>
      ))}
    </div>
  );
};

export default Education;
