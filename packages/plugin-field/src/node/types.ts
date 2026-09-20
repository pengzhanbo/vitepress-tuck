export interface FieldLocaleData extends Record<string, unknown> {
  required?: string
  optional?: string
  deprecated?: string
  experimental?: string
  default?: string
  enum?: string
  format?: string
  unit?: string
  constraint?: string
  since?: string
}

export interface FieldPluginOptions {
  locales?: Record<string, FieldLocaleData>
}
