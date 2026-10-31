import Link from "next/link";
import { profile } from "@/data/portfolio";

type LogoProps = {
  variant?: "horizontal" | "vertical" | "icon";
  /** Height of the mark in pixels. */
  size?: number;
  className?: string;
  href?: string | null;
};

/**
 * The brand mark, inlined so the navy blocks follow `currentColor` and the
 * base block follows the accent token — the standalone files in /public
 * (logo-icon, logo-horizontal, logo-vertical) carry the same geometry with
 * brand colours baked in, for anywhere outside the site.
 */
export function LogoMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      aria-hidden="true"
      className={className}
    >
      <path fill="currentColor" d="M44 6 L66 6 L82 90 L60 90 Z" />
      <path fill="currentColor" d="M24 34 L44 34 L48 54 L20 54 Z" />
      <path fill="var(--accent)" d="M22 62 L50 62 L55 90 L16 90 Z" />
    </svg>
  );
}

export default function Logo({
  variant = "horizontal",
  size = 34,
  className = "",
  href = "/",
}: LogoProps) {
  const wordmark = profile.name.toUpperCase();
  const tagline = profile.tagline.toUpperCase();

  const inner =
    variant === "icon" ? (
      <LogoMark size={size} />
    ) : variant === "vertical" ? (
      <span className="flex flex-col items-center gap-3">
        <LogoMark size={size} />
        <span className="flex flex-col items-center leading-[1.1]">
          <span className="text-[15px] font-extrabold tracking-[0.12em]">
            {wordmark}
          </span>
          <span className="text-[10px] font-medium tracking-[0.18em] text-muted">
            {tagline}
          </span>
        </span>
      </span>
    ) : (
      <span className="flex items-center gap-3">
        <LogoMark size={size} />
        <span className="flex flex-col leading-[1.1]">
          <span className="text-[15px] font-extrabold tracking-[0.12em]">
            {wordmark}
          </span>
          <span className="text-[10px] font-medium tracking-[0.18em] text-muted">
            SYSTEMS BUILDER
          </span>
        </span>
      </span>
    );

  const label = `${wordmark} — ${tagline}`;

  if (!href) {
    return (
      <span className={className} aria-label={label}>
        {inner}
      </span>
    );
  }

  return (
    <Link href={href} className={className} aria-label={label}>
      {inner}
    </Link>
  );
}
