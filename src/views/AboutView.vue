<script setup lang="ts">
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import { studioValues, studioMilestones } from '@/data/team'
import Card from '@/components/ui/Card.vue'
import AppButton from '@/components/ui/AppButton.vue'
import {
  PhHeart as Heart,
  PhClockCounterClockwise as TimelineIcon,
  PhEnvelopeSimple as Mail,
  PhGithubLogo as Github,
  PhHardDrives as Server,
  PhCode as Code
} from '@phosphor-icons/vue'

useSeoMeta({
  title: '关于团队',
  description: '了解柠泽工作室背后的团队愿景、价值观与开源历程。'
}, siteConfig.name)()
</script>

<template>
  <div class="container mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-16">
    <!-- 标头与团队定位 -->
    <div class="space-y-4 max-w-2xl">
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-foreground">关于柠泽工作室</h1>
      <p class="text-base text-muted-foreground leading-relaxed">
        一群热爱 Minecraft 的开发者与运维人员用业余时间打造的技术团队。我们立足本土网络环境与中文语境痛点，致力于建设稳定高效、公开透明的开源基础设施与社区工具。
      </p>
    </div>

    <!-- 核心价值观卡片 -->
    <section class="space-y-6">
      <div class="border-b border-border/60 pb-3">
        <h2 class="text-xl font-bold tracking-tight text-foreground">我们的核心理念</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card v-for="val in studioValues" :key="val.title" class="space-y-2">
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
        <h2 class="text-xl font-bold tracking-tight text-foreground">发展历程与大事记</h2>
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
        <h2 class="text-xl font-bold tracking-tight text-foreground">共建者与基础设施运维</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Card class="space-y-3">
          <div class="flex items-center gap-2.5">
            <div class="p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <Server weight="duotone" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-foreground">基础设施与服务器赞助</h3>
              <p class="text-xs text-muted-foreground">柠枺 (Lemwood)</p>
            </div>
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            长年提供高防独立服务器集群、高速公网带宽以及合规域名备案支撑，保障 LogShare 与资源站的全天候稳定运行。
          </p>
        </Card>

        <Card class="space-y-3">
          <div class="flex items-center gap-2.5">
            <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <Code weight="duotone" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-foreground">设计规范与前端工程</h3>
              <p class="text-xs text-muted-foreground">燕随 (YanSui)</p>
            </div>
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            主导工作室全线 Web 视觉规范、微动效回弹交互与 LogShare / ElementsPlus 模版架构，负责端到端前端体验落地。
          </p>
        </Card>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="rounded-xl border border-border/70 bg-card p-6 sm:p-8 space-y-4">
      <h2 class="text-xl font-bold tracking-tight text-foreground">联系与合作</h2>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        如果你有任何合作意向、功能提议或开源项目联动想法，随时欢迎通过以下方式与我们取得联系。
      </p>

      <div class="flex flex-wrap items-center gap-3 pt-2">
        <AppButton as="a" :href="'mailto:' + siteConfig.email" variant="outline" size="sm">
          <Mail weight="duotone" class="h-4 w-4" />
          {{ siteConfig.email }}
        </AppButton>
        <AppButton as="a" :href="siteConfig.github" variant="soft" size="sm">
          <Github weight="duotone" class="h-4 w-4" />
          GitHub 团队主页
        </AppButton>
      </div>
    </section>
  </div>
</template>
