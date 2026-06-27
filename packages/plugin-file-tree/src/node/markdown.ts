import type { PluginSimple } from 'markdown-it'
import type { FileTreeAttrs, FileTreeNode } from './types.js'
import { createContainerSyntaxPlugin, stringifyAttrs } from 'vitepress-plugin-toolkit'
import { fileTreeToCMDText } from './fileTreeToCMDText.js'
import { parseContentWithContainer } from './parseContentWithContainer.js'
import { parseContentWithFence } from './parseContentWithFence.js'

/**
 * markdown-it plugin for rendering file tree diagrams.
 *
 * 用于渲染文件树图的 markdown-it 插件。
 *
 * Supports two syntaxes:
 * - Container syntax: `::: file-tree` blocks with `- filename` indented entries
 * - Fence syntax: ` ```tree ` or ` ```file-tree ` code blocks with `tree` command output
 *
 * The plugin converts the parsed tree structure into nested `<VPFileTreeNode>`
 * components wrapped by a `<VPFileTree>` container, with a URL-encoded
 * plain-text representation for the copy button.
 *
 * 支持两种语法：
 * - 容器语法：`::: file-tree` 块，其中包含以 `- 文件名` 缩进的条目
 * - 围栏语法：` ```tree ` 或 ` ```file-tree ` 代码块，其中包含 `tree` 命令的输出
 *
 * 该插件将解析后的树结构转换为由 `<VPFileTree>` 容器包裹的嵌套 `<VPFileTreeNode>` 组件，并附带一个 URL 编码的纯文本表示，用于复制按钮。
 *
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
   * Recursively render file tree nodes into nested `<VPFileTreeNode>` markup.
   *
   * 递归地将文件树节点渲染为嵌套的 `<VPFileTreeNode>` 标记。
   *
   * Empty folders automatically receive an ellipsis placeholder child so the
   * folder icon is displayed correctly. Inline comments are rendered through
   * `md.renderInline` and passed via the `#comment` slot.
   *
   * 空文件夹会自动获得一个省略号占位符子项，以便正确显示文件夹图标。
   * 内联注释通过 `md.renderInline` 渲染，并通过 `#comment` 插槽传递。
   *
   * @param nodes - File tree nodes to render / 要渲染的文件树节点数组
   * @param meta - Container-level attributes / 容器级属性
   * @returns Rendered HTML string of nested nodes / 嵌套节点的 HTML 字符串
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
        ? `<template #comment>${md.renderInline(comment)}</template>`
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
