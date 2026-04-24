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
  metadataBase: new URL("https://www.femiakinyemi.xyz"),
  title: "Femi Akinyemi | Senior Software Engineer",
  description:
    "Femi Akinyemi - Senior Software Engineer. Full-stack engineer building production web apps with TypeScript, React, Next.js, Node.js, PostgreSQL and AWS. AWS Certified Developer & Solutions Architect.",
  openGraph: {
    title: "Femi Akinyemi | Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in TypeScript, React, Next.js, Node.js, PostgreSQL, AWS and AI/LLM integrations.",
    url: "https://www.femiakinyemi.xyz",
    siteName: "Femi Akinyemi",
    images: [

      {
        url: "/og-image.png", // IMPORTANT: Create and add an og-image.png in your /public folder (e.g., 1200x630px)
        width: 1200,
        height: 630,
        alt: "Femi Akinyemi - Senior Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Femi Akinyemi | Senior Software Engineer",
    description:
      "Senior Software Engineer building full-stack web apps with TypeScript, React, Next.js, Node.js, PostgreSQL and AWS.",
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
    "Senior Software Engineer",
    "Software Engineer",
    "Senior Full Stack Engineer",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Senior Frontend Engineer",
    "Senior Frontend Developer",
    "Frontend Engineer",
    "Frontend Developer",
    "Backend Engineer",
    "Node.js Engineer",
    "Node.js Developer",
    "TypeScript Engineer",
    "TypeScript Developer",
    "JavaScript Engineer",
    "JavaScript Developer",
    "React Engineer",
    "React Developer",
    "Next.js Engineer",
    "Next.js Developer",
    "React Native Developer",
    "AWS Certified Developer",
    "AWS Certified Solutions Architect",
    "AWS Lambda",
    "AWS Amplify",
    "AWS EventBridge",
    "AWS S3",
    "Serverless Engineer",
    "Cloud Engineer",
    "PostgreSQL",
    "Supabase",
    "OpenAI",
    "LLM Engineer",
    "AI Engineer",
    "FinOps",
    "Datamellon",
    "Datamellon Engineer",
    "Datamellon Software Engineer",
    "Klaudworks",
    "ExamAI",
    "AutoclipsAI",
    "JobScraper",
    "REST API",
    "GraphQL",
    "Web Developer",
    "Web Development",
    "Open Source",
    "Engineer",
    "Software",
    "Frontend",
    "Backend",
    "Full Stack",
    "Developer Portfolio",
    "Software Engineer Portfolio",
    "Nigerian Software Engineer",
    "Nigerian Full Stack Engineer",
    "Nigerian Frontend Engineer",
    "Nigeria Software Engineer",
    "Nigeria Full Stack Engineer",
    "Nigeria Frontend Engineer",
    "Lagos Software Engineer",
    "Best Nigerian Software Engineer",
    "Best Nigeria Software Engineer",
    "Best Nigerian Full Stack Engineer",
    "Best Nigerian Frontend Engineer",
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
