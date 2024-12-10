// import Image from "next/image";

import Image from "next/image";
import headshot from "@/app/assets/head_shot_native.jpg";

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
               I am a frontend engineer with over 3 years of experience, holding a degree in mathematics and a Master of Science (MSc) in mathematics, and a strong
                background in software development using JavaScript, TypeScript,
                React, and NextJs amongst other tools. Over the years, I
                have specialized in building and optimizing web applications in
                several industries and startups, especially in the cloud
                space, working with cross-functional teams to design solutions
                that meet business goals and drive measurable results. My
                commitment to best practices and attention to detail ensures
                that my code not only meets standards but also pushes the
                envelope in terms of performance and user engagement
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
