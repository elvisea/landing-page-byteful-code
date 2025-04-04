import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: { extends: ["eslint:recommended"] }
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // Configurações básicas para Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Configurações de estilização e melhores práticas
  ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
  
  // Configurações específicas para React
  ...compat.extends("plugin:react/recommended", "plugin:react-hooks/recommended"),
  
  // Integração com o Prettier
  ...compat.extends("prettier"),
  
  // Configurações globais
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "public/**",
      "**/dist/**",
      "**/.git/**",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Regras básicas
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      
      // Regras React
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // Regras TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // Regras específicas para Next.js
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
