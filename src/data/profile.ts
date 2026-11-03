/**
 * Every piece of content on the landing page lives in this file.
 * - Empty arrays ([]) hide their section and its nav entry automatically.
 * - Empty strings ("") hide optional fields.
 */

export type SocialIcon =
  | "github"
  | "linkedin"
  | "x"
  | "instagram"
  | "mail"
  | "rss"
  | "blog"
  | "website";

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Education {
  /** e.g. "2022 — 2026" */
  period: string;
  school: string;
  degree: string;
  href?: string;
}

export interface Publication {
  title: string;
  /** Comma-separated. Your own name (profile.name) is highlighted automatically. */
  authors: string;
  /** e.g. "ACL 2027" or "Under review" */
  venue: string;
  year: string;
  links?: { label: string; href: string }[];
}

export interface Experience {
  /** e.g. "2024 — Present" */
  period: string;
  title: string;
  company: string;
  href?: string;
  description: string;
  tags?: string[];
}

export interface Project {
  title: string;
  description: string;
  href?: string;
  /** Path under public/, e.g. "/projects/my-app.png" */
  image?: string;
  tags?: string[];
}

export interface Honor {
  /** Main line, e.g. the competition or certificate name */
  name: string;
  /** Short right-aligned detail, e.g. the prize or issuer */
  detail?: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  status?: string;
  location?: string;
  about: string[];
  skills: string[];
  socials: Social[];
  education: Education[];
  publications: Publication[];
  experience: Experience[];
  projects: Project[];
  awards: Honor[];
  certifications: Honor[];
  resume?: string;
}

export const profile: Profile = {
  name: "JiHeon Kim",
  role: "AI Developer & Researcher",
  tagline:
    "Specializing in AI agents and NLP. Also interested in security, business and economics.",
  status: "M.S. student at KAIST AI",
  location: "Seoul, South Korea",

  /** One string per paragraph. Simple HTML such as <a> and <strong> is allowed. */
  about: [
    "I'm an AI developer and researcher specializing in <strong>agents</strong> and <strong>natural language processing</strong>. I'm currently pursuing an M.S. in Artificial Intelligence at <a href='https://www.kaist.ac.kr/en/'>KAIST</a>.",
  ],

  skills: ["AI Agents", "NLP", "Deep Learning", "Business"],

  socials: [
    { label: "GitHub", href: "https://github.com/ben8169", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jiheon-kim-13856825b/",
      icon: "linkedin",
    },
    { label: "Blog", href: "https://ben8169.tistory.com/", icon: "blog" },
    { label: "Email", href: "mailto:ben8169@outlook.kr", icon: "mail" },
  ],

  /** Not shown right now — the Education section is commented out in src/pages/index.astro. */
  education: [
    {
      period: "2026 — Present",
      school: "KAIST",
      degree: "M.S. in Artificial Intelligence",
      href: "https://www.kaist.ac.kr/en/",
    },
    {
      period: "2024 — 2025",
      school: "Chuo University",
      degree: "Exchange Student, Faculty of Science and Engineering",
      href: "https://www.chuo-u.ac.jp/english/",
    },
    {
      period: "2022 — 2026",
      school: "Sungkyunkwan University",
      degree:
        "B.A. in English Literature and Artificial Intelligence (Double Major)",
      href: "https://www.skku.edu/eng/",
    },
  ],

  publications: [
    {
      title:
        "EditPPT: Structured Execution and Evaluation for Reliable Slide Editing",
      authors: "Jiheon Kim, Kyudan Jung, Jaegul Choo",
      venue: "NAACL 2027 (Under Review)",
      year: "2027",
    },
  ],

  experience: [
    {
      period: "2025",
      title: "FLY AI Challenger",
      company: "SK Telecom · 7th Cohort",
      description:
        "Took part in SK Telecom's FLY AI program, building AI projects as a member of Team 1.",
      tags: ["AI", "Team Project"],
    },
    {
      period: "2022",
      title: "Trainee",
      company: "K-Software Empowerment BootCamp",
      description:
        "Completed the bootcamp and received the Excellence Award in the Healthcare AI category.",
      tags: ["Healthcare AI"],
    },
  ],

  projects: [
    {
      title: "EditPPT",
      description:
        "An AI-powered PowerPoint editing agent. An agentic system that understands editing requests and applies them to slides through LLM tool calling.",
      href: "https://github.com/ben8169/EditPPT",
      tags: ["Python", "LLM Agents", "Tool Calling"],
    },
    {
      title: "DeepTective Reproduction",
      description:
        "A study reproduction of DeepTective, a deep learning model that detects vulnerabilities in PHP source code.",
      href: "https://github.com/ben8169/DeepTective_reproduction",
      tags: ["Python", "Deep Learning", "Security"],
    },
    {
      title: "macOS ↔ Windows NFC Normalizer",
      description:
        "A small utility that normalizes Unicode to NFC so file names stay intact when moving between macOS and Windows, packaged as a standalone .exe.",
      href: "https://github.com/ben8169/-MacOS-Windows-",
      tags: ["Unicode", "Utility"],
    },
  ],

  awards: [
    { name: "TAVE 13th Conference", detail: "Grand Prize (1st)" },
    { name: "SKKU 7th Bug Bounty", detail: "Excellence Award" },
    {
      name: "SKKU Undergraduate Startup Competition",
      detail: "Excellence Award",
    },
    {
      name: "2022 K-Software Empowerment BootCamp",
      detail: "Excellence Award · Healthcare AI",
    },
    {
      name: "Personal Finance and Wealth Management Program",
      detail: "Award of Excellence",
    },
  ],

  certifications: [
    {
      name: "Building Transformer-Based NLP Applications",
      detail: "NVIDIA DLI",
    },
    { name: "K-Software Empowerment BootCamp" },
    { name: "SRI Business Workshop" },
    { name: "Local Community-Linked 3D Printing Startup Camp" },
    { name: "Student Business Management Camp" },
  ],

  /** Link to a résumé PDF, etc. Hidden when empty. */
  resume: "",
};

export const site = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  lang: "en",
  repo: "https://github.com/ben8169/ben8169.github.io",
};
