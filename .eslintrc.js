module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
    // es6: true
  },
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    // ecmaVersion: "2017",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro", ".ts"],
      },
      // rules: {

      // },
    },
  ],
};
