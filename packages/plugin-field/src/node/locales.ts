import type { BuiltinLocales } from 'vitepress-plugin-toolkit'
import type { FieldLocaleData } from './types.js'

export const locales: BuiltinLocales<FieldLocaleData> = [
  [
    ['en', 'en-US'],
    { required: 'Required', optional: 'Optional', deprecated: 'Deprecated', experimental: 'Experimental', default: 'Default', enum: 'Allowed values', format: 'Format', unit: 'Unit', constraint: 'Constraint', since: 'Since' },
  ],
  [
    ['zh', 'zh-CN'],
    { required: '必填', optional: '可选', deprecated: '已弃用', experimental: '实验性', default: '默认值', enum: '可选值', format: '格式', unit: '单位', constraint: '约束', since: '自' },
  ],
  [
    ['zh-TW'],
    { required: '必填', optional: '可選', deprecated: '已廢用', experimental: '實驗性', default: '默認值', enum: '可選值', format: '格式', unit: '單位', constraint: '約束', since: '自' },
  ],
  [
    ['de', 'de-DE'],
    { required: 'Erforderlich', optional: 'Optional', deprecated: 'Veraltet', experimental: 'Experimentell', default: 'Standardwert', enum: 'Mögliche Werte', format: 'Format', unit: 'Einheit', constraint: 'Einschränkung', since: 'Seit' },
  ],
  [
    ['fr', 'fr-FR'],
    { required: 'Requis', optional: 'Facultatif', deprecated: 'Obsolète', experimental: 'Expérimental', default: 'Par défaut', enum: 'Valeurs possibles', format: 'Format', unit: 'Unité', constraint: 'Contrainte', since: 'Depuis' },
  ],
  [
    ['ja', 'ja-JP'],
    { required: '必須', optional: '任意', deprecated: '非推奨', experimental: '実験的', default: 'デフォルト値', enum: '選択肢', format: '形式', unit: '単位', constraint: '制約', since: '導入バージョン' },
  ],
  [
    ['ko', 'ko-KR'],
    { required: '필수', optional: '선택', deprecated: '폐기 예정', experimental: '실험적', default: '기본값', enum: '선택값', format: '형식', unit: '단위', constraint: '제약', since: '버전' },
  ],
  [
    ['ru', 'ru-RU'],
    { required: 'Обязательно', optional: 'Необязательно', deprecated: 'Устарело', experimental: 'Экспериментально', default: 'По умолчанию', enum: 'Допустимые значения', format: 'Формат', unit: 'Единица измерения', constraint: 'Ограничение', since: 'С версии' },
  ],
]
