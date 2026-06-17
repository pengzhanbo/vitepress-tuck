import path from 'node:path'
import { fileURLToPath } from 'node:url'

/** Current file path, derived from `import.meta.url`. / 当前文件路径，派生自 `import.meta.url`。 */
export const __filename = fileURLToPath(import.meta.url)
/** Directory path of the plugin package root. / 插件包根目录路径。 */
export const __dirname = path.join(path.dirname(__filename), '../')

/** Output directory name for generated PlantUML images. / 生成的 PlantUML 图片输出目录名。 */
export const OUTPUT_DIR = 'plantuml'
/** URL prefix used by the dev server to serve PlantUML images. / 开发服务器提供 PlantUML 图片的 URL 前缀。 */
export const SERVER_PREFIX = '/vitepress-plantuml/'

/** Default PlantUML public server URL. / 默认的 PlantUML 公共服务器地址。 */
export const plantumlUrl = 'https://www.plantuml.com/plantuml'

/** Path to the fallback SVG used when rendering fails. / 渲染失败时使用的兜底 SVG 路径。 */
export const fallbackSVG = path.join(__dirname, '../assets', 'fallback.svg')
/** Path to the fallback PNG used when rendering fails. / 渲染失败时使用的兜底 PNG 路径。 */
export const fallbackPNG = path.join(__dirname, '../assets', 'fallback.png')
