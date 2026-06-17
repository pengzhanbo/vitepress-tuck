/**
 * Fork for https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/components/src/client/utils/viewPDF.ts
 *
 * The MIT License (MIT)
 * Copyright (C) 2021 - PRESENT by Mr.Hope<mister-hope@outlook.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import type { SizeOptions } from 'vitepress-plugin-toolkit/client'
import { isHttp } from '@pengzhanbo/utils'
import { isiPad, isMobile, isSafari } from 'vitepress-plugin-toolkit/client'
import { withBase } from 'vitepress/client'

/**
 * PDF token metadata.
 *
 * PDF 令牌元数据。
 *
 * Describes the props accepted by the `VPPdf` component and the options
 * consumed by the PDF rendering helpers. It extends `SizeOptions` with
 * PDF-specific fields such as page number, toolbar visibility, and zoom.
 *
 * 描述 `VPPdf` 组件接受的 props 以及 PDF 渲染辅助函数使用的选项。
 * 它在 `SizeOptions` 的基础上扩展了页码、工具栏可见性和缩放等
 * PDF 专属字段。
 *
 * @example
 * ```ts
 * const props: PDFTokenProps = {
 *   src: '/files/sample.pdf',
 *   page: 1,
 *   noToolbar: false,
 *   zoom: 50,
 *   width: '100%',
 *   height: '600px',
 *   title: 'Sample PDF',
 * }
 * ```
 */
export interface PDFTokenProps extends SizeOptions {
  /**
   * Page number to display.
   *
   * 要显示的页码。
   */
  page?: number | string
  /**
   * Whether to hide the toolbar.
   *
   * 是否隐藏工具栏。
   */
  noToolbar?: boolean
  /**
   * Zoom level.
   *
   * 缩放级别。
   */
  zoom?: number
  /**
   * PDF source URL.
   *
   * PDF 源 URL。
   */
  src?: string
  /**
   * Title of the PDF.
   *
   * PDF 标题。
   */
  title?: string
}

/**
 * URL of the hosted PDF.js viewer used as a fallback for browsers that cannot
 * embed PDFs natively (typically mobile browsers).
 *
 * 托管的 PDF.js 查看器 URL，作为无法原生嵌入 PDF 的浏览器（通常是移动端浏览器）
 * 的回退方案。
 */
const pdfjsUrl = `https://static.pengzhanbo.cn/pdfjs/web/viewer.html`

/**
 * Build query string from PDF options.
 *
 * 从 PDF 选项构建查询字符串。
 *
 * The resulting string is prefixed with `#` so it can be appended to a PDF
 * URL or a PDF.js viewer URL to control the initial page, toolbar visibility,
 * and zoom level.
 *
 * 生成的字符串以 `#` 为前缀，可追加到 PDF URL 或 PDF.js 查看器 URL 之后，
 * 用于控制初始页码、工具栏可见性和缩放级别。
 *
 * @param options - PDF token metadata / PDF 令牌元数据
 * @returns Hash-prefixed query string (e.g. `#page=1&toolbar=1&zoom=50`),
 *   or an empty string when no params are produced / 以 `#` 为前缀的查询字符串
 *   （例如 `#page=1&toolbar=1&zoom=50`），无参数时返回空字符串
 * @example
 * ```ts
 * queryStringify({ page: 2, noToolbar: true, zoom: 100 })
 * // => '#page=2&toolbar=0&zoom=100'
 * ```
 */
function queryStringify(options: PDFTokenProps): string {
  const { page, noToolbar, zoom } = options
  const params = [
    `page=${page}`,
    `toolbar=${noToolbar ? 0 : 1}`,
    `zoom=${zoom}`,
  ]

  let queryString = params.join('&')
  if (queryString)
    queryString = `#${queryString}`

  return queryString
}

/**
 * Render PDF viewer in the specified element.
 *
 * 在指定元素中渲染 PDF 查看器。
 *
 * Resolves the URL (applying `withBase` for local paths), builds the query
 * string, then creates either an `<iframe>` or `<embed>` element depending on
 * the chosen embed type and appends it to the container.
 *
 * 解析 URL（对本地路径应用 `withBase`），构建查询字符串，然后根据所选的
 * 嵌入类型创建 `<iframe>` 或 `<embed>` 元素并将其追加到容器中。
 *
 * @param el - Container element / 容器元素
 * @param url - PDF URL / PDF URL
 * @param embedType - Embed strategy. Can be:
 *   - `'pdfjs'`: Use the hosted PDF.js viewer via an `<iframe>` / 通过 `<iframe>` 使用托管的 PDF.js 查看器
 *   - `'iframe'`: Embed the PDF directly in an `<iframe>` / 通过 `<iframe>` 直接嵌入 PDF
 *   - `'embed'`: Embed the PDF using an `<embed>` element / 使用 `<embed>` 元素嵌入 PDF
 * @param options - PDF token metadata / PDF 令牌元数据
 * @example
 * ```ts
 * const container = document.querySelector('#pdf-container')!
 * renderPDF(container, '/files/sample.pdf', 'embed', {
 *   page: 1,
 *   noToolbar: false,
 *   zoom: 50,
 *   title: 'Sample PDF',
 * })
 * ```
 */
export function renderPDF(
  el: HTMLElement,
  url: string,
  embedType: 'iframe' | 'embed' | 'pdfjs',
  options: PDFTokenProps,
): void {
  url = isHttp(url)
    ? url
    : new URL(withBase(url), typeof location !== 'undefined' ? location.href : '').toString()

  const queryString = queryStringify(options)

  const source = embedType === 'pdfjs'
    ? `${pdfjsUrl}?file=${url}${queryString}`
    : `${url}${queryString}`

  const tagName = embedType === 'pdfjs' || embedType === 'iframe'
    ? 'iframe'
    : 'embed'

  el.innerHTML = ''
  const pdf = document.createElement(tagName)

  pdf.className = 'pdf-viewer'
  pdf.style.width = '100%'
  pdf.style.height = '100%'
  ;(pdf as HTMLEmbedElement).type = 'application/pdf'
  pdf.title = options.title || 'PDF Viewer'
  pdf.src = source

  if (pdf instanceof HTMLIFrameElement)
    pdf.allow = 'fullscreen'

  el.appendChild(pdf)
}

/**
 * Composable for PDF viewer functionality.
 *
 * PDF 查看器功能的组合式函数。
 *
 * This function detects browser capabilities and chooses the appropriate
 * embedding method for PDF display (PDF.js, iframe, or embed).
 *
 * 该函数检测浏览器能力并选择适当的嵌入方法来显示 PDF（PDF.js、iframe 或 embed）。
 *
 * Embedding strategy:
 * - Mobile devices (including iPad) use the PDF.js viewer as a fallback,
 *   because mobile browsers generally do not support native PDF embeds.
 * - Safari desktop uses an `<iframe>` to work around its rendering quirks.
 * - Other desktop browsers use an `<embed>` element when PDF support is
 *   detected, otherwise fall back to the PDF.js viewer.
 *
 * 嵌入策略：
 * - 移动设备（包括 iPad）使用 PDF.js 查看器作为回退方案，因为移动端浏览器
 *   通常不支持原生 PDF 嵌入。
 * - Safari 桌面端使用 `<iframe>` 以规避其渲染问题。
 * - 其他桌面端浏览器在检测到 PDF 支持时使用 `<embed>` 元素，否则回退到
 *   PDF.js 查看器。
 *
 * @param el - Container element / 容器元素
 * @param url - PDF URL / PDF URL
 * @param options - PDF token metadata / PDF 令牌元数据
 * @example
 * ```ts
 * import { onMounted, useTemplateRef } from 'vue'
 * import { usePDF } from 'vitepress-plugin-pdf/client'
 *
 * const el = useTemplateRef<HTMLElement>('el')
 * onMounted(() => {
 *   if (el.value) {
 *     usePDF(el.value, '/files/sample.pdf', {
 *       page: 1,
 *       noToolbar: false,
 *       zoom: 50,
 *     })
 *   }
 * })
 * ```
 */
export function usePDF(
  el: HTMLElement,
  url: string,
  options: PDFTokenProps,
): void {
  if (typeof window === 'undefined' || !window?.navigator?.userAgent)
    return

  const { navigator } = window
  const { userAgent } = navigator

  const isModernBrowser = typeof window.Promise === 'function'

  // Quick test for mobile devices.
  const isMobileDevice = isiPad() || isMobile()

  // Safari desktop requires special handling
  const isSafariDesktop = !isMobileDevice && isSafari()

  const isFirefoxWithPDFJS
    = !isMobileDevice
      && /firefox/iu.test(userAgent)
      && userAgent.split('rv:').length > 1
      ? Number.parseInt(userAgent.split('rv:')[1]!.split('.')[0]!, 10) > 18
      : false

  // Determines whether PDF support is available
  const supportsPDFs
    // As of Sept 2020 no mobile browsers properly support PDF embeds
    = !isMobileDevice
    // We're moving into the age of MIME-less browsers. They mostly all support PDF rendering without plugins.
      && (isModernBrowser
      // Modern versions of Firefox come bundled with PDFJS
        || isFirefoxWithPDFJS)

  if (!url)
    return

  if (supportsPDFs || !isMobileDevice) {
    const embedType = isSafariDesktop ? 'iframe' : 'embed'
    return renderPDF(el, url, embedType, options)
  }

  return renderPDF(el, url, 'pdfjs', options)
}
