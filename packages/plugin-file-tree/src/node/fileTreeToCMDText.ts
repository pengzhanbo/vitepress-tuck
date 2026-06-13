import type { FileTreeNode } from './types.js'

/**
 * Convert file tree to command line text format
 *
 * 将文件树转换为命令行文本格式
 *
 * @param nodes - File tree nodes / 文件树节点
 * @param prefix - Line prefix / 行前缀
 * @returns CMD text / CMD 文本
 */
export function fileTreeToCMDText(nodes: FileTreeNode[], prefix = ''): string {
  let content = prefix ? '' : '.\n'
  for (let i = 0, l = nodes.length; i < l; i++) {
    const { filename, children } = nodes[i]!
    content += `${prefix + (i === l - 1 ? '└── ' : '├── ')}${filename}\n`
    const child = children.filter(n => n.filename !== '…')
    if (child.length)
      content += fileTreeToCMDText(child, prefix + (i === l - 1 ? '    ' : '│   '))
  }
  return content
}
