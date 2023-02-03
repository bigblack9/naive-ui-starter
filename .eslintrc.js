/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-02 16:52:32
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 11:50:20
 * @FilePath: /naive-ui-template/.eslintrc.js
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
