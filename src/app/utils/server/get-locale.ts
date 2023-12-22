import "server-only";
import { headers } from "next/headers";
import { LocaleValue } from "@/app/[locale]/route-params";

export function getLocale() {
  const locale = (headers().get("x-next-intl-locale") as LocaleValue) || "pt";

  return locale;
}
