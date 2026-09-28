import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

export default [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals"),
  {
    // Retired promotional copy predates lint setup; keep these cosmetic findings visible.
    files: ["src/app/homepage{3,4}/page.tsx", "src/components/HomePage/HomePageQuestions/HomePageQuestions.tsx"],
    rules: { "react/no-unescaped-entities": "warn" },
  },
];
