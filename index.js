/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('./rules/base')
const vue = require('./rules/vue')
const typescript = require('./rules/typescript')

module.exports = {
  extends: [
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
  ],

  plugins: [
    'vue',
  ],

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    jest: true,
  },

  rules: Object.assign(base, vue, typescript),

  overrides: [
    {
      files: [
        '*.vue',
      ],
      rules: {
        'indent': 'off',
        'id-blacklist': 'off',
      },
    },
  ],
}

