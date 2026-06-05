# Video

<NpmBadge name="vitepress-plugin-video" />

视频嵌入插件，支持 Bilibili、YouTube、AcFun 和 ArtPlayer。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-video
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import video from 'vitepress-plugin-video'

export default defineConfig({
  plugins: [
    video({
      // 可选项，全部默认为 true
      artplayer: true,
      youtube: true,
      bilibili: true,
      acfun: true,
    }),
  ],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { videoMarkdownPlugin } from 'vitepress-plugin-video'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(videoMarkdownPlugin, {
        artplayer: true,
        youtube: true,
        bilibili: true,
        acfun: true,
      })
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithVideo } from 'vitepress-plugin-video/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithVideo(ctx)
  },
} satisfies Theme
```

## 语法

### Bilibili

嵌入 Bilibili 视频

```md
@[bilibili](bvid)
@[bilibili](aid cid)
@[bilibili p2 autoplay time=30](bvid)
```

| 配置项      | 类型               | 描述                           |
| ----------- | ------------------ | ------------------------------ |
| `p{number}` | -                  | 视频分 P 号                    |
| `autoplay`  | `boolean`          | 自动播放                       |
| `time`      | `number \| string` | 开始时间，秒数或 HH:MM:SS 格式 |

### YouTube

嵌入 YouTube 视频

```md
@[youtube](video_id)
@[youtube autoplay loop start=10 end=120](video_id)
```

| 配置项     | 类型      | 描述           |
| ---------- | --------- | -------------- |
| `autoplay` | `boolean` | 自动播放       |
| `loop`     | `boolean` | 循环播放       |
| `start`    | `number`  | 开始时间，秒数 |
| `end`      | `number`  | 结束时间，秒数 |

### AcFun

嵌入 AcFun 视频

```md
@[acfun](ac_id)
```

### ArtPlayer

使用 ArtPlayer 播放器嵌入本地或远程视频：

```md
@[artPlayer](/videos/demo.mp4)
@[artPlayer muted autoplay poster="/cover.jpg" width="800px"](/videos/demo.mp4)
```

| 配置项     | 类型      | 默认值   | 描述              |
| ---------- | --------- | -------- | ----------------- |
| `autoplay` | `boolean` | `false`  | 自动播放          |
| `muted`    | `boolean` | `false`  | 静音              |
| `loop`     | `boolean` | `false`  | 循环播放          |
| `volume`   | `number`  | `0.75`   | 音量等级          |
| `poster`   | `string`  | -        | 封面图片 URL      |
| `autoMini` | `boolean` | `false`  | 自 mini模式       |
| `width`    | `string`  | `"100%"` | 播放器宽度        |
| `height`   | `string`  | -        | 播放器高度        |
| `ratio`    | `string`  | -        | 比例，例如 "16:9" |

支持 `mp4`, `mp3`, `webm`, `ogg`, `mkv`, `mov` 格式。

如果您的视频格式为 `'mpd'`, `'dash'`, 还需要再手动安装 `dashjs` ：

:::npm-to

```sh
npm i dashjs
```

:::

如果您的视频格式为 `'m3u8'`, `'hls'`, 还需要再手动安装 `hls.js` ：

:::npm-to

```sh
npm i hls.js
```

:::

如果您的视频格式为 `'ts'`, `'flv'`, 还需要再手动安装 `mpegts.js` ：

:::npm-to

```sh
npm i mpegts.js
```

:::

## 配置

```ts
interface VideoPluginOptions {
  /**
   * 启用 ArtPlayer 播放器
   * @default true
   */
  artplayer?: boolean

  /**
   * 启用 YouTube 视频嵌入
   * @default true
   */
  youtube?: boolean

  /**
   * 启用 Bilibili 视频嵌入
   * @default true
   */
  bilibili?: boolean

  /**
   * 启用 AcFun 视频嵌入
   * @default true
   */
  acfun?: boolean
}
```

## 示例

### Bilibili

```md
@[bilibili](BV1EZ42187Hg)
```

@[bilibili](BV1EZ42187Hg)

### YouTube

```md
@[youtube](0JJPfz5dg20)
```

@[youtube](0JJPfz5dg20)

### AcFun

```md
@[acfun](ac47431669)
```

@[acfun](ac47431669)

### ArtPlayer

```md
@[artPlayer](https://artplayer.org/assets/sample/video.mp4)
```

@[artPlayer](https://artplayer.org/assets/sample/video.mp4)
