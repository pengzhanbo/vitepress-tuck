import { definePlugin } from 'vitepress-tuck'
import { stepsMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for rendering ordered/unordered lists as numbered steps
 * with badges and connecting lines.
 *
 * VitePress 插件，将有序/无序列表渲染为带徽标和连接线的编号步骤。
 *
 * The plugin registers the `::: steps` markdown container via
 * `stepsMarkdownPlugin` and injects the required client-side stylesheet
 * (`vitepress-plugin-steps/style.css`) through the `client.imports` hook.
 *
 * 该插件通过 `stepsMarkdownPlugin` 注册 `::: steps` markdown 容器，
 * 并通过 `client.imports` 钩子注入所需的客户端样式表
 * （`vitepress-plugin-steps/style.css`）。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import steps from 'vitepress-plugin-steps'
 * export default defineConfig({
 *   plugins: [steps()],
 * })
 * ```
 */
export const steps = definePlugin(() => ({
  name: 'vitepress-plugin-steps',
  client: {
    imports: [`import 'vitepress-plugin-steps/style.css'`],
  },
  markdown: {
    config: (md) => {
      md.use(stepsMarkdownPlugin)
    },
  },
}))
