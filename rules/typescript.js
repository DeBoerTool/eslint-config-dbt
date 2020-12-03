module.exports = {
  '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'comma',
      requireLast: true,
    },
    singleline: {
      delimiter: 'comma',
      requireLast: false,
    },
  }],

  '@typescript-eslint/no-useless-constructor': ['error'],
}
