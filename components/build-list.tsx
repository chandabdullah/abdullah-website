import Image from "next/image";
import BrandIcon from "@/components/brand-icon";
import { playUrl, type App } from "@/data/portfolio";

const PLATFORM =
  "brand-hover inline-flex items-center gap-2 border border-border px-3 py-2 text-[11px] font-semibold tracking-[0.12em] whitespace-nowrap transition-colors hover:border-accent";

/** Android + website buttons for an app, shared by the list and the cards. */
export function AppLinks({ app }: { app: App }) {
  return (
    <span className="flex flex-wrap items-center gap-2">
      <a
        href={playUrl(app.package)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${app.name} on Google Play`}
        className={PLATFORM}
      >
        <BrandIcon name="googleplay" size={15} />
        ANDROID
      </a>
      {app.site && (
        <a
          href={app.site}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${app.name} website`}
          className={PLATFORM}
        >
          <BrandIcon name="web" size={15} />
          WEBSITE
        </a>
      )}
    </span>
  );
}

export function AppIcon({ app, size = 48 }: { app: App; size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center overflow-hidden border border-border bg-panel"
      style={{ width: size, height: size }}
    >
      <Image
        src={app.icon}
        alt=""
        width={96}
        height={96}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

/**
 * Personal apps as rows. An app and its product site are one entry with two
 * destinations, so the row itself is not a link — each platform is.
 */
export default function BuildList({ builds }: { builds: App[] }) {
  return (
    <ol className="list-none border-t border-border p-0">
      {builds.map((build, i) => (
        <li
          key={build.name}
          className="row group grid grid-cols-[auto_1fr] items-center gap-4 border-b border-border py-6 sm:grid-cols-[32px_auto_minmax(0,1fr)_auto] sm:gap-6"
        >
          <span className="hidden text-[13px] font-semibold tracking-[0.1em] text-muted sm:block">
            {`0${i + 1}`}
          </span>

          <AppIcon app={build} />

          <span className="flex flex-col gap-1">
            <span className="text-[clamp(18px,2.2vw,26px)] font-bold tracking-[0.02em] uppercase transition-colors group-hover:text-accent">
              {build.name}
            </span>
            <span className="text-[14px] text-muted">{build.tagline}</span>
          </span>

          <span className="col-span-2 sm:col-span-1">
            <AppLinks app={build} />
          </span>
        </li>
      ))}
    </ol>
  );
}
