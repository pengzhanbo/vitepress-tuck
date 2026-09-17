---
url: /pluginsnpm-to.md
---
# Npm To

Automatically converts npm commands to equivalent commands for other package managers (pnpm, yarn, bun, deno).

## Installation

::: npm-to

```sh
npm install vitepress-plugin-npm-to
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import npmTo from 'vitepress-plugin-npm-to'

export default defineConfig({
  plugins: [
    npmTo(['npm', 'pnpm', 'yarn']),
  ],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { npmToPlugin } from 'vitepress-plugin-npm-to'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(npmToPlugin, ['npm', 'pnpm', 'yarn'])
    },
  },
})
```

## Syntax

Use the `::: npm-to` container to wrap npm commands. The plugin automatically converts them into multi-tab code groups:

````md
::: npm-to
```sh
npm install vitepress-plugin-steps
```
:::
````

After rendering, it displays as multiple tabs, each showing the corresponding package manager's install command:

* **npm**: `npm install vitepress-plugin-steps`
* **pnpm**: `pnpm add vitepress-plugin-steps`
* **yarn**: `yarn add vitepress-plugin-steps`

### Supported Command Types

The plugin supports automatic conversion of the following npm commands:

| Command                 | Example               | Support                                   |
| ----------------------- | --------------------- | ----------------------------------------- |
| `npm install` / `npm i` | `npm install react`   | Converts to each manager's add command    |
| `npm install` (no args) | `npm install`         | Converts to pure install command          |
| `npm uninstall`         | `npm uninstall react` | Converts to each manager's remove command |
| `npm run`               | `npm run build`       | Converts to each manager's run command    |
| `npm create`            | `npm create vite`     | Converts to each manager's create command |
| `npm init`              | `npm init -y`         | Converts to each manager's init command   |
| `npx`                   | `npx eslint .`        | Converts to each manager's equivalent     |
| `npm ci`                | `npm ci`              | Converts to each manager's ci command     |

### Custom Tabs

You can specify which tabs to display using the `tabs` attribute:

````md
::: npm-to tabs="npm,pnpm"
```sh
npm install vitepress-plugin-steps
```
:::
````

## Configuration

```ts
type NpmToPluginOptions =
  | NpmToPackageManager[]   // e.g. ['npm', 'pnpm', 'yarn']
  | {
      tabs?: NpmToPackageManager[]
    }

type NpmToPackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun' | 'deno'
```

* Displays `npm`, `pnpm`, `yarn` tabs by default
* Supports `bun` and `deno` conversion

### Example

````md
::: npm-to
```sh
npm install vitepress-plugin-steps
```
:::
````

::: npm-to

```sh
npm install vitepress-plugin-steps
```

:::
