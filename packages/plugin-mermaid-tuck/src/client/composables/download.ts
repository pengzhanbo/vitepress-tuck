import type { Ref, TemplateRef } from 'vue'

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

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = url
    img.crossOrigin = 'anonymous'
  })
}
