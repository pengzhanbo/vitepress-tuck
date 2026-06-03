import process from 'node:process'
import caniusePlugin from 'vitepress-plugin-caniuse'
import codeCollapsePlugin from 'vitepress-plugin-code-collapse'
import codepenPlugin from 'vitepress-plugin-codepen'
import codeSandboxPlugin from 'vitepress-plugin-codesandbox'
import fileTreePlugin from 'vitepress-plugin-file-tree'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import jsfiddlePlugin from 'vitepress-plugin-jsfiddle'
import llmstxt from 'vitepress-plugin-llms'
import mermaidPlugin from 'vitepress-plugin-mermaid-next'
import npmToPlugin from 'vitepress-plugin-npm-to'
import obsidianPlugin from 'vitepress-plugin-obsidian'
import pdfPlugin from 'vitepress-plugin-pdf'
import plotPlugin from 'vitepress-plugin-plot'
import qrcodePlugin from 'vitepress-plugin-qrcode'
import stepsPlugin from 'vitepress-plugin-steps'
import videoPlugin from 'vitepress-plugin-video'
import { defineConfig } from 'vitepress-tuck'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  title: 'Vitepress Plugins',
  description: 'awesome vitepress plugins',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  rewrites: { 'en/:rest*': ':rest*' },

  plugins: [
    stepsPlugin(),
    plotPlugin(),
    fileTreePlugin(),
    caniusePlugin(),
    obsidianPlugin(),
    pdfPlugin(),
    videoPlugin(),
    npmToPlugin(),
    qrcodePlugin(),
    jsfiddlePlugin(),
    codepenPlugin(),
    codeSandboxPlugin(),
    mermaidPlugin(),
    codeCollapsePlugin(),
  ],

  markdown: {
    config: (md) => {
      md.use(groupIconMdPlugin)
    },
    theme: { light: 'github-light', dark: 'github-dark' },
    headers: { level: [2, 3] },
    codeTransformers: [{ postprocess: code => code.replace(/\[!!code/g, '[!code') }],
  },

  themeConfig: {
    search: { provider: 'local' },
    outline: [2, 3],
  },
  locales: {
    root: { label: 'English', lang: 'en-US' },
    zh: { label: '简体中文', lang: 'zh-CN' },
  },
  vite: {
    plugins: [
      groupIconVitePlugin(),
      isProd && llmstxt({ workDir: 'en', ignoreFiles: ['index.md'] }) as any,
    ],
    ssr: {
      noExternal: [
        'vitepress-plugin-llms',
        'vitepress-plugin-group-icons',
      ],
    },
  },
})
