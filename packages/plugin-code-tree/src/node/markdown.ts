import type { PluginWithOptions } from 'markdown-it'
import type { MarkdownEnv } from 'vitepress'
import type { CodeTreeData, CodeTreeFile, CodeTreePluginOptions } from './types.js'
import fs from 'node:fs'
import path from 'node:path'
import { removeLeadingSlash } from '@pengzhanbo/utils'
import ansis from 'ansis'
import { globSync } from 'tinyglobby'
import {
  createContainerPlugin,
  createEmbedRuleBlock,
  getVitepressConfig,
  parseRect,
  resolveAttrs,
  stringifyAttrs,
} from 'vitepress-plugin-toolkit'
import { initLoaders } from './loader.js'
import { logger } from './logger.js'

/**
 * File tree node type
 *
 * 文件树节点类型
 */
interface FileTreeNode {
  level: number
  children?: FileTreeNode[]
  filename: string
  filepath?: string
}

const RE_CODE_TREE_TITLE = /\[([^\]]*)\]/

/**
 * markdown-it plugin that registers the code tree block rule.
 *
 * markdown-it 插件，注册代码树块规则。
 *
 * @param md - The markdown-it instance / markdown-it 实例
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { codeTreeMarkdownPlugin } from 'vitepress-plugin-code-tree'
 * export default defineConfig({
 *   markdown: {
 *     config: (md) => {
 *       md.use(codeTreeMarkdownPlugin)
 *     },
 *   },
 * })
 * ```
 */
export const codeTreeMarkdownPlugin: PluginWithOptions<CodeTreePluginOptions> = (md, options = {}) => {
  const loaders = initLoaders(options.loaders)

  createEmbedRuleBlock(md, {
    type: 'code-tree',
    meta: (info, dir) => ({ dir, ...resolveAttrs<CodeTreeData>(info) }),
    content: ({ title, dir, entry, height, showSidebar }, env) => {
      const targetDir = resolveCodeTreeDir(dir, env)

      if (!fs.existsSync(targetDir)) {
        logger.warn(`Invalid code-tree target directory ${ansis.yellow(dir)}, in ${ansis.gray(env.relativePath)}`)
        return `<p>@[code-tree](${dir}) <em>Invalid target directory</em></p>`
      }

      const files = loadFiles(targetDir, options.ignores)
      const nodes = parseFileNodes(files)
      const content = files.map((file) => {
        const extname = path.extname(file).slice(1)
        const basename = path.basename(file)
        const absolutePath = path.join(targetDir, file)
        const relativePath = path.relative(path.dirname(env.path), absolutePath)
        const item: CodeTreeFile = { path: file, absolutePath, relativePath, extname, basename }
        env.includes ??= []
        env.includes.push(absolutePath)
        for (const { filter, matcher, load } of loaders) {
          if (filter?.(item) ?? matcher?.(file))
            return load(item)
        }
        return ''
      }).filter(Boolean).join('\n')
      entry ||= files[0]
      height ||= String(options.height || '')
      height = height ? parseRect(height) : undefined
      return `<VPCodeTree${stringifyAttrs({ title, height, entryFile: entry, showSidebar })}><template #file-tree>${renderFileTree(nodes)}</template>${md.render(content, {
        ...env,
        __IS_CODE_TREE__: true,
      })}</VPCodeTree>`
    },
  })

  // Register ::: code-tree container
  createContainerPlugin(md, 'code-tree', {
    before: (info, tokens, index) => {
      // Collect filenames and active file in code-tree container
      const files: string[] = []
      let activeFile: string | undefined
      for (let i = index + 1; !(tokens[i].nesting === -1 && tokens[i].type === 'container_code-tree_close'); i++) {
        const token = tokens[i]
        if (token.type === 'fence' && token.tag === 'code') {
          const fenceInfo = md.utils.unescapeAll(token.info)
          const title = fenceInfo.match(RE_CODE_TREE_TITLE)?.[1]
          if (title) {
            files.push(title)
            ;(token as any).__IS_CODE_TREE__ = true
            if (fenceInfo.includes(':active'))
              activeFile = title
          }
        }
      }

      const { title, height, entry, showSidebar } = resolveAttrs<CodeTreeData>(info)
      const fileTreeNodes = parseFileNodes(files)
      const entryFile = activeFile || entry || files[0]
      const h = height || String(options.height)
      return `<VPCodeTree${stringifyAttrs({ title, entryFile, height: h ? parseRect(h) : undefined, showSidebar })}><template #file-tree>${renderFileTree(fileTreeNodes)}</template>`
    },
    after: () => '</VPCodeTree>',
  })

  const rawFence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, _, env] = args
    const token = tokens[idx]
    const isOnCodeTree = env.__IS_CODE_TREE__ || (token as any).__IS_CODE_TREE__
    if (!isOnCodeTree)
      return rawFence(...args)
    const info = token.info
    const title = info.match(RE_CODE_TREE_TITLE)?.[1]
    if (!title)
      return rawFence(...args)
    return rawFence(...args).replace('<div', `<div data-filepath="${md.utils.escapeHtml(title)}"`)
  }
}

function renderFileTree(nodes?: FileTreeNode[]): string {
  if (!nodes?.length)
    return ''
  return nodes.map((node) => {
    const props = {
      filename: node.filename,
      level: node.level,
      type: node.children?.length ? 'folder' : 'file',
      expanded: true,
      filepath: node.filepath,
    }
    return `<VPFileTreeNode${stringifyAttrs(props, false, ['filename', 'filepath'])}>${renderFileTree(node.children)}</VPFileTreeNode>`
  }).join('\n')
}

/**
 * Parse file paths to file tree node structure
 *
 * 将文件路径数组解析为文件树节点结构
 *
 * @param files - File path array / 文件路径数组
 * @returns File tree node array / 文件树节点数组
 */
function parseFileNodes(files: string[]): FileTreeNode[] {
  const nodes: FileTreeNode[] = []
  for (const file of files) {
    const parts = removeLeadingSlash(file).split('/')
    let node = nodes
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      let child = node.find(n => n.filename === part)
      if (!child) {
        child = {
          level: i + 1,
          filename: part,
          filepath: isFile ? file : undefined,
          children: isFile ? undefined : [],
        }
        node.push(child)
      }
      if (!isFile && child.children)
        node = child.children
    }
  }

  return nodes
}

function resolveCodeTreeDir(dir: string, env: MarkdownEnv) {
  const config = getVitepressConfig()
  if (dir[0] === '@')
    return path.join(config.srcDir, dir.slice(1))

  if (dir[0] === '/')
    return path.join(config.root, dir)

  const dirname = path.dirname(env.path)
  return path.join(dirname, dir)
}

function loadFiles(cwd: string, ignores: string[] = []): string[] {
  return globSync('**/*', {
    cwd,
    ignore: ['**/node_modules**', '**/.DS_Store', ...ignores],
    onlyFiles: true,
    dot: true,
  }).sort((a, b) => {
    const al = a.split('/').length
    const bl = b.split('/').length
    return bl - al
  })
}
