# vitepress-plugin-obsidian

Support Obsidian-flavored Markdown syntax in your VitePress site.

在 VitePress 中支持 Obsidian 风格的 Markdown 语法。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-obsidian
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-obsidian
# yarn
yarn add -D vitepress-tuck vitepress-plugin-obsidian
```

**Configuration:**

```ts
// .vitepress/config.ts
import obsidian from 'vitepress-plugin-obsidian'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [obsidian()],
})
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-obsidian
# pnpm
pnpm add -D vitepress-plugin-obsidian
# yarn
yarn add -D vitepress-plugin-obsidian
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { obsidianPlugin } from 'vitepress-plugin-obsidian'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(obsidianPlugin)
    },
  },
})
```

## Syntax

### Comments

Use `%%` to wrap comments that will be hidden from output.

```md
This is visible. %%This is hidden.%%
```

### Callouts

Use `> [!type]` to create callout blocks, mapped to VitePress alert styles.

```md
> [!note] Title
> This is a note.

> [!tip]
> This is a tip without title.

> [!warning]
> This is a warning.

> [!danger]
> This is a danger alert.
```

Supported types: `note`, `tip`, `info`, `warning`, `caution`, `danger`, `important`, `details`.

### Wiki Links

Use `[[filename]]` to create internal links.

```md
[[Some Page]]
[[Some Page#Heading]]
[[Some Page#Heading|Display Text]]
```

### Embed Links

Use `![[file]]` to embed images, audio, video, PDFs, or other Markdown files.

```md
![[image.png]]
![[image.png|300]]
![[document.pdf]]
![[document.pdf#page=1#height=300]]
![[note.md#Heading]]
```

### Disable Features

```ts
obsidian({
  callout: true,
  comment: true,
  wikiLink: false,
  embedLink: false,
})
```
