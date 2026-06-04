# API 参考

## vitepress-tuck

### defineConfig

`defineConfig` 是 `vitepress-tuck` 的核心函数，用于替代 VitePress 的 `defineConfig`。

```ts
import { defineConfig } from 'vitepress-tuck'

function defineConfig<ThemeConfig = DefaultTheme.Config>(
  config: UserConfig<NoInfer<ThemeConfig>> & PluginsConfig,
): UserConfig<NoInfer<ThemeConfig>>
```

#### 参数

| 参数     | 类型                         | 说明                                |
| -------- | ---------------------------- | ----------------------------------- |
| `config` | `UserConfig & PluginsConfig` | VitePress 原始配置 + `plugins` 选项 |

`PluginsConfig` 定义：

```ts
interface PluginsConfig {
  /**
   * vitepress 插件列表
   */
  plugins?: VitepressPlugin[]
}
```

#### 返回值

返回合并后的完整 VitePress 配置对象 `UserConfig`。

#### 工作原理

1. 遍历 `plugins` 数组，合并每个插件的 `markdown`、`vite`、`vue` 等配置
2. 收集所有钩子函数（`buildEnd`、`transformHead`、`transformHtml`、`transformPageData`、`postRender`），并按照各自的策略合并：
   - `markdown.config`、`buildEnd` → 并发执行
   - `transformHead` → 并发执行后合并结果
   - `transformHtml`、`transformPageData`、`postRender` → 顺序执行，链式传递
3. 将插件中的 `client` 配置注入到内置的 `virtual-enhance-app` 虚拟模块
4. 最后合并用户自身的配置项

---

### definePlugin

用于定义 VitePress 插件。它是一个类型辅助函数，帮助开发者以规范化的方式创建插件。

```ts
import { definePlugin } from 'vitepress-tuck'

function definePlugin<T>(
  plugin: (option?: T) => VitepressPlugin,
): (option?: T) => VitepressPlugin
```

#### 参数

| 参数     | 类型                              | 说明                                       |
| -------- | --------------------------------- | ------------------------------------------ |
| `plugin` | `(option?: T) => VitepressPlugin` | 插件工厂函数，接收可选配置项，返回插件对象 |

---

### VitepressPlugin

插件对象的类型定义：

```ts
interface VitepressPlugin extends Pick<
  UserConfig,
  'markdown' | 'vite' | 'vue' | 'buildEnd' | 'transformHead' | 'transformHtml' | 'transformPageData' | 'postRender'
> {
  /**
   * 插件名称（必填，用于标识和调试）
   */
  name: string

  /**
   * 客户端配置，用于自动注入到 virtual:enhance-app
   */
  client?: {
    /**
     * 自定义的 import 语句列表
     *
     * @example
     * ```ts
     * imports: ['import "my-plugin/style.css"']
     * ```
     */
    imports?: string[]

    /**
     * 客户端增强函数名。
     * - 未设置: 不注入 enhanceApp 函数
     * - true: 默认函数名为 `enhanceApp`
     * - 字符串: 指定函数名
     *
     * @example
     * ```ts
     * enhance: 'enhanceAppWithMyPlugin'
     * ```
     */
    enhance?: string | boolean
  }
}
```

#### 支持的 VitePress 配置项

| 属性                | 类型                              | 说明                                                              |
| ------------------- | --------------------------------- | ----------------------------------------------------------------- |
| `markdown`          | `UserConfig['markdown']`          | Markdown 相关配置，常用于 `markdown.config` 注册 markdown-it 插件 |
| `vite`              | `UserConfig['vite']`              | Vite 配置，用于注册 Vite 插件和优化配置                           |
| `vue`               | `UserConfig['vue']`               | Vue 应用级别的配置                                                |
| `buildEnd`          | `UserConfig['buildEnd']`          | 构建完成钩子（并发执行）                                          |
| `transformHead`     | `UserConfig['transformHead']`     | 转换 HTML 头部钩子（并发执行，合并结果）                          |
| `transformHtml`     | `UserConfig['transformHtml']`     | 转换 HTML 钩子（顺序执行，链式传递）                              |
| `transformPageData` | `UserConfig['transformPageData']` | 转换页面数据钩子（顺序执行，链式传递）                            |
| `postRender`        | `UserConfig['postRender']`        | 页面渲染后钩子（顺序执行，链式传递）                              |

---

### virtual:enhance-app

`virtual:enhance-app` 是一个虚拟模块，由 `vitepress-tuck` 内置提供。它自动收集所有插件的 `client` 配置并生成对应的代码。

使用时在主题入口中导入：

```ts [.vitepress/theme/index.ts]
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
  },
}
```

TypeScript 类型支持需要添加类型引用：

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["vitepress-tuck/client-types"]
  }
}
```
