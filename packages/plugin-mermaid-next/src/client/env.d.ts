declare module 'virtual:vitepress-mermaid' {
  import type { MermaidLocaleData, MermaidOptions } from './types.js'

  export const defaultOptions: MermaidOptions
  export const locales: Record<string, MermaidLocaleData>
}
