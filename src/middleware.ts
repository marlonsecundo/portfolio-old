import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["pt", "en"],

  // Used when no locale matches
  defaultLocale: "pt",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en)/:path*"],
};
