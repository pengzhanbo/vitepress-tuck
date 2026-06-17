import type { FileTreeNode } from './types.js'

/**
 * Convert file tree nodes into `tree` command-style plain text.
 *
 * 将文件树节点转换为 `tree` 命令风格的纯文本。
 *
 * Produces a string representation using `├──` and `└──` branch markers with
 * `│   ` and `    ` indentation, matching the output of the Unix `tree`
 * command. Ellipsis placeholder children (`…`) are filtered out so empty
 * folders render cleanly. The result is used by the copy button on the
 * rendered file tree.
 *
 * 使用 `├──` 和 `└──` 分支标记以及 `│` 和空格缩进生成字符串表示，与 Unix `tree` 命令的输出一致。
 * 省略号占位符子项（`…`）会被过滤掉，使得空文件夹显示整洁。该结果用于渲染文件树上的复制按钮。
 *
 * @param nodes - File tree nodes to convert / 要转换的文件树节点数组
 * @param prefix - Line prefix for recursive indentation / 递归缩进使用的行前缀
 * @returns CMD-style text representation / CMD 风格的文本表示
 *
 * @example
 * ```ts
 * const nodes = [
 *   { filename: 'src', type: 'folder', level: 0, children: [
 *     { filename: 'index.ts', type: 'file', level: 1, children: [] },
 *   ]},
 * ]
 * fileTreeToCMDText(nodes)
 * // .
 * // └── src
 * //     └── index.ts
 * ```
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
