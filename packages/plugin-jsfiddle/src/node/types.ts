import type { SizeOptions } from 'vitepress-plugin-toolkit'

/**
 * Data structure for JSFiddle embed information.
 *
 * JSFiddle 嵌入信息的数据结构。
 *
 * Extends `SizeOptions` to support `width`, `height`, and `ratio` fields.
 *
 * 继承 `SizeOptions`，支持 `width`、`height` 和 `ratio` 字段。
 */
export interface JSFiddleData extends SizeOptions {
  /**
   * JSFiddle source identifier in the `user/id` format.
   *
   * JSFiddle 源标识符，格式为 `user/id`。
   */
  source: string
  /**
   * Fiddle title displayed on the iframe. Defaults to `JS Fiddle`.
   *
   * 显示在 iframe 上的 Fiddle 标题，默认为 `JS Fiddle`。
   */
  title?: string
  /**
   * Embed theme. When set to `dark`, forces dark mode;
   * otherwise follows the site's color scheme.
   *
   * 嵌入主题。设置为 `dark` 时强制使用暗色模式；
   * 否则跟随站点的配色方案。
   */
  theme?: string
  /**
   * Comma-separated list of tabs to display
   * (e.g. `js,css,html,result`). Defaults to all tabs.
   *
   * 要显示的选项卡列表，以逗号分隔
   * （例如 `js,css,html,result`），默认显示全部选项卡。
   */
  tab?: string
}
