# vitepress-tuck

增强 vitepress 配置，并提供插件开发能力。

> [!NOTE]
> vitepress 本身并没有提供完备的插件开发能力，现有的一些稍微复杂的插件往往需要同时在配置文件的 `markdown` 和 `vite` 中进行配置，用户在 vitepress 中接入插件的过程比较散乱，难以维护。
>
> `tuck` 为 vitepress 提供了简单灵活，低门槛的插件开发能力：
>
> - 开发者可直接通过 `definePlugin` 开发插件；
> - 用户仅需要在 `plugins` 配置中添加插件。

## Install

```bash
# npm
npm install vitepress vitepress-tuck
# pnpm
pnpm add vitepress vitepress-tuck
# yarn
yarn add vitepress vitepress-tuck
```

## 在 vitepress 中使用 tuck

使用 `vitepress-tuck` 的 `defineConfig` 代替 `vitepress` 的 `defineConfig`

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [
    // 在这里添加插件
  ],
  // 其他 vitepress 配置项
})
```

在 客户端配置文件中，引入 `virtual:enhance-app` 自动注入插件的客户端代码：

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

## 插件开发

使用 `definePlugin` 开发插件。

```ts
// 插件开发
import { definePlugin } from 'vitepress-tuck'

export default definePlugin((options?: MyPluginOptions) => ({
  name: 'vitepress-plugin-my-plugin',
  // 插件的客户端配置，用于注入到客户端配置文件中
  client: {
    imports: [], // 客户端需要导入的模块，比如 样式文件
    enhance: 'enhanceAppWithMyPlugin', // 客户端增强函数的具名导出
  },
  markdown: {
    config: (md) => {
      // 在这里配置 markdown 插件
      md.use(myMarkdownPlugin, options?.markdownOptions)
    }
  },
  vite: {
    // 在这里配置 vite
    plugins: [myVitePlugin(options?.viteOptions)]
  },
  // 其他 vitepress 的相关钩子
  buildEnd: () => {},
  transformHead: () => {},
  transformHtml: () => {},
  transformPageData: () => {},
  postRender: () => {},
}))
```

当插件需要提供组件或其他客户端代码时：

在 `package.json` 的 `exports` 中使用 `client` 字段导出客户端代码：

```json
{
  "exports": {
    ".": "./node/index.js",
    "./client": "./client/index.js"
  }
}
```

在 `./client/index.js` 中，导出一个与 `client.enhance` 同名的具名函数：

```ts
// client/index.js
export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {
  // 在这里添加插件的客户端代码
  app.component('MyComponent', MyComponent)
}
```

`vitepress-tuck` 会检查 `client` 配置，将代码自动注入到 `virtual:enhance-app` 中。

当插件提供需要自动导入的 Vue 组件时，可通过 `componentResolver` 字段声明。最简单的形式是组件名数组，这些组件会从 `<插件名>/client` 自动解析：

```ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  // 此处列出的组件会从 'vitepress-plugin-my-plugin/client' 自动导入
  componentResolver: ['MyComponent', 'OtherComponent'],
  // ...其他配置
}))
```

对于更复杂的场景，也可以传入来自 `unplugin-vue-components` 的自定义 `ComponentResolver` 对象：

```ts
import type { ComponentResolver } from 'unplugin-vue-components'
import { definePlugin } from 'vitepress-tuck'

const myResolver: ComponentResolver = {
  type: 'component',
  resolve: (name) => {
    if (name.startsWith('My')) {
      return { name, from: 'vitepress-plugin-my-plugin/client' }
    }
  },
}

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  componentResolver: myResolver,
  // ...其他配置
}))
```

## 自动组件导入

`vitepress-tuck` 内置集成了 [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) 插件，
为 `.vue` 和 `.md` 文件提供自动按需组件导入能力，无需手动 import 和注册组件。

默认情况下，内置插件会扫描 `.vue` 和 `.md` 文件，并在 `node_modules/.vite/components.d.ts` 生成类型声明。你可以通过 `components` 选项自定义行为：

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  components: {
    // 任意 unplugin-vue-components 选项，例如：
    dirs: ['src/components'],
    directoryAsNamespace: true,
  },
  plugins: [],
})
```

当插件提供 Vue 组件时，可通过 `componentResolver` 字段声明，以便由 `unplugin-vue-components` 自动解析 —— 详见[插件开发](#插件开发)。
