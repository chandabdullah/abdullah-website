"use client";

import { useState } from "react";
import Link from "next/link";
import { insightCategories, insights } from "@/lib/content";

/**
 * Category filter over the article index. Rendered as a set of toggle buttons
 * rather than an ARIA tablist: there is a single result list, so `aria-pressed`
 * describes what the buttons actually do without implying tab keyboard
 * semantics that aren't there.
 */
export default function InsightsList() {
  const [category, setCategory] = useState("ALL");

  const posts =
    category === "ALL"
      ? insights
      : insights.filter((post) => post.category === category);

  return (
    <>
      <div
        role="group"
        aria-label="Filter articles by category"
        className="flex flex-wrap gap-2 border-t border-border pt-6"
      >
        {insightCategories.map((cat) => {
          const on = cat === category;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={on}
              onClick={() => setCategory(cat)}
              className={`min-h-11 border px-4 py-2.5 text-[12px] font-semibold tracking-[0.12em] transition-colors hover:border-accent ${
                on ? "border-accent text-accent" : "border-border text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-12 border-t border-border">
        <ol className="list-none p-0">
          {posts.map((post) => (
            <li key={post.title} className="row border-b border-border">
              <Link
                href="/insights"
                className="grid grid-cols-1 items-start gap-4 py-10 lg:grid-cols-[minmax(140px,180px)_minmax(0,2fr)_minmax(0,1.6fr)_auto] lg:gap-8"
              >
                <div className="flex gap-4 text-[11px] font-semibold tracking-[0.16em] lg:flex-col lg:gap-1.5">
                  <span className="text-accent">{post.category}</span>
                  <span className="text-muted">{post.date}</span>
                </div>
                <h2 className="text-[clamp(22px,2.4vw,32px)] leading-[1.2] font-bold tracking-[-0.01em]">
                  {post.title}
                </h2>
                <p className="hidden text-[15px] leading-[1.65] text-muted lg:block">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.12em] whitespace-nowrap">
                  READ{" "}
                  <span aria-hidden="true" className="arrow text-accent">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {posts.length === 0 && (
          <p className="py-16 text-[15px] text-muted">
            Nothing filed under this category yet.
          </p>
        )}
      </div>
    </>
  );
}
