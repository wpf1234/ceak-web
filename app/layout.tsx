import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "../components/Header";
import { FootBar } from "../components/Footbar";

const hanSans = localFont({
  src:[
    {
      path: "../public/fonts/SourceHanSansSC-Normal-2.otf",
      style: "normal",
    },
  ],
  variable: "--font-han-sans",
})

export const metadata: Metadata = {
  title: "Ceak Consulting",
  description: "思客咨询(Ceak Consulting)官网",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${hanSans.variable} antialiased pt-20 min-w-[360px]`}
      >
        <Providers>
        <div className="flex flex-col min-h-screen">
            {/* 顶部导航栏 */}
            <Header />

            {/* 页面内容区域 */}
            <main className="flex-1 w-full max-w-[1920px] mx-auto">
              {children}
            </main>

            {/* 底部导航栏 */}
            <FootBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
