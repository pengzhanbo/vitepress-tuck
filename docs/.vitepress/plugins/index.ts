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
import jsfiddle from 'vitepress-plugin-jsfiddle'
import mermaid from 'vitepress-plugin-mermaid-tuck'
import npmTo from 'vitepress-plugin-npm-to'
import obsidian from 'vitepress-plugin-obsidian'
import pdf from 'vitepress-plugin-pdf'
import plantuml from 'vitepress-plugin-plantuml'
import plot from 'vitepress-plugin-plot'
import qrcode from 'vitepress-plugin-qrcode'
import repoCard from 'vitepress-plugin-repo-card'
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
  codeTree(),
  repoCard(),
  collapse(),
]
