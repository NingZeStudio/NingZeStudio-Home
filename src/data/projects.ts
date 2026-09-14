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
  { id: 'all', name: '全部开源项目' },
  { id: 'infra', name: '核心服务与基础设施' },
  { id: 'tool', name: '客户端与运维工具' },
  { id: 'template', name: '工程模板与设计规范' },
  { id: 'docs', name: '技术知识库与文档' }
]

export const projects: ProjectItem[] = [
  {
    id: 'logshare',
    name: 'LogShare.CN',
    tagline: 'Minecraft / Hytale 日志分享与智能分析平台',
    description:
      '面向中文社区的高并发自托管日志诊断系统。具备多文件与压缩包解析、本地错误特征定位与智能分析、SpinYarn 混淆名还原、自研轻量 RAG 知识库与客户端遥测 SDK。',
    category: 'infra',
    language: 'PHP 8.4+ / Swoole 6.2',
    stars: 81,
    githubUrl: 'https://github.com/NingZeStudio/LogShare',
    siteUrl: 'https://logshare.cn',
    featured: true,
    badge: '核心支柱'
  },
  {
    id: 'miawa',
    name: '柠泽资源站 (miawa)',
    tagline: 'Minecraft 启动器 GitHub Release 高速镜像服务',
    description:
      '自动化追踪上游仓库版本并实现多节点断点续传加速。内置 PBKDF2 工作量证明（PoW）反爬门控与流量配额调度，保障国内终端玩家下载连通性。',
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
    tagline: '基于 Yarn Mapping 的堆栈反混淆高性能引擎',
    description:
      '针对 Minecraft 生产堆栈混淆名还原自研的系统级中间件。深度集成到 LogShare 引擎，提供 Bincode 序列化映射缓存与极速反混淆能力。',
    category: 'infra',
    language: 'Rust / PHP 扩展',
    stars: 9,
    githubUrl: 'https://github.com/NingZeStudio/SpinYarn',
    featured: true,
    badge: '系统扩展'
  },
  {
    id: 'openlitewaf',
    name: 'OpenLiteWaf',
    tagline: '极简 OpenResty Lua 边缘站点防护防火墙',
    description:
      '无侵入式边缘 WAF 中间件。提供高频 CC 流量阻断、主流 Web 攻击特征正则匹配、公共统计大屏与 Worker 内存快照持久化，保护工作室全线公网节点。',
    category: 'infra',
    language: 'Lua / OpenResty',
    stars: 1,
    githubUrl: 'https://github.com/NingZeStudio/OpenLiteWaf',
    siteUrl: 'https://api.logshare.cn/security'
  },
  {
    id: 'openlitestats',
    name: 'OpenLiteStats',
    tagline: '极简边缘访问统计与分析系统',
    description:
      '部署在 OpenResty Log 阶段的自研统计组件。使用 64K Bitmap 与线性计数算法实现轻量级 UV 统计、流量吞吐监控与热点端点聚合。',
    category: 'infra',
    language: 'Lua / OpenResty',
    stars: 1,
    githubUrl: 'https://github.com/NingZeStudio/OpenLiteStats',
    siteUrl: 'https://api.logshare.cn/stats'
  },
  {
    id: 'logshare-front-template',
    name: 'LogShare-Front-Template',
    tagline: '现代轻量工程化前台设计范式起步模板',
    description:
      '蒸馏提炼自 LogShare 与柠泽资源站的前台工程范式。内置 Zinc 低饱和色彩、物理微回弹阻尼、形变吸顶顶栏、全站横向防溢出与移动端抽屉导航。',
    category: 'template',
    language: 'Vue 3 / TypeScript',
    stars: 1,
    githubUrl: 'https://github.com/NingZeStudio/LogShare-Front-Template',
    siteUrl: 'https://github.com/NingZeStudio/LogShare-Front-Template',
    featured: true,
    badge: '官方模板'
  },
  {
    id: 'logshare-web-ui',
    name: 'LogShare-Web-UI',
    tagline: 'LogShare 官方前端开源仓库',
    description:
      'LogShare 完整前端实现代码。包含日志批量拖拽上传、智能代码高亮、错误行高亮聚焦、SSG 启动器专页及响应式多语言架构。',
    category: 'template',
    language: 'Vue 3 / Tailwind CSS',
    stars: 4,
    githubUrl: 'https://github.com/NingZeStudio/LogShare-Web-UI',
    siteUrl: 'https://logshare.cn'
  },
  {
    id: 'control-converter',
    name: 'fcl-to-zl2_controller',
    tagline: '启动器虚拟按键映射转换工具',
    description:
      '支持在 Zalith Launcher 2 与 FoldCraftLauncher 之间双向转换触控按键控制布局 JSON，降低移动端玩家跨启动器迁移成本。',
    category: 'tool',
    language: 'Vue / TypeScript',
    stars: 6,
    githubUrl: 'https://github.com/NingZeStudio/fcl-to-zl2_controller'
  },
  {
    id: 'opentui-panel',
    name: 'OpenTUIPanel',
    tagline: '极简轻量级终端服务器监控面板',
    description:
      '专为 SSH 会话打造的终端监控程序。实时查看 Linux 服务器 CPU、内存、网络吞吐以及 Docker / Compose 容器集群运行健康状态。',
    category: 'tool',
    language: 'Python TUI',
    stars: 3,
    githubUrl: 'https://github.com/NingZeStudio/OpenTUIPanel'
  },
  {
    id: 'elementsplus-admin',
    name: 'ElementsPlus-Admin-Template',
    tagline: 'Iframe-first 架构后台管理系统模板',
    description:
      '基于 Vue 3 + TypeScript + Element Plus 构建的中后台模板。包含常驻 DOM 实例池解耦保活方案与双向跨域通信协议，适配多微应用内嵌场景。',
    category: 'template',
    language: 'Vue 3 / Element Plus',
    stars: 1,
    githubUrl: 'https://github.com/NingZeStudio/ElementsPlus-Admin-Template'
  },
  {
    id: 'paraore-ui',
    name: 'ParaOre-UI',
    tagline: '复刻 Mojang OreUI 设计语言的样式库',
    description:
      '还原 Minecraft 原版 OreUI 界面规范的 Web 前端样式库，为创作者社区提供原汁原味的 MC 像素拟物控件与无障碍交互支持。',
    category: 'template',
    language: 'TypeScript / Sass',
    stars: 4,
    githubUrl: 'https://github.com/NingZeStudio/ParaOre-UI'
  },
  {
    id: 'mitutorials',
    name: 'Mitutorials',
    tagline: '安卓 Java 版 Minecraft 综合技术文档',
    description:
      '为中文玩家与技术服主编撰的移动端 Java 版新手引导、运行时环境调优与常见报错排查手册，助力新玩家平稳过渡。',
    category: 'docs',
    language: 'TypeScript / VitePress',
    stars: 6,
    githubUrl: 'https://github.com/NingZeStudio/Mitutorials'
  }
]
