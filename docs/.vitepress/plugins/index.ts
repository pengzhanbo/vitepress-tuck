import type { VitepressPlugin } from 'vitepress-tuck'
import abbr from 'vitepress-plugin-abbr'
import annotation from 'vitepress-plugin-annotation'
import caniuse from 'vitepress-plugin-caniuse'
import codeCollapse from 'vitepress-plugin-code-collapse'
import codeTree from 'vitepress-plugin-code-tree'
import codepen from 'vitepress-plugin-codepen'
import collapse from 'vitepress-plugin-collapse'
import field from 'vitepress-plugin-field'
import fileTree from 'vitepress-plugin-file-tree'
import icons from 'vitepress-plugin-icons'
import jsfiddle from 'vitepress-plugin-jsfiddle'
import mark from 'vitepress-plugin-mark'
import mermaid from 'vitepress-plugin-mermaid-tuck'
import npmTo from 'vitepress-plugin-npm-to'
import obsidian from 'vitepress-plugin-obsidian'
import pdf from 'vitepress-plugin-pdf'
import plantuml from 'vitepress-plugin-plantuml'
import plot from 'vitepress-plugin-plot'
import qrcode from 'vitepress-plugin-qrcode'
import repoCard from 'vitepress-plugin-repo-card'
import stackblitz from 'vitepress-plugin-stackblitz'
import steps from 'vitepress-plugin-steps'
import video from 'vitepress-plugin-video'

import groupIcons from './group-icons'
import llmstxt from './llmstxt'

export const plugins: VitepressPlugin[] = [
  // wrap external plugins
  llmstxt(),
  groupIcons(),

  // monorepo internal plugins
  abbr(),
  annotation(),
  stackblitz(),
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
  mark(),
  mermaid(),
  codeCollapse(),
  field(),
  plantuml(),
  codeTree(),
  repoCard(),
  collapse(),
  icons([
    { provider: 'iconify' },
    { provider: 'iconfont', assets: '//at.alicdn.com/t/c/font_4920010_cm826bt13ke.css' },
    { provider: 'fontawesome', assets: 'fontawesome' },
  ]),
]
