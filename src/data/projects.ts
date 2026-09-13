export type ProjectCategory = 'infra' | 'tool' | 'template' | 'docs'

export interface ProjectItem {
  id: string
  name: string
  tagline: string
  description: string
  category: ProjectCategory
  language: string
  stars?: number
  githubUrl: string
  siteUrl?: string
  featured?: boolean
  badge?: string
}

export const projectCategories: { id: ProjectCategory | 'all'; name: string }[] = [
  { id: 'all', name: '全部项目' },
  { id: 'infra', name: '云端基础设施' },
  { id: 'tool', name: '客户端与工具' },
  { id: 'template', name: '工程模板与规范' },
  { id: 'docs', name: '知识库与文档' }
]

export const projects: ProjectItem[] = [
  {
    id: 'logshare',
    name: 'LogShare.CN',
    tagline: 'Minecraft / Hytale 日志分享与智能分析平台',
    description: 'mclo.gs 的中文增强自托管替代，具备多文件/压缩包智能解析、AI 根因分析、SpinYarn 日志反混淆、自研轻量 RAG 知识召回与自研客户端遥测 SDK。',
    category: 'infra',
    language: 'PHP / Swoole',
    stars: 81,
    githubUrl: 'https://github.com/NingZeStudio/LogShare',
    siteUrl: 'https://logshare.cn',
    featured: true,
    badge: '主力核心'
  },
  {
    id: 'miawa',
    name: '柠泽资源站 (miawa / Lemwood Mirror)',
    tagline: 'Minecraft 启动器 GitHub Release 高速镜像服务',
    description: '面向国内玩家分发场景的 GitHub Releases 自动化高速镜像与版本同步服务，内置 PBKDF2 PoW 防爬工作量证明、流量配额管理与多段并行断点续传。',
    category: 'infra',
    language: 'Go / Vue 3',
    stars: 10,
    githubUrl: 'https://github.com/NingZeStudio/miawa',
    siteUrl: 'https://miawa.cn',
    featured: true,
    badge: '重点服务'
  },
  {
    id: 'spinyarn',
    name: 'SpinYarn',
    tagline: '基于 Yarn Mapping 的 Minecraft 堆栈反混淆高性能服务',
    description: '使用 Rust 编写的高性能日志与堆栈混淆名还原 WebAPI，深度集成到 LogShare 引擎，支持 Bincode 高速映射缓存与极速调用。',
    category: 'infra',
    language: 'Rust',
    stars: 9,
    githubUrl: 'https://github.com/NingZeStudio/SpinYarn',
    featured: true
  },
  {
    id: 'openlitewaf',
    name: 'OpenLiteWaf',
    tagline: '极简 OpenResty Lua 站点防火墙',
    description: '轻量级边缘 WAF，提供 CC 频率拦截、攻击特征匹配（SQLi/XSS/RCE/路径遍历）、公开统计大屏与内存快照持久化，保护工作室全线站点。',
    category: 'infra',
    language: 'Lua / OpenResty',
    stars: 1,
    githubUrl: 'https://github.com/NingZeStudio/OpenLiteWaf',
    siteUrl: 'https://api.logshare.cn/security'
  },
  {
    id: 'openlitestats',
    name: 'OpenLiteStats',
    tagline: '极简边缘访问统计分析系统',
    description: '运行在 OpenResty Log 阶段的自研极简统计中间件，使用 64K Bitmap 与线性计数实现零侵入 UV 统计、流量吞吐与热门端点归纳。',
    category: 'infra',
    language: 'Lua / OpenResty',
    stars: 1,
    githubUrl: 'https://github.com/NingZeStudio/OpenLiteStats',
    siteUrl: 'https://api.logshare.cn/stats'
  },
  {
    id: 'opentui-panel',
    name: 'OpenTUIPanel',
    tagline: '极简轻量级终端服务器监控面板',
    description: '基于 Python TUI 打造的 Linux 服务器运维利器，专为终端 SSH 会话设计，实时监控 CPU、内存、网络吞吐以及 Docker / Compose 容器集群状态。',
    category: 'tool',
    language: 'Python',
    stars: 3,
    githubUrl: 'https://github.com/NingZeStudio/OpenTUIPanel'
  },
  {
    id: 'control-converter',
    name: 'Control Converter',
    tagline: '启动器触控按键映射转换工具',
    description: '支持在 Zalith Launcher 2 与 FoldCraftLauncher (FCL) 之间互相转换虚拟按键控制布局 JSON，解决跨启动器换端迁移痛点。',
    category: 'tool',
    language: 'Rust',
    stars: 4,
    githubUrl: 'https://github.com/NingZeStudio/control-converter'
  },
  {
    id: 'logshare-front-template',
    name: 'LogShare-Front-Template',
    tagline: '现代轻量工程化前台设计范式起步模板',
    description: '提炼自 LogShare 与柠泽资源站的前台设计范式，内置 Zinc 冷灰低饱和度色彩、物理回弹微动效、形变吸顶顶栏、全站横向防溢出与 QQ 分享矩阵。',
    category: 'template',
    language: 'Vue 3 / TypeScript',
    stars: 0,
    githubUrl: 'https://github.com/NingZeStudio/LogShare-Front-Template',
    siteUrl: 'https://github.com/NingZeStudio/LogShare-Front-Template',
    featured: true,
    badge: '开源模板'
  },
  {
    id: 'elementsplus-admin',
    name: 'ElementsPlus-Admin-Template',
    tagline: 'Iframe-first 架构后台管理模板',
    description: '基于 Vue 3 + TypeScript + Element Plus + Tailwind 打造的现代管理后台模板，独创常驻 DOM 实例池解耦保活方案与双向跨域通信协议。',
    category: 'template',
    language: 'Vue 3 / Element Plus',
    stars: 1,
    githubUrl: 'https://github.com/NingZeStudio/ElementsPlus-Admin-Template',
    badge: '后台模板'
  },
  {
    id: 'paraore-ui',
    name: 'ParaOre-UI',
    tagline: '基于 Mojang OreUI 规范的 Sass/CSS 组件库',
    description: '忠实复刻 Minecraft 原版 OreUI 界面设计语言的现代化 Web 前端样式库，为创作者社区提供原汁原味的 MC 像素与拟物美学控件。',
    category: 'template',
    language: 'TypeScript / Sass',
    stars: 4,
    githubUrl: 'https://github.com/NingZeStudio/ParaOre-UI'
  },
  {
    id: 'mitutorials',
    name: 'Mitutorials',
    tagline: '安卓 Java 版 Minecraft 综合技术文档',
    description: '为中文 Minecraft 玩家和服主编撰的移动端 Java 版新手引导、常见报错排查与调优手册，助力新玩家顺畅跨入游戏。',
    category: 'docs',
    language: 'TypeScript / VitePress',
    stars: 6,
    githubUrl: 'https://github.com/NingZeStudio/Mitutorials'
  }
]
