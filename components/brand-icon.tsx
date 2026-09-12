import { brandIcons, type BrandSlug } from "@/lib/brand-icons";

/**
 * Monochrome brand glyph. It inherits the surrounding text colour and only
 * takes its real brand colour when an ancestor marked `.brand-hover` is
 * hovered or focused — see the `.brand-glyph` rules in globals.css.
 */
export default function BrandIcon({
  name,
  size = 20,
  className = "",
}: {
  name: BrandSlug;
  size?: number;
  className?: string;
}) {
  const icon = brandIcons[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label={icon.title}
      className={`brand-glyph shrink-0 ${className}`}
      style={
        {
          "--brand": icon.hex,
          "--brand-dark": "dark" in icon ? icon.dark : icon.hex,
        } as React.CSSProperties
      }
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}
