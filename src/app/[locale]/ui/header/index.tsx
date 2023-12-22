"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import profileImg from "@/assets/images/me.png";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { useWindowScroll, useMediaQuery, useHover } from "@uidotdev/usehooks";
import { ViewsIDs } from "@/app/constants/page.constants";
import LanguageSwitcher from "../language-switcher";
import { useTranslations } from "next-intl";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("header");

  const isMD = useMediaQuery("(min-width: 768px)");

  const [ref, isHovering] = useHover();

  const [{ y }] = useWindowScroll();

  const handleOnLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (isOpen) {
      timeId = setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }

    return () => clearTimeout(timeId);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(true);
  }, [y]);

  const isVisible = isHovering || y === 0 || isOpen;

  return (
    <header>
      <nav
        ref={ref}
        className="fixed z-30 w-full flex justify-start items-center "
      >
        <ul
          className={twMerge(
            "menu menu-horizontal rounded-b-xl flex flex-wrap justify-around bg-base-300 -translate-y-28 z-10",
            "xs:rounded-box xs:m-3 sm:m-5",
            "hover:-translate-y-0",
            isVisible ? "-translate-y-0" : "",
            "transition-all ease-out w-full lg:w-auto"
          )}
        >
          <li>
            <a href={"#" + ViewsIDs.home}>
              <Image
                className="w-5 h-5 rounded-full"
                alt="Profile Image"
                src={profileImg}
              ></Image>
            </a>
          </li>
          <li>
            <a onClick={() => handleOnLinkClick()} href={"#" + ViewsIDs.skills}>
              {t("skills")}
            </a>
          </li>
          <li>
            <a onClick={() => handleOnLinkClick()} href={"#" + ViewsIDs.works}>
              {t("works")}
            </a>
          </li>

          <li className="ml-2 xs:ml-0">
            <a onClick={() => handleOnLinkClick()} href={"#" + ViewsIDs.apps}>
              {t("apps")}
            </a>
          </li>
          <li className="mr-2 xs:ml-0">
            <a onClick={() => handleOnLinkClick()} href={"#" + ViewsIDs.about}>
              {t("about")}
            </a>
          </li>

          <li>
            <LanguageSwitcher></LanguageSwitcher>
          </li>
        </ul>

        {!isVisible && (
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-circle right-2 absolute top-2 md:hidden"
          >
            <IoIosArrowDown size={22}></IoIosArrowDown>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
