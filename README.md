# 柠泽工作室官网 (NingZeStudio-Home)

<div align="center">
  <h3>专注 Minecraft 本土化基础设施与开发者工具研发</h3>
  <p>柠泽工作室 (NingZe Studio) 官方门户网站，基于 LogShare-Front-Template 前台设计范式深度开发。</p>

  <p>
    <a href="https://ningzestudio.github.io/NingZeStudio-Home/"><img src="https://img.shields.io/badge/GitHub_Pages-Online-emerald?style=flat-square" alt="GitHub Pages" /></a>
    <a href="https://github.com/NingZeStudio"><img src="https://img.shields.io/badge/GitHub-NingZeStudio-181717?logo=github&style=flat-square" alt="GitHub" /></a>
    <a href="https://logshare.cn"><img src="https://img.shields.io/badge/Flagship-LogShare.CN-zinc?style=flat-square" alt="LogShare" /></a>
    <a href="https://miawa.cn"><img src="https://img.shields.io/badge/Flagship-柠泽资源站-zinc?style=flat-square" alt="柠泽资源站" /></a>
    <img src="https://img.shields.io/badge/Languages-PHP%20%7C%20Go%20%7C%20Rust-blue?style=flat-square" alt="Core Languages" />
    <img src="https://img.shields.io/badge/Vue-3.5-42b883?logo=vuedotjs&style=flat-square" alt="Vue 3.5" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss&style=flat-square" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&style=flat-square" alt="TypeScript" />
  </p>
</div>

---

## 站点定位与架构特色

本项目是 **柠泽工作室 (NingZe Studio)** 的官方静态站点，全量承载团队介绍、开源项目矩阵、主流启动器生态互联、社区认证群聊及公益赞助财务公开：

- **系统核心语言**：服务端与底层基础设施以 **PHP 8.4+**（Swoole 协程常驻服务）与 **Go / Rust**（编译型系统服务与中间件）为核心技术栈。
- **克制工程美学**：基于 Zinc / Slate 低饱和度冷灰体系设计，坚决杜绝高饱和度彩色渐变，深浅主题平滑无缝转换。
- **微阻尼物理回弹**：交互微动效注入 `ease-bounce-soft`（`cubic-bezier(0.34, 1.7, 0.64, 1)`），提供温润自然的触控与视觉反馈。
- **微阻尼移动端导航**：三段式平滑变形汉堡按钮、微阻尼物理回弹抽屉、Teleport 顶层挂载及点击外部自关闭能力。
- **自托管零阻塞字体**：内置全套 HarmonyOS Sans SC 常用字集与 SauceCode Mono，杜绝外部公共 CDN 抖动。
- **全链路横向防溢出**：底层 `html, body { overflow-x: clip; }` 结合多级弹性容器 `[&>*]:min-w-0` 根治窄屏布局撕裂。
- **全场景社交分享适配**：原生支持 Open Graph、Twitter Card 以及专属的 **QQ 分享元标签 (`qq:share:*`)**。
- **公益运营与财务公开**：设独立 `/sponsor` 专页公开全部社区赞助明细、服务器成本构成与专款专用承诺。

---

## 核心开源代表作

1. **[LogShare.CN](https://logshare.cn)**：Minecraft 生态专业的日志分享与智能分析平台，支持全格式解析、模组混淆反编译与轻量 RAG 诊断。
2. **[柠泽资源站 (miawa.cn)](https://miawa.cn)**：面向中文 Minecraft 玩家与第三方启动器的高性能 GitHub Releases 自动化镜像分发服务。
3. **[SpinYarn](https://github.com/NingZeStudio/SpinYarn)**：高性能 Minecraft 崩溃堆栈混淆名还原系统级引擎，支持 Bincode 映射缓存。
4. **[OpenLiteWaf](https://github.com/NingZeStudio/OpenLiteWaf)**：极简轻量级 OpenResty Lua 边缘站点防火墙。
5. **[OpenLiteStats](https://github.com/NingZeStudio/OpenLiteStats)**：运行在 OpenResty Log 阶段的自研极简访问统计中间件。
6. **[LogShare-Front-Template](https://github.com/NingZeStudio/LogShare-Front-Template)**：提炼自生产环境的前台通用工程设计范式起步模板。
7. **[LogShare-Web-UI](https://github.com/NingZeStudio/LogShare-Web-UI)**：LogShare 官方前端开源仓库，含日志高亮与 SSG 预渲染。

---

## 本地开发与质量检查

### 环境要求

- Node.js >= 20.0.0
- pnpm >= 11.0.0

### 操作命令

```bash
# 1. 安装依赖
pnpm install

# 2. 启动本地开发热更新服务器
pnpm dev

# 3. 静态类型检查
pnpm typecheck

# 4. 代码规范检查
pnpm lint

# 5. 生产构建打包
pnpm build
```

---

## 目录结构

```text
├── .github/workflows/deploy.yaml # GitHub Pages 自动化构建部署流
├── public/                       # 静态公共资源
├── src/
│   ├── assets/
│   │   ├── fonts/                # 自托管 HarmonyOS Sans 与 SauceCode Mono 字体包
│   │   ├── img/                  # 赞助渠道二维码与品牌资产
│   │   └── styles/               # 全局样式（base.css、fonts.css、index.css）
│   ├── components/
│   │   ├── layout/               # 布局组件（Header, Footer, ThemeToggle, MobileNav）
│   │   └── ui/                   # 原子 UI 组件（AppButton, AppDialog, ToastHost, Card, Badge）
│   ├── data/                     # 静态数据模型（projects.ts, launchers.ts, sponsors.ts, community.ts, team.ts）
│   ├── lib/                      # 基础库（useSeoMeta, toast, config）
│   ├── router/                   # 路由定义与全局 SEO 元标签守卫
│   ├── views/                    # 页面视图（HomeView, ProjectsView, CommunityView, AboutView, SponsorView, ShowcaseView）
│   ├── App.vue                   # 根组件
│   └── main.ts                   # 应用入口
├── AGENTS.md                     # 项目级智能体协作指南与工程约束
├── package.json
└── vite.config.ts                # Vite 生产配置与构建报告插件
```

---

## 许可证

本项目基于 [MIT 许可证](./LICENSE) 协议开源。
