import config from '@pengzhanbo/eslint-config-vue'

export default config({
  pnpm: true,
  typescript: {
    erasableOnly: true,
  },
  vue: { a11y: true },
  ignores: ['**/*.md', '**/__test__/fixtures/**'],
}, {
  files: ['**/*.vue'],
  rules: {
    'vue-a11y/mouse-events-have-key-events': 'off',
    'vue-a11y/no-static-element-interactions': 'off',
  },
}, {
  files: ['**/*.ts'],
  rules: {
    'jsdoc/no-multi-asterisks': 'off',
  },
})
