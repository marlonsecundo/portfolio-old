import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/app/ui/header"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/app/ui/scroll-progress"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marlon Secundo",
  description: "Marlon Secundo Dev Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="root" lang="en" className="snap-y snap-mandatory scroll-smooth">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <ScrollProgress></ScrollProgress>
      </body>
    </html>
  );
}
