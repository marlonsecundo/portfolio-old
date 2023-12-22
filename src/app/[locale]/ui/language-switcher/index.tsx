import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { RouteParams } from "../../route-params";

const LanguageSwitcher: React.FC = () => {
  const p = useParams<RouteParams>();
  const t = useTranslations();

  const nextLocale = p.locale === "en" ? "pt" : "en";
  [];

  return (
    <Link href={"/" + nextLocale} replace={true}>
      <label
        className={twMerge("swap ", p.locale === "en" ? "swap-active" : "")}
      >
        <div className="swap-off">🇧🇷</div>
        <div className="swap-on">🇺🇸</div>
      </label>
    </Link>
  );
};

export default LanguageSwitcher;
