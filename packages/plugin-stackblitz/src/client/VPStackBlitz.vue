<script setup lang="ts">
import type { EmbedOptions, OpenOptions, ProjectOptions } from '@stackblitz/sdk'
import sdk from '@stackblitz/sdk'
import { useData } from 'vitepress/client'
import { onMounted, useTemplateRef, watch } from 'vue'
import { safeParse } from './safe-parse.js'

const { source, from = 'id', mode = 'embed', project, embed, open } = defineProps<{
  source?: string
  from?: 'github' | 'id' | 'project'
  mode?: 'embed' | 'open'
  project?: string | ProjectOptions
  embed?: string | EmbedOptions
  open?: string | OpenOptions
}>()

const el = useTemplateRef<HTMLDivElement>('el')
const { isDark } = useData()

onMounted(() => {
  if (!el.value || mode !== 'embed')
    return

  watch(
    [() => [source, from, project, embed], isDark],
    () => {
      el.value!.innerHTML = ''
      const container = document.createElement('div')
      el.value!.appendChild(container)
      const options = safeParse(embed)
      options.height ??= 400
      options.theme ??= isDark.value ? 'dark' : 'light'

      if (source) {
        if (from === 'github')
          sdk.embedGithubProject(container, source, options)

        else if (from === 'id')
          sdk.embedProjectId(container, source, options)
      }
      else if (from === 'project' && project) {
        sdk.embedProject(container, safeParse(project), options)
      }
    },
    { immediate: true, flush: 'post' },
  )
})

function openInStackBlitz() {
  if (source) {
    if (from === 'github')
      sdk.openGithubProject(source, safeParse(open))
    else if (from === 'id')
      sdk.openProjectId(source, safeParse(open))
  }
  else if (from === 'project' && project) {
    sdk.openProject(safeParse(project), safeParse(open))
  }
}
</script>

<template>
  <div v-if="mode === 'embed'" ref="el" class="vp-stackblitz-embed" />
  <button v-else class="vp-stackblitz-button" @click="openInStackBlitz">
    <span class="vpi-stackblitz" />
    <span>Open in StackBlitz</span>
  </button>
</template>
