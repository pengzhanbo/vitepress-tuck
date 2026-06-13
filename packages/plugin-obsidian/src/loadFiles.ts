import type { FilesResult } from './types'
import path from 'node:path'
import { partition, removeLeadingSlash, slash } from '@pengzhanbo/utils'
import { globSync } from 'tinyglobby'
import { getLocaleWithPath, getVitepressConfig } from 'vitepress-plugin-toolkit'

export function loadFiles(): FilesResult {
  const config = getVitepressConfig()

  const files = globSync('**/*.md', {
    cwd: config.srcDir,
    ignore: ['dist', 'node_modules', '.vitepress'],
    onlyFiles: true,
  }).sort((a, b) => {
    const al = a.split('/').length
    const bl = b.split('/').length
    return al - bl
  })

  return { root: config.srcDir, files }
}

export function findFirstFile(
  files: string[],
  currentPath: string,
  filename: string,
): string | undefined {
  const dirname = path.dirname(currentPath)
  let filepath = slash(filename[0] === '.'
    ? path.join(dirname, filename)
    : removeLeadingSlash(filename))
  filepath = filepath.slice(-1) === '/' ? `${filepath}index.md` : filepath
  filepath = path.extname(filepath) ? filepath : `${filepath}.md`
  const locale = removeLeadingSlash(getLocaleWithPath(currentPath).locale)
  // 提取同语言文件到头部
  const [lefts, rights] = partition(files, file => file.startsWith(locale))
  return [...lefts, ...rights].find(pagePath => pagePath === filepath || pagePath.endsWith(filepath))
}
