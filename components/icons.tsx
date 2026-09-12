import type { SVGProps } from "react";

export type IconKey =
  | "products"
  | "ai"
  | "ux"
  | "systems"
  | "delivery"
  | "quality"
  | "understand"
  | "breakdown"
  | "organize"
  | "build"
  | "test"
  | "improve"
  | "convert";

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

  // Process steps
  understand: (
    <>
      <circle cx="21" cy="21" r="13" />
      <path d="m31 31 9 9" />
      <path d="M18 18a3.2 3.2 0 1 1 3.6 3.2V24" />
      <circle cx="21.6" cy="27.6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  breakdown: (
    <>
      <rect x="18" y="6" width="12" height="9" />
      <rect x="6" y="30" width="11" height="9" />
      <rect x="18.5" y="30" width="11" height="9" />
      <rect x="31" y="30" width="11" height="9" />
      <path d="M24 15v6M11.5 30v-6h25v6M24 24v6" />
    </>
  ),
  organize: (
    <>
      <rect x="7" y="10" width="10" height="28" />
      <rect x="19" y="10" width="10" height="19" />
      <rect x="31" y="10" width="10" height="13" />
      <path d="M7 17h10M19 17h10M31 17h10" />
    </>
  ),
  build: (
    <>
      <path d="M24 6 40 15v18l-16 9-16-9V15z" />
      <path d="M8 15l16 9 16-9M24 24v18" />
    </>
  ),
  test: (
    <>
      <path d="M10 8h28v32H10z" />
      <path d="m16 18 3 3 6-6M16 30l3 3 6-6" />
      <path d="M29 19h6M29 31h6" />
    </>
  ),
  improve: (
    <>
      <path d="M8 34 18 22l8 7 14-17" />
      <path d="M32 12h8v8" />
      <path d="M8 40h32" />
    </>
  ),
  convert: (
    <>
      <rect x="6" y="12" width="16" height="16" />
      <rect x="26" y="20" width="16" height="16" />
      <path d="m22 20 4 0M18 34h8l-3-3M30 14h-8l3 3" />
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
