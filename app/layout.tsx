import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { Providers } from "./providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        className={`${hanSans.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
        
      </body>
    </html>
  );
}
