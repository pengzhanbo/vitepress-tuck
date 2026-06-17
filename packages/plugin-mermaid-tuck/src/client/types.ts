import type { MermaidConfig } from 'mermaid'

/**
 * Theme variable overrides for Mermaid diagrams, organized by diagram type.
 *
 * Mermaid 图表的主题变量覆盖，按图表类型分组。
 *
 * All fields are optional; omitted fields fall back to Mermaid's defaults for
 * the active theme. The index signature allows custom variables not yet
 * covered by this interface.
 *
 * 所有字段均为可选，未提供的字段会回退到当前主题下 Mermaid 的默认值。
 * 索引签名允许使用本接口尚未覆盖的自定义变量。
 */
export interface MermaidThemeVariables {
  /** Whether dark mode is active / 是否启用暗色模式 */
  dark?: boolean
  /** Diagram background color / 图表背景色 */
  background?: string

  // Basic
  /** Default text color / 默认文本颜色 */
  textColor?: string
  /** Default line color / 默认线条颜色 */
  lineColor?: string
  /** Main background color / 主背景色 */
  mainBkg?: string
  /** Error state background color / 错误状态背景色 */
  errorBkgColor?: string
  /** Error state text color / 错误状态文本颜色 */
  errorTextColor?: string
  /** Font family applied to diagram text / 图表文本使用的字体族 */
  fontFamily?: string
  /** Title text color / 标题文本颜色 */
  titleColor?: string
  /** Primary border color / 主要边框颜色 */
  border1?: string
  /** Secondary border color / 次要边框颜色 */
  border2?: string

  // Nodes
  /** Node border color / 节点边框颜色 */
  nodeBorder?: string
  /** Node text color / 节点文本颜色 */
  nodeTextColor?: string

  /** Primary fill color / 主要填充色 */
  primaryColor?: string
  /** Primary border color / 主要边框颜色 */
  primaryBorderColor?: string
  /** Primary text color / 主要文本颜色 */
  primaryTextColor?: string

  /** Secondary fill color / 次要填充色 */
  secondaryColor?: string
  /** Secondary border color / 次要边框颜色 */
  secondaryBorderColor?: string
  /** Secondary text color / 次要文本颜色 */
  secondaryTextColor?: string

  /** Tertiary fill color / 第三级填充色 */
  tertiaryColor?: string
  /** Tertiary border color / 第三级边框颜色 */
  tertiaryBorderColor?: string
  /** Tertiary text color / 第三级文本颜色 */
  tertiaryTextColor?: string

  // C4
  /** C4 person border color / C4 人物边框颜色 */
  personBorder?: string
  /** C4 person background color / C4 人物背景色 */
  personBkg?: string

  // Class
  /** Class diagram text color / 类图文本颜色 */
  classText?: string

  // Er
  /** Odd row background color for ER attributes / ER 图属性奇数行背景色 */
  attributeBackgroundColorOdd?: string
  /** Even row background color for ER attributes / ER 图属性偶数行背景色 */
  attributeBackgroundColorEven?: string

  // Flowchart
  /** Arrowhead color / 箭头颜色 */
  arrowheadColor?: string
  /** Cluster background color / 集群背景色 */
  clusterBkg?: string
  /** Cluster border color / 集群边框颜色 */
  clusterBorder?: string
  /** Edge label background color / 边标签背景色 */
  edgeLabelBackground?: string

  // Gantt
  /** Background color for excluded ranges / 排除区间背景色 */
  excludeBkgColor?: string
  /** Section background color / 分区背景色 */
  sectionBkgColor?: string
  /** Alternate section background color / 备用分区背景色 */
  sectionBkgColor2?: string
  /** Alternate section background color / 交替分区背景色 */
  altSectionBkgColor?: string
  /** Grid line color / 网格线颜色 */
  gridColor?: string
  /** Today marker line color / 今日标记线颜色 */
  todayLineColor?: string
  /** Task background color / 任务背景色 */
  taskBkgColor?: string
  /** Task border color / 任务边框颜色 */
  taskBorderColor?: string
  /** Task text color / 任务文本颜色 */
  taskTextColor?: string
  /** Task text color on dark backgrounds / 深色背景上的任务文本颜色 */
  taskTextDarkColor?: string
  /** Clickable task text color / 可点击任务文本颜色 */
  taskTextClickableColor?: string
  /** Task text color when placed outside / 任务文本位于外部时的颜色 */
  taskTextOutsideColor?: string
  /** Active task border color / 活动任务边框颜色 */
  activeTaskBorderColor?: string
  /** Active task background color / 活动任务背景色 */
  activeTaskBkgColor?: string
  /** Completed task border color / 已完成任务边框颜色 */
  doneTaskBorderColor?: string
  /** Completed task background color / 已完成任务背景色 */
  doneTaskBkgColor?: string
  /** Critical task border color / 关键任务边框颜色 */
  critBorderColor?: string
  /** Critical task background color / 关键任务背景色 */
  critBkgColor?: string

  // Git
  /** Git branch color slot 1 / Git 分支颜色槽 1 */
  git1?: string
  /** Git branch color slot 2 / Git 分支颜色槽 2 */
  git2?: string
  /** Git branch color slot 3 / Git 分支颜色槽 3 */
  git3?: string
  /** Git branch color slot 4 / Git 分支颜色槽 4 */
  git4?: string
  /** Git branch color slot 5 / Git 分支颜色槽 5 */
  git5?: string
  /** Git branch color slot 6 / Git 分支颜色槽 6 */
  git6?: string
  /** Git branch color slot 7 / Git 分支颜色槽 7 */
  git7?: string
  /** Git branch 1 label color / Git 分支 1 标签颜色 */
  gitBranchLabel1?: string
  /** Git branch 2 label color / Git 分支 2 标签颜色 */
  gitBranchLabel2?: string
  /** Git branch 3 label color / Git 分支 3 标签颜色 */
  gitBranchLabel3?: string
  /** Git branch 4 label color / Git 分支 4 标签颜色 */
  gitBranchLabel4?: string
  /** Git branch 5 label color / Git 分支 5 标签颜色 */
  gitBranchLabel5?: string
  /** Git branch 6 label color / Git 分支 6 标签颜色 */
  gitBranchLabel6?: string
  /** Git branch 7 label color / Git 分支 7 标签颜色 */
  gitBranchLabel7?: string
  /** Git branch 1 inverse color / Git 分支 1 反色 */
  gitInv1?: string
  /** Git branch 2 inverse color / Git 分支 2 反色 */
  gitInv2?: string
  /** Git branch 3 inverse color / Git 分支 3 反色 */
  gitInv3?: string
  /** Git branch 4 inverse color / Git 分支 4 反色 */
  gitInv4?: string
  /** Git branch 5 inverse color / Git 分支 5 反色 */
  gitInv5?: string
  /** Git branch 6 inverse color / Git 分支 6 反色 */
  gitInv6?: string
  /** Git branch 7 inverse color / Git 分支 7 反色 */
  gitInv7?: string
  /** Commit label background color / 提交标签背景色 */
  commitLabelBackground?: string
  /** Commit label text color / 提交标签文本颜色 */
  commitLabelColor?: string
  /** Commit label font size / 提交标签字体大小 */
  commitLabelFontSize?: string
  /** Tag label border color / 标签边框颜色 */
  tagLabelBorder?: string
  /** Tag label background color / 标签背景色 */
  tagLabelBackground?: string
  /** Tag label text color / 标签文本颜色 */
  tagLabelColor?: string
  /** Tag label font size / 标签字体大小 */
  tagLabelFontSize?: string

  // Journey
  /** Journey fill color slot 0 / 旅程图填充色槽 0 */
  fillType0?: string
  /** Journey fill color slot 1 / 旅程图填充色槽 1 */
  fillType1?: string
  /** Journey fill color slot 2 / 旅程图填充色槽 2 */
  fillType2?: string
  /** Journey fill color slot 3 / 旅程图填充色槽 3 */
  fillType3?: string
  /** Journey fill color slot 4 / 旅程图填充色槽 4 */
  fillType4?: string
  /** Journey fill color slot 5 / 旅程图填充色槽 5 */
  fillType5?: string
  /** Journey fill color slot 6 / 旅程图填充色槽 6 */
  fillType6?: string
  /** Journey fill color slot 7 / 旅程图填充色槽 7 */
  fillType7?: string

  // Pie
  /** Pie slice 1 color / 饼图切片 1 颜色 */
  pie1?: string
  /** Pie slice 2 color / 饼图切片 2 颜色 */
  pie2?: string
  /** Pie slice 3 color / 饼图切片 3 颜色 */
  pie3?: string
  /** Pie slice 4 color / 饼图切片 4 颜色 */
  pie4?: string
  /** Pie slice 5 color / 饼图切片 5 颜色 */
  pie5?: string
  /** Pie slice 6 color / 饼图切片 6 颜色 */
  pie6?: string
  /** Pie slice 7 color / 饼图切片 7 颜色 */
  pie7?: string
  /** Pie slice 8 color / 饼图切片 8 颜色 */
  pie8?: string
  /** Pie slice 9 color / 饼图切片 9 颜色 */
  pie9?: string
  /** Pie slice 10 color / 饼图切片 10 颜色 */
  pie10?: string
  /** Pie slice 11 color / 饼图切片 11 颜色 */
  pie11?: string
  /** Pie slice 12 color / 饼图切片 12 颜色 */
  pie12?: string
  /** Pie stroke width / 饼图描边宽度 */
  pieStrokeWidth?: string
  /** Pie slice opacity / 饼图切片不透明度 */
  pieOpacity?: string
  /** Pie outer stroke color / 饼图外描边颜色 */
  pieOuterStrokeColor?: string
  /** Pie outer stroke width / 饼图外描边宽度 */
  pieOuterStrokeWidth?: string
  /** Pie title text size / 饼图标题文本大小 */
  pieTitleTextSize?: string
  /** Pie title text color / 饼图标题文本颜色 */
  pieTitleTextColor?: string

  // Requirement
  /** Requirement background color / 需求图背景色 */
  requirementBackground?: string
  /** Requirement border color / 需求图边框颜色 */
  requirementBorderColor?: string
  /** Requirement border size / 需求图边框尺寸 */
  requirementBorderSize?: string
  /** Requirement text color / 需求图文本颜色 */
  requirementTextColor?: string
  /** Relation line color / 关系线颜色 */
  relationColor?: string
  /** Relation label background color / 关系标签背景色 */
  relationLabelBackground?: string
  /** Relation label text color / 关系标签文本颜色 */
  relationLabelColor?: string

  // State
  /** State label color / 状态图标签颜色 */
  labelColor?: string

  // Sequence
  /** Signal line color / 时序图信号线颜色 */
  signalColor?: string
  /** Signal text color / 时序图信号文本颜色 */
  signalTextColor?: string
  /** Label box border color / 标签框边框颜色 */
  labelBoxBorderColor?: string
  /** Label box background color / 标签框背景色 */
  labelBoxBkgColor?: string
  /** Label text color / 标签文本颜色 */
  labelTextColor?: string
  /** Loop text color / 循环文本颜色 */
  loopTextColor?: string
  /** Note background color / 备注背景色 */
  noteBkgColor?: string
  /** Note text color / 备注文本颜色 */
  noteTextColor?: string
  /** Note border color / 备注边框颜色 */
  noteBorderColor?: string
  /** Activation border color / 激活条边框颜色 */
  activationBorderColor?: string
  /** Activation background color / 激活条背景色 */
  activationBkgColor?: string
  /** Sequence number color / 序列号颜色 */
  sequenceNumberColor?: string
  /** Actor border color / 角色边框颜色 */
  actorBorder?: string
  /** Actor background color / 角色背景色 */
  actorBkg?: string
  /** Actor text color / 角色文本颜色 */
  actorTextColor?: string
  /** Actor line color / 角色生命线颜色 */
  actorLineColor?: string

  /** Index signature allowing additional theme variables / 索引签名，允许额外的主题变量 */
  [props: string]: boolean | string | undefined
}

/**
 * Mermaid runtime options exposed to plugin consumers.
 *
 * 暴露给使用方的 Mermaid 运行时选项。
 *
 * Derived from `MermaidConfig` but omits `startOnLoad` (the plugin renders
 * manually) and replaces `themeVariables` with the plugin's
 * {@link MermaidThemeVariables} type. The `themeVariables` field accepts
 * either a static object or a function that receives the current dark-mode
 * flag and returns the matching variables.
 *
 * 基于 `MermaidConfig` 派生，但移除了 `startOnLoad`（由插件手动控制渲染），
 * 并使用插件自定义的 {@link MermaidThemeVariables} 类型替换 `themeVariables`。
 * `themeVariables` 字段既可接受静态对象，也可接受接收当前暗色模式标志
 * 并返回对应变量的函数。
 */
export type MermaidOptions = Omit<
  MermaidConfig,
  'startOnLoad' | 'themeVariables'
> & {
  themeVariables?:
    | MermaidThemeVariables
    | ((isDarkMode: boolean) => MermaidThemeVariables)
}

/**
 * Locale strings used by the mermaid plugin UI.
 *
 * mermaid 插件界面使用的多语言文案。
 */
export interface MermaidLocaleData {
  /** Label for the chart tab / 图表标签页文案 */
  chart?: string
  /** Label for the source code tab / 源代码标签页文案 */
  source?: string
  /** Label for the fullscreen button / 全屏按钮文案 */
  fullscreen?: string
}
