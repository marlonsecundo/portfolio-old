import "server-only";

import en from "./en.json";
import pt from "./pt.json";

const messages = {
  en: () => import("./en.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default),
};

export const getMessages = async (locale: "en" | "pt") => messages[locale]();
