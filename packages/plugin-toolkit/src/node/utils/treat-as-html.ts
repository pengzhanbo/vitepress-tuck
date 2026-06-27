import process from 'node:process'

/**
 * Set of file extensions that should be treated as static assets rather than HTML.
 *
 * 应作为静态资源而非 HTML 处理的文件扩展名集合。
 *
 * Populated lazily on first use, combining a built-in list of known extensions
 * with any extra extensions provided via the `VITE_EXTRA_EXTENSIONS` environment
 * variable.
 *
 * 在首次使用时延迟填充，将内置已知扩展名列表与通过 `VITE_EXTRA_EXTENSIONS`
 * 环境变量提供的额外扩展名合并。
 */
const KNOWN_EXTENSIONS = new Set<string>()

/**
 * Determine whether a file should be treated as an HTML route based on its extension.
 *
 * 根据文件扩展名判断该文件是否应作为 HTML 路由处理。
 *
 * Returns `true` when the file has no extension or its extension is not in the
 * known extensions list (meaning it should be served as an HTML page). Returns
 * `false` for known static asset extensions.
 *
 * 当文件没有扩展名或其扩展名不在已知扩展名列表中时返回 `true`（表示应作为
 * HTML 页面提供）。对于已知的静态资源扩展名返回 `false`。
 *
 * @param filename - The filename to check / 要检查的文件名
 * @returns `true` if the file should be treated as HTML, `false` otherwise
 *   / 如果文件应作为 HTML 处理则返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * treatAsHtml('about') // true (no extension)
 * treatAsHtml('logo.png') // false (known image extension)
 * treatAsHtml('custom.xyz') // true (unknown extension)
 * ```
 */
export function treatAsHtml(filename: string): boolean {
  if (KNOWN_EXTENSIONS.size === 0) {
    const extraExts
      = (typeof process === 'object' && process.env?.VITE_EXTRA_EXTENSIONS)
        || (import.meta as any).env?.VITE_EXTRA_EXTENSIONS
        || ''

    // md, html? are intentionally omitted
    ;(
      `3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,`
      + `doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,`
      + `man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,`
      + `opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,`
      + `tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,`
      + `yaml,yml,zip${
        extraExts && typeof extraExts === 'string' ? `,${extraExts}` : ''}`
    )
      .split(',')
      .forEach(ext => KNOWN_EXTENSIONS.add(ext))
  }

  const ext = filename.split('.').pop()

  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase())
}
