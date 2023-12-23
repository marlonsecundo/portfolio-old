import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marlon Secundo",
  description: "Marlon Secundo Dev Site",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html id="root" className="lg:snap-y lg:snap-mandatory scroll-smooth">
      <body className={inter.className}>
        <Image
          src="/imgs/profile.jpg"
          alt="asdasd"
          width={300}
          height={300}
        ></Image>
      </body>
    </html>
  );
}
