# Obsidian

<NpmBadge name="vitepress-plugin-obsidian" />

提供 Obsidian 风格 Markdown 语法支持，包括 Wiki 链接、Callout 标注、嵌入文件和注释语法。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-obsidian
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import obsidian from 'vitepress-plugin-obsidian'

export default defineConfig({
  plugins: [
    obsidian({
      // 可选项，全部默认为 true
      callout: true,
      comment: true,
      embedLink: true,
      wikiLink: true,
    }),
  ],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

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

## Wiki 链接

Wiki 链接是 Obsidian 中用于链接到其他笔记的语法。使用双括号 `[[]]` 包裹内容来创建内部链接。

### 语法

```md
[[文件名]]
[[文件名#标题]]
[[文件名#标题#子标题]]
[[文件名|别名]]
[[文件名#标题|别名]]
[[https://example.com|外部链接]]
```

### 文件名搜索规则

当使用 Wiki 链接时，文件名会按照以下规则进行搜索匹配：

**匹配优先级：**

1. **完整路径** - 精确匹配文件路径
2. **模糊匹配** - 匹配路径结尾的文件名，优先匹配最短路径

**路径解析规则：**

- **相对路径**（以 `.` 开头）：相对于当前文件所在目录解析
- **绝对路径**（不以 `.` 开头）：在整个文档树中搜索，优先匹配最短路径
- **目录形式**（以 `/` 结尾）：匹配该目录下的 `index.md`

**示例：**

假设文档结构如下：

```txt
docs/
├── index.md
├── guide/
│   ├── index.md
│   └── markdown/
│       └── obsidian.md
```

在 `docs/guide/markdown/obsidian.md` 中：

| 语法           | 匹配结果                                                 |
| -------------- | -------------------------------------------------------- |
| `[[obsidian]]` | 匹配 `docs/guide/markdown/obsidian.md`（通过文件名检索） |
| `[[./]]`       | 匹配 `docs/guide/markdown/index.md`（相对路径）          |
| `[[../]]`      | 匹配 `docs/guide/README.md`（上级目录）                  |
| `[[guide/]]`   | 匹配 `docs/guide/README.md`（目录形式）                  |

### 示例

**外部链接：**

**输入：**

```md
[[https://example.com|外部链接]]
```

**输出：**

[[https://example.com|外部链接]]

**内部锚点链接：**

**输入：**

```md
[[npm-to]]  <!-- 通过文件名检索 -->
[[#Wiki 链接]]  <!-- 当前页面使用 heading -->
[[file-tree#配置]]  <!-- 通过文件名检索，并链接到 heading -->
```

**输出：**

[[npm-to]]

[[#Wiki 链接]]

[[file-tree#配置]]

[Obsidian 官方 - **Wiki Links**](https://obsidian.md/zh/help/links){.readmore}

## 嵌入内容

嵌入语法允许你将其他文件资源插入到当前页面中。

### 语法

```md
![[文件名]]
![[文件名#标题]]
![[文件名#标题#子标题]]
```

文件名搜索规则与 [Wiki 链接](#文件名搜索规则) 相同。

::: info 以 `/` 开头或 无路径前缀如 `./` 形式的，从 `public` 目录中加载资源
:::

### 图片嵌入

**语法：**

```md
![[图片]]
![[图片|宽度]]
![[图片|宽度x高度]]
```

支持格式：`jpg`、`jpeg`、`png`、`gif`、`avif`、`webp`、`svg`、`bmp`、`ico`、`tiff`、`apng`、`jfif`、`pjpeg`、`pjp`、`xbm`

**示例：**

```md
![[tuck-logo.svg]]
```

![[tuck-logo.svg|125]]

### PDF 嵌入

> [!NOTE]
> PDF 嵌入需要添加 [vitepress-plugin-pdf](./pdf.md) 插件才能正常工作。

**语法：**

```md
![[文档.pdf]]
![[文档.pdf#page=1]]  <!-- #page=1 表示第一页 -->
![[文档.pdf#page=1#height=300]]  <!-- #page=页码 #height=高度 -->
```

支持格式：`pdf`

**示例：**

```md
![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]
```

![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]

---

### 音频嵌入

**语法：**

```md
![[音频文件]]
```

支持格式：`mp3`、`flac`、`wav`、`ogg`、`opus`、`webm`、`acc`

---

### 视频嵌入

> [!NOTE]
> 视频嵌入需要添加 [vitepress-plugin-video](./video.md) 插件才能正常工作。

**语法：**

```md
![[视频文件]]
![[视频文件#height=400]]  <!-- 设置视频高度 -->
```

支持格式：`mp4`、`webm`、`mov` 等

---

### 内容片段嵌入

通过 `#标题` 可以嵌入指定标题下的内容片段：

**输入：**

```md
![[我的笔记]]
![[我的笔记#标题一]]
![[我的笔记#标题一#子标题]]
```

[Obsidian 官方 - 插入文件](https://obsidian.md/zh/help/embeds){.readmore}
[Obsidian 官方 - 文件格式](https://obsidian.md/zh/help/file-formats){.readmore}

## Callout

Callout 是一种用于突出显示重要信息的语法，类似于 Vitepress 的 `::: note` 提示框语法。

### 语法

```md
> [!note]
> 内容
```

**可选标题：**

```md
> [!tip] 自定义标题
> 内容
```

### 类型

Callout 支持以下类型，别名会自动映射到对应的主要类型：

| 类型        | 别名                                                                | 说明             |
| ----------- | ------------------------------------------------------------------- | ---------------- |
| `note`      | `quote`, `cite`                                                     | 笔记、引用       |
| `tip`       | `hint` ,`check`, `done`,`success`                                   | 技巧、提示       |
| `info`      | `todo`                                                              | 信息、待办       |
| `warning`   | `question`, `help`, `faq`                                           | 警告、问题、帮助 |
| `caution`   | `attention`, `failure`, `fail`, `missing`, `danger`, `error`, `bug` | 注意、失败、危险 |
| `important` | `example`                                                           | 重要、示例       |
| `details`   | `abstract`, `summary`, `tldr`                                       | 详情、摘要       |

### 示例

**基础用法：**

**输入：**

```md
> [!NOTE]
> 这是一个笔记提示框。
```

**输出：**

> [!NOTE]
> 这是一个笔记提示框。

---

**带标题：**

**输入：**

```md
> [!TIP] 实用技巧
> 使用 `pnpm` 可以显著加快依赖安装速度。
```

**输出：**

> [!TIP] 实用技巧
> 使用 `pnpm` 可以显著加快依赖安装速度。

---

**多种类型：**

**输入：**

```md
> [!success]
> 操作成功完成！
>
> [!warning]
> 这是一个警告信息。
>
> [!caution]
> 请谨慎操作，此操作不可撤销。
```

**输出：**

> [!success]
> 操作成功完成！

> [!warning]
> 这是一个警告信息。

> [!caution]
> 请谨慎操作，此操作不可撤销。

---

**Details 类型：**

`details` 类型会渲染为 HTML `<details>` 元素，支持折叠展开：

**输入：**

```md
> [!details]
> 点我展开更多内容
>
> 这是一段隐藏的内容。
```

**输出：**

> [!details]
> 点我展开更多内容
>
> 这是一段隐藏的内容。

[Obsidian 官方 - Callout](https://obsidian.md/zh/help/callouts){.readmore}

## 注释

使用 `%%` 包裹的内容会被当作注释，不会渲染到页面中。

### 语法

**行内注释：**

```md
这是一个 %%行内注释%% 示例。
```

**块级注释：**

```md
%%
这是一个块级注释。
可以跨越多行。
%%
```

### 示例

**行内注释：**

**输入：**

```md
这是一个 %%行内注释%% 示例。
```

**输出：**

这是一个 %%行内注释%% 示例。

---

**块级注释：**

**输入：**

```md
注释之前的内容

%%
这是一个块级注释。

可以跨越多行。
%%

注释之后的内容
```

**输出：**

注释之前的内容

%%
这是一个块级注释。
%%

可以跨越多行。

[Obsidian 官方 - 注释](https://obsidian.md/zh/help/syntax#%E6%B3%A8%E9%87%8A){.readmore}

## 注意事项

- 这些插件提供的是 **兼容性支持**，并非完全实现 Obsidian 的全部功能
- 部分 Obsidian 特有的功能（如内部链接的图谱视图、双向链接等）不在支持范围内
- 嵌入内容时，被嵌入的页面也会参与主题的构建过程
- PDF 嵌入需要添加 [vitepress-plugin-pdf](./pdf.md) 插件才能正常工作
- 视频嵌入需要添加 [vitepress-plugin-video](./video.md) 插件才能正常工作
- 以 `/` 开头或使用 `./` 形式的嵌入资源会从 `public` 目录加载
