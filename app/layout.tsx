import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Nav from "@/components/nav";
import ScrollProgress from "@/components/scroll-progress";
import Footer from "@/components/footer";
import { profile } from "@/data/portfolio";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  // Variable font: covers the 300–800 range the design uses.
  weight: "variable",
});

const title = `${profile.name} — ${profile.title}`;
const description = `${profile.name}, ${profile.title}. ${profile.years} years building software and ${profile.apps} mobile applications, from intern to leading product delivery.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

/**
 * Applies the stored theme before first paint so the page never flashes the
 * wrong palette. Mirrors the key used by <ThemeToggle />.
 */
const themeBoot = `try{document.documentElement.dataset.theme=localStorage.getItem('ab-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The boot script below rewrites `data-theme` before React hydrates, and
    // extensions commonly add attributes to <body> — both are expected.
    <html
      lang="en"
      data-theme="light"
      className={`${manrope.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body
        className="flex min-h-full flex-col bg-bg font-sans text-ink antialiased"
        suppressHydrationWarning
      >
        <ScrollProgress />
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
