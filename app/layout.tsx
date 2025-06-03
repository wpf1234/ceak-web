import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Providers } from "./providers";


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
          {children}
        </Providers>
        
      </body>
    </html>
  );
}
