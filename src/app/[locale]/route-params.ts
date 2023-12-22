export type LocaleValue = "en" | "pt";

export interface RouteParams {
  [key: string]: string;
  locale: LocaleValue;
}
