"use client";

import { useState } from "react";
import Link from "next/link";

type Thread = { n: string; title: string; body: string };

/**
 * The recurring series as a single thread rather than a card grid: one rail
 * running down the section, a node per series, and the hovered node lighting
 * its segment of the rail.
 */
export default function SeriesThread({ threads }: { threads: Thread[] }) {
  const [active, setActive] = useState(0);

  return (
    <ol
      className="relative list-none p-0 pl-10 sm:pl-16"
      onMouseLeave={() => setActive(0)}
    >
      {/* Rail */}
      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-[15px] w-px bg-border sm:left-[27px]"
      >
        <span
          className="absolute inset-x-0 top-0 bg-accent transition-[height] duration-700 ease-out"
          style={{ height: `${((active + 1) / threads.length) * 100}%` }}
        />
      </span>

      {threads.map((thread, i) => {
        const on = i === active;
        return (
          <li key={thread.title} className="relative">
            <Link
              href="/insights"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group flex flex-col gap-2 py-7 pr-4"
            >
              {/* Node on the rail */}
              <span
                aria-hidden="true"
                className={`absolute top-[34px] -left-10 grid h-[31px] w-[31px] place-items-center transition-all duration-400 sm:-left-16 ${
                  on ? "scale-110" : ""
                }`}
              >
                <span
                  className={`h-3 w-3 rotate-45 transition-colors duration-400 ${
                    on ? "bg-accent" : "bg-border"
                  }`}
                />
                {on && (
                  <span className="pulse-ring absolute h-5 w-5 rotate-45 bg-accent" />
                )}
              </span>

              <div className="flex items-center gap-4">
                <span
                  className={`text-[11px] font-bold tracking-[0.14em] transition-colors ${
                    on ? "text-accent" : "text-muted"
                  }`}
                >
                  {thread.n}
                </span>
                <span
                  className={`h-px flex-1 transition-colors duration-500 ${
                    on ? "bg-accent" : "bg-border"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`arrow text-[16px] transition-opacity duration-300 ${
                    on ? "text-accent opacity-100" : "opacity-0"
                  }`}
                >
                  →
                </span>
              </div>

              <span
                className={`text-[clamp(18px,2.2vw,26px)] font-bold tracking-[0.06em] transition-colors duration-300 ${
                  on ? "text-accent" : ""
                }`}
              >
                {thread.title}
              </span>

              <span className="max-w-[640px] text-[15px] leading-[1.6] text-muted">
                {thread.body}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
