"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { linkedin, navLinks } from "@/lib/content";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";

const ICON_BTN =
  "grid h-10 w-10 place-items-center border border-border text-ink transition-colors hover:border-accent hover:text-accent";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-6">
        <Logo size={34} className="transition-opacity hover:opacity-80" />

        <nav aria-label="Primary" className="hidden gap-8 mid:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-[13px] font-semibold tracking-[0.06em] transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-ink"
                } ${active ? "" : "ul-link"}`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle className={ICON_BTN} />

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2.5 bg-accent px-5 text-[13px] font-semibold tracking-[0.04em] text-on-accent transition-[filter] hover:brightness-90 mid:inline-flex"
          >
            Let&apos;s Talk{" "}
            <span aria-hidden="true" className="arrow">
              →
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className={`${ICON_BTN} mid:hidden`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!menuOpen}
        className="flex flex-col border-t border-border bg-surface px-6 pt-4 pb-6 mid:hidden"
      >
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={active ? "page" : undefined}
              className={`border-b border-border py-3.5 text-[16px] font-semibold tracking-[0.04em] ${
                active ? "text-accent" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-4 inline-flex h-12 items-center justify-between bg-accent px-5 text-[14px] font-semibold text-on-accent"
        >
          Let&apos;s Talk <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  );
}
