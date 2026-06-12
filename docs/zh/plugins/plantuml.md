# PlantUML

<NpmBadge name="vitepress-plugin-plantuml" />

PlantUML 图表插件，支持在 Markdown 中渲染 PlantUML 图表。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-plantuml
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import plantuml from 'vitepress-plugin-plantuml'

export default defineConfig({
  plugins: [
    plantuml(),
  ],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { plantumlMarkdownPlugin, plantumlVitePlugin } from 'vitepress-plugin-plantuml'

export default defineConfig({
  vite: {
    plugins: [plantumlVitePlugin()],
  },
  markdown: {
    config: (md) => {
      md.use(plantumlMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithPlantuml } from 'vitepress-plugin-plantuml/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithPlantuml(ctx)
  },
} satisfies Theme
```

## 语法

使用 `plantuml` 语言标记的代码块：

````md
```plantuml
@startuml
Alice -> Bob: 认证请求
Bob --> Alice: 认证响应
@enduml
```
````

### 输出格式

插件支持 `svg`（默认）和 `png` 两种输出格式。可在代码块中指定：

````md
```plantuml png
@startuml
class Example {
  +attribute: string
  +method(): void
}
@enduml
```
````

或全局配置默认格式：

```ts
plantuml('png') // 默认为 'svg'
```

## 配置

### PlantumlPluginOptions

```ts
interface PlantumlPluginOptions {
  /**
   * 输出格式，可选 'svg' | 'png'
   * @default 'svg'
   */
  format?: PlantumlFormat
}
```

## 功能特性

- **明暗主题适配** — 自动生成明暗两套图表，跟随 VitePress 主题切换
- **图表 / 源码切换** — 在渲染结果和 PlantUML 源码之间切换查看
- **全屏查看** — 点击全屏按钮以浮层方式查看图表
- **图片下载** — 一键下载当前图表为图片文件
- **多语言支持** — 内置中、英、日、韩、西、法、俄、德、葡九种语言
- **SVG 优化** — 输出 SVG 时自动通过 SVGO 优化，移除冗余样式和背景层
- **构建缓存** — 渲染结果缓存到磁盘，加速增量构建

## 内置语言

插件内置了以下语言的支持：

- English (en, en-US)
- 简体中文 (zh, zh-CN)
- 日本語 (ja)
- 한국어 (ko)
- Español (es)
- Français (fr)
- Русский (ru)
- Deutsch (de)
- Português (pt)

## 示例

### 时序图

```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml
```

### 用例图

```plantuml
@startuml
left to right direction
actor "顾客" as customer
actor "收银员" as cashier

rectangle 收银系统 {
  customer -- (结账)
  (结账) -- cashier
  (结账) .> (打印小票) : include
  (结账) .> (支付) : include
  (支付) .> (现金支付)
  (支付) .> (扫码支付)
}
@enduml
```

### 类图

```plantuml
@startuml
class Vehicle
class Car
class Bike

Vehicle <|-- Car
Vehicle <|-- Bike

class Engine
class Wheel

Car *-- Engine
Car *-- Wheel
@enduml
```

### 活动图

```plantuml
@startuml
start
:用户登录;
if (验证通过？) then (是)
  :进入首页;
  if (有新消息？) then (是)
    :显示消息提醒;
  else (否)
    :继续浏览;
  endif
else (否)
  :显示错误提示;
  :返回登录页;
endif
stop
@enduml
```
