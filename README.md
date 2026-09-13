# 柠泽工作室官网 (NingZeStudio-Home)

<div align="center">
  <h3>以梦为基，携手共进；共建更好的 Minecraft 中文社区。</h3>
  <p>专注中文 Minecraft 生态建设的现代化开源组织官方门户网站。</p>

  <p>
    <a href="https://github.com/NingZeStudio"><img src="https://img.shields.io/badge/GitHub-NingZeStudio-181717?logo=github&style=flat-square" alt="GitHub" /></a>
    <a href="https://logshare.cn"><img src="https://img.shields.io/badge/Flagship-LogShare.CN-zinc?style=flat-square" alt="LogShare" /></a>
    <a href="https://miawa.cn"><img src="https://img.shields.io/badge/Flagship-柠泽资源站-zinc?style=flat-square" alt="柠泽资源站" /></a>
    <img src="https://img.shields.io/badge/Language-PHP%20%7C%20Go-blue?style=flat-square" alt="Core Languages: PHP & Go" />
    <img src="https://img.shields.io/badge/Vue-3.5-42b883?logo=vuedotjs&style=flat-square" alt="Vue 3.5" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss&style=flat-square" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-5.6-3178c6?logo=typescript&style=flat-square" alt="TypeScript" />
  </p>
</div>

---

## 🌟 网站定位与特色

本项目是 **柠泽工作室 (NingZe Studio)** 的官方网站，基于 `LogShare-Front-Template` 前端设计范式打造：

- ⚙️ **核心技术支柱**：服务端与系统级基建以 **PHP**（Swoole 协程常驻服务）与 **Go**（编译型系统服务与 TUI 工具）为核心开发语言。
- 🎨 **低饱和度冷灰阶美学**：基于 Zinc / Slate 深度语义化设计，无高饱和渐变色，深浅色主题平滑过渡。
- ⚡ **微阻尼物理回弹**：交互微动效注入 `ease-bounce-soft`（`cubic-bezier(0.34, 1.7, 0.64, 1)`），手感温润自然。
- 🪄 **形变吸顶顶栏 (Header)**：随页面滚动自适应形变为毛玻璃悬浮胶囊，兼顾沉浸感与紧凑性。
- 🔤 **自托管零阻塞字体**：内置 HarmonyOS Sans SC 常用字集与 SauceCode Mono，告别第三方字体网络加载抖动。
- 🛡️ **横向防溢出与细滚动条**：多层级弹性容器防御长文本撑裂布局，全局统一 6px 细滚动条。
- 📱 **多端社交分享元标签矩阵**：全站支持 Open Graph、Twitter Card 以及专属的 **QQ 分享元标签 (`qq:share:*`)**。
- 👥 **规范化社区展示**：严格遵循工作室约定——**各官方频道排第一（置顶）**、**官方交流群与答疑群排第二**（覆盖资源站、LogShare 与下游开发者）。

---

## 🏛️ 项目矩阵展示

官网集成了柠泽工作室全部开源生态项目（实时动态归档与展示）：

1. **[LogShare](https://logshare.cn)**：Minecraft 生态最专业的日志分享与智能分析平台，支持全格式解析、模组混淆反编译、智能 RAG 诊断。
2. **[柠泽资源站 (miawa.cn)](https://miawa.cn)**：面向中文 Minecraft 玩家与第三方启动器的高性能全球多源镜像分发平台。
3. **[SpinYarn](https://github.com/NingZeStudio/SpinYarn)**：高性能 Minecraft 崩溃堆栈去混淆与反混淆 Rust 核心及 PHP 拓展，纳秒级映射检索。
4. **[OpenLiteWaf](https://github.com/NingZeStudio/OpenLiteWaf)**：轻量级高性能 OpenResty WAF 边缘防御模块。
5. **[OpenLiteStats](https://github.com/NingZeStudio/OpenLiteStats)**：零外部依赖的极简边缘站点流量与统计监控模块。
6. **[OpenTUIPanel](https://github.com/NingZeStudio/OpenTUIPanel)**：Go 语言开发的终端文本交互式运维面板。
7. **[LogShare-Front-Template](https://github.com/NingZeStudio/LogShare-Front-Template)**：提炼自生产环境的前台通用设计范式与脚手架。
8. 更多生态项目持续开发与维护中...

---

## 🚀 本地开发与构建

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (推荐)

### 安装与运行

```bash
# 1. 安装依赖
pnpm install

# 2. 启动本地开发热更新服务器
pnpm dev

# 3. 类型检查与生产构建
pnpm build

# 4. 代码质量扫描
pnpm lint
```

---

## 📂 目录结构

```text
├── public/                       # 静态资源与 Favicon 图标
├── src/
│   ├── assets/
│   │   ├── fonts/                # 自托管 HarmonyOS Sans 与 SauceCode Mono 字体包
│   │   └── styles/               # 全局样式（base.css、fonts.css、index.css）
│   ├── components/
│   │   ├── layout/               # 布局组件（Header, Footer, ThemeToggle）
│   │   └── ui/                   # 核心原子 UI 组件（AppButton, AppDialog, ToastHost, Card, Badge）
│   ├── data/                     # 官网静态数据源（projects.ts, community.ts, team.ts）
│   ├── lib/                      # 基础库（useSeoMeta, toast, config）
│   ├── router/                   # 路由定义与全局 SEO 元标签守卫
│   ├── views/                    # 页面视图（HomeView, ProjectsView, CommunityView, AboutView, ShowcaseView）
│   ├── App.vue                   # 根组件
│   └── main.ts                   # 应用入口
├── tailwind.preset.js            # LogShare Tailwind 核心设计预设
├── tailwind.config.js            # Tailwind 项目配置文件
├── AGENTS.md                     # 项目级智能体协作指南与工程约束
├── DESIGN_SPEC.md                # 完整设计范式规范手册
└── vite.config.ts                # Vite 配置与打包报告插件
```

---

## 📜 许可证

本项目基于 [MIT 许可证](./LICENSE) 协议开源。
