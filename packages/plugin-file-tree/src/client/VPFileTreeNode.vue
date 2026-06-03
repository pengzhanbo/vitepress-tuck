<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, ref } from 'vue'

const { type, filename, level, diff, expanded, focus, filepath } = defineProps<{
  type: 'file' | 'folder'
  filename: string
  level: number
  diff?: 'add' | 'remove'
  expanded?: boolean
  focus?: boolean
  filepath?: string
}>()

const activeFileTreeNode = inject<Ref<string>>('active-file-tree-node', ref(''))

const onNodeClick = inject<
  (filename: string, type: 'file' | 'folder') => void
>('on-file-tree-node-click', () => {})

const active = ref(expanded)

function nodeClick() {
  if (filename === '…' || filename === '...')
    return

  onNodeClick(filepath || filename, type)
}

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
        class="vp-icon" :class="{ expanded, [type]: true }"
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
