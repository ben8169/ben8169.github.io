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
├── public/                        # 그대로 복사되는 정적 파일 (favicon, 이미지 등)
├── src/
│   ├── data/profile.ts            # ✏️ 이름·소개·링크·프로젝트 등 콘텐츠
│   ├── styles/global.css          # 🎨 색상·폰트·간격 디자인 토큰 (라이트/다크)
│   ├── layouts/BaseLayout.astro   # <head> 메타 태그, 공통 HTML 뼈대
│   ├── components/                # Hero, Section, ProjectCard, Footer
│   └── pages/index.astro          # 랜딩페이지 (섹션 배치)
└── astro.config.mjs
```

- **내용 수정**: `src/data/profile.ts`만 고치면 됩니다.
- **디자인 수정**: `src/styles/global.css`의 `:root` 변수(색/폰트/폭)를 바꾸거나, 각 컴포넌트의 `<style>`을 수정하세요. 컴포넌트 안의 스타일은 해당 컴포넌트에만 적용됩니다.
- **섹션 추가**: `src/components/`에 컴포넌트를 만들고 `src/pages/index.astro`에서 `<Section>`으로 감싸 배치합니다.
- **페이지 추가**: `src/pages/about.astro`를 만들면 `/about` 경로가 생깁니다.
- 경로 별칭 `@/`는 `src/`를 가리킵니다 (예: `import Hero from "@/components/Hero.astro"`).

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 빌드 후 GitHub Pages에 배포합니다.

최초 1회 설정이 필요합니다: 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 변경하세요.
