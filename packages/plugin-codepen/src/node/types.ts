import type { SizeOptions } from 'vitepress-plugin-toolkit'

/**
 * Data structure for CodePen embed information, parsed from the `@codepen`
 * markdown syntax and used to render the `VPCodepen` component.
 *
 * CodePen 嵌入信息的数据结构，从 `@codepen` markdown 语法解析而来，
 * 用于渲染 `VPCodepen` 组件。
 */
export interface CodepenData extends SizeOptions {
  /**
   * Pen title displayed as the iframe `title` attribute.
   *
   * Pen 标题，作为 iframe 的 `title` 属性显示。
   */
  title?: string
  /**
   * CodePen user name owning the Pen.
   *
   * 拥有该 Pen 的 CodePen 用户名。
   */
  user?: string
  /**
   * Pen slug identifier used in the CodePen URL.
   *
   * Pen 标识，用于 CodePen URL 中。
   */
  slash?: string
  /**
   * Comma-separated list of tabs to display (for example `css,result`).
   *
   * 要显示的选项卡列表，以逗号分隔（例如 `css,result`）。
   */
  tab?: string
  /**
   * Embed theme, either `light` or `dark`.
   *
   * 嵌入主题，可选 `light` 或 `dark`。
   */
  theme?: string
  /**
   * Whether to render the preview embed view.
   *
   * 是否渲染预览嵌入视图。
   */
  preview?: boolean
  /**
   * Whether the embedded Pen is editable by the viewer.
   *
   * 嵌入的 Pen 是否可被查看者编辑。
   */
  editable?: boolean
}
