import type { PluginSimple } from 'markdown-it'

export const mermaidMarkdownPlugin: PluginSimple = (md) => {
  const defaultFence = md.renderer.rules.fence!

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    const { content, info } = token
    const code = defaultFence(...args)

    if (!info.trim().startsWith('mermaid'))
      return code

    return `<VPMermaid id="Mermaid-${idx}" graph="${encodeURIComponent(content)}"><template #source>${code}</template></VPmermaid>`
  }
}
