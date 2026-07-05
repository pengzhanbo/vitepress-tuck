# vitepress-plugin-repo-card

Display GitHub/Gitee repository information cards in your VitePress site.

在 VitePress 中展示 GitHub/Gitee 仓库信息卡片。

## Features

- Supports **GitHub** and **Gitee** repositories
- Displays repository name, description, stars, forks, language, license, and more
- **Embed syntax** for individual repository cards
- **Container syntax** for multi-card grid layouts
- Automatic 24-hour browser-side caching to reduce API requests
- Dark mode support

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-repo-card
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-repo-card
# yarn
yarn add -D vitepress-tuck vitepress-plugin-repo-card
```

**Configuration:**

```ts
// .vitepress/config.ts
import repoCard from 'vitepress-plugin-repo-card'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [repoCard()],
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
  },
} satisfies Theme
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-repo-card
# pnpm
pnpm add -D vitepress-plugin-repo-card
# yarn
yarn add -D vitepress-plugin-repo-card
```

**Configuration:**

```ts
// .vitepress/config.ts
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

```ts
// .vitepress/theme/index.ts
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

Render a single repository card using the `@[repo]` syntax.

```md
@[repo github](owner/name)
```

Example:

```md
@[repo github](vuejs/vitepress)
```

#### Full Name

By default, the card displays only the repository name. Add `fullname` to display the
full `owner/name` path. For organization-owned repositories, the full name is shown
automatically.

```md
@[repo fullname github](pengzhanbo/vitepress-tuck)
```

#### Register

Specify the repository platform with `github` or `gitee`. Defaults to `github` if
omitted.

```md
@[repo gitee](owner/name)
```

### Container Syntax

Use `::: repo` container to display multiple repository cards in a responsive grid
layout.

```md
::: repo
@[repo github](vuejs/vitepress)
@[repo github](vuejs/core)
@[repo gitee](owner/name)
:::
```

## Displayed Information

Each repository card shows:

| Field       | Description                         |
| ----------- | ----------------------------------- |
| Name        | Repository name or full name        |
| Visibility  | Public / Private, with badge        |
| Archived    | Warning badge if archived           |
| Description | Repository description text         |
| Language    | Primary programming language        |
| Stars       | Star count (formatted, e.g. `1.2k`) |
| Forks       | Fork count (formatted, e.g. `1.2k`) |
| License     | License name (if available)         |

## Component

The `VPRepoCard` component is also available for direct use:

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
