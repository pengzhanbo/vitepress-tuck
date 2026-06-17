/**
 * File tree node structure.
 *
 * 文件树节点结构。
 *
 * Represents a single entry in the file tree. A node can be either a file or
 * a folder, with optional metadata such as inline comments, focus highlight,
 * expansion state, and diff markers used for before/after comparisons.
 *
 * @example
 * ```ts
 * const node: FileTreeNode = {
 *   filename: 'src',
 *   type: 'folder',
 *   level: 0,
 *   children: [
 *     { filename: 'index.ts', type: 'file', level: 1, children: [] },
 *   ],
 * }
 * ```
 */
export interface FileTreeNode {
  /** Display name of the file or folder. / 文件或文件夹的显示名称。 */
  filename: string
  /** Optional inline comment rendered next to the filename. / 渲染在文件名旁的可选内联注释。 */
  comment?: string
  /** Whether this node is visually highlighted as focused. / 是否作为聚焦节点高亮显示。 */
  focus?: boolean
  /** Whether a folder node is expanded by default. / 文件夹节点是否默认展开。 */
  expanded?: boolean
  /** Node type, either a folder or a file. / 节点类型，文件夹或文件。 */
  type: 'folder' | 'file'
  /** Diff marker indicating the node was added or removed. / 差异标记，表示节点为新增或删除。 */
  diff?: 'add' | 'remove'
  /** Indentation depth level, starting from 0 at the root's direct children. / 缩进层级，根节点的直接子节点为 0。 */
  level: number
  /** Child nodes, only populated for folder nodes. / 子节点数组，仅文件夹节点会有子节点。 */
  children: FileTreeNode[]
}

/**
 * File tree container attributes.
 *
 * 文件树容器属性。
 *
 * Defines the optional attributes parsed from the `::: file-tree` container
 * syntax, used to configure the outer wrapper of the rendered file tree.
 */
export interface FileTreeAttrs {
  /** Optional title displayed above the file tree. / 显示在文件树上方的可选标题。 */
  title?: string
}
