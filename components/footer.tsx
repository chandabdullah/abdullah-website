import Logo from "@/components/logo";
import SocialLinks from "@/components/social-links";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Logo size={44} className="self-start" />

          <nav aria-label="Social" className="flex items-start">
            <SocialLinks showLabels size={18} className="gap-x-6" />
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
