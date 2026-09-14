# NingZeStudio-Home — 智能体协作与开发指南 (AGENTS.md)

## 项目定位与架构职责

- 本项目是 **柠泽工作室 (NingZe Studio)** 官方网站，基于 `LogShare-Front-Template` 前台设计范式深度开发。
- 技术栈：**Vue 3.5 + TypeScript + Vite + Tailwind CSS + Phosphor Icons**（服务端与系统级核心语言为 **PHP** 与 **Go**）。
- 部署与产物：纯静态 SPA，产物位于 `dist/`，可部署于任何 CDN、Nginx 或对象存储上。
- 数据模型位于 `src/data/`：
  - `projects.ts`：收录工作室 12+ 代表性开源生态项目（LogShare、miawa、SpinYarn、OpenLiteWaf、OpenLiteStats 等），含 Stars、技术栈、链接与描述；
  - `launchers.ts`：收录已深度接入 LogShare 生态的主流启动器（ZL2、FCL、Axolotl、PiLauncher、AMCL）及对接特性；
  - `sponsors.ts`：赞助数据模型，包含赞助者永久鸣谢榜、真实金额明细、支付渠道与专款专用透明度承诺；
  - `community.ts`：官方社区矩阵，精选收录四大官方交流与答疑群；
  - `team.ts`：团队成员矩阵（柠枺、燕随、哈哈、飛尘）、公网基础设施与集群拓扑（infraNodes）、开发者接入规范、非营利与数据隐私承诺、常见问题速查（studioFaqs）以及 MC 日志排障管理员急聘（urgentRecruitment）。
- 核心路由：`/`（首页）、`/projects`（项目矩阵）、`/community`（社区交流）、`/about`（关于团队与架构）、`/sponsor`（赞助支持与财务公开）。
- 基础配置与 SEO 位于 `src/lib/`（`config.ts`, `useSeoMeta.ts`, `toast.ts`）。

## 社区群列表规范（铁律）

根据工作室最高规范，在社区页面（`/community`）及相关列表展示中，严格仅收录四大官方认证群聊：
1. **NingZe 资源站官方群**（镜像分发与 API 服务交流）；
2. **LogShare 官方交流群**（平台迭代公告与交流）；
3. **LogShare 答疑解惑群**（崩溃解析与互助答疑）；
4. **柠泽工作室下游开发者群**（开源基建二次开发与对接）。
严禁收录未经授权的非官方频道或第三方群聊。

## 验证与构建命令

```bash
# 安装依赖
pnpm install

# 本地验证（Termux 环境缺少 /usr/bin/env，如直接调用 pnpm 报错，可直接使用 node 调用对应 bin）：
node ./node_modules/vue-tsc/bin/vue-tsc.js -b
node ./node_modules/vite/bin/vite.js build
node ./node_modules/eslint/bin/eslint.js .

# 标准 CI / 本地开发命令：
pnpm dev
pnpm build
pnpm lint
```

## 设计与工程关键约束

1. **色彩规范**：严格遵循 Zinc / Slate 低饱和度冷灰体系，严禁引入高饱和度渐变色（如紫蓝粉、红橘黄等）；主色优先采用 Zinc 系列低饱和度冷灰配色，暗黑模式基于 `.dark` 语义化类切换。
2. **图标体系**：全站统一采用 `@phosphor-icons/vue` 且默认属性 `weight="duotone"`。在 `base.css` 中配置了 `svg[viewBox='0 0 256 256'] { scale: 1.2 }` 视窗留白补偿。
3. **动效规范**：所有卡片交互、页面切页与弹窗过渡统一注入 `ease-bounce-soft`（`cubic-bezier(0.34, 1.7, 0.64, 1)`），严禁使用生硬机械的过渡。
4. **防溢出与滚动条**：`html, body { overflow-x: clip; }` 配合所有弹性容器 `[&>*]:min-w-0` 链路作为防横向溢出底线；细滚动条规范（6px 窄轨与半透明滑块）必须应用于所有可能横向滚动的表格、项目标签栏与代码块。
5. **社交分享支持**：内置 Open Graph、Twitter Card 以及专属的 **QQ 分享元标签 (`qq:share:*`)**，新增或调整路由页面必须在 `router.beforeEach` 与 `useSeoMeta` 中确保全量元标签动态同步。
6. **文案风格**：遵循大国风范与务实克制原则，避免轻佻或过度口语化表达。
