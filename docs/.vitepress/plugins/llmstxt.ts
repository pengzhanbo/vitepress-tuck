import process from 'node:process'
import llmstxt from 'vitepress-plugin-llms'
import { definePlugin } from 'vitepress-tuck'

const isProd = process.env.NODE_ENV === 'production'

export default definePlugin(() => ({
  name: 'vitepress-plugin-llms',
  vite: {
    plugins: [
      isProd && llmstxt({ workDir: 'en', ignoreFiles: ['index.md'] }) as any,
    ],
    ssr: {
      noExternal: [
        'vitepress-plugin-llms',
      ],
    },
  },
}))
