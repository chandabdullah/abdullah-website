"use client";

import { useEffect, useState } from "react";
import AreaIcon from "@/components/icons";
import { processSteps } from "@/lib/content";

const DWELL = 4200;

/**
 * The six steps as a rail: markers along a track drive a single detail panel.
 * It advances on its own until someone points at a marker, after which it
 * follows the pointer or keyboard focus.
 */
export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const current = processSteps[active];

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

  const progress = (active / (processSteps.length - 1)) * 100;

  return (
    <div className="flex flex-col gap-12">
      {/* Rail --------------------------------------------------------- */}
      <ol className="relative grid list-none grid-cols-3 gap-y-8 p-0 lg:grid-cols-6">
        <span
          aria-hidden="true"
          className="absolute top-[22px] right-0 left-0 hidden h-px bg-border lg:block"
        >
          <span
            className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </span>

        {processSteps.map((step, i) => {
          const on = i === active;
          const done = i < active;
          return (
            <li key={step.title} className="relative flex justify-center">
              <button
                type="button"
                aria-pressed={on}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                onClick={() => select(i)}
                className="group flex flex-col items-center gap-3"
              >
                <span
                  aria-hidden="true"
                  className={`relative grid h-11 w-11 place-items-center border-2 transition-all duration-400 ${
                    on
                      ? "scale-110 border-accent bg-accent text-on-accent"
                      : done
                        ? "border-accent bg-bg text-accent"
                        : "border-border bg-bg text-muted group-hover:border-accent"
                  }`}
                >
                  <AreaIcon name={step.icon} size={22} />
                  {on && (
                    <span className="pulse-ring absolute inset-0 border-2 border-accent" />
                  )}
                </span>
                <span
                  className={`text-[11px] font-bold tracking-[0.12em] transition-colors ${
                    on ? "text-accent" : "text-muted"
                  }`}
                >
                  {`0${i + 1}`}
                </span>
                <span
                  className={`max-w-[120px] text-center text-[12px] font-bold tracking-[0.08em] transition-colors ${
                    on ? "text-ink" : "text-muted"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Detail ------------------------------------------------------- */}
      <div className="grid items-start gap-8 border border-border bg-bg p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
        <AreaIcon name={current.icon} size={84} className="text-accent" />

        <div key={active} data-reveal-group="" className="is-in flex flex-col gap-4">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-muted">
            STEP {`0${active + 1}`} OF 06
          </span>
          <h3 className="text-[clamp(24px,3vw,34px)] font-bold tracking-[0.03em]">
            {current.title}
          </h3>
          <p className="max-w-[560px] text-[18px] leading-relaxed">
            {current.body}
          </p>
          <p className="max-w-[560px] border-t border-border pt-4 text-[15px] leading-relaxed text-muted">
            {current.note}
          </p>
        </div>
      </div>
    </div>
  );
}
