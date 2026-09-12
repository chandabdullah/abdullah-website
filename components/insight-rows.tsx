"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/content";

/**
 * Article teasers as an expanding index rather than cards: one row is open at
 * a time, showing its excerpt and read action, and the rest stay scannable.
 */
export default function InsightRows({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState(0);

  return (
    <ol className="list-none border-t border-border p-0">
      {posts.map((post, i) => {
        const on = i === open;
        return (
          <li key={post.title} className="border-b border-border">
            <div
              onMouseEnter={() => setOpen(i)}
              className={`grid grid-cols-[auto_1fr] gap-5 py-8 transition-[padding] duration-500 sm:gap-8 ${
                on ? "sm:pl-4" : ""
              }`}
            >
              <span
                className={`text-[clamp(28px,4vw,52px)] leading-none font-extrabold tracking-[-0.03em] transition-colors duration-500 ${
                  on ? "text-accent" : "text-border"
                }`}
              >
                {`0${i + 1}`}
              </span>

              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-semibold tracking-[0.16em]">
                  <span className="text-accent">{post.category}</span>
                  <span className="text-muted">{post.date}</span>
                </div>

                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpen(i)}
                  onFocus={() => setOpen(i)}
                  className={`text-left text-[clamp(19px,2.3vw,30px)] leading-[1.2] font-bold tracking-[-0.01em] transition-colors ${
                    on ? "text-accent" : "hover:text-accent"
                  }`}
                >
                  {post.title}
                </button>

                {/* Grid-rows trick: animates from nothing to content height. */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[620px] pt-1 text-[16px] leading-[1.65] text-muted">
                      {post.excerpt}
                    </p>
                    <Link
                      href="/insights"
                      tabIndex={on ? 0 : -1}
                      className="mt-4 inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.12em]"
                    >
                      READ THIS{" "}
                      <span aria-hidden="true" className="arrow text-accent">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
