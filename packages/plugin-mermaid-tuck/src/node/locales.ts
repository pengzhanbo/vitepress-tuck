import type { BuiltinLocales } from 'vitepress-plugin-toolkit'
import type { MermaidLocaleData } from './types.js'

/**
 * Built-in locale entries for the mermaid plugin.
 *
 * mermaid 插件的内置多语言条目。
 *
 * Each entry pairs a list of locale codes (short form and full form) with the
 * corresponding {@link MermaidLocaleData}. The list is consumed by the
 * toolkit's `createLocales` helper to produce the final locale map injected
 * via the virtual module.
 *
 * 每个条目将一组语言代码（短码与完整码）与对应的
 * {@link MermaidLocaleData} 配对。该列表由 toolkit 的 `createLocales`
 * 工具函数消费，生成通过虚拟模块注入的最终语言映射。
 */
export const builtinLocales: BuiltinLocales<MermaidLocaleData> = [
  [
    ['en', 'en-US'],
    { chart: 'Chart', source: 'Code', fullscreen: 'Fullscreen' },
  ],
  [
    ['zh', 'zh-CN'],
    { chart: '图表', source: '代码', fullscreen: '全屏' },
  ],
  [
    ['ja', 'ja-JP'],
    { chart: 'グラフ', source: 'コード', fullscreen: '全画面' },
  ],
  [
    ['ko', 'ko-KR'],
    { chart: '차트', source: '코드', fullscreen: '전체화면' },
  ],
  [
    ['es', 'es-ES'],
    { chart: 'Gráfico', source: 'Código', fullscreen: 'Pantalla completa' },
  ],
  [
    ['fr', 'fr-FR'],
    { chart: 'Graphique', source: 'Code', fullscreen: 'Écran plein' },
  ],
  [
    ['ru', 'ru-RU'],
    { chart: 'График', source: 'Код', fullscreen: 'Полный экран' },
  ],
  [
    ['de', 'de-DE'],
    { chart: 'Diagramm', source: 'Code', fullscreen: 'Vollbild' },
  ],
  [
    ['pt', 'pt-BR'],
    { chart: 'Gráfico', source: 'Código', fullscreen: 'Tela cheia' },
  ],
]
