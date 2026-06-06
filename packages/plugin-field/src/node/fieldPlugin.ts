import type { PluginSimple } from 'markdown-it'
import type { MarkdownEnv } from 'vitepress'
import { isUndefined } from '@pengzhanbo/utils'
import { createContainerPlugin, createContainerSyntaxPlugin, stringifyAttrs } from 'vitepress-plugin-toolkit'
import { parseFieldContent } from './parseFieldContent.js'

export const fieldMarkdownPlugin: PluginSimple = (md) => {
  createContainerPlugin(md, 'field-group', {
    before: () => '<div class="vp-field-group">',
  })

  createContainerSyntaxPlugin(md, 'field', (tokens, idx, _, env: MarkdownEnv) => {
    const { info, content } = tokens[idx]
    const { description, type, default: defaultValue, ...props } = parseFieldContent(content, info)
    return `<VPField${stringifyAttrs(props)}${
      isUndefined(type) ? '' : ` type="${type}"`
    }${
      isUndefined(defaultValue) ? '' : ` default-value="${defaultValue}"`
    }>${description ? md.render(description, env) : ''}</VPField>`
  })
}
