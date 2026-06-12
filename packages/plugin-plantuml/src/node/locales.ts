import type { BuiltinLocales } from 'vitepress-plugin-toolkit'
import type { PlantumlLocaleData } from './types.js'

export const builtinLocales: BuiltinLocales<PlantumlLocaleData> = [
  [
    ['en', 'en-US'],
    { chart: 'Chart', source: 'Code', fullscreen: 'Fullscreen', download: 'Download' },
  ],
  [
    ['zh', 'zh-CN'],
    { chart: '图表', source: '代码', fullscreen: '全屏', download: '下载' },
  ],
  [
    ['ja', 'ja-JP'],
    { chart: 'グラフ', source: 'コード', fullscreen: '全画面', download: 'ダウンロード' },
  ],
  [
    ['ko', 'ko-KR'],
    { chart: '차트', source: '코드', fullscreen: '전체화면', download: '다운로드' },
  ],
  [
    ['es', 'es-ES'],
    { chart: 'Gráfico', source: 'Código', fullscreen: 'Pantalla completa', download: 'Descargar' },
  ],
  [
    ['fr', 'fr-FR'],
    { chart: 'Graphique', source: 'Code', fullscreen: 'Écran plein', download: 'Télécharger' },
  ],
  [
    ['ru', 'ru-RU'],
    { chart: 'График', source: 'Код', fullscreen: 'Полный экран', download: 'Скачать' },
  ],
  [
    ['de', 'de-DE'],
    { chart: 'Diagramm', source: 'Code', fullscreen: 'Vollbild', download: 'Herunterladen' },
  ],
  [
    ['pt', 'pt-BR'],
    { chart: 'Gráfico', source: 'Código', fullscreen: 'Tela cheia', download: 'Baixar' },
  ],
]
