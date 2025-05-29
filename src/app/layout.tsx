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
  description: "Femi Akinyemi | Senior Frontend Developer",
  openGraph: {
    title: "Femi Akinyemi",
    description: "Femi Akinyemi | Senior Frontend Developer",
    url: "https://femiakinyemi.site",
    siteName: "Femi Akinyemi",
    images: [

      {
        url: "/og-image.png", // IMPORTANT: Create and add an og-image.png in your /public folder (e.g., 1200x630px)
        width: 1200,
        height: 630,
        alt: "Femi Akinyemi | Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Femi Akinyemi",
    description: "Portfolio of a Senior Frontend Engineer skilled in React, Next.js, and building high-performance web applications.",
    images: ["/og-image.png"],
    creator: "@akinyemi_t",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  manifest: "/manifest.json",
  keywords: [
    "Femi Akinyemi",
    "Senior Frontend Developer",
    "Senior Frontend Engineer",
    "FrontEnd Engineer",
    "Front-End Engineer",
    "Senior FrontEnd Engineer",
    "Senior Front-End Engineer",
    "Frontend Engineer",
    "Datamellon",
    "Datamellon Developer",
    "Datamellon Engineer",
    "Datamellon Frontend Developer",
    "Datamellon Frontend Engineer",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
    "JavaScript",
    "JavaScript Developer",
    "JavaScript Engineer",
    "JavaScript Frontend Developer",
    "JavaScript Frontend Engineer",
    "JavaScript Front-End Developer",
    "JavaScript Front-End Engineer",
    "Astro",
    "Astro Developer",
    "Astro Engineer",
    "Astro Frontend Developer",
    "Astro Frontend Engineer",
    "React Developer",
    "React Engineer",
    "React Frontend Developer",
    "React Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "CSS",
    "HTML",
    "Web Design",
    "Web Development",
    "Portfolio",
    "Personal Website",
    "Blog",
    "Tech",
    "Technology",
    "Programming",
    "Coding",
    "Open Source",
    "Developer",
    "Engineer",
    "Software",
    "Frontend",
    "Backend",
    "Full Stack",
    "UI/UX",
    "User Interface",
    "User Experience",
    "Design",
    "Developer Portfolio",
    "Personal Portfolio",
    "Developer Blog",
    "Personal Blog",
    "Tech Blog",
    "Tech Portfolio",
    "Software Portfolio",
    "Software Blog",
    "Web Portfolio",
    "Web Blog",
    "Web Design Portfolio",
    "Web Design Blog",
    "Web Development Portfolio",
    "Web Development Blog",
    "Frontend Portfolio",
    "Frontend Blog",
    "Backend Portfolio",
    "Backend Blog",
    "Full Stack Portfolio",
    "Full Stack Blog",
    "UI/UX Portfolio",
    "UI/UX Blog",
    "User Interface Portfolio",
    "User Interface Blog",
    "User Experience Portfolio",
    "User Experience Blog",
    "Design Portfolio",
    "Design Blog",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "CSS Developer",
    "HTML Developer",
    "Web Developer Portfolio",
    "Web Developer Blog",
    "Software Engineer Portfolio",
    "Nigerian Developer",
    "Nigerian Frontend Developer",
    "Nigerian Frontend Engineer",
    "Nigerian Software Engineer",
    "Nigerian Software Developer",
    "Nigerian Web Developer",
    "Nigeria Frontend Developer",
    "Nigeria Frontend Engineer",
    "Nigeria Software Engineer",
    "Nigeria Software Developer",
    "Nigeria Web Developer",
    "Nigerian Tech",
    "Nigeria Tech",
    "Nigerian Technology",
    "Nigeria Technology",
    "Nigerian Software Engineer",
    "Nigeria Software Engineer",
    "Nigerian Software Developer",
    "Best Nigerian Developer",
    "Best FrontEnd Developer",
    "Best Frontend Developer",
    "Best Nigeria Frontend Engineer",
    "Best Nigeria Frontend Developer",
    "Best Nigerian Frontend Engineer",
    "Best Nigerian Frontend Developer",
    "Best Nigerian Software Engineer",
    "Best Nigerian Software Developer",
    "Best Nigeria Software Engineer",
    "Best Nigeria Software Developer",
    "Best Nigerian Web Developer",
    "Best Nigeria Web Developer",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  creator: "Femi Akinyemi",
  publisher: "Femi Akinyemi",
  applicationName: "Femi Akinyemi",
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
