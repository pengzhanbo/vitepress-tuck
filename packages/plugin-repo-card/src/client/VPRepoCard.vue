<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from './use-repo'

defineOptions({
  inheritAttrs: false,
})

const { repo, fullname, register } = defineProps<{
  repo: string
  fullname?: boolean
  register?: 'github' | 'gitee'
}>()
const { loaded, data } = useRepo(
  computed(() => repo),
  computed(() => register || 'github'),
)
const repoName = computed(() => {
  if (!data.value)
    return ''
  if (fullname || (data.value.ownerType === 'Organization' && typeof fullname === 'undefined'))
    return data.value.fullName
  return data.value.name
})
</script>

<template>
  <ClientOnly>
    <div v-if="loaded && data?.name" class="vp-repo-card" v-bind="$attrs">
      <p class="repo-name">
        <span :class="{ [`vpi-${register || 'github'}-repo`]: true, bg: register === 'gitee' }" />
        <span class="repo-link">
          <a :href="data.url" target="_blank" rel="noopener noreferrer" :title="repoName">
            {{ repoName }}
          </a>
        </span>
        <span class="repo-visibility" :class="{ archived: data.archived }">{{ data.visibility + (data.template ? ' Template' : '') }}{{ data.archived ? ' archive' : '' }}</span>
      </p>
      <p class="repo-desc" :title="data.description">
        {{ data.description }}
      </p>
      <div class="repo-info">
        <p v-if="data.language">
          <span
            class="repo-language" :style="{ 'background-color': data.languageColor }"
          /><span>{{ data.language }}</span>
        </p>
        <p :title="`Stars: ${data.stars}`">
          <span class="vpi-github-star" /><span>{{ data.convertStars }}</span>
        </p>
        <p :title="`Forks: ${data.forks}`">
          <span class="vpi-github-fork" /><span>{{ data.convertForks }}</span>
        </p>
        <p v-if="data.license" :title="`License: ${data.license.name}`">
          <span class="vpi-github-license" /><span>{{ data.license.name }}</span>
        </p>
      </div>
    </div>
  </ClientOnly>
</template>
