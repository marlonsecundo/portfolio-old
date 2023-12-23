import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// See "Matching Paths" below to learn more
export const config = {
  // matcher: ["/", "/portfolio"],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.includes("_next")) {
    return;
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/en`, req.url));
  }

  return createMiddleware({
    locales: ["pt", "en"],
    defaultLocale: "en",
  })(req);
}
