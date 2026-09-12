"use client";

import { useState } from "react";
import AreaIcon, { type IconKey } from "@/components/icons";

export type ExplorerItem = {
  title: string;
  body: string;
  /** Optional second paragraph shown only in the detail panel. */
  note?: string;
  icon?: IconKey;
};

type ExplorerProps = {
  items: ExplorerItem[];
  /** Small label above the detail panel's title. */
  kicker?: string;
};

/**
 * Index-plus-detail browser used in place of card grids: the left column is a
 * scannable list, the right column expands whichever row is hovered, focused
 * or clicked. Keyboard users get the same behaviour through focus.
 */
export default function Explorer({ items, kicker }: ExplorerProps) {
  const [active, setActive] = useState(0);
  const current = items[active];
  const n = String(active + 1).padStart(2, "0");

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <ol className="list-none border-t border-border p-0">
        {items.map((item, i) => {
          const on = i === active;
          return (
            <li key={item.title} className="border-b border-border">
              <button
                type="button"
                aria-pressed={on}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="grid w-full grid-cols-[44px_1fr_auto] items-center gap-4 py-5 text-left"
              >
                <span
                  className={`text-[13px] font-bold tracking-[0.1em] transition-colors ${
                    on ? "text-accent" : "text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-[17px] font-bold tracking-[0.04em] transition-[color,transform] duration-300 ${
                    on ? "translate-x-1 text-accent" : "translate-x-0"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-px bg-accent transition-all duration-500 ${
                    on ? "w-10 opacity-100" : "w-3 opacity-30"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative flex min-h-[340px] flex-col gap-6 border border-border bg-bg p-10">
        {/* Re-keying the body replays the entrance animation on each change. */}
        <div
          key={active}
          data-reveal-group=""
          className="is-in flex flex-col gap-6"
        >
          <div className="flex items-start justify-between gap-6">
            <span className="text-[clamp(48px,6vw,88px)] leading-none font-extrabold tracking-[-0.03em] text-accent">
              {n}
            </span>
            {current.icon && (
              <AreaIcon name={current.icon} size={52} className="text-accent" />
            )}
          </div>

          {kicker && (
            <span className="text-[11px] font-semibold tracking-[0.2em] text-muted">
              {kicker}
            </span>
          )}

          <span className="text-[24px] font-bold tracking-[0.04em]">
            {current.title}
          </span>

          <p className="max-w-[420px] text-[18px] leading-relaxed text-muted">
            {current.body}
          </p>
        </div>

        {current.note && (
          <p className="mt-auto border-t border-border pt-5 text-[14px] leading-relaxed text-muted">
            {current.note}
          </p>
        )}
      </div>
    </div>
  );
}
