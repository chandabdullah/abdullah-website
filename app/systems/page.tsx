import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import SystemVisual from "@/components/system-visual";
import Explorer from "@/components/explorer";
import Marquee from "@/components/marquee";
import NodeField from "@/components/node-field";
import { brandTicker, processSteps, series } from "@/lib/content";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Complexity → clarity → system. Every problem goes through the same three states; the work is getting to a structure someone else can run.",
};

const SHELL = "mx-auto max-w-[1280px] px-6";

export default function Systems() {
  return (
    <main>
      {/* INTRO ------------------------------------------------------------ */}
      <section
        aria-labelledby="s-h"
        className="grid-bg relative overflow-hidden border-b border-border"
      >
        <NodeField
          className="pointer-events-none absolute -top-6 -right-10 hidden w-[340px] text-ink opacity-[0.18] lg:block"
        />
        <div
          className={`${SHELL} relative flex flex-col gap-6 py-[clamp(56px,9vw,128px)]`}
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
            SYSTEMS
          </p>
          <h1
            id="s-h"
            className="max-w-[900px] text-[clamp(38px,5vw,72px)] font-extrabold leading-none tracking-[-0.02em]"
          >
            COMPLEXITY <span className="text-accent">→</span> CLARITY{" "}
            <span className="text-accent">→</span> SYSTEM
          </h1>
          <p className="max-w-[680px] text-[18px] leading-relaxed text-muted">
            Every problem I work on goes through the same three states. Mess is
            not a failure, it is the starting condition. The work is getting
            from there to a structure someone else can run.
          </p>
        </div>
      </section>

      {/* DIAGRAM ----------------------------------------------------------- */}
      <section aria-label="From mess to system" className="border-b border-border">
        <Reveal className={`${SHELL} py-[clamp(48px,6vw,80px)]`}>
          <SystemVisual detailed caption="HOVER TO ORGANIZE" />
        </Reveal>
      </section>

      <Marquee items={brandTicker} className="border-t-0 bg-surface" />

      {/* PROCESS ----------------------------------------------------------- */}
      <section
        aria-labelledby="process-h"
        className="border-b border-border bg-surface"
      >
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-16 flex flex-col gap-4">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
              HOW I THINK
            </p>
            <h2
              id="process-h"
              className="text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.05]"
            >
              HOW I APPROACH A PROBLEM
            </h2>
          </Reveal>

          <Reveal>
            <Explorer items={[...processSteps]} kicker="STEP" />
          </Reveal>
        </div>
      </section>

      {/* SERIES ------------------------------------------------------------ */}
      <section aria-labelledby="series-h" className="border-b border-border">
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-14 flex flex-col gap-4">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
              RECURRING SERIES
            </p>
            <h2
              id="series-h"
              className="text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.05]"
            >
              HOW I KEEP WRITING ABOUT IT
            </h2>
          </Reveal>

          <Reveal
            group
            className="grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3"
          >
            {series.map((thread) => (
              <Link
                key={thread.title}
                href="/insights"
                className="tile row flex min-h-[200px] flex-col gap-4 border-r border-b border-border p-8"
              >
                <span className="text-[11px] font-semibold tracking-[0.14em] text-muted">
                  {thread.n}
                </span>
                <span className="text-[15px] font-bold tracking-[0.1em]">
                  {thread.title}
                </span>
                <span className="flex-1 text-[15px] leading-[1.6] text-muted">
                  {thread.body}
                </span>
                <span
                  aria-hidden="true"
                  className="arrow text-[18px] text-accent"
                >
                  →
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
