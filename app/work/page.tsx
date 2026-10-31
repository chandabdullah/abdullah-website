import type { Metadata } from "next";
import Marquee from "@/components/marquee";
import NodeField from "@/components/node-field";
import WorkIndex from "@/components/work-index";
import { brandTicker } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Client products I've managed as PM & Managing Director at Next Level Software, products I built with a team, my personal apps and open-source Flutter packages.",
};

const SHELL = "mx-auto max-w-[1280px] px-6";

export default function Work() {
  return (
    <main>
      {/* INTRO ------------------------------------------------------------ */}
      <section
        aria-labelledby="w-h"
        className="grid-bg relative overflow-hidden border-b border-border"
      >
        <NodeField className="pointer-events-none absolute -top-4 -right-8 hidden w-[300px] text-ink opacity-[0.16] lg:block" />
        <div
          className={`${SHELL} relative flex flex-col gap-6 py-[clamp(56px,9vw,128px)]`}
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
            WORK
          </p>
          <h1
            id="w-h"
            className="max-w-[960px] text-[clamp(38px,5vw,72px)] font-extrabold leading-none tracking-[-0.02em]"
          >
            PRODUCTS I&rsquo;VE <span className="text-accent">MANAGED</span>,
            BUILT AND SHIPPED.
          </h1>
          <p className="max-w-[680px] text-[18px] leading-relaxed text-muted">
            Client projects I&rsquo;ve run as Project Manager, products I built
            as part of a team, my own apps, and the Flutter packages I maintain.
          </p>
        </div>
      </section>

      <Marquee items={brandTicker} slow className="border-t-0 bg-surface" />

      {/* INDEX ------------------------------------------------------------ */}
      <section aria-label="Work index" className="border-b border-border">
        <div className={`${SHELL} pt-[clamp(48px,6vw,96px)] pb-6`}>
          <WorkIndex />
        </div>
      </section>
    </main>
  );
}
