import { definePlugin } from 'vitepress-tuck'
import { qrcodeMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for embedding QR codes in markdown content.
 *
 * VitePress 插件，用于在 markdown 内容中嵌入二维码。
 *
 * Registers the markdown-it QR code syntax and configures Vite to pre-bundle
 * the `qrcode` dependency. The client-side enhancement is wired up through
 * the `enhanceAppWithQrcode` function exported from the client entry.
 *
 * 注册 markdown-it 二维码语法，并配置 Vite 预构建 `qrcode` 依赖。
 * 客户端增强通过客户端入口导出的 `enhanceAppWithQrcode` 函数完成。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { definePlugin } from 'vitepress-tuck'
 * import qrcode from 'vitepress-plugin-qrcode'
 *
 * export default defineConfig({
 *   plugins: [qrcode()],
 * })
 * ```
 */
export const qrcode = definePlugin(() => ({
  name: 'vitepress-plugin-qrcode',
  client: {
    enhance: 'enhanceAppWithQrcode',
  },
  markdown: {
    config(md) {
      md.use(qrcodeMarkdownPlugin)
    },
  },
  vite: {
    optimizeDeps: {
      include: ['qrcode'],
    },
  },
}))
