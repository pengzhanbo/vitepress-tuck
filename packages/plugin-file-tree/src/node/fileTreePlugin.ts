import type { PluginSimple } from 'markdown-it'
import type { FileTreeAttrs, FileTreeNode } from './types.js'
import { createContainerSyntaxPlugin, stringifyAttrs } from 'vitepress-plugin-toolkit'
import { fileTreeToCMDText, parseContentWithContainer } from './container.js'
import { parseContentWithFence } from './fence.js'

/**
 * @example
 * ```ts
 * import { fileTreeMarkdownPlugin } from 'vitepress-plugin-file-tree'
 * import { defineConfig } from 'vitepress'
 * export default defineConfig({
 *   markdown: {
 *     config: (md) => {
 *       md.use(fileTreeMarkdownPlugin)
 *     },
 *   },
 * })
 * ```
 */
export const fileTreeMarkdownPlugin: PluginSimple = (md) => {
  /**
   * Recursively render file tree nodes
   *
   * 递归渲染文件树节点
   */
  const renderFileTree = (nodes: FileTreeNode[], meta: FileTreeAttrs): string =>
    nodes.map((node) => {
      const { level, children, filename, comment, focus, expanded, type, diff } = node

      // Add ellipsis for folder without children
      if (children.length === 0 && type === 'folder') {
        children.push({ level: level + 1, children: [], filename: '…', type: 'file' } as unknown as FileTreeNode)
      }

      const nodeType = children.length > 0 ? 'folder' : type
      const renderedComment = comment
        ? `<template #comment>${md.renderInline(comment.replaceAll('#', '\#'))}</template>`
        : ''
      const props: Omit<FileTreeNode, 'children'> = {
        expanded: nodeType === 'folder' ? expanded : false,
        focus,
        type: nodeType,
        diff,
        filename,
        level,
      }
      return `<VPFileTreeNode${stringifyAttrs(props, false, ['filename'])}>
${renderedComment}${children.length > 0 ? renderFileTree(children, meta) : ''}
</VPFileTreeNode>`
    }).join('\n')

  createContainerSyntaxPlugin(md, 'file-tree', (tokens, index) => {
    const token = tokens[index]!
    const nodes = parseContentWithContainer(token.content)
    const meta = token.meta as FileTreeAttrs
    const text = encodeURIComponent(fileTreeToCMDText(nodes).trim())
    const props = stringifyAttrs({ title: meta.title, text })
    return `<VPFileTree${props}>${renderFileTree(nodes, meta)}</VPFileTree>`
  })

  const rawFence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, index] = args
    const token = tokens[index]!
    const info = token.info.trim()

    if (!info.startsWith('file-tree') && !info.startsWith('tree')) {
      return rawFence(...args)
    }

    const text = token.content.trim()
    const nodes = parseContentWithFence(text)
    return `<VPFileTree text="${encodeURIComponent(text)}">${renderFileTree(nodes, {})}</VPFileTree>`
  }
}
