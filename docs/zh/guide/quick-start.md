# 快速开始

## 什么是 vitepress-tuck？

`vitepress-tuck` 为 VitePress 提供了简单灵活、低门槛的插件开发与接入能力。
它通过包装 VitePress 的 `defineConfig`，提供额外的 `plugins` 选项，将插件接入的复杂度转移到插件内部，用户只需在 `plugins` 数组中添加插件。

## 安装

::: npm-to

```sh
npm install vitepress vitepress-tuck
```

:::

## 在 VitePress 站点中使用

::: steps

- ### 替换配置文件

  将 `.vitepress/config.ts` 中的 `defineConfig` 替换为 `vitepress-tuck` 的 `defineConfig`：

  ```ts [.vitepress/config.ts]
  import { defineConfig } from 'vitepress' // [!code --]
  import { defineConfig } from 'vitepress-tuck' // [!code ++]

  export default defineConfig({
    // [!code ++:3]
    plugins: [
      // 在这里添加插件
    ],
    // 其他 VitePress 配置项 ...
  })
  ```

- ### 配置客户端入口

  在 `.vitepress/theme/index.ts` 中引入 `virtual:enhance-app`：

  ```ts [.vitepress/theme/index.ts]
  import type { Theme } from 'vitepress'
  import enhanceApp from 'virtual:enhance-app' // [!code ++]
  import DefaultTheme from 'vitepress/theme'

  export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
      enhanceApp(ctx) // [!code ++]
    },
  } satisfies Theme
  ```

  `virtual:enhance-app` 是一个虚拟模块，`vitepress-tuck` 会自动将插件的客户端代码注入其中，无需手动配置。

- ### TypeScript 支持

  如果项目使用 TypeScript，在 `tsconfig.json` 中添加类型引用：

  ```json
  {
    "compilerOptions": {
      "types": ["vitepress-tuck/client-types"]
    }
  }
  ```

:::

## 使用插件

插件使用非常简单，只需在 `plugins` 中导入并调用即可：

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import steps from 'vitepress-plugin-steps'
import mermaid from 'vitepress-plugin-mermaid-tuck'

export default defineConfig({
  plugins: [
    steps(),
    mermaid({
      // 可以传入插件配置项
    }),
  ],
})
```

每个插件的配置项请参考对应的插件文档。
