import caniuse from 'vitepress-plugin-caniuse'
import codeCollapse from 'vitepress-plugin-code-collapse'
import codepen from 'vitepress-plugin-codepen'
import field from 'vitepress-plugin-field'
import fileTree from 'vitepress-plugin-file-tree'
import jsfiddle from 'vitepress-plugin-jsfiddle'
import mermaid from 'vitepress-plugin-mermaid-tuck'
import npmTo from 'vitepress-plugin-npm-to'
import obsidian from 'vitepress-plugin-obsidian'
import pdf from 'vitepress-plugin-pdf'
import plantuml from 'vitepress-plugin-plantuml'
import plot from 'vitepress-plugin-plot'
import qrcode from 'vitepress-plugin-qrcode'
import steps from 'vitepress-plugin-steps'
import video from 'vitepress-plugin-video'
import { defineConfig } from 'vitepress-tuck'

import groupIcons from './plugins/group-icons'
import llmstxt from './plugins/llmstxt'

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

  plugins: [
    steps(),
    plot(),
    fileTree(),
    caniuse(),
    obsidian(),
    pdf(),
    video(),
    npmTo(['pnpm', 'npm', 'bun', 'deno', 'yarn']),
    qrcode(),
    jsfiddle(),
    codepen(),
    mermaid(),
    codeCollapse(),
    field(),
    plantuml(),

    // wrap external plugins
    llmstxt(),
    groupIcons(),
  ],
})
