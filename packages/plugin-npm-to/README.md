# vitepress-plugin-npm-to

Automatically convert npm commands to equivalent commands for other package managers (pnpm, yarn, bun, deno).

自动将 npm 命令转换为其他包管理器（pnpm、yarn、bun、deno）的等价命令。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-npm-to
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-npm-to
# yarn
yarn add -D vitepress-tuck vitepress-plugin-npm-to
```

**Configuration:**

```ts
// .vitepress/config.ts
import npmTo from 'vitepress-plugin-npm-to'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [npmTo()],
})
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-npm-to
# pnpm
pnpm add -D vitepress-plugin-npm-to
# yarn
yarn add -D vitepress-plugin-npm-to
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { npmToPlugin } from 'vitepress-plugin-npm-to'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(npmToPlugin)
    },
  },
})
```

## Syntax

Use `::: npm-to` container to wrap an npm command.

````md
::: npm-to
```sh
npm install express
```
:::
````

The plugin will automatically generate a code group with equivalent commands for each package manager.

### Customize Tabs

Specify which package managers to show:

````md
::: npm-to tabs=npm,pnpm,yarn,bun
```sh
npm i -D vuepress-theme-plume
```
:::
````

### Global Configuration

```ts
// Default tabs: ['npm', 'pnpm', 'yarn']
npmTo(['npm', 'pnpm', 'yarn', 'bun'])

// Or with options object
npmTo({ tabs: ['npm', 'pnpm', 'yarn', 'bun', 'deno'] })
```

### Supported Commands

`install`, `add`, `remove`, `run`, `create`, `init`, `npx`, `ci` — flags are automatically mapped to each package manager's equivalent.
