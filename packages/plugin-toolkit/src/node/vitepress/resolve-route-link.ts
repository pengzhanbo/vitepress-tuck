import type { MarkdownEnv } from 'vitepress'
import { slash } from '@pengzhanbo/utils'
import { isExternal } from '../../shared/index.js'
import { slugify, treatAsHtml } from '../utils/index.js'
import { getVitepressConfig } from './get-vitepress-config.js'

const indexRE = /(^|.*\/)index.md(.*)$/i

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

function normalizeHash(str: string) {
  return str ? encodeURI(`#${slugify(decodeURI(str).slice(1))}`) : ''
}
