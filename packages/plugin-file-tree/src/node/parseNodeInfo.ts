import type { FileTreeNode } from './types.js'
import { removeTrailingSlash } from '@pengzhanbo/utils'

/**
 * Regular expression for the focus marker `**filename**`.
 *
 * 聚焦标记 `**filename**` 的正则表达式。
 *
 * A filename wrapped in double asterisks is highlighted as a focused node.
 * The marker may be followed by a space and an inline comment.
 */
const RE_FOCUS = /^\*\*(.*?)\*\*(?:$|\s+)/

/**
 * Parse a single node info string, extracting filename, comment, type, and
 * other metadata.
 *
 * 解析单个节点的 info 字符串，提取文件名、注释、类型等属性。
 *
 * Recognizes the following syntax within the info string:
 * - `++filename` — marks the node as a diff addition
 * - `--filename` — marks the node as a diff removal
 * - `**filename**` — highlights the node as focused
 * - `filename # comment` — attaches an inline comment after `#`
 * - `filename/` — treats the entry as a folder (trailing slash removed)
 *
 * @param info - Node description string / 节点描述字符串
 * @returns File tree node properties excluding `children` and `level` / 文件树节点属性（不含 `children` 和 `level`）
 *
 * @example
 * ```ts
 * parseNodeInfo('src/  # source folder')
 * // { filename: 'src', comment: '# source folder', focus: false,
 * //   expanded: false, type: 'folder', diff: undefined }
 *
 * parseNodeInfo('**index.ts**')
 * // { filename: 'index.ts', comment: '', focus: true,
 * //   expanded: true, type: 'file', diff: undefined }
 * ```
 */
export function parseNodeInfo(info: string): Omit<FileTreeNode, 'children' | 'level'> {
  let filename = ''
  let comment = ''
  let focus = false
  let expanded: boolean | undefined = true
  let type: 'folder' | 'file' = 'file'
  let diff: 'add' | 'remove' | undefined

  // Process diff marker
  if (info.startsWith('++')) {
    info = info.slice(2).trim()
    diff = 'add'
  }
  else if (info.startsWith('--')) {
    info = info.slice(2).trim()
    diff = 'remove'
  }

  // Process focus marker
  info = info.replace(RE_FOCUS, (_, matched) => {
    filename = matched
    focus = true
    return ''
  })

  // Extract filename and comment
  if (filename === '' && !focus) {
    const sharpIndex = info.indexOf('#')
    filename = info.slice(0, sharpIndex === -1 ? info.length : sharpIndex).trim()
    info = sharpIndex === -1 ? '' : info.slice(sharpIndex)
  }

  comment = info.trim()

  // Determine if folder
  if (filename.endsWith('/')) {
    type = 'folder'
    expanded = false
    filename = removeTrailingSlash(filename)
  }

  return { filename, comment, focus, expanded, type, diff }
}
