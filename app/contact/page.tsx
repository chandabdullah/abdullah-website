import type { Metadata } from "next";
import Currently from "@/components/currently";
import NodeField from "@/components/node-field";
import { contactProblems, linkedin, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Planning a product, unblocking a delayed project, adding AI without the hype, or turning a repetitive process into a system — I'm always interested in a good problem.",
};

/** The three networks worth surfacing on the contact card. */
const CONTACT_SOCIALS = socials.filter((s) => s.href !== "#");

export default function Contact() {
  return (
    <main>
      <section
        aria-labelledby="c-h"
        className="grid-bg relative overflow-hidden border-b border-border"
      >
        <NodeField className="pointer-events-none absolute bottom-10 -left-14 hidden w-[300px] text-ink opacity-[0.14] lg:block" />
        <div className="relative mx-auto grid max-w-[1280px] items-start gap-16 px-6 py-[clamp(72px,10vw,144px)] lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
              CONTACT
            </p>
            <h1
              id="c-h"
              className="text-[clamp(38px,5.6vw,80px)] font-extrabold leading-none tracking-[-0.02em]"
            >
              HAVE A <span className="text-accent">MESSY</span> SOFTWARE
              PROBLEM?
            </h1>
            <p className="max-w-[560px] text-[18px] leading-relaxed text-muted">
              Whether you&rsquo;re planning a product, improving an existing
              application, adding AI, or trying to understand what your
              development team should do next — I&rsquo;m always interested in a
              good problem.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-3 bg-accent px-8 text-[14px] font-bold tracking-[0.08em] text-on-accent transition-[filter] hover:brightness-90"
              >
                LET&apos;S TALK{" "}
                <span aria-hidden="true" className="arrow">
                  →
                </span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-3 border border-ink px-8 text-[14px] font-semibold tracking-[0.08em] transition-colors hover:border-accent hover:text-accent"
              >
                CONNECT ON LINKEDIN
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-[480px] flex-col gap-8 border border-border bg-surface p-10 lg:justify-self-end">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-muted">
              GOOD PROBLEMS TO BRING
            </p>

            <ol className="flex list-none flex-col p-0">
              {contactProblems.map((problem, i) => (
                <li
                  key={problem}
                  className="group grid grid-cols-[40px_1fr] gap-3 border-t border-border py-3.5 text-[15px] leading-[1.5] transition-[padding] duration-300 hover:pl-2"
                >
                  <span className="flex items-center gap-2 pt-[3px] text-[12px] font-bold tracking-[0.1em] text-accent">
                    {`0${i + 1}`}
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-3"
                    />
                  </span>
                  <span className="transition-colors group-hover:text-accent">
                    {problem}
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-2 border-t border-border pt-6">
              <span className="text-[12px] font-semibold tracking-[0.2em] text-muted">
                ELSEWHERE
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {CONTACT_SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ul-link text-[14px] font-semibold transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Currently
        className="bg-surface"
        note="For team engagements, that is the right door."
      />
    </main>
  );
}
