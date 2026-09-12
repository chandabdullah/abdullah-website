"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  /** Pad to two digits, e.g. 7 → "07". */
  pad?: boolean;
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Counts up to `to` the first time it scrolls into view. The final value is
 * what renders on the server, and the animation is written straight to the DOM
 * node — so the real number is present without JavaScript and there is no
 * re-render per frame.
 */
export default function CountUp({
  to,
  pad = false,
  suffix = "",
  duration = 1400,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    const format = (n: number) =>
      `${pad ? String(n).padStart(2, "0") : n}${suffix}`;

    el.textContent = format(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // Ease-out cubic, so the number settles rather than stopping dead.
          el.textContent = format(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [to, pad, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {pad ? String(to).padStart(2, "0") : to}
      {suffix}
    </span>
  );
}
