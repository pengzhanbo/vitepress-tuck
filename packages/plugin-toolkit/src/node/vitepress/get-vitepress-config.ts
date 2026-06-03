import type { SiteConfig } from 'vitepress'

export function getVitepressConfig(): SiteConfig {
  const config = (globalThis as any).VITEPRESS_CONFIG
  if (!config)
    throw new Error('VITEPRESS_CONFIG is not initialized')
  return config
}
