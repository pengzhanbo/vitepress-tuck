---
url: /pluginsobsidian.md
---
# Obsidian

Provides Obsidian-style Markdown syntax support, including Wiki links, Callout annotations, embedded files, and comment syntax.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-obsidian
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import obsidian from 'vitepress-plugin-obsidian'

export default defineConfig({
  plugins: [
    obsidian({
      // All optional, default to true
      callout: true,
      comment: true,
      embedLink: true,
      wikiLink: true,
    }),
  ],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { obsidianMarkdownPlugin } from 'vitepress-plugin-obsidian'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(obsidianMarkdownPlugin, {
        callout: true,
        comment: true,
        embedLink: true,
        wikiLink: true,
      })
    },
  },
})
```

## Wiki Links

Wiki links are Obsidian's syntax for linking to other notes. Use double brackets `[[ ]]` to create internal links.

### Syntax

```md
[[filename]]
[[filename#heading]]
[[filename#heading#subheading]]
[[filename|alias]]
[[filename#heading|alias]]
[[https://example.com|external link]]
```

### File Name Search Rules

When using Wiki links, file names are matched according to the following search rules:

**Matching Priority:**

1. **Full Path** — exact match of the file path
2. **Fuzzy Match** — match by filename at the end of the path, preferring the shortest path

**Path Resolution Rules:**

* **Relative paths** (starting with `.`): resolved relative to the current file's directory
* **Absolute paths** (not starting with `.`): searched across the entire document tree, preferring the shortest match
* **Directory form** (ending with `/`): matches the `index.md` in that directory

**Example:**

Given the following document structure:

```txt
docs/
├── index.md
├── guide/
│   ├── index.md
│   └── markdown/
│       └── obsidian.md
```

In `docs/guide/markdown/obsidian.md`:

| Syntax         | Match Result                                                    |
| -------------- | --------------------------------------------------------------- |
| `[[obsidian]]` | matches `docs/guide/markdown/obsidian.md` (via filename search) |
| `[[./]]`       | matches `docs/guide/markdown/index.md` (relative path)          |
| `[[../]]`      | matches `docs/guide/README.md` (parent directory)               |
| `[[guide/]]`   | matches `docs/guide/README.md` (directory form)                 |

### Examples

**External Link:**

**Input:**

```md
[[https://example.com|external link]]
```

**Output:**

\[\[https://example.com|external link]]

**Internal Anchor Links:**

**Input:**

```md
[[npm-to]]  <!-- via filename search -->
[[#Wiki Links]]  <!-- current page heading -->
[[file-tree#Configuration]]  <!-- via filename search, link to heading -->
```

**Output:**

\[\[npm-to]]

\[\[#Wiki Links]]

\[\[file-tree#Configuration]]

[Obsidian Official - **Wiki Links**](https://help.obsidian.md/links){.readmore}

## Embedded Content

Embed syntax allows you to insert content from other files into the current page.

### Syntax

```md
![[filename]]
![[filename#heading]]
![[filename#heading#subheading]]
```

File name search rules are the same as [Wiki Links](#file-name-search-rules).

::: info Paths starting with `/` or without a `./` prefix load resources from the `public` directory
:::

### Image Embedding

**Syntax:**

```md
![[image]]
![[image|width]]
![[image|widthxheight]]
```

Supported formats: `jpg`, `jpeg`, `png`, `gif`, `avif`, `webp`, `svg`, `bmp`, `ico`, `tiff`, `apng`, `jfif`, `pjpeg`, `pjp`, `xbm`

**Example:**

```md
![[tuck-logo.svg]]
```

!\[\[tuck-logo.svg|125]]

### PDF Embedding

> \[!NOTE]
> PDF embedding requires the [vitepress-plugin-pdf](./pdf.md) plugin to work properly.

**Syntax:**

```md
![[document.pdf]]
![[document.pdf#page=1]]  <!-- #page=1 for first page -->
![[document.pdf#page=1#height=300]]  <!-- #page=page #height=height -->
```

Supported formats: `pdf`

**Example:**

```md
![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]
```

!\[\[https://plume.pengzhanbo.cn/files/sample-1.pdf]]

***

### Audio Embedding

**Syntax:**

```md
![[audio file]]
```

Supported formats: `mp3`, `flac`, `wav`, `ogg`, `opus`, `webm`, `acc`

***

### Video Embedding

> \[!NOTE]
> Video embedding requires the [vitepress-plugin-video](./video.md) plugin to work properly.

**Syntax:**

```md
![[video file]]
![[video file#height=400]]  <!-- Set video height -->
```

Supported formats: `mp4`, `webm`, `mov`, etc.

***

### Content Fragment Embedding

Use `#heading` to embed content fragments under specific headings:

**Input:**

```md
![[my-note]]
![[my-note#heading-one]]
![[my-note#heading-one#subheading]]
```

[Obsidian Official - Embed Files](https://help.obsidian.md/embeds){.readmore}
[Obsidian Official - File Formats](https://help.obsidian.md/file-formats){.readmore}

## Callout

Callout is a syntax for highlighting important information, similar to VitePress's `::: note` alert syntax.

### Syntax

```md
> [!note]
> Content
```

**Optional Title:**

```md
> [!tip] Custom Title
> Content
```

### Types

Callout supports the following types, with aliases automatically mapping to the corresponding main type:

| Type        | Aliases                                                             | Description                |
| ----------- | ------------------------------------------------------------------- | -------------------------- |
| `note`      | `quote`, `cite`                                                     | Notes, quotes              |
| `tip`       | `hint`, `check`, `done`, `success`                                  | Tips, hints                |
| `info`      | `todo`                                                              | Info, todos                |
| `warning`   | `question`, `help`, `faq`                                           | Warnings, questions, help  |
| `caution`   | `attention`, `failure`, `fail`, `missing`, `danger`, `error`, `bug` | Cautions, failures, danger |
| `important` | `example`                                                           | Important, examples        |
| `details`   | `abstract`, `summary`, `tldr`                                       | Details, summaries         |

### Examples

**Basic Usage:**

**Input:**

```md
> [!NOTE]
> This is a note callout.
```

**Output:**

> \[!NOTE]
> This is a note callout.

***

**With Title:**

**Input:**

```md
> [!TIP] Useful Tip
> Using `pnpm` can significantly speed up dependency installation.
```

**Output:**

> \[!TIP] Useful Tip
> Using `pnpm` can significantly speed up dependency installation.

***

**Multiple Types:**

**Input:**

```md
> [!success]
> Operation completed successfully!
>
> [!warning]
> This is a warning message.
>
> [!caution]
> Proceed with caution, this operation is irreversible.
```

**Output:**

> \[!success]
> Operation completed successfully!

> \[!warning]
> This is a warning message.

> \[!caution]
> Proceed with caution, this operation is irreversible.

***

**Details Type:**

The `details` type renders as an HTML `<details>` element, supporting expand/collapse:

**Input:**

```md
> [!details]
> Click to expand more content
>
> This is hidden content.
```

**Output:**

> \[!details]
> Click to expand more content
>
> This is hidden content.

[Obsidian Official - Callouts](https://help.obsidian.md/callouts){.readmore}

## Comments

Content wrapped with `%%` is treated as a comment and will not be rendered on the page.

### Syntax

**Inline Comments:**

```md
This is an %%inline comment%% example.
```

**Block Comments:**

```md
%%
This is a block comment.
It can span multiple lines.
%%
```

### Examples

**Inline Comment:**

**Input:**

```md
This is an %%inline comment%% example.
```

**Output:**

This is an %%inline comment%% example.

***

**Block Comment:**

**Input:**

```md
Content before the comment

%%
This is a block comment.

It can span multiple lines.
%%

Content after the comment
```

**Output:**

Content before the comment

%%
This is a block comment.
%%

It can span multiple lines.

[Obsidian Official - Comments](https://help.obsidian.md/syntax#comments){.readmore}

## Notes

* These plugins provide **compatibility support**, not a full implementation of all Obsidian features
* Some Obsidian-specific features (such as graph view for internal links, backlinks, etc.) are not supported
* When embedding content, the embedded page also participates in the theme's build process
* PDF embedding requires the [vitepress-plugin-pdf](./pdf.md) plugin to work properly
* Video embedding requires the [vitepress-plugin-video](./video.md) plugin to work properly
* Embedded resources starting with `/` or using `./` form will be loaded from the `public` directory
