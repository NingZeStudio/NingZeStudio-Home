export interface LauncherItem {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  website: string
  github?: string
  platforms: string[]
  integrationFeature: string
  logo?: string
}

export const launchers: LauncherItem[] = [
  {
    id: 'zl2',
    name: 'Zalith Launcher 2',
    shortName: 'ZL2',
    tagline: '现代化 Android Minecraft 启动器',
    description: '采用现代化技术栈与美观界面设计的 Android 启动器，深度内置 LogShare 一键日志上传与智能分析生态。',
    website: 'https://zalithlauncher.cn',
    github: 'https://github.com/ZalithLauncher/ZalithLauncher2',
    platforms: ['Android'],
    integrationFeature: '内置 LogShare 日志一键上传与崩溃智能排查',
    logo: new URL('@/assets/img/launchers/zl2.webp', import.meta.url).href
  },
  {
    id: 'fcl',
    name: 'Fold Craft Launcher',
    shortName: 'FCL',
    tagline: '广受赞誉的 Android 移动端 Minecraft 启动器',
    description: '功能强大且高度可定制的 Android Java 版启动器，支持丰富的自定义控制台、Mod 管理与 LogShare 崩溃诊断直传。',
    website: 'https://foldcraftlauncher.cn',
    github: 'https://github.com/FCL-Team/FoldCraftLauncher',
    platforms: ['Android'],
    integrationFeature: '原生集成 LogShare 客户端接口，错误日志直链分享',
    logo: new URL('@/assets/img/launchers/fcl.png', import.meta.url).href
  },
  {
    id: 'axolotl',
    name: 'Axolotl Launcher',
    shortName: 'Axolotl',
    tagline: '轻量优雅的 Minecraft 跨平台启动器',
    description: '专为极致响应与极简体验打造的跨平台启动器，集成社区诊断生态，为玩家提供开箱即用的流畅游玩与报错反馈环境。',
    website: 'https://axlmc.org',
    github: 'https://github.com/Mystic-Stars/Axolotl',
    platforms: ['跨平台'],
    integrationFeature: '支持 LogShare 诊断协议与异常堆栈一键分析',
    logo: new URL('@/assets/img/launchers/axolotl.png', import.meta.url).href
  },
  {
    id: 'pilauncher',
    name: 'PiLauncher',
    shortName: 'PiLauncher',
    tagline: '专为嵌入式与便携设备优化的 Minecraft 跨平台启动器',
    description: '聚焦便携端与嵌入式 Linux 平台的轻量级跨平台启动器，内置错误捕捉机制，支持将运行时崩溃日志快速同步至 LogShare。',
    website: 'https://pil.nav4ai.net/',
    github: 'https://github.com/MrShellad/pilauncher',
    platforms: ['跨平台'],
    integrationFeature: '对接 LogShare 开放 API，提供堆栈溯源直达链接',
    logo: new URL('@/assets/img/launchers/pilauncher.png', import.meta.url).href
  },
  {
    id: 'amcl',
    name: 'AxeMinecraftLauncher',
    shortName: 'AMCL',
    tagline: '全球首款纯血鸿蒙 Minecraft 启动工具',
    description: '体积轻巧、功能聚焦的鸿蒙 Minecraft 启动工具，深度打通日志生态，协助玩家与技术服主快速排查客户端闪退。',
    website: 'https://amcl.lovedhy.cn/',
    github: 'https://github.com/LZZLHY/amcl',
    platforms: ['鸿蒙'],
    integrationFeature: '集成 LogShare 崩溃报告生成与在线分析',
    logo: new URL('@/assets/img/launchers/amcl.png', import.meta.url).href
  }
]
