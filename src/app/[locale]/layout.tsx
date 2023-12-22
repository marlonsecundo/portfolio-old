import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import dynamic from "next/dynamic";
import { LOCALES } from "../constants/page.constants";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/messages";
import { RouteParams } from "./route-params";

const Header = dynamic(() => import("@/app/[locale]/ui/header"), {
  ssr: false,
});
const ScrollProgress = dynamic(
  () => import("@/app/[locale]/ui/scroll-progress"),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marlon Secundo",
  description: "Marlon Secundo Dev Site",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: RouteParams;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  unstable_setRequestLocale(params.locale);

  const messages = await getMessages(params.locale);

  return (
    <html
      id="root"
      lang={params.locale}
      className="lg:snap-y lg:snap-mandatory scroll-smooth"
    >
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header></Header>
          {children}
          <ScrollProgress></ScrollProgress>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
