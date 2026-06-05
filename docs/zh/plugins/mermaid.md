# Mermaid

<NpmBadge name="vitepress-plugin-mermaid-tuck" />

Mermaid 图表插件，支持在 Markdown 中渲染 Mermaid 图表。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-mermaid-tuck
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import mermaid from 'vitepress-plugin-mermaid-tuck'

export default defineConfig({
  plugins: [
    mermaid(),
  ],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { mermaidMarkdownPlugin, mermaidVitePlugin } from 'vitepress-plugin-mermaid-tuck'

export default defineConfig({
  vite: {
    plugins: [mermaidVitePlugin({
      options: { theme: 'default' },
    })],
  },
  markdown: {
    config: (md) => {
      md.use(mermaidMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithMermaid } from 'vitepress-plugin-mermaid-tuck/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithMermaid(ctx)
  },
} satisfies Theme
```

## 语法

使用 `mermaid` 语言标记的代码块：

````md
```mermaid
flowchart LR
  Start --> Stop
```
````

````md
```mermaid
sequenceDiagram
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
  Alice->>John: See you later!
```
````

## 配置

### MermaidPluginOptions

```ts
interface MermaidPluginOptions {
  /**
   * Mermaid 配置项（排除 startOnLoad 和 themeVariables）
   */
  options?: Omit<MermaidConfig, 'startOnLoad' | 'themeVariables'> & {
    themeVariables?: MermaidThemeVariables
  }

  /**
   * 多语言配置
   */
  locales?: Record<string, MermaidLocaleData>
}
```

### MermaidThemeVariables

支持对 Mermaid 各类图表的主题变量进行自定义，涵盖：

- 基础变量（背景色、文字颜色、线条颜色等）
- C4、Class、ER 图变量
- Flowchart 变量
- Gantt 图变量
- Git 图变量
- Journey 图变量
- Pie 图变量
- Requirement 图变量
- State 图变量
- Sequence 图变量

### MermaidLocaleData

```ts
interface MermaidLocaleData {
  chart?: string       // 默认 'Chart'
  source?: string      // 默认 'Source'
  fullscreen?: string  // 默认 'Fullscreen'
  download?: string    // 默认 'Download'
}
```

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

```mermaid
---
title: Flowchart
---
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
```

```mermaid
---
title: Sequence Diagram
---
sequenceDiagram
  Alice ->> Bob: Hello Bob, how are you?
  Bob-->>John: How about you John?
  Bob--x Alice: I am good thanks!
  Bob-x John: I am good thanks!
  Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

  Bob-->Alice: Checking with John...
  Alice->John: Yes... John, how are you?
```

```mermaid
---
title: Animal Example
---
classDiagram
  note "From Duck till Zebra"
  Animal <|-- Duck
  note for Duck "can fly<br>can swim<br>can dive<br>can help in debugging"
  Animal <|-- Fish
  Animal <|-- Zebra
  Animal : +int age
  Animal : +String gender
  Animal: +isMammal()
  Animal: +mate()
  class Duck{
    +String beakColor
    +swim()
    +quack()
  }
  class Fish{
    -int sizeInFeet
    -canEat()
  }
  class Zebra{
    +bool is_wild
    +run()
  }
```

```mermaid
gantt
  dateFormat  YYYY-MM-DD
  title       Adding GANTT diagram functionality to mermaid
  excludes    weekends
  %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

  section A section
  Completed task            :done,    des1, 2014-01-06,2014-01-08
  Active task               :active,  des2, 2014-01-09, 3d
  Future task               :         des3, after des2, 5d
  Future task2              :         des4, after des3, 5d

  section Critical tasks
  Completed task in the critical line :crit, done, 2014-01-06,24h
  Implement parser                    :crit, done, after des1, 2d
  Create tests for parser             :crit, active, 3d
  Future task in critical line        :crit, 5d
  Create tests for renderer           :2d
  Add to mermaid                      :1d

  section Documentation
  Describe gantt syntax               :active, a1, after des1, 3d
  Add gantt diagram to demo page      :after a1  , 20h
  Add another diagram to demo page    :doc1, after a1  , 48h

  section Last section
  Describe gantt syntax               :after doc1, 3d
  Add gantt diagram to demo page      :20h
  Add another diagram to demo page    :48h
```
