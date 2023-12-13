import React from "react";
import DeveloperText from "../developer-text";
import Image from "next/image";
import profileImg from "@/assets/images/me.png";

const ProfileCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-base-200 p-3 rounded-2xl lg:items-start lg:p-10 lg:pr-72 shadow">
      <Image
        className="max-w-[10rem] md:max-w-[14rem] object-contain mask mask-circle"
        alt="Marlon Secundo Profile Picture"
        src={profileImg}
      ></Image>
      <div className="mt-2 md:self-start">
        <DeveloperText></DeveloperText>
      </div>

      <p className="mt-3 text-justify text-base w-fit">
        Hi! I am Marlon Secundo,<br></br>I am a Dev Bachelor in I.T.
      </p>

      <p className="mt-3 text-secondary">and a little more.</p>
    </div>
  );
};

export default ProfileCard;
