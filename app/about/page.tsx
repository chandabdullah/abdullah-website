import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/reveal";
import Currently from "@/components/currently";
import Marquee from "@/components/marquee";
import NodeField from "@/components/node-field";
import { brandTicker, careerStages, profile, tools } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Seven years and 50+ applications across engineering, product, delivery, QA, UX, AI and operations — one habit applied to bigger and bigger problems.",
};

const SHELL = "mx-auto max-w-[1280px] px-6";
const LABEL = "text-[12px] font-semibold tracking-[0.2em] text-muted";

export default function About() {
  return (
    <main>
      {/* INTRO ------------------------------------------------------------ */}
      <section
        aria-labelledby="ab-h"
        className="grid-bg relative overflow-hidden border-b border-border"
      >
        <NodeField className="pointer-events-none absolute -bottom-6 left-1/3 hidden w-[260px] text-ink opacity-[0.12] lg:block" />
        <div
          className={`${SHELL} relative grid items-start gap-12 py-[clamp(56px,9vw,128px)] lg:grid-cols-[1.3fr_1fr] lg:gap-16`}
        >
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
              ABOUT
            </p>
            <h1
              id="ab-h"
              className="text-[clamp(38px,5vw,72px)] font-extrabold leading-none tracking-[-0.02em]"
            >
              I&rsquo;M NOT INTERESTED IN ADDING MORE{" "}
              <span className="text-accent">COMPLEXITY.</span>
            </h1>
            <p className="max-w-[520px] text-[22px] leading-snug font-semibold">
              I like making complicated things easier to understand.
            </p>
          </div>

          <figure className="relative m-0 w-full max-w-[420px] justify-self-end">
            <div
              aria-hidden="true"
              className="absolute top-4 -right-4 -bottom-4 left-4 border border-border"
            />
            <Image
              src="/abdullah.webp"
              alt={`${profile.name}, ${profile.role} at ${profile.company}`}
              width={1229}
              height={1280}
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="relative block aspect-square w-full border border-border object-cover object-[50%_20%] saturate-90"
            />
            <span
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 h-10 w-10 border-r-2 border-b-2 border-accent"
            />
          </figure>
        </div>
      </section>

      {/* THE PATTERN ------------------------------------------------------ */}
      <section
        aria-labelledby="story-h"
        className="border-b border-border bg-surface"
      >
        <div
          className={`${SHELL} grid gap-8 py-[clamp(56px,9vw,128px)] lg:grid-cols-[1fr_2fr] lg:gap-16`}
        >
          <h2 id="story-h" className={LABEL}>
            THE PATTERN
          </h2>

          <Reveal className="flex max-w-[720px] flex-col gap-7 text-[18px] leading-[1.7] text-muted">
            <p className="text-[22px] leading-[1.5] font-medium text-ink">
              When information is scattered, I want to organize it. When a
              workflow becomes repetitive, I think about a system. When someone
              is blocked on logic, I enjoy helping them break the problem down.
              When an existing tool doesn&rsquo;t solve a personal problem
              properly, I usually end up building something.
            </p>
            <p>
              That pattern is the whole story. It started with code: as a
              developer I wanted clean structure, then as a multi-stack engineer
              working across Flutter, Ionic, React, Angular and Node.js I saw
              how the same problems repeated across very different stacks. The
              problem was rarely the language.
            </p>
            <p>
              Product thinking followed, because building the wrong thing well
              is still building the wrong thing. Project management followed
              that, because a clear plan is a system too. Testing and UX taught
              me to look past the happy path and at how software actually
              behaves in a person&rsquo;s hands. AI, SEO and business operations
              came in the same way: something was messy, and there should have
              been a better way.
            </p>
            <p>
              Seven years and {profile.apps} applications later, I work across
              engineering, product, delivery, QA, UX, AI and operations. Not as
              a list of skills, but as one habit applied to bigger and bigger
              problems: understand it, break it down, organize it, build the
              simplest system that works.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={brandTicker} slow />

      {/* EVOLUTION -------------------------------------------------------- */}
      <section aria-labelledby="tl-h" className="border-b border-border">
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-16 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
                EVOLUTION
              </p>
              <h2
                id="tl-h"
                className="text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.05]"
              >
                FROM &ldquo;HOW DO I BUILD THIS?&rdquo;
              </h2>
            </div>
            <p className="max-w-[520px] text-[16px] leading-[1.7] text-muted">
              To &ldquo;What should we build, why, how should it work, and how
              do we deliver it properly?&rdquo; Each step added a perspective.
              None of them replaced engineering.
            </p>
          </Reveal>

          <Reveal
            group
            as="ol"
            className="grid list-none border-t-2 border-border p-0 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7"
          >
            {careerStages.map((stage) => (
                <li
                  key={stage.title}
                  className="group relative flex flex-col gap-3 pt-6 pr-6 pb-8"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -top-0.5 left-0 h-0.5 w-6 transition-[width] duration-500 group-hover:w-full ${
                      stage.current ? "bg-accent" : "bg-ink"
                    }`}
                  />
                  {stage.current && (
                    <span
                      aria-hidden="true"
                      className="pulse-ring absolute -top-1.5 left-0 h-3 w-3 bg-accent"
                    />
                  )}
                  <span className="text-[12px] font-semibold tracking-[0.12em] text-muted">
                    {stage.n}
                  </span>
                  <span className="text-[16px] leading-tight font-bold tracking-[0.03em]">
                    {stage.title}
                  </span>
                  <span className="text-[14px] leading-[1.55] text-muted">
                    {stage.body}
                  </span>
                </li>
              ))}
          </Reveal>
        </div>
      </section>

      {/* TOOLS ------------------------------------------------------------ */}
      <section
        aria-labelledby="stack-h"
        className="border-b border-border bg-surface"
      >
        <div
          className={`${SHELL} grid gap-10 py-[clamp(56px,8vw,96px)] lg:grid-cols-[1fr_2fr] lg:gap-16`}
        >
          <h2 id="stack-h" className={LABEL}>
            TOOLS I&rsquo;VE WORKED WITH
          </h2>
          <Reveal group as="ul" className="flex list-none flex-wrap gap-2 p-0">
            {tools.map((tool) => (
              <li
                key={tool}
                className="lift border border-border bg-bg px-3.5 py-2 text-[13px] font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {tool}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <Currently />
    </main>
  );
}
