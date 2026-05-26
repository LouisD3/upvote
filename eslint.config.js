import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // `dist` = build, `.astro` = types générés par Astro (any/triple-slash légitimes, jamais à linter).
  { ignores: ["dist", ".astro"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    // Primitives shadcn/ui (vendored, non modifiées directement) : l'interface vide qui étend
    // un supertype est idiomatique chez shadcn. On relâche la règle ici sans toucher aux fichiers.
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
);
