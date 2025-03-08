import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    },
    rules: {
      "eol-last": ["error", "never"],
      "quotes": ["error", "double"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "semi": ["error", "always"],
    },
    settings: {
      react: {
        version: "detect",
      }
    },
  },
  pluginJs.configs.recommended,
];