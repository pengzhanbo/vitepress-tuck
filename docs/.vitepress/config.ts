import path from 'node:path'
import { defineConfig } from 'vitepress-tuck'
import { plugins } from './plugins'

export default defineConfig({
  title: 'Vitepress Tuck',
  description: 'Enhance vitepress configuration, provide plugins capability.',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  rewrites: { 'en/:rest*': ':rest*' },

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    headers: { level: [2, 3] },
    codeTransformers: [{ postprocess: code => code.replace(/\[!!code/g, '[!code') }],
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ],

  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pengzhanbo/vitepress-tuck' },
    ],
    search: { provider: 'local' },
    outline: [2, 3],
  },
  locales: {
    root: { label: 'English', lang: 'en-US', dir: 'ltr' },
    zh: { label: '简体中文', lang: 'zh-CN', dir: 'ltr' },
  },

  // vite: {
  //   define: {
  //     // debug hydration mismatch
  //     __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
  //   },
  // },

  plugins,
  components: {
    dirs: [path.resolve(__dirname, 'theme/components')],
  },
})
