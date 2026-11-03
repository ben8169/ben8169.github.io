# ben8169.github.io

개인 랜딩페이지 — [Astro](https://astro.build)로 만들고 GitHub Pages로 배포합니다.

배포 주소: https://ben8169.github.io

## 시작하기

Node.js 22.23.4 이상이 필요합니다 (`.nvmrc` 참고).

```bash
npm install
npm run dev
```

개발 서버가 http://localhost:4321 에서 실행되고, 파일을 저장하면 바로 반영됩니다.

## 명령어

| 명령어                 | 설명                                    |
| :--------------------- | :-------------------------------------- |
| `npm run dev`          | 로컬 개발 서버 실행 (`localhost:4321`)  |
| `npm run build`        | 타입 검사 후 `./dist/`에 정적 파일 빌드 |
| `npm run preview`      | 빌드 결과물을 로컬에서 미리보기         |
| `npm run check`        | `.astro` / TypeScript 타입 검사만 실행  |
| `npm run format`       | Prettier로 전체 코드 포맷팅             |
| `npm run format:check` | 포맷팅 검사만 실행                      |

## 구조

```text
├── .github/workflows/deploy.yml   # main 푸시 시 GitHub Pages 자동 배포
├── public/                        # 그대로 복사되는 정적 파일 (favicon, 프로젝트 썸네일 등)
├── src/
│   ├── data/profile.ts            # ✏️ 이름·소개·경력·프로젝트·링크 등 모든 콘텐츠
│   ├── styles/global.css          # 🎨 색상·폰트·간격 디자인 토큰 (다크/라이트)
│   ├── layouts/BaseLayout.astro   # <head> 메타 태그, 폰트, 공통 HTML 뼈대
│   ├── components/
│   │   ├── Sidebar.astro          # 왼쪽 고정 영역: 이름·소개·내비게이션·소셜 링크
│   │   ├── Section.astro          # 본문 섹션 (모바일에서 제목이 상단 고정)
│   │   ├── Entry.astro            # 경력/프로젝트 카드
│   │   ├── EntryList.astro        # 카드 목록 (호버 시 나머지 카드 흐리게)
│   │   ├── Spotlight.astro        # 마우스를 따라다니는 조명 효과
│   │   ├── Icon.astro             # Tabler 아이콘 매핑
│   │   └── Footer.astro
│   └── pages/index.astro          # 랜딩페이지 (섹션 배치)
└── astro.config.mjs
```

- **내용 수정**: `src/data/profile.ts`만 고치면 됩니다. 배열을 비우면 해당 섹션과 내비게이션 항목이 자동으로 사라집니다.
- **포인트 색 변경**: `src/styles/global.css`의 `--color-accent`(다크/라이트 각 1곳)를 바꾸세요.
- **프로젝트 썸네일**: 이미지를 `public/projects/`에 넣고 `profile.ts`의 `image` 경로를 바꿉니다.
- **아이콘 추가**: [Tabler Icons](https://tabler.io/icons)에서 이름을 찾아 `Icon.astro`에 등록합니다.
- **페이지 추가**: `src/pages/about.astro`를 만들면 `/about` 경로가 생깁니다.
- 경로 별칭 `@/`는 `src/`를 가리킵니다 (예: `import Entry from "@/components/Entry.astro"`).

## 디자인 레퍼런스

- [Brittany Chiang](https://github.com/bchiang7/v4) — 왼쪽 고정 소개 + 오른쪽 스크롤 본문, 스크롤에 반응하는 내비게이션, 카드 호버 시 나머지 흐리게, 커서 스포트라이트
- [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) — 설정 파일 하나로 모든 콘텐츠 관리, 비어 있는 섹션 자동 숨김, 포인트 색 하나로 전체 테마 조정

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 빌드 후 GitHub Pages에 배포합니다.

최초 1회 설정이 필요합니다: 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 변경하세요.
