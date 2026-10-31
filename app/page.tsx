import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import Marquee from "@/components/marquee";
import NodeField from "@/components/node-field";
import CountUp from "@/components/count-up";
import Explorer from "@/components/explorer";
import BuildList from "@/components/build-list";
import InsightRows from "@/components/insight-rows";
import SystemVisual from "@/components/system-visual";
import ProcessSteps from "@/components/process-steps";
import Currently from "@/components/currently";
import { brandTicker, insights, workAreas } from "@/lib/content";
import { apps, linkedin, profile, stats } from "@/data/portfolio";

const SHELL = "mx-auto max-w-[1280px] px-6";
const EYEBROW = "text-[12px] font-semibold tracking-[0.2em] text-accent";
const H2 = "text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.05]";

export default function Home() {
  return (
    <main>
      {/* HERO ------------------------------------------------------------ */}
      <section
        aria-labelledby="hero-h"
        className="grid-bg relative overflow-hidden border-b border-border"
      >
        <NodeField className="pointer-events-none absolute top-24 -left-16 hidden w-[280px] text-ink opacity-[0.14] lg:block" />
        <div
          className={`${SHELL} grid items-center gap-12 py-[clamp(56px,8vw,112px)] lg:grid-cols-[3fr_2fr]`}
        >
          <div className="flex max-w-[720px] flex-col gap-8">
            <p className={EYEBROW}>SOFTWARE • PRODUCT • SYSTEMS • AI</p>

            <h1
              id="hero-h"
              className="text-[clamp(40px,6.2vw,92px)] font-extrabold leading-none tracking-[-0.02em]"
            >
              I TURN <span className="text-accent">MESSY PROBLEMS</span>
              <br />
              INTO SIMPLE SYSTEMS.
            </h1>

            <div className="flex max-w-[560px] flex-col gap-4 text-[17px] leading-relaxed text-muted">
              <p className="font-medium text-ink">
                I&rsquo;m {profile.name}, {profile.title}.
              </p>
              <p>
                After {profile.years} years and {profile.apps} mobile
                applications, I&rsquo;ve learned that great software is rarely
                just about writing code.
              </p>
              <p>
                It&rsquo;s about understanding the problem, organizing the
                complexity, and building the right system around it.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex h-13 items-center gap-3 bg-primary px-7 text-[14px] font-semibold tracking-[0.04em] whitespace-nowrap text-on-primary transition-colors hover:bg-primary-hover"
              >
                Explore My Work{" "}
                <span aria-hidden="true" className="arrow">
                  →
                </span>
              </Link>
              <Link
                href="/insights"
                className="inline-flex h-13 items-center gap-3 border border-ink px-7 text-[14px] font-semibold tracking-[0.04em] whitespace-nowrap transition-colors hover:border-accent hover:text-accent"
              >
                Read My Thinking{" "}
                <span aria-hidden="true" className="arrow">
                  →
                </span>
              </Link>
            </div>

            <ul className="mt-2 flex list-none flex-wrap items-center gap-y-3 text-[12px] font-semibold tracking-[0.14em]">
              <li className="pr-5">
                <span className="text-accent">{profile.years}</span> YEARS
              </li>
              <li className="border-l border-border px-5">
                <span className="text-accent">{profile.apps}</span> MOBILE APPS
              </li>
              <li className="border-l border-border pl-5">
                SOFTWARE <span className="text-accent">→</span> PRODUCT{" "}
                <span className="text-accent">→</span> SYSTEMS
              </li>
            </ul>
          </div>

          <figure className="relative m-0 w-full justify-self-end">
            <div
              aria-hidden="true"
              className="photo-glow absolute -top-6 -right-6 -bottom-6 -left-6 blur-[2px]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-4 right-4 bottom-4 -left-4 border border-border"
            />
            <Image
              src="/abdullah.webp"
              alt={`${profile.name}, ${profile.title}`}
              width={1229}
              height={1280}
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="relative block aspect-[4/5] w-full border border-border object-cover object-[50%_20%] saturate-90"
            />
            <span
              aria-hidden="true"
              className="absolute -top-4 -left-4 h-10 w-10 border-t-2 border-l-2 border-accent"
            />
            <figcaption className="absolute right-0 -bottom-7 text-[11px] font-semibold tracking-[0.18em] text-muted">
              {profile.name.toUpperCase()} / PM &amp; MD, {profile.company.toUpperCase()}
            </figcaption>
          </figure>
        </div>
      </section>

      <Marquee items={brandTicker} className="border-t-0 bg-surface" />

      {/* MESS → SYSTEM DIAGRAM -------------------------------------------- */}
      <section aria-label="From mess to system" className="border-b border-border">
        <Reveal className={`${SHELL} py-[clamp(48px,6vw,80px)]`}>
          <SystemVisual />
        </Reveal>
      </section>

      {/* ABOUT ------------------------------------------------------------ */}
      <section aria-labelledby="about-h" className="border-b border-border">
        <div
          className={`${SHELL} grid gap-12 py-[clamp(56px,9vw,128px)] lg:grid-cols-2 lg:gap-16`}
        >
          <Reveal className="flex flex-col gap-6">
            <p className={EYEBROW}>ABOUT</p>
            <h2 id="about-h" className={`${H2} tracking-[-0.01em]`}>
              I&rsquo;M NOT INTERESTED IN ADDING MORE COMPLEXITY.
            </h2>
            <p className="text-[20px] font-semibold leading-snug">
              I like making complicated things easier to understand.
            </p>
          </Reveal>

          <Reveal
            delay={80}
            className="flex max-w-[560px] flex-col gap-5 text-[16px] leading-[1.7] text-muted"
          >
            <p>
              When information is scattered, I want to organize it. When a
              workflow becomes repetitive, I start thinking about a system. When
              someone is blocked on a piece of logic, I enjoy helping them break
              the problem down.
            </p>
            <p>
              I started as an intern in 2020, then moved through Ionic, Flutter
              and full-stack work into leading a team and managing delivery.
              The pattern never changed. Only the size of the problem did.
            </p>
            <Link
              href="/about"
              className="ul-link self-start text-[14px] font-semibold tracking-[0.04em] whitespace-nowrap text-ink"
            >
              Read the full story{" "}
              <span aria-hidden="true" className="arrow text-accent">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="border-t border-border">
          <Reveal className={`${SHELL} grid sm:grid-cols-3`}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`border-border py-10 sm:py-12 ${
                  i > 0 ? "border-t sm:border-t-0 sm:pl-8" : ""
                } ${i < stats.length - 1 ? "sm:border-r sm:pr-8" : ""}`}
              >
                <p className="text-[clamp(56px,6vw,88px)] font-extrabold leading-none tracking-[-0.03em]">
                  <CountUp to={stat.value} pad={stat.pad} className="text-accent" />
                  +
                </p>
                <p className="mt-4 text-[12px] font-semibold tracking-[0.16em] text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* HOW I THINK ------------------------------------------------------ */}
      <section
        id="approach"
        aria-labelledby="process-h"
        className="border-b border-border bg-surface"
      >
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-16 flex flex-col gap-4">
            <p className={EYEBROW}>HOW I THINK</p>
            <h2 id="process-h" className={H2}>
              HOW I APPROACH A PROBLEM
            </h2>
          </Reveal>

          <Reveal>
            <ProcessSteps />
          </Reveal>
        </div>
      </section>

      {/* WHAT I WORK ON --------------------------------------------------- */}
      <section aria-labelledby="work-h" className="border-b border-border">
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-14 flex flex-col gap-4">
            <p className={EYEBROW}>SCOPE</p>
            <h2 id="work-h" className={H2}>
              WHAT I WORK ON
            </h2>
          </Reveal>

          <Reveal>
            <Explorer items={[...workAreas]} kicker="AREA" />
          </Reveal>
        </div>
      </section>

      {/* PERSONAL BUILDS -------------------------------------------------- */}
      <section
        aria-labelledby="builds-h"
        className="border-b border-border bg-surface"
      >
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-16 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 id="builds-h" className={H2}>
              SOMETIMES I BUILD THINGS
              <br />
              <span className="text-muted">
                JUST BECAUSE I WANT A{" "}
                <span className="text-accent">BETTER WAY.</span>
              </span>
            </h2>
            <p className="max-w-[480px] text-[16px] leading-[1.7] text-muted">
              Personal apps, built when an existing option didn&rsquo;t quite
              solve the problem. Each one is live on Google Play.
            </p>
          </Reveal>

          <Reveal>
            <BuildList builds={apps} />
          </Reveal>

          <Link
            href="/work"
            className="ul-link mt-10 text-[14px] font-semibold tracking-[0.04em] whitespace-nowrap"
          >
            All my work{" "}
            <span aria-hidden="true" className="arrow text-accent">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* INSIGHTS ---------------------------------------------------------- */}
      <section aria-labelledby="ins-h" className="border-b border-border">
        <div className={`${SHELL} py-[clamp(56px,9vw,128px)]`}>
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <p className={EYEBROW}>INSIGHTS</p>
              <h2 id="ins-h" className={H2}>
                FROM MY THINKING
              </h2>
            </div>
            <Link
              href="/insights"
              className="ul-link text-[14px] font-semibold tracking-[0.04em] whitespace-nowrap"
            >
              All writing{" "}
              <span aria-hidden="true" className="arrow text-accent">
                →
              </span>
            </Link>
          </Reveal>

          <Reveal>
            <InsightRows posts={insights.slice(0, 3)} />
          </Reveal>
        </div>
      </section>

      <Currently className="bg-surface" />

      {/* CTA --------------------------------------------------------------- */}
      <section
        aria-labelledby="cta-h"
        className="grid-bg relative overflow-hidden"
      >
        <NodeField className="pointer-events-none absolute -right-12 bottom-8 hidden w-[320px] text-ink opacity-[0.16] lg:block" />
        <Reveal
          className={`${SHELL} relative flex flex-col gap-10 py-[clamp(72px,10vw,144px)]`}
        >
          <h2
            id="cta-h"
            className="max-w-[900px] text-[clamp(38px,5.6vw,80px)] font-extrabold leading-none tracking-[-0.02em]"
          >
            HAVE A <span className="text-accent">MESSY</span> SOFTWARE PROBLEM?
          </h2>
          <p className="max-w-[680px] text-[18px] leading-relaxed text-muted">
            Whether you&rsquo;re planning a product, improving an existing
            application, adding AI, or trying to understand what your
            development team should do next — I&rsquo;m always interested in a
            good problem.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-3 bg-primary px-8 text-[14px] font-bold tracking-[0.08em] whitespace-nowrap text-on-primary transition-colors hover:bg-primary-hover"
            >
              LET&apos;S TALK{" "}
              <span aria-hidden="true" className="arrow">
                →
              </span>
            </Link>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-3 border border-ink px-8 text-[14px] font-semibold tracking-[0.08em] whitespace-nowrap transition-colors hover:border-accent hover:text-accent"
            >
              CONNECT ON LINKEDIN
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
