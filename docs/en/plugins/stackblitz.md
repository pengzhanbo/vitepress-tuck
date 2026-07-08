# StackBlitz

<NpmBadge name="vitepress-plugin-stackblitz" />

Embed [StackBlitz](https://stackblitz.com/) projects into VitePress pages. Supports embedding online editors via StackBlitz ID, GitHub repository, or local project files. Can also display as a button to open in a new tab.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-stackblitz
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import stackblitz from 'vitepress-plugin-stackblitz'

export default defineConfig({
  plugins: [stackblitz()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
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

```ts [.vitepress/theme/index.ts]
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

The plugin provides two syntaxes for embedding StackBlitz projects: embed syntax for referencing external projects, and container syntax for writing project files directly inline within Markdown.

### Embed by StackBlitz ID

```md
@[stackblitz](sdk-github-project)
```

### Embed by GitHub Repository

```md
@[stackblitz github](user/repo)
```

### Embed Local Project

Place a `stackblitz.config.json` (or `.yaml`, `.yml`) configuration file in your project directory, then use the `local` attribute:

```md
@[stackblitz local](path/to/your/project)
```

`path` supports the following prefixes:

| Prefix | Description                                 |
| ------ | ------------------------------------------- |
| `@`    | Relative to VitePress `srcDir`              |
| `/`    | Relative to VitePress project root          |
| -      | Relative to the current markdown file's directory |

See [Local Project Configuration](#local-project-configuration) for more details.

### Button Mode

Display as a button that opens the project in a new tab:

```md
@[stackblitz button](stackblitz-id)
```

Can also be combined with `github`:

```md
@[stackblitz github button](user/repo)
```

### Container Syntax

Write project files directly inline within Markdown, ideal for quickly demonstrating simple projects:

````md
::: stackblitz title="Project" description="Project description" template="javascript"

```yml [config]
title: Project
template: javascript
description: Project description
```

```json [package.json]
{
  "name": "project",
  "version": "1.0.0"
}
```

```js [index.js]
console.log('Hello StackBlitz!');
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<body>
  <h1>Hello StackBlitz!</h1>
  <script src="./index.js"></script>
</body>
</html>
```

:::
````

### Attribute Reference

#### Embed / Open Options

Applicable to both embed syntax and button mode:

| Attribute          | Type                              | Default    | Description                             |
| ------------------ | --------------------------------- | ---------- | --------------------------------------- |
| `theme`            | `'dark' \| 'light' \| 'default'`  | auto       | Color theme, auto follows VitePress dark mode |
| `view`             | `'default' \| 'preview' \| 'editor'` | `'default'` | Initial UI view                     |
| `height`           | `number`                          | `400`      | Embed height (embed mode only)          |
| `width`            | `number`                          | -          | Embed width (embed mode only)           |
| `clickToLoad`      | `boolean`                         | `false`    | Show "click to run" dialog              |
| `openFile`         | `string \| string[]`              | -          | File(s) to open on load                 |
| `hideExplorer`     | `boolean`                         | `false`    | Hide the file explorer                  |
| `hideDevTools`     | `boolean`                         | `false`    | Hide the dev tools console              |
| `showSidebar`      | `boolean`                         | `false`    | Show sidebar as open on load            |
| `terminalHeight`   | `number` (0-100)                  | -          | Terminal height percentage              |
| `devToolsHeight`   | `number` (0-100)                  | -          | Dev tools height percentage             |
| `newWindow`        | `boolean`                         | `false`    | Open project in a new tab               |
| `forceEmbedLayout` | `boolean`                         | `false`    | Force embed layout (deprecated)         |
| `origin`           | `string`                          | -          | StackBlitz EE instance URL              |

#### Project Options

Only applicable to local project embed mode and container syntax:

| Attribute      | Type                                                  | Default | Description                     |
| -------------- | ----------------------------------------------------- | ------- | ------------------------------- |
| `title`        | `string`                                              | -       | Project title (required)        |
| `description`  | `string`                                              | -       | Project description (required)  |
| `template`     | `'angular-cli' \| 'create-react-app' \| 'html' \| 'javascript' \| 'typescript' \| 'polymer' \| 'vue' \| 'node'` | - | Project template (required) |
| `dependencies` | `Record<string, string>`                              | -       | npm dependencies                |
| `files`        | `Record<string, string>`                              | -       | Project files (auto-loaded for local mode) |

#### Build Settings

Set via `settings`-prefixed attributes, only applicable to local project embed mode and container syntax:

| Attribute                | Type                              | Default   | Description                      |
| ------------------------ | --------------------------------- | --------- | -------------------------------- |
| `settingsTrigger`        | `'auto' \| 'save' \| 'keystroke'`  | `'auto'`  | Compilation trigger timing       |
| `settingsAction`         | `'hmr' \| 'refresh'`              | `'hmr'`   | How to inject compiled changes   |
| `settingsClearConsole`   | `boolean`                         | `true`    | Clear console after compilation  |

```md
@[stackblitz local title="Demo" description="A demo" template="html" settingsTrigger="save" settingsAction="refresh"](path/to/project)
```

## Local Project Configuration

When using `@[stackblitz local](path)` to embed a local project, the plugin automatically:

1. Loads all files from the specified directory (excluding `node_modules` and `.DS_Store`)
2. Searches for `stackblitz.config.json`, `stackblitz.config.yaml`, `stackblitz.config.yml` in order
3. Merges the configuration file options with the loaded files

Example `stackblitz.config.json`:

```json
{
  "$schema": "../../node_modules/vitepress-plugin-stackblitz/schema.json",
  "title": "Project",
  "description": "Project description",
  "template": "javascript",
  "dependencies": {
    "lodash": "^4.17.0"
  },
  "settings": {
    "trigger": "save"
  }
}
```

> [!TIP]
> Including the `$schema` field provides intelligent autocompletion and validation for configuration files in your editor.

## Example

### StackBlitz ID Embed

```md
@[stackblitz](sdk-github-project)
```

@[stackblitz](sdk-github-project)

### Button Mode

```md
@[stackblitz button](sdk-github-project)
```

@[stackblitz button](sdk-github-project)

### Container Syntax

````md
::: stackblitz button

```yml [config]
title: Project
template: javascript
description: Project description
```

```json [package.json]
{
  "name": "project",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "keywords": ["project"],
  "author": "Project Author",
  "license": "MIT"
}
```

```js [index.js]
console.log('Hello StackBlitz!');
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project</title>
</head>
<body>
  <h1>Hello StackBlitz!</h1>
  <script src="./index.js"></script>
</body>
</html>
```

:::
````

::: stackblitz button

```yml [config]
title: Project
template: javascript
description: Project description
```

```json [package.json]
{
  "name": "project",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "keywords": ["project"],
  "author": "Project Author",
  "license": "MIT"
}
```

```js [index.js]
console.log('Hello StackBlitz!');
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project</title>
</head>
<body>
  <h1>Hello StackBlitz!</h1>
  <script src="./index.js"></script>
</body>
</html>
```

:::

### Local Project Embed

```md
@[stackblitz local](../zh/plugins/stack)
```

@[stackblitz local](../zh/plugins/stack)
