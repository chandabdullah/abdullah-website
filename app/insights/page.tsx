import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import InsightsList from "@/components/insights-list";
import NodeField from "@/components/node-field";
import SeriesThread from "@/components/series-thread";
import { series } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Writing on software, product, systems and AI — the recurring threads behind 7+ years and 50+ applications.",
};

const SHELL = "mx-auto max-w-[1280px] px-6";

export default function Insights() {
  return (
    <main>
      {/* INTRO + ARTICLES -------------------------------------------------- */}
      <section
        aria-labelledby="i-h"
        className="relative overflow-hidden border-b border-border"
      >
        <NodeField className="pointer-events-none absolute top-10 -right-10 hidden w-[280px] text-ink opacity-[0.13] lg:block" />
        <div
          className={`${SHELL} relative flex flex-col gap-10 pt-[clamp(56px,9vw,128px)] pb-12`}
        >
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
              INSIGHTS
            </p>
            <h1
              id="i-h"
              className="text-[clamp(38px,5vw,72px)] font-extrabold leading-none tracking-[-0.02em]"
            >
              FROM MY THINKING
            </h1>
          </div>

          <InsightsList />
        </div>
      </section>

      {/* SIGNATURE SERIES -------------------------------------------------- */}
      <section
        aria-labelledby="series-h"
        className="border-b border-border bg-surface"
      >
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-14 flex flex-col gap-4">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
              SIGNATURE SERIES
            </p>
            <h2
              id="series-h"
              className="text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.05]"
            >
              RECURRING THREADS
            </h2>
          </Reveal>

          <Reveal>
            <SeriesThread threads={[...series]} />
          </Reveal>
        </div>
      </section>

      {/* FROM MY NOTES ----------------------------------------------------- */}
      <section aria-labelledby="notes-h" className="border-b border-border">
        <Reveal className="mx-auto flex max-w-[800px] flex-col gap-12 px-6 py-[clamp(80px,12vw,160px)]">
          <h2
            id="notes-h"
            className="text-[12px] font-semibold tracking-[0.2em] text-accent"
          >
            FROM MY NOTES
          </h2>
          <p className="text-[14px] font-medium tracking-[0.04em] text-muted">
            A line worth thinking about.
          </p>
          <blockquote className="text-[clamp(26px,3.4vw,44px)] leading-[1.25] font-bold tracking-[-0.01em]">
            &ldquo;Most complexity isn&rsquo;t in the problem. It&rsquo;s in
            everything we added while avoiding the problem.&rdquo;
          </blockquote>
          <p className="max-w-[600px] text-[16px] leading-[1.7] text-muted">
            A note from a project review. We had three tools, two spreadsheets
            and a chat channel doing the job of one clear decision. Once the
            decision was made, the tools stopped being necessary.
          </p>
          <p className="border-t border-border pt-6 text-[11px] font-semibold tracking-[0.18em] text-muted">
            FROM MY NOTES / 014
          </p>
        </Reveal>
      </section>
    </main>
  );
}
