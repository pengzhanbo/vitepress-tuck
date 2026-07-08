# vitepress-plugin-stackblitz

Embed StackBlitz projects in your VitePress site.

在 VitePress 中嵌入 StackBlitz 项目。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-stackblitz
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-stackblitz
# yarn
yarn add -D vitepress-tuck vitepress-plugin-stackblitz
```

**Configuration:**

```ts
// .vitepress/config.ts
import stackblitz from 'vitepress-plugin-stackblitz'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [stackblitz()],
})
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-stackblitz
# pnpm
pnpm add -D vitepress-plugin-stackblitz
# yarn
yarn add -D vitepress-plugin-stackblitz
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { stackblitzMarkdownPlugin } from 'vitepress-plugin-stackblitz'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(stackblitzMarkdownPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithStackBlitz } from 'vitepress-plugin-stackblitz/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithStackBlitz(ctx)
  },
} satisfies Theme
```

## Syntax

### Embed by StackBlitz ID

```md
@[stackblitz](stackblitz-id)
```

### Embed by GitHub Repository

```md
@[stackblitz github](user/repo)
```

### Embed Local Project

Place a `stackblitz.config.json` (or `.yaml`/`.yml`) file in your project directory:

```json
{
  "title": "My Project",
  "description": "A project demo",
  "template": "typescript",
  "dependencies": {
    "vue": "^3.5.0"
  }
}
```

```md
@[stackblitz local](path/to/your/project)
```

> Path prefixes:
>
> - `@` is relative to VitePress `srcDir`
> - `/` is relative to VitePress project root
> - (none) is relative to the current markdown file's directory

### Button Mode

Show a button that opens the project in a new tab instead of embedding inline:

```md
@[stackblitz button](stackblitz-id)
```

### Container Syntax

Write project files directly inline within Markdown, for quickly demonstrating simple projects:

````md
:::stackblitz title="My Demo" description="A demo project" template="html"
```json [config]
{
  "settings": {
    "trigger": "keystroke"
  }
}
```

```html [index.html]
<h1>Hello World</h1>
```

```css [style.css]
h1 { color: red; }
```
:::
````

## Options

### Embed / Open Options

These options apply to both embed and button modes:

| Option             | Type                                 | Default     | Description                                    |
| ------------------ | ------------------------------------ | ----------- | ---------------------------------------------- |
| `theme`            | `'dark' \| 'light' \| 'default'`     | auto        | Color theme, auto follows VitePress dark mode  |
| `view`             | `'default' \| 'preview' \| 'editor'` | `'default'` | Initial UI view                                |
| `height`           | `number`                             | `400`       | iframe height (embed only)                     |
| `width`            | `number`                             | -           | iframe width (embed only)                      |
| `clickToLoad`      | `boolean`                            | `false`     | Show UI dialog asking users to run the project |
| `openFile`         | `string \| string[]`                 | -           | Which file(s) to open on load                  |
| `hideExplorer`     | `boolean`                            | `false`     | Hide the file explorer                         |
| `hideDevTools`     | `boolean`                            | `false`     | Hide the dev tools console                     |
| `showSidebar`      | `boolean`                            | `false`     | Show sidebar as open on load                   |
| `terminalHeight`   | `number` (0-100)                     | -           | Terminal height percentage                     |
| `devToolsHeight`   | `number` (0-100)                     | -           | Dev tools height percentage                    |
| `newWindow`        | `boolean`                            | `false`     | Open project in a new tab                      |
| `forceEmbedLayout` | `boolean`                            | `false`     | Force embed layout (deprecated)                |
| `origin`           | `string`                             | -           | StackBlitz EE instance origin URL              |

### Project Options

Used with the `local` embed mode and container syntax:

| Option         | Type                                                                                                            | Default | Description                             |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------- |
| `title`        | `string`                                                                                                        | -       | Project title (required)                |
| `description`  | `string`                                                                                                        | -       | Short project description (required)    |
| `template`     | `'angular-cli' \| 'create-react-app' \| 'html' \| 'javascript' \| 'typescript' \| 'polymer' \| 'vue' \| 'node'` | -       | Template type (required)                |
| `dependencies` | `Record<string, string>`                                                                                        | -       | npm dependencies                        |
| `files`        | `Record<string, string>`                                                                                        | -       | Project files (auto-loaded for `local`) |

### Settings Options

| Option         | Type                              | Default  | Description                     |
| -------------- | --------------------------------- | -------- | ------------------------------- |
| `trigger`      | `'auto' \| 'save' \| 'keystroke'` | `'auto'` | When to trigger compilation     |
| `action`       | `'hmr' \| 'refresh'`              | `'hmr'`  | How to inject compiled changes  |
| `clearConsole` | `boolean`                         | `true`   | Clear console after compilation |

Settings are passed via inline attributes with `settings` prefix:

```md
@[stackblitz settingsTrigger="save" settingsAction="refresh"](stackblitz-id)
```

## Local Project Configuration

When using `@[stackblitz local](path)` the plugin automatically:

1. Loads all files from the specified directory (excluding `node_modules`)
2. Looks for a `stackblitz.config.json`, `.yaml`, or `.yml` in that order
3. Merges the config file options with the loaded files

Example `stackblitz.config.json`:

```json
{
  "title": "Vue Demo",
  "description": "A Vue 3 demo project",
  "template": "vue",
  "dependencies": {
    "vue": "^3.5.0",
    "pinia": "^2.0.0"
  },
  "settings": {
    "trigger": "save"
  }
}
```
