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
 * PDF token metadata
 *
 * PDF 令牌元数据
 */
export interface PDFTokenProps extends SizeOptions {
  /**
   * Page number to display
   *
   * 要显示的页码
   */
  page?: number | string
  /**
   * Whether to hide toolbar
   *
   * 是否隐藏工具栏
   */
  noToolbar?: boolean
  /**
   * Zoom level
   *
   * 缩放级别
   */
  zoom?: number
  /**
   * PDF source URL
   *
   * PDF 源 URL
   */
  src?: string
  /**
   * Title of the PDF
   *
   * PDF 标题
   */
  title?: string
}

const pdfjsUrl = `https://static.pengzhanbo.cn/pdfjs/web/viewer.html`

/**
 * Build query string from PDF options.
 *
 * 从 PDF 选项构建查询字符串。
 *
 * @param options - PDF token metadata / PDF 令牌元数据
 * @returns Query string / 查询字符串
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
 * @param el - Container element / 容器元素
 * @param url - PDF URL / PDF URL
 * @param embedType - Embed type: 'pdfjs', 'iframe', or 'embed' / 嵌入类型
 * @param options - PDF token metadata / PDF 令牌元数据
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
 * @param el - Container element / 容器元素
 * @param url - PDF URL / PDF URL
 * @param options - PDF token metadata / PDF 令牌元数据
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
