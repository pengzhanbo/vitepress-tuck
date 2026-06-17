import { isFunction } from '@pengzhanbo/utils'
import { defaultOptions } from 'virtual:vitepress-mermaid'
import { useData } from 'vitepress/client'
import { onMounted, ref, type Ref, useId, watch } from 'vue'
import { useMermaidOptions } from './options.js'

const DEFAULT_CHART_OPTIONS = { useMaxWidth: false }
const { themeVariables: defaultThemeVariables, ...defaultMermaidOptions } = defaultOptions

const diagrams = ['flowchart', 'sequence', 'gantt', 'journey', 'timeline', 'class', 'state', 'er', 'pie', 'quadrantChart', 'xyChart', 'requirement', 'architecture', 'mindmap', 'ishikawa', 'kanban', 'gitGraph', 'c4', 'sankey', 'packet', 'block', 'eventmodeling', 'treeView', 'radar', 'venn', 'wardley-beta']

const chartOptions = diagrams.reduce((acc, diagram) => ({ ...acc, [diagram]: DEFAULT_CHART_OPTIONS }), {})

/**
 * Composable that renders a mermaid graph into an SVG string and tracks
 * the loading state.
 *
 * 将 mermaid 图表渲染为 SVG 字符串并跟踪加载状态的组合式函数。
 *
 * The composable dynamically imports the mermaid ESM bundle on the client,
 * initializes it with the user-supplied options merged with defaults, and
 * re-renders whenever the dark-mode flag or graph source changes. The
 * `themeVariables` option may be a function that receives the current
 * dark-mode flag.
 *
 * 该组合式函数会在客户端动态导入 mermaid 的 ESM 产物，使用用户配置与默认值
 * 合并后进行初始化，并在暗色模式标志或图表源码变化时重新渲染。
 * `themeVariables` 选项可以是一个接收当前暗色模式标志的函数。
 *
 * @param graph - Ref of the URL-encoded mermaid source / URL 编码的 mermaid 源码 ref
 * @returns Object containing the loaded flag and rendered SVG string / 包含加载标志与渲染后 SVG 字符串的对象
 * @example
 * ```ts
 * const { loaded, svg } = useMermaidRender(computed(() => graph))
 * ```
 */
export function useMermaidRender(graph: Ref<string>) {
  const { themeVariables, ...mermaidOptions } = useMermaidOptions()
  const { isDark } = useData()

  const loaded = ref(false)
  const svg = ref('')
  const id = useId()

  async function renderMermaid(): Promise<void> {
    loaded.value = false
    // @ts-expect-error use esm module
    const { default: mermaid } = (await import(/* webpackChunkName: "mermaid" */ 'mermaid/dist/mermaid.esm.min.mjs')) as typeof import('mermaid')

    mermaid.initialize({
      securityLevel: 'loose',
      darkMode: isDark.value,
      theme: isDark.value ? 'dark' : 'default',
      themeVariables: {
        dark: isDark.value,
        ...defaultThemeVariables,
        ...(isFunction(themeVariables)
          ? themeVariables(isDark.value)
          : themeVariables),
      },
      ...chartOptions,
      ...defaultMermaidOptions,
      ...mermaidOptions,
      startOnLoad: false,
    })

    svg.value = (await mermaid.render(id, graph.value)).svg
    loaded.value = true
  }

  onMounted(() => {
    watch([isDark, graph], renderMermaid, { flush: 'post', immediate: true })
  })

  return { loaded, svg }
}
