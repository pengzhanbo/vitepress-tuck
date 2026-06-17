<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, ref } from 'vue'

const { type, filename, level, diff, expanded, focus, filepath } = defineProps<{
  /** Node type, either a folder or a file. / 节点类型，文件夹或文件。 */
  type: 'file' | 'folder'
  /** Display name of the file or folder. / 文件或文件夹的显示名称。 */
  filename: string
  /** Indentation depth level, used for visual offset. / 缩进层级，用于视觉偏移。 */
  level: number
  /** Diff marker indicating the node was added or removed. / 差异标记，表示节点为新增或删除。 */
  diff?: 'add' | 'remove'
  /** Whether a folder node is expanded by default. / 文件夹节点是否默认展开。 */
  expanded?: boolean
  /** Whether this node is visually highlighted as focused. / 是否作为聚焦节点高亮显示。 */
  focus?: boolean
  /** Full file path used for active state matching. / 用于匹配激活状态的完整文件路径。 */
  filepath?: string
}>()

const activeFileTreeNode = inject<Ref<string>>('active-file-tree-node', ref(''))

const onNodeClick = inject<
  (filename: string, type: 'file' | 'folder') => void
>('on-file-tree-node-click', () => {})

const active = ref(expanded)

/**
 * Notify the parent of a node click event via the injected callback.
 *
 * 通过注入的回调通知父组件节点点击事件。
 *
 * Ellipsis placeholders (`…` or `...`) are ignored to avoid triggering
 * selection on empty folder markers.
 */
function nodeClick() {
  if (filename === '…' || filename === '...')
    return

  onNodeClick(filepath || filename, type)
}

/**
 * Handle click events on the node, toggling folder expansion or firing
 * the node click callback for files.
 *
 * 处理节点的点击事件，切换文件夹展开状态或触发文件节点的点击回调。
 *
 * For folders, clicks on the comment area are ignored so that inline
 * comments remain interactive. For files, the click callback fires
 * directly.
 *
 * @param ev - Native mouse event / 原生鼠标事件
 */
function toggle(ev: MouseEvent) {
  if (type === 'folder') {
    const el = ev.target as HTMLElement
    if (!el.matches('.comment, .comment *')) {
      active.value = !active.value
      nodeClick()
    }
  }
  else {
    nodeClick()
  }
}
</script>

<template>
  <div class="vp-file-tree-node">
    <p
      class="vp-file-tree-info" :class="{
        [type]: true,
        focus,
        expanded: type === 'folder' ? active : false,
        active: type === 'file' ? activeFileTreeNode === filepath : false,
        diff,
        add: diff === 'add',
        remove: diff === 'remove',
      }"
      :style="{ '--file-tree-level': -level }"
      v-bind="{ onClick: toggle }"
    >
      <span
        v-if="filename !== '…' && filename !== '...'"
        class="vp-icon" :class="{ expanded: type === 'folder' ? active : false, [type]: true }"
        :data-filename="filename"
      />
      <span class="name" :class="[type]">{{ filename }}</span>
      <span v-if="$slots.comment" class="comment"><slot name="comment" /></span>
    </p>
    <div v-if="type === 'folder'" v-show="active" class="group">
      <slot />
    </div>
  </div>
</template>
