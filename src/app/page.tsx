// import Image from "next/image";

'use client'

import Image from "next/image";
import headshot from "@/app/assets/anime.webp";
import { CiDark, CiHome, CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { PiStoolLight } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { FaGithub, FaRegEnvelope } from "react-icons/fa";

import { Tooltip } from "@nextui-org/tooltip";
import {  useState } from "react";
import codefixlogo from '@/app/assets/codefixbuglogo.webp'
import devcareerlogo from '@/app/assets/devcareerlogo.svg'
import autoclips from '@/app/assets/autoclips.webp'
import githubfoundation from '@/app/assets/githubfoundation.png'
import awsdeveloper from '@/app/assets/awsdeveloper.png'
import awssolution from '@/app/assets/Awssolution.png'
import freecodecamp from '@/app/assets/freecodecamp.png'
import progate from '@/app/assets/progate.svg'

export default function Home() {

    const [visibleContent, setVisibleContent] = useState<number | null>(null);
    const [visibleContenteducation, setVisibleContenteducation] = useState<number | null>(null);
const [visibleContentcert, setVisibleContentcert] = useState<number | null>(null);

  const toggleContentVisibility = (index: number) => {
    setVisibleContent(visibleContent === index ? null : index);
  };


   const toggleContentVisibilityEdu = (index: number) => {
    setVisibleContenteducation(visibleContenteducation === index ? null : index);
  };


    const toggleContentVisibilitycert = (index: number) => {
    setVisibleContentcert(visibleContentcert === index ? null : index);
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
      company: "AutoclipsAI",
      link: "https://www.autoclipsai.app/",
      logo: autoclips,
      title: "Founding Frontend Engineer (Contractor)",
      duration: "Jun 2024 - Present",
       details: [
        "Led the development of intuitive and sophisticated financial dashboards encompassing FX, cryptocurrency, and payments, resulting in a remarkable 30% improvement in operational efficiency.",
        "Collaborated with integration partners to monitor other fintech integration channels and escalate technical issues as necessary, thereby ensuring seamless integration with third-party systems.",
        "Innovatively integrated both web2 and web3 payment gateways, significantly broadening user payment options by 25% and positioning Changera as a pioneer in diverse payment solutions.",
        "Optimized website performance for Bitmama and Changera, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
      ],
      bgColor: 'white'

    },

     {
      company: "CodeFixBug",
      link: "https://changera.co",
    logo: codefixlogo,
      title: "Frontend Engineer (Contractor)",
      duration: "May 2022 - Dec 2022",
       details: [
        "Led the development of intuitive and sophisticated financial dashboards encompassing FX, cryptocurrency, and payments, resulting in a remarkable 30% improvement in operational efficiency.",
        "Collaborated with integration partners to monitor other fintech integration channels and escalate technical issues as necessary, thereby ensuring seamless integration with third-party systems.",
        "Innovatively integrated both web2 and web3 payment gateways, significantly broadening user payment options by 25% and positioning Changera as a pioneer in diverse payment solutions.",
        "Optimized website performance for Bitmama and Changera, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
      ],
      bgColor: ''

    },

     {
       company: "DevCareers ",
      link: "https://changera.co",
    logo: devcareerlogo,
      title: "Frontend Engineer (Internship)",
      duration: "Aug 2020 - Nov 2020",
       details: [
        "Led the development of intuitive and sophisticated financial dashboards encompassing FX, cryptocurrency, and payments, resulting in a remarkable 30% improvement in operational efficiency.",
        "Collaborated with integration partners to monitor other fintech integration channels and escalate technical issues as necessary, thereby ensuring seamless integration with third-party systems.",
        "Innovatively integrated both web2 and web3 payment gateways, significantly broadening user payment options by 25% and positioning Changera as a pioneer in diverse payment solutions.",
        "Optimized website performance for Bitmama and Changera, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
      ],
         bgColor: ''

    },


  ];


      const EducationExperiences = [
         {
      company: "Kwara State University",
      link: "https://kwasu.edu.ng/",
      logo: "https://kwasu.edu.ng/wp-content/uploads/2024/03/kwasu-big-en-320x124.png",
      title: "Master of Science Mathematics (M.Sc. Mathematics)",
      duration: " 2018 - 2020",
       details: [

      ],
      bgColor: 'white'

    },

    {
      company: "Kwara State University",
      link: "https://kwasu.edu.ng/",
      logo: "https://kwasu.edu.ng/wp-content/uploads/2024/03/kwasu-big-en-320x124.png",
      title: "Bachelor of Science Mathematics (B.Sc. Mathematics)",
      duration: " 2012 - 2016",
       details: [

      ],
      bgColor: 'white'

    },



  ];


        const LicencesandCert = [
         {
      company: "GitHub",
      link: "https://www.credly.com/badges/cd995f90-d1a2-4222-ac1d-1d013d2e7ffd/public_url",
      logo: githubfoundation,
      title: "GitHub Foundations",
      verification: 'https://www.credly.com/badges/cd995f90-d1a2-4222-ac1d-1d013d2e7ffd/public_url',
      duration: " 2024 - 2027",
       details: [

      ],
      bgColor: ''

    },

          {
      company: "Amazon Web Services (AWS)",
      link: "https://www.credly.com/badges/73781f28-5b97-40d1-b7a0-72b120ea474e/public_urll",
      logo: awsdeveloper,
      title: "AWS Certified Developer – Associate",
      verification: 'https://www.credly.com/badges/73781f28-5b97-40d1-b7a0-72b120ea474e/public_url',
      duration: " 2024 - 2027",
       details: [

      ],
      bgColor: ''

    },




      {
      company: "Amazon Web Services (AWS)",
      link: "https://www.credly.com/badges/31ee6fc5-4caf-4f94-8b75-6b96c23522bb/linked_in_profile",
      logo: awssolution,
      title: "AWS Certified Solutions Architect – Associate",
      verification: 'https://www.credly.com/badges/31ee6fc5-4caf-4f94-8b75-6b96c23522bb/linked_in_profile',
      duration: " 2023 - 2026",
       details: [

      ],
      bgColor: ''

    },


    {
      company: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/fcc3e0c761b-20a2-4ac5-9551-def0ff92f7ad/javascript-algorithms-and-data-structures",
      logo: freecodecamp,
      title: "Legacy JavaScript Algorithms and Data Structures Certification.",
      verification: 'https://www.freecodecamp.org/certification/fcc3e0c761b-20a2-4ac5-9551-def0ff92f7ad/javascript-algorithms-and-data-structures',
      duration: " March, 2022",
       details: [

      ],
      bgColor: ''

    },


      {
      company: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/fcc3e0c761b-20a2-4ac5-9551-def0ff92f7ad/responsive-web-design",
      logo: freecodecamp,
      title: "Responsive Web Design",
      verification: 'https://www.freecodecamp.org/certification/fcc3e0c761b-20a2-4ac5-9551-def0ff92f7ad/responsive-web-design',
      duration: " March, 2022",
       details: [

      ],
      bgColor: ''

    },


      {
      company: "Progate",
      link: "https://progate.com/path_certificate/4ffc8550qc681s",
      logo: progate,
      title: "Web Development Path (Node.js)",
      verification: 'https://progate.com/path_certificate/4ffc8550qc681s',
      duration: "June, 2020",
       details: [

      ],
      bgColor: ''

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
                  <Image width={200} height={200}
                    className="aspect-square h-full w-full"
                    alt="Femi Akinyemi"
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
                I am a frontend engineer with over 4 years of experience,
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
                  <span style={{
                    backgroundColor: `${experience.bgColor}`
                  }} className={`relative flex shrink-0 overflow-hidden  rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground`}>
                    <Image
                      className={` aspect-square  h-full w-full object-contain `}
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

    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Education</h2>
        {EducationExperiences.map((experience, index) => (
          <div key={index}>
            <div
              className="block cursor-pointer"
              onClick={() => toggleContentVisibilityEdu(index)}
            >
              <div className="rounded-lg bg-card text-card-foreground flex">
                <a className="flex-none" href={experience.link}>
                  <span style={{
                    backgroundColor: `${experience.bgColor}`
                  }} className={`relative flex shrink-0 overflow-hidden  rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground`}>
                    <Image
                      className={` aspect-square  h-full w-full object-contain `}
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
            {visibleContenteducation === index && (
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


        <section id="licences">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Licenses & certifications</h2>
        {LicencesandCert.map((experience, index) => (
          <div key={index}>
            <div
              className="block cursor-pointer"
              onClick={() => toggleContentVisibilitycert(index)}
            >
              <div className="rounded-lg bg-card text-card-foreground flex">
                <a className="flex-none" href={experience.link}>
                  <span style={{
                    backgroundColor: `${experience.bgColor}`
                  }} className={`relative flex shrink-0 overflow-hidden  rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground`}>
                    <Image
                      className={` aspect-square  h-full w-full object-contain `}
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
                      {/*   <svg
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
                        </svg> */}
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
            {visibleContentcert === index && (
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



<section id="skills">
  <div className="flex min-h-0 flex-col gap-y-3">
    <div
      style={{
        opacity: 1,
        filter: "blur(0px)",
        transform: "translateY(-6px) translateZ(0px)",
      }}
    >
      <h2 className="text-xl font-bold">Skills</h2>
    </div>

    {/* Skill list */}
    <div className="flex flex-wrap gap-1">
      {[
        "HTML5",
        "CSS3",
        "JavaScript",
         "TypeScript",
           "Node.js",
           "React",
        "Redux",
        "Next.js",
        "AWS",
        "AWS Amplify",
        "AWS Lambda",
        "ChakraUI",
        "Ant Design",
        "Git",
        "Figma",
        "GCP",
        "MongoDB",
        "DynamoDB",
        "Shadcn",
        "Storybook",
        "Tailwind CSS",
        "MaterialUI",
        "Vercel",
        "GraphGl"
      ].map((skill, index) => (
        <div
          key={index}
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px) translateZ(0px)",
          }}
        >
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#171717] text-primary-foreground shadow hover:bg-[#171717]/80">
            {skill}
          </div>
        </div>
      ))}
    </div>
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
