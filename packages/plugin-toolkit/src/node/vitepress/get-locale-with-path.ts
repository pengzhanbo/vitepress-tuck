import { objectKeys } from '@pengzhanbo/utils'
import { getVitepressConfig } from './get-vitepress-config.js'

export function getLocaleWithPath(path: string): { lang: string, locale: string } {
  const config = getVitepressConfig()
  const locales = config.userConfig?.locales || {}
  const keys = objectKeys(locales)
  const key = keys.find(locale => path.startsWith(locale)) || keys[0] || ''
  if (!key || !locales[key])
    return { lang: '', locale: '' }
  return {
    lang: locales[key]!.lang || key,
    locale: key === 'root' ? '' : key,
  }
}
