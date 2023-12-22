"use client";

import { DevType } from "@/app/models/work";
import { works } from "@/assets/data/works";
import React, { useRef } from "react";
import MenuItem from "../menu-item";
import { twMerge } from "tailwind-merge";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useAnimateWhenVisible } from "@/app/hooks/useAnimateWhenVisible";
import { useParams } from "next/navigation";
import { RouteParams } from "@/app/[locale]/route-params";

interface MenuProps {
  index: string;
  onSelectedItem: (key: string) => void;
}

const Menu: React.FC<MenuProps> = ({ index, onSelectedItem }) => {
  const p = useParams<RouteParams>();

  const mobileWorks = works[p.locale].filter(
    (w) => w.devType === DevType.MOBILE
  );
  const frontWorks = works[p.locale].filter(
    (w) => w.devType === DevType.FRONTEND
  );
  const backendWorks = works[p.locale].filter(
    (w) => w.devType === DevType.BACKEND
  );

  const divRef = useRef<HTMLUListElement>(null);

  const [ref, animate] = useAnimateWhenVisible();

  const scrollLength = divRef.current ? divRef.current.scrollWidth / 3 : 150;

  return (
    <div
      ref={ref}
      className={twMerge(
        "flex relative self-center my-5 w-4/6 sm:max-w-xxs lg:w-full lg:max-w-[9rem] ",
        animate && "animate-fade-right animate-delay-300"
      )}
    >
      <div
        className={twMerge(
          "absolute w-20 h-1 bg-secondary top-0 left-0 -translate-x-5 -translate-y-0 rounded-md",
          "xl:-translate-x-10 xl:-translate-y-2"
        )}
      ></div>
      <div
        className={twMerge(
          "absolute w-1 h-20 left-0 bg-secondary top-0 -translate-x-5  -translate-y-0 rounded-md",
          "xl:-translate-x-10 xl:-translate-y-2"
        )}
      ></div>

      <div
        className={twMerge(
          "absolute w-20 h-1 bg-secondary bottom-0 right-0 translate-x-5 translate-y-0 rounded-md",
          "lg:translate-y-2",
          "xl:translate-x-10 xl:translate-y-5"
        )}
      ></div>
      <div
        className={twMerge(
          "absolute w-1 h-20  bg-secondary bottom-0 right-0 translate-x-5  translate-y-0 rounded-md",
          "lg:translate-y-2",
          "xl:translate-x-10 xl:translate-y-5"
        )}
      ></div>

      <ul
        ref={divRef}
        className="carousel self-center gap-10 lg:flex-col lg:justify-center xl:gap-5"
      >
        <div className="carousel-item w-full flex-col items-center  lg:items-start">
          <h1 className="text-lg font-bold text-secondary mt-5 uppercase">
            Mobile
          </h1>

          {mobileWorks.map((m, i) => (
            <MenuItem
              key={i}
              onClick={onSelectedItem}
              text={m.title}
              index={m.title}
              selected={index === m.title}
            ></MenuItem>
          ))}
        </div>

        <div className="carousel-item items-center flex-col w-full lg:items-start">
          <h1 className="text-lg font-bold text-secondary mt-5 uppercase">
            Frontend
          </h1>

          {frontWorks.map((f, i) => (
            <MenuItem
              key={i}
              onClick={onSelectedItem}
              text={f.title}
              index={f.title}
              selected={index === f.title}
            ></MenuItem>
          ))}
        </div>

        <div className="carousel-item items-center flex-col w-full lg:items-start">
          <h1 className="text-lg font-bold text-secondary mt-5 uppercase">
            Backend
          </h1>

          {backendWorks.map((b, i) => (
            <MenuItem
              key={i}
              onClick={onSelectedItem}
              text={b.title}
              index={b.title}
              selected={index === b.title}
            ></MenuItem>
          ))}
        </div>

        <div className="-translate-x-9 absolute left-0 self-center lg:hidden">
          <button
            onClick={() =>
              divRef.current?.scrollTo(
                divRef.current.scrollLeft - scrollLength,
                0
              )
            }
            className="btn btn-ghost btn-sm btn-square"
          >
            <MdKeyboardArrowLeft size={30}></MdKeyboardArrowLeft>
          </button>
        </div>

        <div className="absolute right-0 self-center translate-x-9 lg:hidden">
          <button
            onClick={() =>
              divRef.current?.scrollTo(
                divRef.current.scrollLeft + scrollLength,
                0
              )
            }
            className="btn btn-ghost btn-sm btn-square"
          >
            <MdKeyboardArrowRight size={30}></MdKeyboardArrowRight>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
