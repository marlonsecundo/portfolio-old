import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// See "Matching Paths" below to learn more
export const config = {
  // matcher: ["/", "/portfolio"],
};

export function middleware(request: NextRequest) {
  // return createMiddleware({
  //   locales: ["pt", "en"],
  //   defaultLocale: "en",
  // })(request);
}
