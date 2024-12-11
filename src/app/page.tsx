// import Image from "next/image";

'use client'

import Image from "next/image";
import headshot from "@/app/assets/head_shot_native.jpg";
import { CiDark, CiHome, CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { PiStoolLight } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { FaGithub, FaRegEnvelope } from "react-icons/fa";

import { Tooltip } from "@nextui-org/tooltip";
import {  useState } from "react";

export default function Home() {

    const [visibleContent, setVisibleContent] = useState<number | null>(null);

  const toggleContentVisibility = (index: number) => {
    setVisibleContent(visibleContent === index ? null : index);
  };


    const workExperiences = [
    {
      company: "Datamellon",
      link: "https://datamellon.com/",
      logo: "https://datamellon.com/images/Datamellon_logo.svg",
      title: "Senior Frontend Engineer",
      duration: "Sep 2021 - Present",
       details: [
        "Led the development of intuitive and sophisticated financial dashboards encompassing FX, cryptocurrency, and payments, resulting in a remarkable 30% improvement in operational efficiency.",
        "Collaborated with integration partners to monitor other fintech integration channels and escalate technical issues as necessary, thereby ensuring seamless integration with third-party systems.",
        "Innovatively integrated both web2 and web3 payment gateways, significantly broadening user payment options by 25% and positioning Changera as a pioneer in diverse payment solutions.",
        "Optimized website performance for Bitmama and Changera, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
      ],
      bgColor: 'black'

    },

     {
      company: "Datamellon",
      link: "https://changera.co",
    logo: "https://datamellon.com/images/Datamellon_logo.svg",
      title: "Senior Frontend Engineer",
      duration: "May 2022 - Present",
       details: [
        "Led the development of intuitive and sophisticated financial dashboards encompassing FX, cryptocurrency, and payments, resulting in a remarkable 30% improvement in operational efficiency.",
        "Collaborated with integration partners to monitor other fintech integration channels and escalate technical issues as necessary, thereby ensuring seamless integration with third-party systems.",
        "Innovatively integrated both web2 and web3 payment gateways, significantly broadening user payment options by 25% and positioning Changera as a pioneer in diverse payment solutions.",
        "Optimized website performance for Bitmama and Changera, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
      ],
        bgColor: 'black'

    },
       {
        company: "Datamellon",
      link: "https://changera.co",
    logo: "https://datamellon.com/images/Datamellon_logo.svg",
      title: "Senior Frontend Engineer",
      duration: "May 2022 - Present",
       details: [
        "Led the development of intuitive and sophisticated financial dashboards encompassing FX, cryptocurrency, and payments, resulting in a remarkable 30% improvement in operational efficiency.",
        "Collaborated with integration partners to monitor other fintech integration channels and escalate technical issues as necessary, thereby ensuring seamless integration with third-party systems.",
        "Innovatively integrated both web2 and web3 payment gateways, significantly broadening user payment options by 25% and positioning Changera as a pioneer in diverse payment solutions.",
        "Optimized website performance for Bitmama and Changera, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
      ],
        bgColor: 'black'

    },
        {
         company: "Datamellon",
      link: "https://changera.co",
    logo: "https://datamellon.com/images/Datamellon_logo.svg",
      title: "Senior Frontend Engineer",
      duration: "May 2022 - Present",
       details: [
        "Led the development of intuitive and sophisticated financial dashboards encompassing FX, cryptocurrency, and payments, resulting in a remarkable 30% improvement in operational efficiency.",
        "Collaborated with integration partners to monitor other fintech integration channels and escalate technical issues as necessary, thereby ensuring seamless integration with third-party systems.",
        "Innovatively integrated both web2 and web3 payment gateways, significantly broadening user payment options by 25% and positioning Changera as a pioneer in diverse payment solutions.",
        "Optimized website performance for Bitmama and Changera, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
      ],
        bgColor: 'black'

    },
        {
       company: "Datamellon",
      link: "https://changera.co",
    logo: "https://datamellon.com/images/Datamellon_logo.svg",
      title: "Senior Frontend Engineer",
      duration: "May 2022 - Present",
       details: [
        "Led the development of intuitive and sophisticated financial dashboards encompassing FX, cryptocurrency, and payments, resulting in a remarkable 30% improvement in operational efficiency.",
        "Collaborated with integration partners to monitor other fintech integration channels and escalate technical issues as necessary, thereby ensuring seamless integration with third-party systems.",
        "Innovatively integrated both web2 and web3 payment gateways, significantly broadening user payment options by 25% and positioning Changera as a pioneer in diverse payment solutions.",
        "Optimized website performance for Bitmama and Changera, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
      ],
        bgColor: 'black'

    },

  ];


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


     <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Work Experience</h2>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <div
              className="block cursor-pointer"
              onClick={() => toggleContentVisibility(index)}
            >
              <div className="rounded-lg bg-card text-card-foreground flex">
                <a className="flex-none" href={experience.link}>
                  <span className={`relative bg-${experience.bgColor} flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground`}>
                    <Image
                      className="aspect-square  h-full w-full object-contain"
                      alt={experience.company}
                      src={experience.logo}
                      width={40}
                      height={40}
                    />
                  </span>
                </a>
                <div className="flex-grow ml-4 items-center flex-col group">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                        {experience.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`lucide lucide-chevron-right size-4 transform transition-transform duration-300 ${
                            visibleContent === index ? "rotate-90" : ""
                          }`}
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </h3>
                      <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                        {experience.duration}
                      </div>
                    </div>
                    <div className="font-sans text-xs">{experience.title}</div>
                  </div>
                </div>
              </div>
            </div>
            {visibleContent === index && (
              <div
                className="mt-2 ml-16 whitespace-break-spaces prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
                style={{
                  opacity: 1,
                  height: "auto",
                  transition: "opacity 0.3s, height 0.3s",
                }}
              >
              {/*   {experience.details} */}
                {experience.details.map((detail, detailIndex) => (
                  <li className=" list-item text-[#737373] font-sans" key={detailIndex}>{detail}</li>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

      </main>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
        <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background shadow-md dark:border-gray-700 dark:shadow-lg">
          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Home" showArrow={true} color="foreground">
                <CiHome className="text-xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/#work"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Experience" showArrow={true} color="foreground">
                <IoBagOutline className="text-xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Skills" showArrow={true} color="foreground">
                <PiStoolLight className="text-xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Projects" showArrow={true} color="foreground">
                <GoProject className="text-xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
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

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="GitHub" showArrow={true} color="foreground">
                <FaGithub className="text-xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="LinkedIn " showArrow={true} color="foreground">
                <CiLinkedin className="text-xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Email " showArrow={true} color="foreground">
                <FaRegEnvelope className="text-xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
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

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <CiDark className="text-xl transition-transform duration-300 ease-in-out group-hover:scale-125" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
