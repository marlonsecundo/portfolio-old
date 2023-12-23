export const debug = process.env.NODE_ENV !== "production";

export const PAGE_VIEWS_COUNT = 5;

export enum ViewsIDs {
  home = "home",
  skills = "skills",
  works = "works",
  apps = "apps",
  about = "about",
}

export const LOCALES = ["pt", "en"];

export const BASE_URL = debug ? "/" : "/portfolio";
