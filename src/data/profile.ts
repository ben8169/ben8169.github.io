/**
 * 랜딩페이지에 표시되는 모든 개인 정보는 이 파일 하나에서 관리합니다.
 * 내용만 바꾸면 페이지 전체에 반영됩니다.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

export const profile = {
  name: "Ben",
  handle: "ben8169",
  role: "Developer",
  tagline: "한 줄 소개를 여기에 적어주세요.",
  about: [
    "자기소개 첫 문단입니다. 무엇을 하는 사람인지, 어떤 일에 관심이 있는지 적어보세요.",
    "두 번째 문단은 선택 사항입니다. 필요 없으면 지워도 됩니다.",
  ],
  // 공개 페이지에 노출됩니다. 비워두면 Contact 영역에 표시되지 않습니다.
  email: "",
  links: [
    { label: "GitHub", href: "https://github.com/ben8169" },
  ] satisfies Link[],
  projects: [
    {
      title: "프로젝트 이름",
      description: "프로젝트에 대한 짧은 설명을 적어주세요.",
      href: "https://github.com/ben8169",
      tags: ["TypeScript", "Astro"],
    },
  ] satisfies Project[],
};

export const site = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  lang: "ko",
};
