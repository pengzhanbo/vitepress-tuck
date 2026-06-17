import type { MarkdownEnv } from 'vitepress'
import { slash } from '@pengzhanbo/utils'
import { isExternal } from '../../shared/index.js'
import { slugify, treatAsHtml } from '../utils/index.js'
import { getVitepressConfig } from './get-vitepress-config.js'

/**
 * Regular expression matching `index.md` paths with an optional hash.
 *
 * 匹配带可选哈希的 `index.md` 路径的正则表达式。
 */
const indexRE = /(^|.*\/)index.md(.*)$/i

/**
 * Resolve a markdown link to its final URL form based on VitePress routing rules.
 *
 * 根据 VitePress 路由规则将 markdown 链接解析为最终 URL 形式。
 *
 * External links are returned as-is. Absolute paths are prefixed with the
 * site base. Hash links are slugified. Relative links to markdown files are
 * transformed according to the `cleanUrls` setting (`.md` becomes `''` or
 * `.html`), and `index.md` is collapsed to its directory.
 *
 * 外部链接原样返回。绝对路径添加站点 base 前缀。哈希链接进行 slug 化。
 * 指向 markdown 文件的相对链接根据 `cleanUrls` 设置转换（`.md` 变为 `''`
 * 或 `.html`），`index.md` 折叠为其所在目录。
 *
 * @param url - The raw URL from markdown content / markdown 内容中的原始 URL
 * @param env - The markdown environment with routing context / 带路由上下文的 markdown 环境
 * @returns The resolved URL / 解析后的 URL
 * @example
 * ```ts
 * resolveRouteLink('./guide.md', { cleanUrls: false } as MarkdownEnv)
 * // './guide.html'
 * resolveRouteLink('/about/', {} as MarkdownEnv)
 * // '/base/about/'
 * ```
 */
export function resolveRouteLink(url: string, env: MarkdownEnv): string {
  if (isExternal(url))
    return url

  const config = getVitepressConfig()

  if (url.startsWith('/'))
    return slash(config.site.base + url)

  if (url.startsWith('#'))
    return decodeURI(normalizeHash(url))

  const { pathname, protocol } = new URL(url, 'http://a.com')

  if (!url.startsWith('#') && protocol.startsWith('http') && treatAsHtml(pathname)) {
    const indexMatch = url.match(indexRE)
    if (indexMatch) {
      const [, path, hash] = indexMatch
      url = path + normalizeHash(hash)
    }
    else {
      let cleanUrl = url.replace(/[?#].*$/, '')
      // transform foo.md -> foo[.html]
      if (cleanUrl.endsWith('.md')) {
        cleanUrl = cleanUrl.replace(/\.md$/, env.cleanUrls ? '' : '.html')
      }
      // transform ./foo -> ./foo[.html]
      if (
        !env.cleanUrls
        && !cleanUrl.endsWith('.html')
        && !cleanUrl.endsWith('/')
      ) {
        cleanUrl += '.html'
      }
      const parsed = new URL(url, 'http://a.com')
      url = cleanUrl + parsed.search + normalizeHash(parsed.hash)
    }

    // ensure leading . for relative paths
    if (!url.startsWith('/') && !url.startsWith('./')) {
      url = `./${url}`
    }
  }

  return url
}

/**
 * Normalize a hash fragment by slugifying its content.
 *
 * 通过对内容进行 slug 化来规范化哈希片段。
 *
 * @param str - The hash string (with leading `#`) or empty / 哈希字符串（带前导 `#`）或空字符串
 * @returns The encoded hash string or empty / 编码后的哈希字符串或空字符串
 */
function normalizeHash(str: string) {
  return str ? encodeURI(`#${slugify(decodeURI(str).slice(1))}`) : ''
}
