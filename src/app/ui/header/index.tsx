"use client";

import Image from "next/image";
import React, { useState } from "react";
import profileImg from "@/assets/images/me.png";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="fixed z-30 w-full flex justify-center items-center">
        <ul
          className={twMerge(
            "menu menu-horizontal rounded-b-xl flex flex-wrap justify-around bg-base-300 -translate-y-28 xs:rounded-box xs:m-3 sm:m-5",
            isOpen ? "-translate-y-0" : ""
          )}
        >
          <li>
            <a>
              <Image
                className="w-5 h-5 rounded-full"
                alt="Profile Image"
                src={profileImg}
              ></Image>
            </a>
          </li>
          <li>
            <a onClick={() => handleOnLinkClick()} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => handleOnLinkClick()} href="#works">
              Works
            </a>
          </li>

          <li className="ml-2 xs:ml-0">
            <a onClick={() => handleOnLinkClick()} href="#apps">
              Apps
            </a>
          </li>
          <li className="mr-2 xs:ml-0">
            <a onClick={() => handleOnLinkClick()} href="#about">
              About
            </a>
          </li>
        </ul>

        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-circle right-2 absolute top-2"
          >
            <IoIosArrowDown size={22}></IoIosArrowDown>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
