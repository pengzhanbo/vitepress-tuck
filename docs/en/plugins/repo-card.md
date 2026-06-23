# Repo Card

<NpmBadge name="vitepress-plugin-repo-card" />

A repository information card plugin that displays detailed GitHub/Gitee repository
cards in your Markdown. Supports embed syntax for individual cards and container
syntax for multi-card grid layouts.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-repo-card
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import repoCard from 'vitepress-plugin-repo-card'

export default defineConfig({
  plugins: [repoCard()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { repoCardMarkdownPlugin } from 'vitepress-plugin-repo-card'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(repoCardMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithRepoCard } from 'vitepress-plugin-repo-card/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithRepoCard(ctx)
  },
} satisfies Theme
```

## Syntax

### Embed Syntax

Use the `@[repo]()` syntax to embed individual repository cards. Defaults to GitHub
if `register` is omitted.

```md
@[repo](owner/name)
@[repo github](owner/name)
@[repo gitee](owner/name)
```

### Display Full Name

Use the `fullname` parameter to show the `owner/name` full path. For
organization-owned repositories, the full name is displayed automatically.

```md
@[repo fullname github](pengzhanbo/vitepress-tuck)
```

### Container Syntax

Use the `::: repo` container to display multiple repository cards in a responsive
grid layout.

```md
::: repo
@[repo github](vuejs/vitepress)
@[repo github](vuejs/core)
:::
```

## Examples

### Single Repository Card

**GitHub repository:**

```md
@[repo github](vuejs/vitepress)
```

@[repo github](vuejs/vitepress)

**Gitee repository:**

```md
@[repo gitee](openharmony/kernel_liteos_a)
```

@[repo gitee](openharmony/kernel_liteos_a)

**Display full name:**

```md
@[repo fullname](pengzhanbo/vitepress-tuck)
```

@[repo fullname](pengzhanbo/vitepress-tuck)

### Multi-Card Grid Layout

```md
::: repo
@[repo fullname](pengzhanbo/vitepress-tuck)
@[repo](pengzhanbo/vite-plugin-mock-dev-server)
@[repo](pengzhanbo/utils)
@[repo](pengzhanbo/vuepress-theme-plume)
:::
```

::: repo
@[repo fullname](pengzhanbo/vitepress-tuck)
@[repo](pengzhanbo/vite-plugin-mock-dev-server)
@[repo](pengzhanbo/utils)
@[repo](pengzhanbo/vuepress-theme-plume)
:::

## Card Information

Each repository card displays the following:

| Field       | Description                          |
| ----------- | ------------------------------------ |
| Name        | Repository name or `owner/name` full |
| Visibility  | Public / Private badge               |
| Archived    | Warning badge if archived            |
| Description | Repository description text          |
| Language    | Primary language with color dot      |
| Stars       | Formatted count (e.g. `1.2k`)        |
| Forks       | Formatted count (e.g. `1.2k`)        |
| License     | License name (if available)          |

## Component Usage

You can also use the `VPRepoCard` component directly:

```vue
<script setup lang="ts">
import { VPRepoCard } from 'vitepress-plugin-repo-card/client'
</script>

<template>
  <VPRepoCard repo="vuejs/vitepress" register="github" />
  <VPRepoCard repo="owner/name" register="gitee" fullname />
</template>
```

### Props

| Prop       | Type                  | Default    | Description                       |
| ---------- | --------------------- | ---------- | --------------------------------- |
| `repo`     | `string`              | (required) | Repository in `owner/name` format |
| `register` | `'github' \| 'gitee'` | `'github'` | Repository platform               |
| `fullname` | `boolean`             | -          | Display full name (`owner/name`)  |
