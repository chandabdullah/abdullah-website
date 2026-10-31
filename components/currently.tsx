import Reveal from "@/components/reveal";
import { currently, profile } from "@/data/portfolio";

type CurrentlyProps = {
  className?: string;
  /** Extra sentence appended to the body copy, used on the contact page. */
  note?: string;
};

/** Shared "Currently" band — appears on the home, about and contact pages. */
export default function Currently({ className = "", note }: CurrentlyProps) {
  return (
    <section
      aria-labelledby="nls-h"
      className={`border-b border-border ${className}`}
    >
      <Reveal className="mx-auto grid max-w-[1280px] items-start gap-8 px-6 py-[clamp(48px,7vw,96px)] lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
            CURRENTLY
          </p>
          <h2 id="nls-h" className="text-[26px] leading-tight font-bold">
            {currently.heading}{" "}
            <span className="font-medium text-muted">
              — {currently.company}
            </span>
          </h2>
        </div>
        <div className="flex max-w-[560px] flex-col gap-6">
          <p className="text-[16px] leading-[1.7] text-muted">
            {currently.body}
            {note ? ` ${note}` : ""}
          </p>
          <a
            href={profile.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ul-link self-start text-[14px] font-semibold tracking-[0.04em] whitespace-nowrap"
          >
            {currently.linkLabel}{" "}
            <span aria-hidden="true" className="arrow text-accent">
              →
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
