import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/__test__/**/*.spec.[tj]s'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/__test__/fixtures/**',
      '**/*.d.ts',
      'packages/*/src/**/types.ts',
      'packages/*/src/**/env.d.ts',
      'scripts/**',
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
