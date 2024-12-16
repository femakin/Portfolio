// import Image from "next/image";

'use client'

import Image from "next/image";
// import headshot from "@/app/assets/anime.webp";
import headshot from "@/app/assets/picofm.png";
import { CiDark, CiHome, CiLight, CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { PiStoolLight } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { FaBlog, FaGithub, FaRegEnvelope } from "react-icons/fa";

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
import { useTheme } from './ThemeContext';
// import { Switch } from '@nextui-org/react';


export default function Home() {

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
      bgColor: 'white'

    },


  ];

      const workExperiences = [
    {
      company: "Datamellon",
      link: "https://datamellon.com/",
     /*  logo: "https://datamellon.com/images/Datamellon_logo.svg", */
     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldAbP0IGerQC5SKV14jEviAHCXmj4wewZ4w&s",
      title: "Senior Frontend Engineer",
      duration: "Sep 2021 - Present",
       details: [
        "Played a key role in the development of Klaudworks, an AI-powered FinOps solution that ensures continuous monitoring, automated optimization, and strategic cost control, delivering unparalleled financial management for cloud investments.",
        "Optimized website performance for Datamellon website, enhancing user accessibility and site speed by an outstanding 40%, consequently amplifying user satisfaction and retention rates.",
        "Leveraged AWS tools like Amplify, S3, and EC2 services, for deployment and hosting services.",
        "Actively engaged in planning and translating client requirements into solutions, collaborating with teams to deliver quality results on time.",
        "Led the development of product dashboards, driving a remarkable 30% improvement in operational efficiency.",
        "Supported junior colleagues and interns by providing guidance and unblocking challenges in AWS services, including AWS Amplify, while offering additional assistance as needed.",

      ],
      bgColor: 'black'

    },





      {
      company: "AutoclipsAI",
      link: "https://www.autoclipsai.app/",
      logo: autoclips,
      title: "Founding Senior Frontend Engineer (Contractor)",
      duration: "Jun 2024 - Present",
       details: [
        "Led the development of user-friendly interfaces to streamline video creation, enhancing accessibility and user satisfaction.",
        "Leveraged AWS tools like Amplify, S3, and EC2 services, for deployment and hosting services.",
        "Analyzed and resolved technical issues related to video creation, minimizing downtime and maximizing customer satisfaction.",
        "Utilized test automation to ensure maintainable solutions and reduce bugs pushed to production significantly.",

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
        "Redesigned and optimized the company’s website and admin portal, enhancing user experience and functionality, which significantly improved customer satisfaction and retention rates.",
        "Implemented UI from Figma designs, integrating RESTful APIs and endpoints for seamless user experiences.",
        "Optimized registration and onboarding flows, culminating in a significant 40% increase in completed registrations.",
        "Managed technical team to deliver high-quality projects on time.",
      ],
      bgColor: 'white'

    },

     {
       company: "DevCareers ",
      link: "https://changera.co",
    logo: devcareerlogo,
      title: "Frontend Engineer (Internship)",
      duration: "Aug 2020 - Nov 2020",
       details: [
        "Collaborated with the team in gathering software requirements, contributing to design discussions, and participating in code reviews.",
        "Converted UI/UX designs and wireframes into responsive and high-quality code.",
        "Built and deployed dynamic web applications using front-end technologies such as React, ensuring seamless user experiences.",
      ],
         bgColor: 'white'

    },


  ];

    const cardsData = [
    {
      title: 'AutoclipsAI',
      description:
        'AutoclipsAI allows creators to instantly create captivating videos for their YouTube & TikTok accounts without showing their face!',
      imageUrl:
        'https://shortvideoassets.s3.us-east-1.amazonaws.com/Screenshot+2024-12-11+at+20.23.56.png',
      tags: ['Next.js', 'MongoDB', 'Typescript', 'Resend', 'AWS Amplify', 'Paystack', 'Axios', 'Framer Motion', 'Next-Auth', 'TailwindCSS', 'Lemon Sqeezy'],
      website: 'https://www.autoclipsai.app/',
    },

  {
      title: 'Cover Letter Expert',
      description:
        'An AI application that revolutionize job application experience with cutting-edge AI-powered Cover Letter Generator, crafting compelling and personalized cover letters tailored to unique professional journey power by OpenAI',
      imageUrl:
        'https://shortvideoassets.s3.us-east-1.amazonaws.com/Screenshot+2024-12-11+at+21.50.41.png',
      tags: ['React', 'Tanstack Query', 'Typescript', 'AWS Amplify', 'Next-Auth', 'Javascript', 'Tailwind',

        'Storybook', 'MongoDB', 'NextJS', 'Lemon Squeezy', 'PayStack'
       ],
      website: 'https://www.coverletterexpert.com/',
      github: 'https://www.coverletterexpert.com/'
    },

      {
      title: 'klaudworks.io',
      description:
        'Klaudworks helps brands and companies maximize the financial value of their cloud investments with an AI-powered FinOps solution.',
      imageUrl:
        'https://shortvideoassets.s3.us-east-1.amazonaws.com/Screenshot+2024-12-11+at+20.29.05.png',
      tags: ['React', 'Chart.js', 'Recharts', 'DynamoDB', 'Axios', 'AWS Amplify', 'React Testing Library', 'TailwindCSS',  'Typescript', 'Vite' ],
      website: 'https://www.klaudworks.io/',
      github: 'https://www.klaudworks.io/'
    },

     {
      title: 'Datamellon Website',
      description:
        'Collaborate with the team to revamp the Datamellon website to  reflects Datamellon`s s values and meets the needs of our growing audience',
      imageUrl:
        'https://shortvideoassets.s3.us-east-1.amazonaws.com/Screenshot+2024-12-11+at+21.52.54.png',
      tags: ['React', 'Typescript', 'Material UI', 'Swiper', 'AWS Amplify', 'DynamoDB', 'React Testing Library', 'TailwindCSS', 'React Query'
       ],
      website: 'https://datamellon.com/',
      github: 'https://datamellon.com/'
    },


    {
      title: 'Ajiroba',
      description:
        'Developed an auction retail platform.',
      imageUrl:
        'https://shortvideoassets.s3.us-east-1.amazonaws.com/Screenshot+2024-12-11+at+21.42.34.png',
      tags: ['Next.js', 'TailwindCSS', 'Zustand', 'Tanstack Query', 'Framer Motion', 'Axios', 'Swiper', 'Typescript', ],
      website: 'https://ajrobaweb-one.vercel.app/',
      github: 'https://ajrobaweb-one.vercel.app/'
    },

  {
      title: 'Create Tribute',
      description:
        'Create Tributes allows users to create beautiful memories of their loved ones, share stories and photos, send condolences, and write tributes to preserve their legacies.',
      imageUrl:
        'https://shortvideoassets.s3.us-east-1.amazonaws.com/Screenshot+2024-12-11+at+22.06.58.png',
      tags: ['Next.js', 'Typescript',  'Framer Motion', 'TailwindCSS', 'PayStack', 'Jest'],
      website: 'https://createtribute.com/',
    },

  ]



   const OpensData = [

 {
      duration: 'Apr 2023 - Present',
      company: 'Medusa Hackathon',
      location: 'Open Source',
      description:
        `First place in the 2022 First Medusa Hackathon Challenge (out of 200+ participants across 120 submissions).
         A challenge to build a Medusa project in 3 weeks. In this challenge, my partner and I developed a Medusa-Payment integration with Paystack,
        which earned us the title of Overall Winner.`,
      imageUrl:
        'https://pbs.twimg.com/profile_images/1642940899918331908/rgDM_I8h_400x400.jpg',
      tags: ['Next.js', 'Typescript', 'React', 'Framer Motion', 'TailwindCSS', 'Stripe'],
      website: 'https://medusajs.com/blog/hackathon-winners/',
        github: 'https://github.com/a11rew/medusa-payment-paystack'
    },

    {
      duration: 'Apr 2023 - Present',
      company: 'Moderator at DEV Community',
      location: 'Open Source',
      description:
        `As a moderator (trusted user) at DEV Community (dev.to),
         I monitor and moderate posts and comments on DEV platform,
          make sure that they are following the Code of Conduct.`,
      imageUrl:
        'https://d2fltix0v2e0sb.cloudfront.net/dev-black.png',
      tags: ['Next.js', 'Typescript', 'React', 'Framer Motion', 'TailwindCSS', 'Stripe'],
      website: 'https://dev.to/femi_akinyemi',
        github: '/'
    },

   {
      duration: 'Aug 2023 - Aug 2024',
      company: 'Community Builder',
      location: 'Amazon Web Services (AWS)',
      description:
        `As an active contributor to the growth and development of the AWS community,
        my primary focus is to share knowledge, foster collaboration,
        and promote the adoption of AWS services and solutions among local community members.`,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s',
      tags: ['Next.js', 'Typescript', 'React', 'Framer Motion', 'TailwindCSS', 'Stripe'],
      website: 'https://aws.amazon.com/developer/community/community-builders/',

    },


  ]

      const [visibleContent, setVisibleContent] = useState(
    workExperiences.length > 0 ? 0 : null
  )
    const [visibleContenteducation, setVisibleContenteducation] = useState<number | null>(null);
const [visibleContentcert, setVisibleContentcert] = useState<number | null>(null);

  const toggleContentVisibility = (index: number) => {
    setVisibleContent(visibleContent === index ? null : index);
  };


   const toggleContentVisibilityEdu = (index: number) => {
    setVisibleContenteducation(visibleContenteducation === index ? null : index);
  }


    const toggleContentVisibilitycert = (index: number) => {
    setVisibleContentcert(visibleContentcert === index ? null : index);
  }

    const { theme, toggleTheme } = useTheme();

const Card = ({ title, description, imageUrl, tags, website, github }: {title: string, description: string, imageUrl: string, tags: string[], website: string, github?: string}) =>{
return (
  <div className="break-inside-avoid">
      <div className="rounded-lg bg-card  text-card-foreground flex flex-col overflow-hidden   border dark:border-[#373232] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out h-full mb-5">
        <a className="block cursor-pointer" href={website}>
          <Image
            alt={title}
            width={500}
            height={160}
            className="w-full overflow-hidden object-contain object-top"
            src={imageUrl}
            style={{ color: 'transparent' }}
          />
        </a>
        <div className="flex flex-col px-2 mt-2">
          <h3 className="font-semibold tracking-tight mt-1 text-base dark:text-[#FAFAFA]">{title}</h3>
          <div className="prose txtWhtsub max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <p>{description}</p>
          </div>
        </div>
        <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <div
                key={tag}
                className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-[#171717] bg-[#F5F5F5] dark:bg-[#262626] dark:text-[#FAFAFA]  shadow hover:bg-[#F5F5F5]/80 px-1 py-0 text-[10px]"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center pt-2 px-2 pb-2 gap-2">
          <a target="_blank" href={website} rel="noopener noreferrer">
            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#171717] text-primary-foreground shadow dark:bg-[#FAFAFA] dark:text-[#171717] dark:hover:bg-[#FAFAFA]/80 flex gap-2 px-2 py-1 text-[10px]">
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
                className="lucide lucide-globe size-3"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              Website
            </div>
          </a>

          {github &&

         <a target="_blank" href={website} rel="noopener noreferrer">
            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#171717] text-primary-foreground shadow dark:bg-[#FAFAFA] dark:text-[#171717] dark:hover:bg-[#FAFAFA]/80 flex gap-2 px-2 py-1 text-[10px]">
             <svg viewBox="0 0 438.549 438.549" className="size-3"><path fill="currentColor" d="M409.132
             114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063
              29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0
             47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063
             79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562
             0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567
              1.136c-4.187.767-9.469
               1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289
                1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754
               13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419
                6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952
                 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559
                 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715
                  13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117
                  2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325
                  40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9
                   12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901
                    13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84
                     11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562
                      14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279
                       3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653
                       80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
              Source
            </div>
          </a>}
        </div>
      </div>
    </div>
)
}




  return (
    <div className="bgMain min-h-screen  font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6 __variable_d65c78">
      <main className="flex flex-col min-h-[100dvh] space-y-10">

        <section id="hero">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span
                    className=" dark:text-white  inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
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
                    className="inline-block max-w-[600px] md:text-xl txtWht"
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
            <h2 className="text-xl font-bold txtWht">About</h2>
          </div>

          <div
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(-8px) translateZ(0px)",
            }}
          >
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              <p className="text-[#737373] txtWhtsub">
                I am a frontend engineer with over 4 years of experience,
                holding a degree in mathematics and a Master of Science (MSc) in
                mathematics, and a strong background in software development
                using JavaScript, TypeScript, React, and NextJs amongst other
                tools. Over the years, I have specialized in building and
                optimizing web applications in several industries and startups,
                especially in the cloud space, and AI space, working with cross-functional
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
        <h2 className="text-xl font-bold txtWht">Work Experience</h2>
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
                      <h3 className="txtWhtexptl inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
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
                      <div className="text-xs txtWhtsub sm:text-sm tabular-nums text-muted-foreground text-right">
                        {experience.duration}
                      </div>
                    </div>
                    <div className="font-sans text-xs txtWhtexptl">{experience.title}</div>
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
                  <li className=" txtWhtsub list-item text-[#737373] font-sans" key={detailIndex}>{detail}</li>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold txtWht">Education</h2>
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
                      <h3 className="inline-flex txtWhtexptl items-center justify-center font-semibold leading-none text-xs sm:text-sm">
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
                      <div className="text-xs txtWhtsub sm:text-sm tabular-nums text-muted-foreground text-right">
                        {experience.duration}
                      </div>
                    </div>
                    <div className="font-sans text-xs txtWhtexptl">{experience.title}</div>
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
        <h2 className="text-xl font-bold txtWht">Licenses & certifications</h2>
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
                      <h3 className="inline-flex txtWhtexptl items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                        {experience.company}

                      </h3>
                      <div className=" txtWhtsub text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                        {experience.duration}
                      </div>
                    </div>
                    <div className="font-sans text-xs  txtWhtexptl">{experience.title}</div>
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

                {experience.details.map((detail, detailIndex) => (
                  <li className=" list-item text-[#737373] font-sans  " key={detailIndex}>{detail}</li>
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
      <h2 className="text-xl font-bold txtWht">Skills</h2>
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
        "GraphGl",
        "React Query"
      ].map((skill, index) => (
        <div
          key={index}
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px) translateZ(0px)",
          }}
        >
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent dark:bg-[#FAFAFA] dark:text-[#171717] dark:hover:bg-[#FAFAFA]/80 bg-[#171717] text-primary-foreground shadow hover:bg-[#171717]/80">
            {skill}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section id="projects">
  <div className="space-y-12 w-full py-12">
    <div
      style={{
        opacity: 1,
        filter: "blur(0px)",
        transform: "translateY(-6px) translateZ(0px)",
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm dark:text-[#08090A] dark:bg-[#FAFAFA]">
            My Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white ">
            Check out my latest work
          </h2>
          <p className=" txtWhtsub text-[#737373] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;ve worked on a variety of projects, either on contract, or in
            my leisure. From simple websites to complex web applications. Here
            are a few of my favorites.
          </p>
        </div>
      </div>
    </div>


    <div className="columns-1 md:columns-2 lg:columns-3 gap-x-8 max-w-7xl mx-auto">


       {cardsData.map((card) => (
        <Card key={card.title} {...card} />
      ))}





    </div>

  </div>
</section>



<section id="hackathons">
  <div className="space-y-12 w-full py-12">
    <div
      style={{
        opacity: 1,
        filter: "blur(0px)",
        transform: "translateY(-6px) translateZ(0px)",
      }}
    >

      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm dark:text-[#08090A] dark:bg-[#FAFAFA]">
            Volunteering &amp; Hackathons
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">
            I like contributing
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed txtWhtsub">
           In my free time, I’ve taken part in several hackathons and volunteered with tech communities and events.
            These experiences were truly eye-opening, showcasing the endless possibilities that can be achieved by motivated and passionate individuals working together.
           Some of my favorites are listed below.
          </p>
        </div>
      </div>
    </div>



     {OpensData.map((card) => (
        <div key={card.company}
      style={{
        opacity: 1,
        filter: "blur(0px)",
        transform: "translateY(-6px) translateZ(0px)",
      }}
    >
      <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
        <div
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px) translateZ(0px)",
          }}
        >
          <li className="relative ml-10 py-4">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                <Image
                  className={` aspect-square  h-full w-full object-contain `}
                  alt={"experience.company"}
                  src={card.imageUrl}
                  width={40}
                  height={40}
                />
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground  txtWhtsub">
                {card.duration}
              </time>
              <h2 className="font-semibold leading-none dark:text-[#FAFAFA]">
                {card.company}
              </h2>
              <p className="text-sm text-muted-foreground  txtWhtsub">
                {card.location}
              </p>
              <span className="prose dark:prose-invert text-sm text-muted-foreground  txtWhtsub">
             {card.description}
              </span>
            </div>

            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
              <a href={card.website}>
                <div
                  className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent
      bg-[#171717] dark:bg-[#FAFAFA] text-primary-foreground dark:text-black
      dark:hover:bg-[#FAFAFA]/80 flex gap-2"
                  title="Source (Web)"
                >
                  <FaGithub className="text-xl text-white dark:text-black  transition-transform duration-300 ease-in-out group-hover:scale-125" />
                  Source (Web)
                </div>
              </a>

              {
                card?.github && (
                   <a href={card.github}>
                <div
                  className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent
      bg-[#171717] dark:bg-[#FAFAFA] text-primary-foreground dark:text-black
      dark:hover:bg-[#FAFAFA]/80 flex gap-2"
                  title="Source (API)"
                >
                  <FaGithub className="text-xl text-white dark:text-black  transition-transform duration-300 ease-in-out group-hover:scale-125" />
                  Source (API)
                </div>
              </a>
                )
              }



            </div>
          </li>
        </div>
      </ul>
    </div>
      ))}



  </div>
</section>

<section id="contact">
  <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
    <div
      style={{
        opacity: 1,
        filter: "blur(0px)",
        transform: "translateY(-6px) translateZ(0px)",
      }}
    >
      <div className="space-y-3">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm dark:text-[#08090A] dark:bg-[#FAFAFA]">
          Contact
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">
          Let’s Connect &amp; Innovate
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed txtWhtsub">
          I’m always eager to learn, explore new challenges, and connect with
          professionals who are passionate about technology and innovation. If
          you’re looking to elevate your projects with a blend of creativity,
          collaboration, and technical excellence, feel free to connect with me
          on{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.linkedin.com/in/femi-akinyemi/"
          >
            Linkedin
          </a>{" "}
          or reach out at{" "}
          <a
            className="text-blue-500 hover:underline"
            href="mailto: akinfemi46@gmail.com"
          >
            akinfemi46@gmail.com
          </a>{" "}
        </p>
      </div>
    </div>
  </div>
</section>


      </main>





      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
        <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background dark:bg-foreground shadow-md dark:border-gray-700 dark:shadow-lg">
          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Home" showArrow={true} color="foreground">
                <CiHome className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/#work"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Experience" showArrow={true} color="foreground">
                <IoBagOutline className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/#skills"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Skills" showArrow={true} color="foreground">
                <PiStoolLight className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Projects" showArrow={true} color="foreground">
                <GoProject className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
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
              href="https://github.com/femakin"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="GitHub" showArrow={true} color="foreground">
                <FaGithub className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="https://www.linkedin.com/in/femi-akinyemi/"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="LinkedIn " showArrow={true} color="foreground">
                <CiLinkedin className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>


           <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="https://dev.to/femi_akinyemi"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Blog " showArrow={true} color="foreground">
                <FaBlog className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
              </Tooltip>
            </Link>
          </div>

          <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link
              href="mailto: akinfemi46@gmail.com"
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
              <Tooltip content="Email " showArrow={true} color="foreground">
                <FaRegEnvelope className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
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

      <div className="group flex aspect-square cursor-pointer items-center justify-center rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <div
                 onClick={toggleTheme}
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
            >
 {theme === "dark" ? (
                    <CiDark className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />

      ) : (
                      <CiLight className="text-xl dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />

      )}


            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
