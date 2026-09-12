import { LogoMark } from "@/components/logo";

type MarqueeProps = {
  items: string[];
  slow?: boolean;
  className?: string;
};

/**
 * Edge-to-edge scrolling band. The item list is rendered twice so the loop is
 * seamless at -50% translation; the duplicate is hidden from screen readers.
 */
export default function Marquee({
  items,
  slow = false,
  className = "",
}: MarqueeProps) {
  const run = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="px-8 text-[13px] font-bold tracking-[0.2em] whitespace-nowrap">
            {item}
          </span>
          <LogoMark size={14} className="shrink-0 opacity-70" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y border-border py-4 ${className}`}
    >
      <div className={`marquee ${slow ? "marquee-slow" : ""}`}>
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
