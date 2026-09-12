import type { SVGProps } from "react";

export type IconKey =
  | "products"
  | "ai"
  | "ux"
  | "systems"
  | "delivery"
  | "quality";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const PATHS: Record<IconKey, React.ReactNode> = {
  products: (
    <>
      <rect x="6" y="10" width="22" height="28" />
      <rect x="32" y="18" width="10" height="20" />
      <path d="M6 16h22M32 24h10" />
      <circle cx="17" cy="33" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  ai: (
    <>
      <rect x="14" y="14" width="20" height="20" />
      <path d="M20 20h8v8h-8z" />
      <path d="M18 8v6M30 8v6M18 34v6M30 34v6M8 18h6M8 30h6M34 18h6M34 30h6" />
    </>
  ),
  ux: (
    <>
      <path d="M8 12h32M8 12v24h32V12" />
      <path d="M16 20h10M16 26h16" />
      <path d="M30 30l6 6-3 1-1 3-2-10z" fill="currentColor" stroke="none" />
    </>
  ),
  systems: (
    <>
      <circle cx="24" cy="10" r="4" />
      <circle cx="10" cy="34" r="4" />
      <circle cx="38" cy="34" r="4" />
      <path d="M21 13.5 12.5 30.5M27 13.5 35.5 30.5M14 34h20" />
    </>
  ),
  delivery: (
    <>
      <path d="M6 38h36" />
      <path d="M12 38V24l8-6 8 6v14" />
      <path d="M28 38V16l8-6v28" />
      <path d="M6 30h6M28 22h8" />
    </>
  ),
  quality: (
    <>
      <path d="M24 6 40 12v12c0 9-7 15-16 18C15 39 8 33 8 24V12z" />
      <path d="m17 24 5 5 10-11" />
    </>
  ),
};

export default function AreaIcon({
  name,
  size = 40,
  className,
}: {
  name: IconKey;
  size?: number;
  className?: string;
}) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      {PATHS[name]}
    </svg>
  );
}
