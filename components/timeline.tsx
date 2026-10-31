import Link from "next/link";
import Reveal from "@/components/reveal";
import { timeline, type TimelineItem } from "@/data/portfolio";

function ItemName({ item }: { item: TimelineItem }) {
  const label = (
    <span className="text-[16px] leading-snug font-semibold">{item.name}</span>
  );

  if (!item.href) return label;

  const inner = (
    <>
      {label}{" "}
      <span aria-hidden="true" className="arrow text-accent">
        {item.href.startsWith("/") ? "→" : "↗"}
      </span>
    </>
  );

  return item.href.startsWith("/") ? (
    <Link href={item.href} className="underline-hover self-start">
      {inner}
    </Link>
  ) : (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline-hover self-start"
    >
      {inner}
    </a>
  );
}

/**
 * Career timeline, one row per year: the year large on the left, the role,
 * a one-line summary and that year's items on the right. The latest year is
 * flagged as current.
 */
export default function Timeline() {
  return (
    <ol className="list-none border-b border-border p-0">
      {timeline.map((entry) => (
        <li key={entry.year}>
          <Reveal className="group relative grid gap-6 border-t border-border py-10 lg:grid-cols-[minmax(160px,240px)_minmax(0,1fr)] lg:gap-16 lg:py-14">
            <span
              aria-hidden="true"
              className={`absolute -top-px left-0 h-0.5 w-8 transition-[width] duration-500 group-hover:w-full ${
                entry.current ? "bg-accent" : "bg-ink"
              }`}
            />

            <div className="flex flex-wrap items-start gap-4 lg:flex-col">
              <span
                className={`text-[clamp(56px,7vw,104px)] leading-none font-extrabold tracking-[-0.04em] ${
                  entry.current ? "text-accent" : ""
                }`}
              >
                {entry.year}
              </span>
              {entry.current && (
                <span className="relative mt-2 inline-flex items-center gap-2 border border-accent px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] whitespace-nowrap text-accent lg:mt-0">
                  <span className="relative h-2 w-2">
                    <span className="absolute inset-0 bg-accent" />
                    <span className="pulse-ring absolute inset-0 bg-accent" />
                  </span>
                  CURRENT
                </span>
              )}
            </div>

            <div className="flex min-w-0 flex-col gap-3">
              <h3 className="text-[clamp(22px,2.4vw,30px)] leading-tight font-bold tracking-[0.01em]">
                {entry.role}
              </h3>
              <p className="max-w-[640px] text-[16px] leading-[1.65] text-muted">
                {entry.summary}
              </p>

              {entry.items.length > 0 && (
                <ul className="mt-4 list-none border-t border-border p-0">
                  {entry.items.map((item) => (
                    <li
                      key={`${item.type}-${item.name}`}
                      className="grid gap-x-6 gap-y-2 border-b border-border py-4 sm:grid-cols-[132px_minmax(0,1fr)]"
                    >
                      <span className="self-start pt-0.5 text-[10px] font-bold tracking-[0.16em] whitespace-nowrap text-accent uppercase">
                        {item.type}
                      </span>
                      <span className="flex min-w-0 flex-col gap-1">
                        <ItemName item={item} />
                        <span className="text-[14px] leading-[1.5] text-muted">
                          {item.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
