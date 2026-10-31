/**
 * Every editable fact about me and my work lives here: identity, navigation,
 * socials, stats, apps, packages, projects and the career timeline. Pages and
 * components only read from this file, so years and copy can change without
 * touching any markup.
 *
 * The About timeline is assembled from this data: a project, package or app
 * appears under whatever `year` it carries, so moving a year here moves it on
 * the timeline as well.
 */
import type { BrandSlug } from "@/lib/brand-icons";

/* Identity ------------------------------------------------------------- */

export const profile = {
  name: "Abdullah",
  /** Used by the logo lockup. */
  tagline: "The Systems Builder",
  role: "PM & Managing Director",
  company: "Next Level Software",
  companyUrl: "https://thenextlevelsoftware.com",
  /** One-line title used in metadata and alt text. */
  title: "PM & Managing Director at Next Level Software",
  email: "chandabdullah.nls@gmail.com",
  siteUrl: "https://chandabdullah.vercel.app",
  years: "7+",
  apps: "50+",
};

/** The "Currently" band on home, about and contact. */
export const currently = {
  heading: "PM & Managing Director",
  company: "Next Level Software",
  body: "I turn product plans into milestones, clear communication and reliable delivery, and lead the team building software for startups and businesses.",
  linkLabel: "Visit Next Level Software",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/* Socials -------------------------------------------------------------- */

export type Social = {
  label: string;
  /** Leave empty to hide the link until a URL is available. */
  href: string;
  icon: BrandSlug;
};

const STACK_OVERFLOW_URL = "https://stackoverflow.com/users/13474281/abdullah?utm_source=chatgpt.com"; 

export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chandabdullah21/",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/chandabdullah", icon: "github" },
  { label: "Stack Overflow", href: STACK_OVERFLOW_URL, icon: "stackoverflow" },
  {
    label: "pub.dev",
    href: "https://pub.dev/packages/horizontal_week_calendar",
    icon: "dart",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0107983f1237b25ae5",
    icon: "upwork",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/chandabdullah21",
    icon: "fiverr",
  },
  { label: "X", href: "https://x.com/chandabdullah21", icon: "x" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chandabdullah21/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/chandabdullah021",
    icon: "facebook",
  },
];

export const linkedin = socials[0].href;
export const github = socials[1].href;

/* Stats ---------------------------------------------------------------- */

export const stats = [
  { value: 7, pad: true, label: "Years building software" },
  { value: 50, pad: false, label: "Mobile applications" },
  { value: 17, pad: false, label: "Client products managed & built" },
];

/* Personal apps -------------------------------------------------------- */

export type App = {
  name: string;
  tagline: string;
  /** Square store icon in /public/apps. */
  icon: string;
  /** Google Play package id. */
  package: string;
  site?: string;
  year: number;
};

export const playUrl = (pkg: string) =>
  `https://play.google.com/store/apps/details?id=${pkg}`;

export const apps: App[] = [
  {
    name: "NextDo",
    tagline: "AI to-do list & tasks",
    icon: "/apps/nextdo.webp",
    package: "com.nls.nextdo",
    site: "https://nextdo-website.vercel.app/",
    year: 2025,
  },
  {
    name: "Weather Lite",
    tagline: "Weather without the noise",
    icon: "/apps/weatherapp.webp",
    package: "com.nls.weatherapp",
    site: "https://weatherliteapp.vercel.app/",
    year: 2025,
  },
  {
    name: "NextDay",
    tagline: "AI daily planner",
    icon: "/apps/nextday.webp",
    package: "com.nls.nextday",
    year: 2026,
  },
  {
    name: "Momin",
    tagline: "Quran, Hadith & prayer",
    icon: "/apps/momin.webp",
    package: "com.nls.momin",
    site: "https://mominapp.vercel.app/",
    year: 2026,
  },
];

/* Open source ---------------------------------------------------------- */

export type Package = {
  name: string;
  pub: string;
  github: string;
  /** Short facts shown as chips, e.g. "62 likes". */
  facts: string[];
  year: number;
};

export const packages: Package[] = [
  {
    name: "horizontal_week_calendar",
    pub: "https://pub.dev/packages/horizontal_week_calendar",
    github: "https://github.com/chandabdullah/horizontal_week_calendar",
    facts: ["62 likes", "140 pub points", "19 versions"],
    year: 2022,
  },
  {
    name: "ready_widgets",
    pub: "https://pub.dev/packages/ready_widgets",
    github: "https://github.com/chandabdullah/ready_widgets",
    facts: ["150 pub points", "MIT"],
    year: 2025,
  },
];

/* Client projects ------------------------------------------------------ */

const CASE_STUDIES = "https://thenextlevelsoftware.com/case-studies/";

/** Full case-study URL from its slug, or undefined when there is none. */
export const caseStudyUrl = (slug?: string) =>
  slug ? `${CASE_STUDIES}${slug}` : undefined;

export type ManagedProject = {
  name: string;
  category: string;
  year: number;
  summary: string;
  caseStudy?: string;
};

/** Projects I ran as Project Manager, 2025 → now. */
export const managedProjects: ManagedProject[] = [
  {
    name: "BiteTaps",
    category: "Food delivery",
    year: 2025,
    summary:
      "Four apps and a rider network that let restaurants skip third-party commissions.",
    caseStudy: "bitetaps",
  },
  {
    name: "Connect",
    category: "Logistics",
    year: 2025,
    summary:
      "Four-role delivery platform for Kuwait with vendor and driver KYC and local payments.",
    caseStudy: "connect",
  },
  {
    name: "FitFinds",
    category: "Fitness marketplace",
    year: 2025,
    summary:
      "Gym subscriptions and class booking, bilingual Arabic and English, live in 12 weeks.",
    caseStudy: "fitfind",
  },
  {
    name: "Piano",
    category: "E-commerce",
    year: 2025,
    summary:
      "Cosmetics store with a campaign engine, loyalty points and an Arabic RTL admin.",
    caseStudy: "piano",
  },
  {
    name: "RRR Arena",
    category: "Sports & fitness",
    year: 2026,
    summary:
      "Tournaments, live leaderboards, gym session booking and a sports marketplace.",
    caseStudy: "rrr-arena",
  },
  {
    name: "Munasbati",
    category: "Events marketplace",
    year: 2026,
    summary:
      "Multi-vendor event booking with unified checkout, deposits and vendor KYC.",
    caseStudy: "munasbati",
  },
  {
    name: "Angivore",
    category: "Wellness · AI",
    year: 2026,
    summary:
      "Emotional wellness app with mood tracking, audio journaling and an AI chatbot.",
    caseStudy: "angivore",
  },
  {
    name: "Luxly Deals",
    category: "E-commerce",
    year: 2026,
    summary: "Deals-led shopping app for curated, time-limited offers.",
    caseStudy: "luxlydeals",
  },
];

export type TeamBuild = {
  name: string;
  role: string;
  category: string;
  year: number;
  caseStudy?: string;
};

/** Products I built as part of a team. */
export const teamBuilds: TeamBuild[] = [
  {
    name: "ALIFF",
    role: "Backend Engineer",
    category: "Fashion · AI",
    year: 2025,
    caseStudy: "aliff",
  },
  {
    name: "LiLak",
    role: "Flutter Design & Integration",
    category: "Social network",
    year: 2023,
    caseStudy: "lilak",
  },
  {
    name: "Growth",
    role: "Backend Engineer",
    category: "Fitness · AI",
    year: 2024,
    caseStudy: "growth",
  },
  {
    name: "Vaza",
    role: "Backend Engineer",
    category: "E-commerce",
    year: 2024,
    caseStudy: "vaza",
  },
  {
    name: "Snapmar",
    role: "Flutter Developer",
    category: "Freelance marketplace",
    year: 2022,
    caseStudy: "snapmar",
  },
  {
    name: "iTaxi MX",
    role: "Backend Engineer",
    category: "Ride-hailing",
    year: 2023,
    caseStudy: "itaximx",
  },
  {
    name: "Cataleague",
    role: "Ionic Developer",
    category: "Tournaments",
    year: 2021,
    caseStudy: "cataleague",
  },
  {
    name: "Pedicab London",
    role: "Backend Engineer",
    category: "Mobility",
    year: 2023,
    caseStudy: "pedicab-london",
  },
  {
    name: "Khadamat",
    role: "Flutter Developer",
    category: "Services marketplace",
    year: 2022,
    caseStudy: "khadamat",
  },
];

/* Career timeline ------------------------------------------------------ */

export type TimelineItem = {
  type: string;
  name: string;
  detail: string;
  href?: string;
};

type TimelineYear = {
  year: number;
  role: string;
  summary: string;
  /** Items that aren't projects, apps or packages (milestones, community). */
  notes?: TimelineItem[];
};

const timelineYears: TimelineYear[] = [
  {
    year: 2020,
    role: "Intern",
    summary:
      "First professional code: HTML, Bootstrap, JavaScript; first Stack Overflow answers on Flutter and Android.",
    notes: [
      {
        type: "Milestone",
        name: "Started as an intern",
        detail: "First real projects, real deadlines, real code",
        href: github,
      },
      {
        type: "Community",
        name: "Joined Stack Overflow",
        detail: "Flutter, Android, Gradle, GetX answers · 115K people reached",
        href: STACK_OVERFLOW_URL || undefined,
      },
    ],
  },
  {
    year: 2021,
    role: "Ionic Developer",
    summary: "Hybrid apps with Ionic and Angular.",
  },
  {
    year: 2022,
    role: "Flutter Developer",
    summary: "Moved to Flutter full-time; first open-source package.",
  },
  {
    year: 2023,
    role: "Full Stack Developer",
    summary: "Node.js/MongoDB backends alongside Flutter.",
  },
  {
    year: 2024,
    role: "Senior Full Stack Developer",
    summary:
      "Backends for multi-role platforms: payments, realtime, admin panels, AI.",
  },
  {
    year: 2025,
    role: "Team Lead",
    summary:
      "Leading the team, managing client projects, launching my own apps.",
  },
  {
    year: 2026,
    role: "PM & Managing Director",
    summary:
      "Running delivery: product planning, milestones, communication, releases.",
  },
];

const joinNames = (items: { name: string }[]) =>
  items.map((item) => item.name).join(", ");

/**
 * The timeline, ascending, with each year's items drawn from the data above:
 * notes, then open source, team builds, managed projects and personal apps.
 * The last year is marked current.
 */
export const timeline = timelineYears.map((entry, i) => {
  const managed = managedProjects.filter((p) => p.year === entry.year);
  const yearApps = apps.filter((a) => a.year === entry.year);

  const items: TimelineItem[] = [
    ...(entry.notes ?? []),
    ...packages
      .filter((p) => p.year === entry.year)
      .map((p) => ({
        type: "Open source",
        name: p.name,
        detail: "Flutter package on pub.dev",
        href: p.pub,
      })),
    ...teamBuilds
      .filter((b) => b.year === entry.year)
      .map((b) => ({
        type: "Team build",
        name: b.name,
        detail: b.role,
        href: caseStudyUrl(b.caseStudy),
      })),
    ...(managed.length
      ? [
          {
            type: "Managed",
            name: joinNames(managed),
            detail: "Client projects as Project Manager",
            href: "/work#managed",
          },
        ]
      : []),
    ...(yearApps.length
      ? [
          {
            type: "Personal apps",
            name: joinNames(yearApps),
            detail: "Launched on Google Play",
            href: "/work#apps",
          },
        ]
      : []),
  ];

  return { ...entry, items, current: i === timelineYears.length - 1 };
});
