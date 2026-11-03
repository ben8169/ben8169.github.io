/**
 * Every piece of content on the landing page lives in this file.
 * - Empty arrays ([]) hide their section and its nav entry automatically.
 * - Empty strings ("") hide optional fields.
 */

export type SocialIcon =
  "github" | "linkedin" | "x" | "instagram" | "mail" | "rss" | "website";

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
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

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  status?: string;
  location?: string;
  about: string[];
  socials: Social[];
  experience: Experience[];
  projects: Project[];
  resume?: string;
}

export const profile: Profile = {
  name: "Jiheon Kim",
  role: "AI Engineer",
  tagline: "I build AI agents that turn natural language into real work.",
  status: "Open to opportunities",
  location: "South Korea",

  /** One string per paragraph. Simple HTML such as <a> and <strong> is allowed. */
  about: [
    "I'm a developer focused on <strong>AI agents</strong> and applied deep learning. I like taking tedious, manual workflows and handing them to models that can plan and act on their own.",
    "Most recently I've been building <a href='https://github.com/ben8169/EditPPT'>EditPPT</a>, an agentic system that edits PowerPoint decks through LLM tool calling.",
    "Along the way I've trained models with PyTorch, reproduced security research, analyzed financial data, and took part in SK Telecom's FLY AI program.",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/ben8169", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jiheon-kim-13856825b/",
      icon: "linkedin",
    },
    // { label: "Email", href: "mailto:you@example.com", icon: "mail" },
  ],

  experience: [
    {
      period: "2025",
      title: "AI Trainee",
      company: "SKT FLY AI · 7th Cohort",
      description:
        "Took part in SK Telecom's FLY AI program, building AI projects as a member of Team 1.",
      tags: ["AI", "Team Project"],
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

  /** Link to a résumé PDF, etc. Hidden when empty. */
  resume: "",
};

export const site = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  lang: "en",
  repo: "https://github.com/ben8169/ben8169.github.io",
};
