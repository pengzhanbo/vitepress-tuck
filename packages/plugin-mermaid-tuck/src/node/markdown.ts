import type { PluginSimple } from 'markdown-it'

/**
 * markdown-it plugin that transforms mermaid fenced code blocks into
 * `<VPMermaid>` Vue components.
 *
 * markdown-it 插件，将 mermaid 围栏代码块转换为 `<VPMermaid>` Vue 组件。
 *
 * The plugin wraps the default fence renderer. When the code block language
 * is `mermaid`, the original rendered code is preserved as the `source` slot
 * and a `<VPMermaid>` component is emitted with the encoded graph content.
 * Non-mermaid code blocks fall through to the default renderer unchanged.
 *
 * 该插件包装默认的围栏渲染器。当代码块语言为 `mermaid` 时，原始渲染结果
 * 会作为 `source` 插槽保留，同时输出一个携带编码后图表内容的 `<VPMermaid>` 组件。
 * 非 mermaid 代码块则原样交给默认渲染器处理。
 *
 * @param md - The markdown-it instance to extend / 要扩展的 markdown-it 实例
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { mermaidMarkdownPlugin } from 'vitepress-plugin-mermaid-tuck/node'
 * const md = new MarkdownIt()
 * md.use(mermaidMarkdownPlugin)
 * ```
 */
export const mermaidMarkdownPlugin: PluginSimple = (md) => {
  const defaultFence = md.renderer.rules.fence!

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    const { content, info } = token
    const code = defaultFence(...args)

    if (!info.trim().startsWith('mermaid'))
      return code

    return `<VPMermaid id="Mermaid-${idx}" graph="${encodeURIComponent(content)}"><template #source>${code}</template></VPMermaid>`
  }
}
