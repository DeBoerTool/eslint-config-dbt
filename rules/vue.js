module.exports = {
  'vue/component-tags-order': ['error', {
    order: ['template', 'script', 'style'],
  }],

  'vue/order-in-components': ['error', {
    'order': [
      // DBT
      'functional',
      ['props', 'propsData'],
      'computed',
      'methods',
      'watch',
      'LIFECYCLE_HOOKS',
      'data',
      ['components', 'directives', 'filters', 'mixins'],
      'name',

      // Vue Default
      'el',
      'parent',
      ['delimiters', 'comments'],
      'extends',
      'inheritAttrs',
      'model',
      'fetch',
      'asyncData',
      'head',
      ['template', 'render'],
      'renderError',
    ],
  }],

  'vue/script-indent': ['error', 2, {
    baseIndent: 1,
    switchCase: 1,
    ignores: [],
  }],

  'vue/attributes-order': ['error', {
    'order': [
      'EVENTS',
      'CONDITIONALS',
      'TWO_WAY_BINDING',
      'CONTENT',
      'OTHER_DIRECTIVES',
      'LIST_RENDERING',
      'RENDER_MODIFIERS',
      'UNIQUE',
      'DEFINITION',
      'OTHER_ATTR',
      'GLOBAL',
    ],
    'alphabetical': false,
  }],
}
