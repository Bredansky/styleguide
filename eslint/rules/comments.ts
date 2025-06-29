import { defineConfig } from "eslint/config";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

export const commentsConfig = defineConfig([
  comments.recommended,
  {
    rules: {
      /**
       * Require comments on ESlint disable directives.
       *
       * 🚫 Not fixable - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
       */
      "@eslint-community/eslint-comments/require-description": "error",
    },
  },
]);
