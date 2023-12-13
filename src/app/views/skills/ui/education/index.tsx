import { educations } from "@/assets/data/educations";
import React from "react";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <div className="bg-base-200 flex flex-col gap-3 mt-5">
      <p className="text-lg text-secondary self-center">Education</p>

      <ul className="flex flex-col mt-2  justify-center gap-3 md:flex-row md:gap-10">
        {educations.map((e, i) => (
          <li key={i} className="card  bg-base-300 card-compact min-w-[15rem]">
            <div className="card-body flex flex-row items-center">
              <Image
                className="w-10 h-10 p-2   object-contain"
                src={e.img}
                alt="IFRN Logo"
              ></Image>

              <p className="text-lg ml-2">{e.alt}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* {educations.map((e) => (
          <a
            key={e.link}
            className="btn btn-square p-3 w-[30vw] h-[30vw] max-w-[6rem] max-h-24"
          >

          </a>
        ))} */}
    </div>
  );
};

export default Education;
