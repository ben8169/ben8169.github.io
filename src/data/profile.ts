/**
 * 랜딩페이지에 표시되는 모든 내용은 이 파일 하나에서 관리합니다.
 * - 배열을 비우면([]) 해당 섹션은 자동으로 숨겨집니다.
 * - 아래 값들은 레이아웃 확인용 예시입니다. 본인 내용으로 바꿔주세요.
 */

export type SocialIcon =
  "github" | "linkedin" | "x" | "instagram" | "mail" | "rss" | "website";

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Experience {
  /** 예: "2024 — 현재" */
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
  /** public/ 기준 경로. 예: "/projects/my-app.png" */
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
  name: "Ben",
  role: "Software Engineer",
  tagline: "사용자가 오래 머무는 제품을 만들고, 그 과정을 기록합니다.",
  /** 비워두면("") 표시되지 않습니다. */
  status: "새로운 기회에 열려 있어요",
  location: "Seoul, Korea",

  /** 문단 배열. <a>, <strong> 같은 간단한 HTML을 쓸 수 있습니다. */
  about: [
    "안녕하세요. 웹 프론트엔드와 제품 개발에 관심이 많은 개발자입니다. 복잡한 문제를 단순한 인터페이스로 풀어내는 일을 좋아합니다.",
    "최근에는 <strong>TypeScript</strong>와 <strong>Astro</strong>로 빠르고 가벼운 웹을 만드는 데 집중하고 있습니다. 배운 것은 <a href='https://github.com/ben8169'>GitHub</a>에 정리합니다.",
    "일하지 않을 때는 책을 읽거나, 새로운 도구를 만져보거나, 동네 카페를 탐방합니다.",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/ben8169", icon: "github" },
    // { label: "LinkedIn", href: "https://www.linkedin.com/in/...", icon: "linkedin" },
    // { label: "Email", href: "mailto:you@example.com", icon: "mail" },
  ],

  experience: [
    {
      period: "2024 — 현재",
      title: "Software Engineer",
      company: "회사 이름",
      href: "https://example.com",
      description:
        "맡았던 역할과 만든 것, 그리고 그 결과를 한두 문장으로 적어주세요. 숫자로 보여줄 수 있는 성과가 있다면 더 좋습니다.",
      tags: ["TypeScript", "React", "Node.js"],
    },
    {
      period: "2022 — 2024",
      title: "Frontend Developer",
      company: "이전 회사",
      description:
        "이전 경력도 같은 형식으로 적습니다. 카드에 마우스를 올리면 강조되고, 나머지 항목은 흐려집니다.",
      tags: ["Vue", "Design System"],
    },
  ],

  projects: [
    {
      title: "프로젝트 하나",
      description:
        "무엇을 왜 만들었는지, 어떤 기술적 고민이 있었는지 짧게 소개해주세요.",
      href: "https://github.com/ben8169",
      image: "/projects/placeholder-1.svg",
      tags: ["Astro", "TypeScript"],
    },
    {
      title: "프로젝트 둘",
      description:
        "스크린샷을 public/projects/ 폴더에 넣고 image 경로를 바꾸면 썸네일이 교체됩니다.",
      href: "https://github.com/ben8169",
      image: "/projects/placeholder-2.svg",
      tags: ["Python", "FastAPI"],
    },
  ],

  /** 이력서 PDF 등 링크. 비워두면 표시되지 않습니다. */
  resume: "",
};

export const site = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  lang: "ko",
  repo: "https://github.com/ben8169/ben8169.github.io",
};
