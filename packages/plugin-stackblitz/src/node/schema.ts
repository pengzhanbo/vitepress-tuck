import { z } from 'zod'

/**
 * Zod schema for the StackBlitz project definition.
 *
 * Validates the core project configuration: title, description, template,
 * files, dependencies, and build settings.
 *
 * StackBlitz 项目定义的 Zod 校验模式，包含标题、描述、模板、文件、依赖和构建设置。
 */
export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  template: z.literal(['angular-cli', 'create-react-app', 'html', 'javascript', 'typescript', 'polymer', 'vue', 'node']),
  files: z.record(z.string(), z.string()).optional(),
  dependencies: z.record(z.string(), z.string()).optional(),
  settings: z.object({
    trigger: z.literal(['auto', 'save', 'keystroke']).optional(),
    action: z.literal(['hmr', 'refresh']).optional(),
    clearConsole: z.boolean().optional(),
  }).optional(),
})

/**
 * Zod schema for the StackBlitz open options.
 *
 * Controls the appearance and behavior when opening a project in StackBlitz,
 * such as theme, sidebar, terminal height, and which file to open.
 *
 * StackBlitz 打开选项的 Zod 校验模式，控制打开项目时的主题、侧边栏、终端高度和默认打开文件等行为。
 */
export const openSchema = z.object({
  clickToLoad: z.boolean().optional(),
  devToolsHeight: z.number().min(0).max(100).optional(),
  forceEmbedLayout: z.boolean().optional(),
  hideDevTools: z.boolean().optional(),
  hideExplorer: z.boolean().optional(),
  newWindow: z.boolean().optional(),
  openFile: z.union([z.string(), z.array(z.string())]).optional(),
  origin: z.string().optional(),
  showSidebar: z.boolean().optional(),
  terminalHeight: z.number().min(0).max(100).optional(),
  theme: z.literal(['dark', 'light', 'default']).optional(),
  view: z.literal(['default', 'preview', 'editor']).optional(),
})

/**
 * Zod schema for the StackBlitz embed options.
 *
 * Extends `openSchema` with additional `width` and `height` fields
 * for controlling the embedded iframe dimensions.
 *
 * StackBlitz 嵌入选项的 Zod 校验模式，在 `openSchema` 基础上新增 `width` 和 `height` 用于控制内嵌 iframe 尺寸。
 */
export const embedSchema = openSchema.extend({
  width: z.number().min(0).optional(),
  height: z.number().min(0).optional(),
})

/**
 * Full configuration schema that combines both project definition and embed options.
 *
 * 完整的配置校验模式，合并了项目定义和嵌入选项。
 */
export const schema = projectSchema.extend(embedSchema.shape)
