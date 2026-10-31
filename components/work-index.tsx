"use client";

import { useState, type ReactNode } from "react";
import BrandIcon from "@/components/brand-icon";
import { AppIcon, AppLinks } from "@/components/build-list";
import {
  apps,
  caseStudyUrl,
  managedProjects,
  packages,
  teamBuilds,
} from "@/data/portfolio";

const FILTERS = [
  { key: "all", label: "All", count: 0 },
  { key: "managed", label: "Managed", count: managedProjects.length },
  { key: "team", label: "Team builds", count: teamBuilds.length },
  { key: "apps", label: "Personal apps", count: apps.length },
  { key: "open-source", label: "Open source", count: packages.length },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

const teamYears = teamBuilds.map((b) => b.year);
const TEAM_SPAN = `${Math.min(...teamYears)} → ${Math.max(...teamYears)}`;

const CARDS =
  "grid list-none gap-4 p-0 grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]";
const CARD =
  "row lift flex flex-col gap-4 border border-border bg-panel p-6 transition-colors";
const META = "text-[11px] font-semibold tracking-[0.16em]";
const OUTLINE =
  "brand-hover inline-flex items-center gap-2 border border-border px-3 py-2 text-[11px] font-semibold tracking-[0.12em] whitespace-nowrap transition-colors hover:border-accent";

function CaseStudyLink({ slug, name }: { slug?: string; name: string }) {
  const href = caseStudyUrl(slug);
  if (!href) {
    return <span className="text-[12px] font-medium text-muted">—</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} case study`}
      className="ul-link text-[12px] font-semibold tracking-[0.12em] whitespace-nowrap"
    >
      CASE STUDY{" "}
      <span aria-hidden="true" className="arrow text-accent">
        →
      </span>
    </a>
  );
}

function Group({
  id,
  eyebrow,
  title,
  note,
  hidden,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  note: string;
  hidden: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      hidden={hidden}
      className="scroll-mt-28 border-t border-border pt-10 pb-16 first:border-t-0 first:pt-0"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-semibold tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={`${id}-h`}
            className="text-[clamp(26px,3vw,40px)] leading-[1.05] font-bold"
          >
            {title}
          </h2>
        </div>
        <p className="text-[13px] font-medium tracking-[0.06em] text-muted">
          {note}
        </p>
      </div>
      {children}
    </section>
  );
}

/**
 * Every project, app and package on one page, with filter chips that narrow
 * the view to a single group. Filters are toggle buttons over one result
 * area, the same pattern as the insights filter.
 */
export default function WorkIndex() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const hide = (key: FilterKey) => filter !== "all" && filter !== key;

  return (
    <>
      <div
        role="group"
        aria-label="Filter work"
        className="mb-14 flex flex-wrap gap-2"
      >
        {FILTERS.map((f) => {
          const on = f.key === filter;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f.key)}
              className={`inline-flex min-h-11 items-center gap-2 border px-4 py-2.5 text-[12px] font-semibold tracking-[0.12em] whitespace-nowrap uppercase transition-colors hover:border-accent ${
                on ? "border-accent text-accent" : "border-border text-ink"
              }`}
            >
              {f.label}
              {f.count > 0 && (
                <span className="text-[11px] text-muted">
                  {String(f.count).padStart(2, "0")}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* MANAGED ------------------------------------------------------- */}
      <Group
        id="managed"
        eyebrow="PROJECTS I MANAGED"
        title="AS PROJECT MANAGER"
        note="Project Manager · 2025 → now"
        hidden={hide("managed")}
      >
        <ul className={CARDS}>
          {managedProjects.map((p) => (
            <li key={p.name} className={CARD}>
              <div className={`flex items-center justify-between gap-4 ${META}`}>
                <span className="text-accent uppercase">{p.category}</span>
                <span className="text-muted">{p.year}</span>
              </div>
              <h3 className="text-[24px] leading-tight font-bold">{p.name}</h3>
              <p className="text-[15px] leading-[1.6] text-muted">
                {p.summary}
              </p>
              <div className="mt-auto border-t border-border pt-4">
                <CaseStudyLink slug={p.caseStudy} name={p.name} />
              </div>
            </li>
          ))}
        </ul>
      </Group>

      {/* TEAM BUILDS --------------------------------------------------- */}
      <Group
        id="team"
        eyebrow="BUILT WITH A TEAM"
        title="AS ENGINEER"
        note={`Flutter, Ionic and backend roles · ${TEAM_SPAN}`}
        hidden={hide("team")}
      >
        <div
          aria-hidden="true"
          className={`hidden grid-cols-[64px_minmax(0,1.1fr)_minmax(0,1.2fr)_minmax(0,1fr)_120px] gap-6 border-b border-border pb-3 text-muted md:grid ${META}`}
        >
          <span>YEAR</span>
          <span>PROJECT</span>
          <span>MY ROLE</span>
          <span>CATEGORY</span>
          <span>CASE STUDY</span>
        </div>
        <ol className="list-none p-0">
          {teamBuilds.map((b) => (
            <li
              key={b.name}
              className="row group grid grid-cols-[56px_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1.5 border-b border-border py-5 md:grid-cols-[64px_minmax(0,1.1fr)_minmax(0,1.2fr)_minmax(0,1fr)_120px] md:gap-6"
            >
              <span className="row-span-4 text-[13px] font-semibold tracking-[0.1em] text-muted md:row-span-1">
                {b.year}
              </span>
              <span className="text-[19px] font-bold transition-colors group-hover:text-accent">
                {b.name}
              </span>
              <span className="text-[14px]">{b.role}</span>
              <span className={`text-accent uppercase ${META}`}>
                {b.category}
              </span>
              <span>
                <CaseStudyLink slug={b.caseStudy} name={b.name} />
              </span>
            </li>
          ))}
        </ol>
      </Group>

      {/* PERSONAL APPS ------------------------------------------------- */}
      <Group
        id="apps"
        eyebrow="PERSONAL APPS"
        title="BUILT BECAUSE I WANTED A BETTER WAY"
        note="Live on Google Play"
        hidden={hide("apps")}
      >
        <ul className={CARDS}>
          {apps.map((app) => (
            <li key={app.name} className={CARD}>
              <div className="flex items-center gap-4">
                <AppIcon app={app} size={56} />
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="text-[22px] leading-tight font-bold">
                    {app.name}
                  </h3>
                  <span className={`text-muted ${META}`}>{app.year}</span>
                </div>
              </div>
              <p className="text-[15px] leading-[1.6] text-muted">
                {app.tagline}
              </p>
              <div className="mt-auto border-t border-border pt-4">
                <AppLinks app={app} />
              </div>
            </li>
          ))}
        </ul>
      </Group>

      {/* OPEN SOURCE --------------------------------------------------- */}
      <Group
        id="open-source"
        eyebrow="OPEN SOURCE"
        title="FLUTTER PACKAGES"
        note="Published on pub.dev"
        hidden={hide("open-source")}
      >
        <ul className={CARDS}>
          {packages.map((pkg) => (
            <li key={pkg.name} className={CARD}>
              <div className={`flex items-center justify-between gap-4 ${META}`}>
                <span className="text-accent">FLUTTER PACKAGE</span>
                <span className="text-muted">{pkg.year}</span>
              </div>
              <h3 className="text-[20px] leading-tight font-bold break-all">
                {pkg.name}
              </h3>
              <ul className="flex list-none flex-wrap gap-2 p-0">
                {pkg.facts.map((fact) => (
                  <li
                    key={fact}
                    className="border border-border px-2.5 py-1 text-[12px] font-medium whitespace-nowrap text-muted"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
                <a
                  href={pkg.pub}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${pkg.name} on pub.dev`}
                  className={OUTLINE}
                >
                  <BrandIcon name="dart" size={15} />
                  PUB.DEV
                </a>
                <a
                  href={pkg.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${pkg.name} on GitHub`}
                  className={OUTLINE}
                >
                  <BrandIcon name="github" size={15} />
                  GITHUB
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Group>
    </>
  );
}
