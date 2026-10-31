"use client";

import { useState } from "react";
import { buildStages } from "@/lib/content";

/**
 * "Mess → system" diagram: nine nodes per stage that snap from scattered to a
 * clean grid when the strip is hovered or focused. While scattered the nodes
 * drift on their own so the panel is never completely still.
 */
export default function SystemVisual({
  detailed = false,
  caption = "HOVER TO ORGANIZE — COMPLEXITY → CLARITY → SYSTEM",
}: {
  detailed?: boolean;
  caption?: string;
}) {
  const [organized, setOrganized] = useState(false);
  const stages = buildStages(organized);

  return (
    <>
      <div
        tabIndex={0}
        role="img"
        aria-label="Diagram: scattered nodes progressively align into an ordered grid — mess, break down, organize, build, system. Hover or focus to align them."
        onMouseEnter={() => setOrganized(true)}
        onMouseLeave={() => setOrganized(false)}
        onFocus={() => setOrganized(true)}
        onBlur={() => setOrganized(false)}
        className="grid cursor-crosshair grid-cols-2 border border-border bg-panel sm:grid-cols-3 lg:grid-cols-5"
      >
        {stages.map((stage, si) => (
          <div
            key={stage.label}
            className={`flex flex-col border-r border-b border-border p-6 last:border-r-0 ${
              detailed ? "min-h-[260px] gap-8 pt-10" : "min-h-[220px] gap-7 pt-8"
            }`}
          >
            <div className="relative mx-auto h-[76px] w-[76px]">
              {stage.nodes.map((node, i) => (
                <span
                  key={i}
                  className={`node absolute h-3 w-3 ${
                    organized ? "" : "node-idle"
                  }`}
                  style={
                    {
                      left: node.x,
                      top: node.y,
                      background: node.accent ? "var(--accent)" : "var(--ink)",
                      transform: `translate(${node.dx}px, ${node.dy}px) rotate(${node.rot}deg)`,
                      "--drift-x": `${(i % 3) - 1}px`,
                      "--drift-y": `${((i + si) % 3) - 1}px`,
                      animationDelay: `${(i * 240 + si * 130) % 2600}ms`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-2">
                <span
                  className={`text-[12px] font-bold tracking-[0.16em] ${
                    si === 4 ? "text-accent" : "text-ink"
                  }`}
                >
                  {stage.label}
                </span>
                <span className="text-[11px] font-medium text-muted">
                  {stage.n}
                </span>
              </div>
              {detailed && (
                <span className="text-[13px] leading-[1.5] text-muted">
                  {stage.body}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4">
        <p className="text-[12px] tracking-[0.06em] text-muted">{caption}</p>
        <svg
          viewBox="0 0 120 8"
          aria-hidden="true"
          className="hidden h-2 min-w-0 flex-1 text-accent sm:block"
          fill="none"
        >
          <line
            x1="0"
            y1="4"
            x2="112"
            y2="4"
            stroke="currentColor"
            strokeWidth="1"
            className="dash-flow"
          />
          <path d="M112 1l6 3-6 3z" fill="currentColor" />
        </svg>
      </div>
    </>
  );
}
