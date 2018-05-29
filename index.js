module.exports = {
  extends: ["airbnb"],

  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline"
      }
    ],

    complexity: [
      "error",
      {
        max: 2
      }
    ],

    indent: ["error", 2],

    'linebreak-style': 'off',
  }
};
