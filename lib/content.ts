import type { IconKey } from "@/components/icons";
import type { BrandSlug } from "@/lib/brand-icons";

/*
 * Site copy that isn't portfolio data: the approach, scope areas, insights
 * and the about-page story. Projects, apps, socials and the timeline live in
 * data/portfolio.ts.
 */

export const processSteps = [
  {
    title: "UNDERSTAND",
    icon: "understand",
    body: "What problem are we actually solving?",
    note: "The most expensive mistakes happen here, before anything is built. I spend longer on this step than people expect.",
  },
  {
    title: "BREAK DOWN",
    icon: "breakdown",
    body: "Turn one complicated problem into smaller decisions.",
    note: "A problem that feels impossible is usually five problems that feel manageable.",
  },
  {
    title: "ORGANIZE",
    icon: "organize",
    body: "Create clear flows, requirements and priorities.",
    note: "Scattered information becomes a sequence. What matters first, what can wait, what we are not doing.",
  },
  {
    title: "BUILD",
    icon: "build",
    body: "Choose the simplest practical solution.",
    note: "The right amount of software is usually less than the first proposal. Simple things are easier to change later.",
  },
  {
    title: "TEST",
    icon: "test",
    body: "Check real-world behavior, failures and edge cases.",
    note: "The happy path is one path. I look for the ones nobody drew on the whiteboard.",
  },
  {
    title: "IMPROVE",
    icon: "improve",
    body: "Turn lessons into a better system.",
    note: "Every project leaves a residue of lessons. Writing them into the process is how the next one gets easier.",
  },
] as const satisfies readonly {
  title: string;
  icon: IconKey;
  body: string;
  note: string;
}[];

export const workAreas = [
  {
    title: "SOFTWARE PRODUCTS",
    body: "Mobile apps, web products, SaaS and digital platforms.",
    icon: "products",
  },
  {
    title: "AI IN REAL PRODUCTS",
    body: "Using AI where it genuinely improves the product rather than adding AI for hype.",
    icon: "ai",
  },
  {
    title: "PRODUCT & UX",
    body: "Turning ideas into flows, features and usable experiences.",
    icon: "ux",
  },
  {
    title: "SYSTEMS",
    body: "Organizing scattered workflows and turning repeated processes into structured systems.",
    icon: "systems",
  },
  {
    title: "SOFTWARE DELIVERY",
    body: "Requirements, epics, user stories, development coordination and launch.",
    icon: "delivery",
  },
  {
    title: "QUALITY",
    body: "Manual QA, edge cases and thinking beyond the happy path.",
    icon: "quality",
  },
] as const satisfies readonly {
  title: string;
  body: string;
  icon: IconKey;
}[];

/** Brand line from the identity system, used in the scrolling bands. */
export const brandTicker = [
  "IDEAS",
  "SYSTEMS",
  "IMPACT",
  "COMPLEXITY",
  "CLARITY",
  "SYSTEM",
];

export type Post = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
};

export const insights: Post[] = [
  {
    category: "SOFTWARE",
    date: "AUG 2026",
    title: 'The Most Expensive Sentence in Software: "It\'s Just a Small Change."',
    excerpt:
      "Why the smallest-sounding requests carry the largest hidden cost, and how to ask about them differently.",
  },
  {
    category: "50+ APPS LATER",
    date: "JUL 2026",
    title: "What Building 50+ Apps Taught Me",
    excerpt:
      "The patterns that repeat across every project, regardless of industry, stack or team size.",
  },
  {
    category: "SYSTEMS",
    date: "JUN 2026",
    title: "Don't Automate a Broken Process",
    excerpt:
      "Automation makes a process faster. It does not make it correct. Fix the flow first.",
  },
  {
    category: "PRODUCT",
    date: "MAY 2026",
    title: "Your MVP Probably Has Too Many Features",
    excerpt:
      "The minimum in minimum viable product is the hard part, and why founders keep skipping it.",
  },
  {
    category: "AI",
    date: "APR 2026",
    title: "AI Can Write Code. Who Reviews the Software?",
    excerpt:
      "Generating code got cheap. Understanding whether it does the right thing did not.",
  },
  {
    category: "FROM MY NOTES",
    date: "MAR 2026",
    title: "Why I Keep Building Tools for Problems I Have",
    excerpt:
      "On the small personal apps that started as irritation and ended as systems.",
  },
];

export const insightCategories = [
  "ALL",
  "SYSTEMS",
  "SOFTWARE",
  "PRODUCT",
  "AI",
  "50+ APPS LATER",
  "FOUNDER TECH",
  "FROM MY NOTES",
];

export const series = [
  [
    "50+ APPS LATER",
    "Lessons learned after building and working on more than 50 applications.",
  ],
  [
    "SOFTWARE RED FLAGS",
    "Things founders should notice before software problems become expensive.",
  ],
  [
    "FOUNDER VS DEVELOPER",
    "What founders say versus what software teams actually need to think about.",
  ],
  [
    "LET'S BREAK THIS DOWN",
    "Turning complicated software/product problems into simple explanations.",
  ],
  ["BUILD TO SOLVE", "Real problems that resulted in tools, products or systems."],
  [
    "THERE SHOULD BE A BETTER WAY",
    "Taking messy or repetitive processes and redesigning them.",
  ],
].map(([title, body], i) => ({ n: `0${i + 1}`, title, body }));

export const contactProblems = [
  "Planning an app or MVP and unsure where to start.",
  "A development project that is delayed or off track.",
  "Taking over an existing codebase.",
  "Adding AI to a product without adding hype.",
  "Understanding estimates, requirements or developer decisions.",
  "A repetitive internal process that should be a system.",
];

export const tools = [
  { label: "Flutter", icon: "flutter" },
  { label: "Ionic", icon: "ionic" },
  { label: "React", icon: "react" },
  { label: "Angular", icon: "angular" },
  { label: "Node.js", icon: "node" },
  { label: "MongoDB / Mongoose", icon: "mongodb" },
  { label: "Python (basic)", icon: "python" },
  { label: "Xcode", icon: "xcode" },
  { label: "Figma", icon: "figma" },
  { label: "ClickUp", icon: "clickup" },
  { label: "Trello", icon: "trello" },
  { label: "Notion", icon: "notion" },
  { label: "DigitalOcean", icon: "digitalocean" },
  { label: "AWS", icon: "aws" },
  { label: "LangChain", icon: "langchain" },
  { label: "Claude", icon: "claude" },
  { label: "ChatGPT", icon: "chatgpt" },
  { label: "Grok", icon: "grok" },
  { label: "Manual QA", icon: "qa" },
  { label: "SEO / content systems", icon: "seo" },
] as const satisfies readonly { label: string; icon: BrandSlug }[];

/** The about-page story, broken into labelled beats rather than one block. */
export const storyBlocks = [
  {
    label: "THE HABIT",
    lead: true,
    body: "When information is scattered, I want to organize it. When a workflow becomes repetitive, I think about a system. When someone is blocked on logic, I enjoy helping them break the problem down. When an existing tool doesn't solve a personal problem properly, I usually end up building something.",
  },
  {
    label: "IT STARTED WITH CODE",
    body: "As a developer I wanted clean structure. Then, as a multi-stack engineer working across Flutter, Ionic, React, Angular and Node.js, I saw how the same problems repeated across very different stacks. The problem was rarely the language.",
  },
  {
    label: "THEN THE PRODUCT",
    body: "Product thinking followed, because building the wrong thing well is still building the wrong thing. Project management followed that, because a clear plan is a system too.",
  },
  {
    label: "THEN THE PEOPLE USING IT",
    body: "Testing and UX taught me to look past the happy path and at how software actually behaves in a person's hands. AI, SEO and business operations came in the same way: something was messy, and there should have been a better way.",
  },
  {
    label: "WHERE IT LANDS",
    body: "Seven years and 50+ applications later, I work across engineering, product, delivery, QA, UX, AI and operations. Not as a list of skills, but as one habit applied to bigger and bigger problems: understand it, break it down, organize it, build the simplest system that works.",
  },
];

/**
 * Stages of the "mess → system" diagram. Node offsets are derived from a fixed
 * trigonometric seed so the server and client render identical markup, and the
 * scatter factor collapses to 0 when the diagram is organized.
 */
const STAGE_LABELS: [string, string][] = [
  ["MESS", "Scattered inputs, opinions and half-decisions."],
  ["BREAK DOWN", "One problem becomes several smaller ones."],
  ["ORGANIZE", "Flows, priorities and requirements take shape."],
  ["BUILD", "The simplest practical version gets made."],
  ["SYSTEM", "A structure someone else can run."],
];
const SCATTER_FACTORS = [1, 0.62, 0.34, 0.12, 0];

export type DiagramNode = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  rot: number;
  accent: boolean;
};

export type DiagramStage = {
  label: string;
  body: string;
  n: string;
  nodes: DiagramNode[];
};

export function buildStages(organized: boolean): DiagramStage[] {
  return STAGE_LABELS.map(([label, body], si) => {
    const f = organized ? 0 : SCATTER_FACTORS[si];
    const nodes: DiagramNode[] = [];

    for (let i = 0; i < 9; i++) {
      const r =
        Math.sin((si + 1) * 7.3 + i * 12.9) * 0.5 + Math.cos(i * 3.1 + si) * 0.5;
      const r2 =
        Math.cos((si + 2) * 5.1 + i * 9.7) * 0.5 + Math.sin(i * 2.3 - si) * 0.5;
      const corner = i === 0 || i === 4 || i === 8;

      nodes.push({
        x: (i % 3) * 32,
        y: Math.floor(i / 3) * 32,
        dx: +(r * 28 * f).toFixed(1),
        dy: +(r2 * 28 * f).toFixed(1),
        rot: +(r * 45 * f).toFixed(1),
        accent: corner && (si === 4 || (organized && si > 1)),
      });
    }

    return { label, body, n: `0${si + 1}`, nodes };
  });
}
