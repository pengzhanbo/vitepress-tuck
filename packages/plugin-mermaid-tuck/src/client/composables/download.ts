import type { Ref, TemplateRef } from 'vue'

/**
 * Composable that downloads the rendered mermaid SVG as either an SVG or
 * PNG file.
 *
 * 用于将渲染后的 mermaid SVG 以 SVG 或 PNG 文件形式下载的组合式函数。
 *
 * The composable clones the live SVG element, strips potentially dangerous
 * nodes and inline event handlers, serializes it to a Blob URL, and triggers
 * a browser download. For PNG output the SVG is rasterized onto a canvas
 * sized to the SVG's `viewBox` (falling back to the rendered bounding box).
 *
 * 该组合式函数会克隆当前 SVG 元素，移除潜在危险节点与内联事件处理器，
 * 将其序列化为 Blob URL 并触发浏览器下载。当输出为 PNG 时，会将 SVG
 * 绘制到按 SVG `viewBox` 尺寸（缺失时回退到渲染后的包围盒）创建的画布上。
 *
 * @param container - Template ref holding the SVG host element / 持有 SVG 宿主元素的模板引用
 * @param loaded - Ref indicating whether the SVG has been rendered / 表示 SVG 是否已渲染完成的 ref
 * @returns Download function accepting `'svg'` or `'png'` / 接受 `'svg'` 或 `'png'` 的下载函数
 * @example
 * ```ts
 * const download = useDownload(svgEl, loaded)
 * download('png')
 * ```
 */
export function useDownload(
  container: TemplateRef<HTMLDivElement>,
  loaded: Ref<boolean>,
) {
  async function download(type: 'svg' | 'png') {
    if (!loaded.value || !container.value)
      return
    const svgEl = container.value.querySelector('svg') as SVGElement
    if (!svgEl)
      return

    const a = document.createElement('a')
    const { url, svg } = genURL(svgEl)
    if (type === 'png') {
      const img = await loadImage(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`)
      const canvas = document.createElement('canvas')
      const box = svgEl.getBoundingClientRect()
      const base = (svgEl as any).viewBox?.baseVal as SVGRect
      canvas.width = base?.width || box.width
      canvas.height = base?.height || box.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      const pngUrl = canvas.toDataURL('image/png')
      a.href = pngUrl
      a.download = 'mermaid.png'
    }
    else {
      a.href = url
      a.download = 'mermaid.svg'
    }
    a.click()
    URL.revokeObjectURL(url)
  }

  return download
}

/**
 * Clones an SVG element, sanitizes it, and produces a Blob URL plus the
 * serialized SVG string.
 *
 * 克隆 SVG 元素并进行清理，生成 Blob URL 与序列化后的 SVG 字符串。
 *
 * @param el - The source SVG element / 源 SVG 元素
 * @returns Object containing the Blob URL and serialized SVG / 包含 Blob URL 与序列化 SVG 的对象
 */
function genURL(el: SVGElement) {
  const cloned = el.cloneNode(true) as SVGElement
  cleanSvg(cloned)
  const svg = new XMLSerializer().serializeToString(cloned)
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
  return {
    url: URL.createObjectURL(blob),
    svg,
  }
}

/**
 * Removes script-like elements and inline `on*` event handlers from an SVG
 * to mitigate XSS risks when serializing or rasterizing.
 *
 * 移除 SVG 中的脚本类元素与内联 `on*` 事件处理器，以降低序列化或
 * 栅格化时的 XSS 风险。
 *
 * @param el - The SVG element to sanitize / 待清理的 SVG 元素
 */
function cleanSvg(el: SVGElement): void {
  el.querySelectorAll('script, iframe, object, embed, link[rel="stylesheet"]')
    .forEach(node => node.remove())
  el.querySelectorAll('*').forEach((node) => {
    for (const attr of node.attributes) {
      if (attr.name.startsWith('on') && attr.name.length > 2) {
        node.removeAttribute(attr.name)
      }
    }
  })
}

/**
 * Loads an image from a URL and resolves once it has finished decoding.
 *
 * 从 URL 加载图片，并在解码完成后 resolve。
 *
 * @param url - The image source URL / 图片源 URL
 * @returns Promise resolving with the loaded HTMLImageElement / resolve 为已加载 HTMLImageElement 的 Promise
 */
function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = url
    img.crossOrigin = 'anonymous'
  })
}
