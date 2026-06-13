import config from '@pengzhanbo/eslint-config-vue'

export default config({
  pnpm: true,
  typescript: {
    erasableOnly: true,
  },
  vue: { a11y: true },
  ignores: ['**/*.md'],
})
