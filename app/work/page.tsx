import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import Explorer from "@/components/explorer";
import Marquee from "@/components/marquee";
import NodeField from "@/components/node-field";
import { brandTicker, personalBuilds, workAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Six areas, one habit: take something unclear and give it a structure that holds up in the real world. Plus the full index of personal builds.",
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
            className="max-w-[900px] text-[clamp(38px,5vw,72px)] font-extrabold leading-none tracking-[-0.02em]"
          >
            WHAT I WORK ON
          </h1>
          <p className="max-w-[680px] text-[18px] leading-relaxed text-muted">
            Six areas, one habit. Each of them is a version of the same job:
            take something unclear and give it a structure that holds up in the
            real world.
          </p>
        </div>
      </section>

      {/* AREAS ------------------------------------------------------------ */}
      <section aria-label="Areas" className="border-b border-border">
        <div className={`${SHELL} py-[clamp(48px,6vw,96px)]`}>
          <Reveal>
            <Explorer items={[...workAreas]} kicker="AREA" />
          </Reveal>
        </div>
      </section>

      <Marquee items={brandTicker} slow className="border-t-0" />

      {/* BUILDS ----------------------------------------------------------- */}
      <section
        aria-labelledby="b-h"
        className="border-b border-border bg-surface"
      >
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-16 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <h2
              id="b-h"
              className="text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.05]"
            >
              SOMETIMES I BUILD THINGS
              <br />
              JUST BECAUSE I WANT A BETTER WAY.
            </h2>
            <p className="max-w-[480px] text-[16px] leading-[1.7] text-muted">
              Personal apps and tools. Each one started as a small, annoying
              problem that no existing option solved quite right.
            </p>
          </Reveal>

          <Reveal>
            <ol className="list-none border-t border-border p-0">
              {personalBuilds.map((build, i) => (
                <li key={build.name} className="row border-b border-border">
                  <a
                    href={build.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[48px_1fr_auto] items-center gap-4 py-7 transition-[color,padding] duration-300 hover:pl-3 hover:text-accent sm:grid-cols-[72px_minmax(0,1.2fr)_minmax(0,1fr)_110px_auto] sm:gap-6"
                  >
                    <span className="text-[13px] font-semibold tracking-[0.1em] text-muted">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-[clamp(20px,2.2vw,28px)] font-bold tracking-[0.02em]">
                      {build.name}
                    </span>
                    <span className="hidden text-[15px] text-muted sm:block">
                      {build.desc}
                    </span>
                    <span className="hidden text-[11px] font-semibold tracking-[0.14em] text-muted sm:block">
                      {build.kind}
                    </span>
                    <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.12em] whitespace-nowrap">
                      <span className="hidden sm:inline">VIEW PROJECT</span>
                      <span className="sm:hidden">VIEW</span>
                      <span aria-hidden="true" className="arrow text-accent">
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
