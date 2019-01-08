module.exports = {
  extends: [
    'airbnb',
  ],

  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
      },
    ],

    complexity: ['error', { max: 2 }],

    'function-paren-newline': 'off',

    indent: ['error', 2],

    'linebreak-style': 'off',

    'object-curly-newline': ['error', { 'multiline': true }]

    'react/prefer-stateless-function': 'off',

    semi: ['error', 'never'],

    'space-before-function-paren': ['error', 'always'],
  },
}
