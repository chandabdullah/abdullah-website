import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Nav from "@/components/nav";
import ScrollProgress from "@/components/scroll-progress";
import Footer from "@/components/footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abdullah — The Systems Builder",
    template: "%s — Abdullah",
  },
  description:
    "Abdullah, Managing Director at Next Level Software. 7+ years and 50+ mobile applications spent turning messy problems into simple systems.",
  openGraph: {
    title: "Abdullah — The Systems Builder",
    description:
      "I turn messy problems into simple systems. Software, product, systems and AI.",
    type: "website",
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
