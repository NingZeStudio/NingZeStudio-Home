<script setup lang="ts">
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import { studioValues, studioMilestones } from '@/data/team'
import Card from '@/components/ui/Card.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Badge from '@/components/ui/Badge.vue'
import {
  PhHeart as Heart,
  PhClockCounterClockwise as TimelineIcon,
  PhEnvelopeSimple as Mail,
  PhGithubLogo as Github,
  PhHardDrives as Server,
  PhCode as Code,
  PhGitPullRequest as GitPullRequest,
  PhShieldCheck as ShieldCheck,
  PhHandHeart as HandHeart
} from '@phosphor-icons/vue'

useSeoMeta(
  {
    title: '关于团队',
    description: '了解柠泽工作室背后的技术愿景、工程价值观与开源历程。'
  },
  siteConfig.name
)()
</script>

<template>
  <div class="container mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-16">
    <!-- 标头与团队定位 -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2">
        <Badge variant="secondary" class="py-1 px-3 font-mono text-xs">
          关于柠泽 · Team & Mission
        </Badge>
      </div>
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
        专注 Minecraft 本土化基础设施的非营利技术团队
      </h1>
      <p class="text-base text-muted-foreground leading-relaxed">
        柠泽工作室是由 Minecraft 中文社区的一线开发者、系统运维与架构师自发组建的技术团队。针对中文环境特有的复杂网络链路与日志排障断层，致力于研发稳定可靠、自托管友好的开源工具矩阵与公共节点。
      </p>
    </div>

    <!-- 核心价值观卡片 -->
    <section class="space-y-6">
      <div class="border-b border-border/60 pb-3">
        <h2 class="text-xl font-bold tracking-tight text-foreground">工程理念与价值观</h2>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">
          指引我们技术选型与产品演进的核心准则
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card v-for="val in studioValues" :key="val.title" class="space-y-2 p-5">
          <h3 class="text-base font-bold text-foreground">{{ val.title }}</h3>
          <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {{ val.desc }}
          </p>
        </Card>
      </div>
    </section>

    <!-- 发展历程时间轴 -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 border-b border-border/60 pb-3">
        <TimelineIcon weight="duotone" class="h-5 w-5 text-primary" />
        <div>
          <h2 class="text-xl font-bold tracking-tight text-foreground">研发历程与大事记</h2>
          <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">记录工作室在关键架构上的突破与迭代</p>
        </div>
      </div>

      <div class="space-y-4">
        <Card v-for="item in studioMilestones" :key="item.year" class="space-y-1 p-5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
              {{ item.year }}
            </span>
            <span class="text-xs text-muted-foreground font-mono">Milestone</span>
          </div>
          <h3 class="text-base font-bold text-foreground pt-1">{{ item.title }}</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">{{ item.desc }}</p>
        </Card>
      </div>
    </section>

    <!-- 核心贡献与运维基石 -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 border-b border-border/60 pb-3">
        <Heart weight="duotone" class="h-5 w-5 text-rose-500" />
        <div>
          <h2 class="text-xl font-bold tracking-tight text-foreground">共建者与基础设施运维</h2>
          <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">默默支撑全线公网节点平稳运行的核心伙伴</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Card class="space-y-3 p-5">
          <div class="flex items-center gap-2.5">
            <div class="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              <Server weight="duotone" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-foreground">财务资助 · 生态开拓 · AI 研发</h3>
              <p class="text-xs text-muted-foreground">柠枺 (Lemwood)</p>
            </div>
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            全线高防服务器集群与公网带宽资助者，统筹财务支持、生态人脉拓展，主导 Golang 服务研发与 LogShare 智能诊断模型。
          </p>
        </Card>

        <Card class="space-y-3 p-5">
          <div class="flex items-center gap-2.5">
            <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Code weight="duotone" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-foreground">系统工程 · 全栈架构 · 界面规范</h3>
              <p class="text-xs text-muted-foreground">燕随 (YanSui)</p>
            </div>
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            主导全线底层系统与工程落地，负责 PHP 协程常驻服务、Rust 反混淆引擎、Vue 3 界面范式及 Docker / Linux 容器化与 BGP 路由调优。
          </p>
        </Card>
      </div>
    </section>

    <!-- 开源协作准则与规范 -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 border-b border-border/60 pb-3">
        <GitPullRequest weight="duotone" class="h-5 w-5 text-primary" />
        <div>
          <h2 class="text-xl font-bold tracking-tight text-foreground">开源协作准则与规范</h2>
          <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">遵循规范化工程流程，让社区共建更高效可靠</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card class="p-5 space-y-2">
          <div class="text-xs font-mono font-bold text-primary">01. 提交信息规范</div>
          <h3 class="text-sm font-bold text-foreground">Apache 规范 Commit</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            遵循 `feat:`, `fix:`, `docs:`, `refactor:` 前缀，简明扼要概括变更范围，详情行描述具体实现。
          </p>
        </Card>

        <Card class="p-5 space-y-2">
          <div class="text-xs font-mono font-bold text-primary">02. 质量与静态检查</div>
          <h3 class="text-sm font-bold text-foreground">自动化 CI 门禁</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            所有合并请求须通过项目配置的 ESLint、TypeScript 编译检查或 PHPStan 静态分析测试。
          </p>
        </Card>

        <Card class="p-5 space-y-2">
          <div class="text-xs font-mono font-bold text-primary">03. 安全与责任披露</div>
          <h3 class="text-sm font-bold text-foreground">安全缺陷私密反馈</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            若发现潜在高危安全漏洞，请通过邮件或 GitHub Security Advisory 私密通报，避免公开利用。
          </p>
        </Card>
      </div>
    </section>

    <!-- 联系与赞助入口 -->
    <section class="rounded-xl border border-border/70 bg-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-soft">
      <div class="space-y-2 max-w-xl">
        <div class="flex items-center gap-2 text-foreground font-bold text-base">
          <ShieldCheck weight="duotone" class="h-5 w-5 text-emerald-500" />
          <span>联系与商务/开源合作</span>
        </div>
        <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          如果您有开源项目联动、技术合作或希望提供算力/带宽赞助支持，随时欢迎通过下方渠道与团队接洽。
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 shrink-0">
        <AppButton as="router-link" to="/sponsor" variant="primary" size="md">
          <HandHeart weight="duotone" class="h-4 w-4" />
          支持我们
        </AppButton>
        <AppButton as="a" :href="'mailto:' + siteConfig.email" variant="outline" size="md">
          <Mail weight="duotone" class="h-4 w-4" />
          邮件联系
        </AppButton>
        <AppButton as="a" :href="siteConfig.github" target="_blank" rel="noopener noreferrer" variant="soft" size="md">
          <Github weight="duotone" class="h-4 w-4" />
          GitHub
        </AppButton>
      </div>
    </section>
  </div>
</template>
