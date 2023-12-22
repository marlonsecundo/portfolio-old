import { Work } from "@/app/models/work";
import { getContrastColor } from "@/app/utils/get-constrast-color";
import React from "react";
import { twMerge } from "tailwind-merge";

interface HoverBodyProps {
  work: Work;
  visible: boolean;
}

export const HoverBody: React.FC<HoverBodyProps> = ({ work, visible }) => {
  return (
    <div
      key={work.title}
      className={twMerge(
        "absolute bg-base-300 h-full w-full z-20 top-0 px-10 flex flex-col justify-between transition-all ease-out duration-300",
        "md:relative md:bg-transparent md:h-auto md:max-w-xs",
        visible ? "h-full" : "h-0 overflow-hidden",
        "animate-fade"
      )}
    >
      <div className="flex flex-col">
        <h5 className="text-lg opacity-0 select-none mb-5">....</h5>

        <p className="self-center mb-4 opacity-0 select-none md:opacity-100 md:select-auto">
          ~
        </p>
        <p className="text-justify">{work.expText}</p>
      </div>

      {/* <div>
        <p className="text-secondary mt-2">BULLET POINTS</p>
        <p>{work.bulletPoints}</p>
      </div> */}

      {work.technologies.length > 0 && (
        <div>
          <p className="text-secondary mb-2">Stack</p>

          <div className="grid grid-cols-3 justify-start gap-2">
            {work.technologies.map((t) => (
              <div
                key={t.title}
                style={{
                  backgroundColor: t.color,
                  color: getContrastColor(t.color),
                }}
                className="badge rounded-md p-4 w-full"
              >
                {t.title}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-5"></div>
    </div>
  );
};
