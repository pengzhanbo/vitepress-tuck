import { isFunction } from '@pengzhanbo/utils'
import { defaultOptions } from 'virtual:vitepress-mermaid'
import { useData } from 'vitepress/client'
import { onMounted, ref, type Ref, useId, watch } from 'vue'
import { useMermaidOptions } from './options.js'

const DEFAULT_CHART_OPTIONS = { useMaxWidth: false }
const { themeVariables: defaultThemeVariables, ...defaultMermaidOptions } = defaultOptions

const diagrams = ['flowchat', 'sequence', 'gantt', 'journey', 'timeline', 'class', 'state', 'er', 'pie', 'quadrantChart', 'xyChart', 'requirement', 'architecture', 'mindmap', 'ishikawa', 'kanban', 'gitGraph', 'c4', 'sankey', 'packet', 'block', 'eventmodeling', 'treeView', 'radar', 'venn', 'wardley-beta']

const chartOptions = diagrams.reduce((acc, diagram) => ({ ...acc, [diagram]: DEFAULT_CHART_OPTIONS }), {})

export function useMermaidRender(graph: Ref<string>) {
  const { themeVariables, ...mermaidOptions } = useMermaidOptions()
  const { isDark } = useData()

  const loaded = ref(false)
  const svgCode = ref('')
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

    svgCode.value = (await mermaid.render(id, decodeURIComponent(graph.value))).svg
    loaded.value = true
  }

  onMounted(() => {
    watch([isDark, graph], renderMermaid, { flush: 'post', immediate: true })
  })

  return { loaded, svgCode }
}
