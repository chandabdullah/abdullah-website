"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger the entrance, in milliseconds. */
  delay?: number;
  /** Animate direct children in sequence instead of the container as a whole. */
  group?: boolean;
  as?: ElementType;
};

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * Falls back to visible content when IntersectionObserver is unavailable.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  group = false,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const flags = group ? { "data-reveal-group": "" } : { "data-reveal": "" };

  return (
    <Tag
      ref={ref}
      {...flags}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
