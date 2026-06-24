import type { CodeTreePluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { codeTreeMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin that renders code tree structures in markdown.
 *
 * VitePress 插件，在 markdown 中渲染代码树结构。
 *
 * Wires the `codeTreeMarkdownPlugin` markdown-it rule into VitePress and
 * registers the client-side `VPCodeTree` Vue component via
 * `virtual:enhance-app`. The plugin also depends on `vitepress-plugin-file-tree`
 * for the file tree sidebar components (`VPFileTree` / `VPFileTreeNode`), which
 * are registered automatically by `enhanceAppWithCodeTree`.
 *
 * 将 `codeTreeMarkdownPlugin` markdown-it 规则接入 VitePress，并通过
 * `virtual:enhance-app` 注册客户端 `VPCodeTree` Vue 组件。该插件还依赖于
 * `vitepress-plugin-file-tree` 提供的文件树侧边栏组件
 * （`VPFileTree` / `VPFileTreeNode`），这些组件由 `enhanceAppWithCodeTree`
 * 自动注册。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import codeTree from 'vitepress-plugin-code-tree'
 * export default defineConfig({
 *   plugins: [codeTree()],
 * })
 * ```
 */
export const codeTree = definePlugin((options?: CodeTreePluginOptions) => ({
  name: 'vitepress-plugin-code-tree',
  componentResolver: {
    type: 'component',
    resolve: (name) => {
      if (name === 'VPCodeTree') {
        return { name, from: 'vitepress-plugin-code-tree/client' }
      }
      if (name === 'VPFileTreeNode') {
        return { name, from: 'vitepress-plugin-file-tree/client' }
      }
    },
  },
  markdown: {
    config(md) {
      md.use(codeTreeMarkdownPlugin, options)
    },
  },
}))
