import Logo from "@/components/logo";
import { profile, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Logo size={44} className="self-start" />

          <nav aria-label="Social" className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ul-link text-[13px] font-medium transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-1 text-[13px]">
            <span className="font-semibold">{profile.role}</span>
            <span className="text-muted">{profile.company}</span>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-border pt-6 text-[12px] text-muted">
          <span>© {profile.name}</span>
          <span>Built around clarity, systems and useful work.</span>
        </div>
      </div>
    </footer>
  );
}
