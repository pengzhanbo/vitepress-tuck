import type { EmbedOptions, OpenOptions, Project } from '@stackblitz/sdk'

/**
 * Configuration options for the StackBlitz plugin.
 *
 * StackBlitz 插件配置选项。
 *
 * Extends the StackBlitz SDK's `Project`, `EmbedOptions`, and `OpenOptions`
 * types with additional fields to control the embed mode and project source.
 */
export interface StackBlitzConfig extends Project, EmbedOptions, OpenOptions {
  /**
   * Whether to embed from a GitHub repository.
   *
   * 是否从 GitHub 仓库嵌入。
   *
   * @default false
   */
  github?: boolean

  /**
   * Whether to embed a local project using a `stackblitz.config.{json,yaml,yml}` file.
   *
   * 是否嵌入本地项目（使用 `stackblitz.config.{json,yaml,yml}` 配置文件）。
   *
   * @default false
   */
  local?: boolean

  /**
   * Whether to display as a button that opens the project in a new tab,
   * instead of embedding it inline.
   *
   * 是否显示为一个按钮，点击后在新标签页中打开项目，而非内嵌展示。
   *
   * @default false
   */
  button?: boolean

  /**
   * The project source, interpreted based on the mode:
   * - When `github` is true: format `user/repo`
   * - When `local` is true: format `path/to/local`
   * - Otherwise: StackBlitz project ID
   *
   * 项目源，根据模式不同有不同含义：
   * - `github` 为 true 时：格式为 `user/repo`
   * - `local` 为 true 时：格式为 `path/to/local`
   * - 默认：StackBlitz 项目 ID
   */
  source?: string
}
