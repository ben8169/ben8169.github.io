// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // <user>.github.io 저장소는 루트 도메인으로 배포되므로 base 설정이 필요 없습니다.
  site: "https://ben8169.github.io",
});
