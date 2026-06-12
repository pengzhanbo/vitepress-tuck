import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.join(path.dirname(__filename), '../')

export const OUTPUT_DIR = 'plantuml'
export const SERVER_PREFIX = '/vitepress-plantuml/'

export const plantumlUrl = 'https://www.plantuml.com/plantuml'

export const fallbackSVG = path.join(__dirname, '../assets', 'fallback.svg')
export const fallbackPNG = path.join(__dirname, '../assets', 'fallback.png')
