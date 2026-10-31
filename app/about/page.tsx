import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/reveal";
import Currently from "@/components/currently";
import Marquee from "@/components/marquee";
import NodeField from "@/components/node-field";
import BrandIcon from "@/components/brand-icon";
import Timeline from "@/components/timeline";
import { brandTicker, storyBlocks, tools } from "@/lib/content";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "From intern in 2020 to PM & Managing Director at Next Level Software: Ionic, Flutter, full-stack backends, team lead and product delivery.",
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
              className="photo-glow absolute -top-6 -right-6 -bottom-6 -left-6 blur-[2px]"
            />
            <div
              aria-hidden="true"
              className="absolute top-4 -right-4 -bottom-4 left-4 border border-border"
            />
            <Image
              src="/abdullah.webp"
              alt={`${profile.name}, ${profile.title}`}
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

          <Reveal group className="flex max-w-[760px] flex-col">
            {storyBlocks.map((block, i) => (
              <div
                key={block.label}
                className="group grid gap-3 border-t border-border py-8 first:border-t-0 first:pt-0 lg:grid-cols-[150px_1fr] lg:gap-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[11px] font-bold tracking-[0.14em] text-accent">
                    {`0${i + 1}`}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-muted">
                    {block.label}
                  </span>
                </div>
                <p
                  className={
                    block.lead
                      ? "text-[21px] leading-[1.5] font-medium text-ink"
                      : "text-[17px] leading-[1.7] text-muted"
                  }
                >
                  {block.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Marquee items={brandTicker} slow />

      {/* TIMELINE -------------------------------------------------------- */}
      <section aria-labelledby="tl-h" className="border-b border-border">
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-16 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
                CAREER · 2020 → 2026
              </p>
              <h2
                id="tl-h"
                className="text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.05]"
              >
                FROM INTERN TO MANAGING DIRECTOR.
              </h2>
            </div>
            <p className="max-w-[520px] text-[16px] leading-[1.7] text-muted">
              Each year added a perspective: hybrid apps, Flutter, backends,
              leading a team, then running delivery. None of them replaced
              engineering.
            </p>
          </Reveal>

          <Timeline />
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
                key={tool.label}
                className="brand-hover lift flex items-center gap-2.5 border border-border bg-panel px-3.5 py-2 text-[13px] font-medium transition-colors hover:border-accent"
              >
                <BrandIcon name={tool.icon} size={17} />
                {tool.label}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <Currently />
    </main>
  );
}
