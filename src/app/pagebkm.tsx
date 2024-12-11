// import Image from "next/image";

import Image from "next/image";
import headshot from "@/app/assets/head_shot_native.jpg";
import { CiDark, CiHome, CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { PiStoolLight } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { FaGithub, FaRegEnvelope } from "react-icons/fa";

import {Tooltip} from "@nextui-org/tooltip";



export default function Home() {
  return (
   <div className="min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6 __variable_d65c78">
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span
                    className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "translateY(-8px) translateZ(0px)",
                    }}
                  >
                    Hi, I&apos;m Femi 👋
                  </span>
                </div>
                <div className="flex">
                  <span
                    className="inline-block max-w-[600px] md:text-xl"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "translateY(-8px) translateZ(0px)",
                    }}
                  >
                    Frontend Engineer | Javascript | Typescript.
                  </span>
                </div>
              </div>

              <div
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translateY(-8px) translateZ(0px)",
                }}
              >
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
                  <Image
                    className="aspect-square h-full w-full"
                    alt="Tosin Ogunfowote"
                    src={headshot}
                  ></Image>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(-8px) translateZ(0px)",
            }}
          >
            <h2 className="text-xl font-bold">About</h2>
          </div>

          <div
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(-8px) translateZ(0px)",
            }}
          >
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              <p className="text-[#737373]">
                I am a frontend engineer with over 3 years of experience,
                holding a degree in mathematics and a Master of Science (MSc) in
                mathematics, and a strong background in software development
                using JavaScript, TypeScript, React, and NextJs amongst other
                tools. Over the years, I have specialized in building and
                optimizing web applications in several industries and startups,
                especially in the cloud space, working with cross-functional
                teams to design solutions that meet business goals and drive
                measurable results. My commitment to best practices and
                attention to detail ensures that my code not only meets
                standards but also pushes the envelope in terms of performance
                and user engagement
              </p>
            </div>
          </div>
        </section>
      </main>

     <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
  <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

  <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
      style={{ width: "40px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
      >
        <Tooltip content="Home" showArrow={true} color="foreground">
          <CiHome />
        </Tooltip>
      </Link>
    </div>

    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
      style={{ width: "40px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
      >
        <IoBagOutline />
      </Link>
    </div>

    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
      style={{ width: "40px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
      >
        <PiStoolLight />
      </Link>
    </div>

    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
      style={{ width: "40px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
      >
        <GoProject />
      </Link>
    </div>

    <div
      data-orientation="vertical"
      role="none"
      className="shrink-0 bg-border w-[1px] h-full bg-slate-400"
      data-mousex="[object Object]"
      data-magnification="60"
      data-distance="140"
    ></div>

    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
      style={{ width: "40px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
      >
        <FaGithub />
      </Link>
    </div>

    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
      style={{ width: "40px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
      >
        <CiLinkedin />
      </Link>
    </div>

    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
      style={{ width: "40px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
      >
        <FaRegEnvelope />
      </Link>
    </div>

    <div
      data-orientation="vertical"
      role="none"
      className="shrink-0 bg-border w-[1px] h-full bg-slate-400"
      data-mousex="[object Object]"
      data-magnification="60"
      data-distance="140"
    ></div>

    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
      style={{ width: "40px" }}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
      >
        <CiDark />
      </Link>
    </div>
  </div>
</div>;



    </div>
  );
}
