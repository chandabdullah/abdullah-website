import Image from "next/image";
import AreaIcon from "@/components/icons";
import BrandIcon from "@/components/brand-icon";
import type { Build } from "@/lib/content";

/**
 * Personal builds as rows. An app and its product site are one entry with two
 * destinations, so the row itself is not a link — each platform is.
 */
export default function BuildList({ builds }: { builds: Build[] }) {
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

          <span className="grid h-12 w-12 place-items-center overflow-hidden border border-border bg-bg">
            {build.icon ? (
              <Image
                src={build.icon}
                alt=""
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            ) : (
              <AreaIcon name="convert" size={26} className="text-accent" />
            )}
          </span>

          <span className="flex flex-col gap-1">
            <span className="text-[clamp(18px,2.2vw,26px)] font-bold tracking-[0.02em] transition-colors group-hover:text-accent">
              {build.name}
            </span>
            <span className="text-[14px] text-muted">{build.desc}</span>
          </span>

          <span className="col-span-2 flex flex-wrap items-center gap-2 sm:col-span-1">
            {build.play && (
              <a
                href={build.play}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-hover inline-flex items-center gap-2 border border-border px-3 py-2 text-[11px] font-semibold tracking-[0.12em] transition-colors hover:border-accent"
              >
                <BrandIcon name="googleplay" size={15} />
                ANDROID
              </a>
            )}
            {build.web && (
              <a
                href={build.web}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-hover inline-flex items-center gap-2 border border-border px-3 py-2 text-[11px] font-semibold tracking-[0.12em] transition-colors hover:border-accent"
              >
                <BrandIcon name="web" size={15} />
                WEBSITE
              </a>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
