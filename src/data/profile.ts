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
  /** e.g. "2025" or "Apr — Jun 2025" */
  period?: string;
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
      period: "Dec 2025 — Aug 2026",
      title: "AI Research Intern",
      company: "KAIST AI",
      description:
        "Researched EditPPT in the DAVIAN Lab under Prof. Jaegul Choo: a tool-augmented multi-agent framework that edits presentations through COM automation, cutting token cost and latency while improving accuracy. Collaborating with the Microsoft PowerPoint team to extend the work.",
      tags: ["Multi-Agent", "Tool Use", "COM Automation"],
    },
    {
      period: "Dec 2025 — Present",
      title: "AI Lead",
      company: "Korea Digital Forensic Center · RISE Project",
      description:
        "Leading the AI upgrade of PRISMA, a digital forensics tool: clustering web search histories, recovering missing disk drive serial numbers, and generating summaries of forensic results. Built and tested the server stack for reliable deployment.",
      tags: ["Digital Forensics", "Clustering", "Summarization"],
    },
    {
      period: "Jun — Aug 2025",
      title: "Team Leader & AI Agent Lead",
      company: "SKT × ImpactSquare",
      href: "https://www.donga.com/news/Economy/article/all/20250818/132207445/2",
      description:
        "Built an AI agent that writes ESG impact reports for social enterprises from corporate data. Aligned it with expert report writers using DPO, and curbed hallucinations with LangGraph and a Chain-of-Validation step. Featured in The Dong‑A Ilbo.",
      tags: ["AI Agents", "LangGraph", "DPO"],
    },
    {
      period: "Jul 2024 — Dec 2025",
      title: "Founder & CEO",
      company: "AI Shared Album Startup",
      description:
        "Led a 7-member team across frontend and backend as project and product manager. Built the deep learning pipeline (image classification and object detection) served with FastAPI on AWS. Won the Grand Prize at the TAVE 13th Conference and joined the 2025 SKKU Campus Town Startup Residency Program.",
      tags: ["Object Detection", "FastAPI", "AWS"],
    },
  ],

  projects: [
    {
      period: "Jul — Dec 2025",
      title: "Multi-Agent Debate for Disaster Expert Recommendation",
      description:
        "Led a lightweight multi-agent debate system built on small language models (LLaMA, Qwen, Phi, Gemma), where agents critique and validate each other's answers, drawing on AgentVerse, Reflexion and ReAct. Improved recommendation accuracy relative to model size. Supervised by Prof. Hoonmo Kim, SKKU.",
      tags: ["Multi-Agent Debate", "SLM", "Recommendation"],
    },
    {
      period: "Apr — Jun 2025",
      title: "French Accent Restorer",
      description:
        "A Flan-T5 model that restores French diacritics from unaccented text. Compressed with pruning, QLoRA and knowledge distillation, then exported and deployed with ONNX. Ranked 1st in peer evaluation.",
      tags: ["Flan-T5", "QLoRA", "ONNX"],
    },
    {
      period: "Oct 2022 — Feb 2023",
      title: "MAKEAT: Food Detection for Healthcare",
      description:
        "A healthcare assistant app that recognizes food with YOLO object detection, trained on a large-scale 2 TB food image dataset. Won the Excellence Award in the AI for Healthcare track of the K-Software Empowerment BootCamp.",
      tags: ["YOLO", "Computer Vision", "Healthcare"],
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
