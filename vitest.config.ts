import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/__test__/**/*.spec.[tj]s'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
    ],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'clover', 'json'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
      ],
    },
  },
})
