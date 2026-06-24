import type { PageData } from 'vitepress/client'
import type { MaybeRef } from 'vue'
import type { WatermarkOptions } from 'watermark-js-plus'
import { inBrowser, useData, withBase } from 'vitepress/client'
import { computed, toValue, watch } from 'vue'
import { Watermark } from 'watermark-js-plus/es'

type FrontMatterWatermark = boolean | string | Partial<WatermarkOptions>

type SetupWatermarkOptions = Partial<WatermarkOptions> & {
  enabled?: boolean | ((pageData: PageData) => boolean)
}

export function setupWatermark(options?: MaybeRef<SetupWatermarkOptions>) {
  if (!inBrowser)
    return

  const { frontmatter, site, page } = useData()
  const pageOptions = computed<FrontMatterWatermark>(() => frontmatter.value.watermark)

  const defaultEnabled = computed(() => {
    const enabled = toValue(options)?.enabled
    return typeof enabled === 'function' ? enabled(page.value) : enabled !== false
  })

  const watermark = new Watermark()

  const getOptions = () => {
    const { enabled, ...clientOptions } = toValue(options) || {}

    const locale = typeof site.value.localeIndex !== 'undefined' ? site.value.locales[site.value.localeIndex] : undefined

    const mergedOptions: Partial<WatermarkOptions> = {
      content: locale?.title || site.value.title,
      fontColor: '#76747f',
      globalAlpha: clientOptions?.mode === 'blind' ? 0.005 : 0.165,
      ...clientOptions,
    }
    const opts = pageOptions.value ?? defaultEnabled.value
    if (typeof opts === 'boolean') {
      return opts ? mergedOptions : false
    }
    if (typeof opts === 'string') {
      mergedOptions.content = opts
      return mergedOptions
    }
    return { ...mergedOptions, ...opts }
  }

  watch(
    [() => toValue(options), pageOptions, defaultEnabled],
    () => {
      const opts = getOptions()
      if (opts === false) {
        watermark.destroy()
      }
      else {
        if (opts.image?.startsWith('/'))
          opts.image = withBase(opts.image)
        watermark.changeOptions(opts)
      }
    },
    { immediate: true },
  )
}
