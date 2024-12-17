import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "./globals.css";
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from "./ThemeContext";
import { Analytics } from '@vercel/analytics/next';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: "Femi Akinyemi",
  description: "Femi Akinyemi | Frontend Developer",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.variable} antialiased bgMain`}
      >



        <ThemeProvider>
            <NextUIProvider>
                 {children}
                    <Analytics />
            </NextUIProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
