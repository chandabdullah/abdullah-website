import BrandIcon from "@/components/brand-icon";
import { socials } from "@/lib/content";

/**
 * The social row. Glyphs sit in the surrounding text colour and only light up
 * in their real brand colour on hover.
 */
export default function SocialLinks({
  showLabels = false,
  size = 20,
  className = "",
}: {
  showLabels?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <ul className={`flex list-none flex-wrap items-center gap-x-5 gap-y-3 p-0 ${className}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="brand-hover inline-flex items-center gap-2 text-[13px] font-medium transition-colors"
          >
            <BrandIcon name={social.icon} size={size} />
            {showLabels && <span>{social.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
