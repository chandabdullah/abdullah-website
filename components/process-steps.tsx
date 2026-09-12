"use client";

import { useEffect, useState } from "react";
import { processSteps } from "@/lib/content";

const DWELL = 3600;

/**
 * The six steps, cycling on their own until someone points at one — after any
 * interaction the strip stops advancing and follows the pointer or focus.
 */
export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setActive((i) => (i + 1) % processSteps.length),
      DWELL,
    );
    return () => clearInterval(id);
  }, [auto]);

  function select(i: number) {
    setAuto(false);
    setActive(i);
  }

  return (
    <ol className="grid list-none grid-cols-1 gap-x-6 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {processSteps.map((step, i) => {
        const isActive = active === i;
        return (
          <li
            key={step.title}
            tabIndex={0}
            onMouseEnter={() => select(i)}
            onFocus={() => select(i)}
            className="group flex flex-col gap-3 pb-8"
          >
            <span
              aria-hidden="true"
              className="relative block h-0.5 w-full bg-border"
            >
              <span
                className={`absolute inset-y-0 left-0 bg-accent transition-[width] ease-out ${
                  isActive ? "w-full" : "w-0"
                }`}
                style={{
                  transitionDuration: isActive && auto ? `${DWELL}ms` : "320ms",
                }}
              />
            </span>

            <span
              className={`mt-5 text-[13px] font-bold tracking-[0.1em] transition-colors ${
                isActive ? "text-accent" : "text-muted"
              }`}
            >
              {`0${i + 1}`}
            </span>
            <span
              className={`text-[18px] font-bold tracking-[0.04em] transition-transform duration-300 ${
                isActive ? "translate-x-1" : ""
              }`}
            >
              {step.title}
            </span>
            <span className="text-[14px] leading-relaxed text-muted">
              {step.body}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
