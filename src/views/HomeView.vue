<script setup lang="ts">
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import { projects } from '@/data/projects'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import {
  PhArrowRight as ArrowRight,
  PhGithubLogo as Github,
  PhArrowSquareOut as ExternalLink,
  PhCloudCheck as CloudCheck,
  PhCpu as Cpu,
  PhPaintBrush as PaintBrush,
  PhUsersThree as UsersThree,
  PhStar as Star,
  PhCode as Code
} from '@phosphor-icons/vue'

useSeoMeta({
  title: '首页',
  description: siteConfig.description
}, siteConfig.name)()

const featuredProjects = projects.filter(p => p.featured)

const pillars = [
  {
    icon: CloudCheck,
    title: '云端基础设施',
    desc: '从 LogShare 日志分析到 miawa 高速镜像，自建自托管，提供稳定高可用的公共服务。'
  },
  {
    icon: Cpu,
    title: '高性能原生工具',
    desc: '以 PHP 高并发常驻协程与 Go 编译型服务为核心支柱，打造高可用 API、终端面板与自动化中间件。'
  },
  {
    icon: PaintBrush,
    title: '克制工程美学',
    desc: '坚持低饱和度 Zinc 冷灰与物理回弹阻尼，沉淀前后端通用起步模板，赋能更多开源作品。'
  },
  {
    icon: UsersThree,
    title: '本土化社区共建',
    desc: '深入玩家与服主真实痛点，建立跨启动器与频道的无缝交流矩阵，共同壮大中文生态。'
  }
]

const stats = [
  { label: '活跃开源仓库', value: '17+' },
  { label: 'GitHub 社区标星', value: '110+' },
  { label: '月均服务请求', value: '100K+' },
  { label: '核心开发语言', value: 'PHP · Go' }
]
</script>

<template>
  <div class="container mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-20">
    <!-- Hero 视觉区 -->
    <section class="text-center space-y-6 max-w-3xl mx-auto pt-2 sm:pt-6">
      <div class="inline-flex items-center gap-2">
        <Badge variant="secondary" class="py-1 px-3.5 gap-1.5">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>以梦为基 · 携手共进</span>
        </Badge>
        <Badge variant="outline" class="py-1 px-3">
          <span>NingZe Studio</span>
        </Badge>
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.15]">
        专注中文 Minecraft<br />
        <span class="text-muted-foreground font-extrabold">生态与基础设施建设</span>
      </h1>

      <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        {{ siteConfig.description }}
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3 pt-3">
        <AppButton as="router-link" to="/projects" size="lg">
          浏览项目矩阵
          <ArrowRight weight="duotone" class="h-4 w-4" />
        </AppButton>
        <AppButton as="router-link" to="/community" variant="secondary" size="lg">
          加入社区交流
        </AppButton>
        <AppButton as="a" :href="siteConfig.github" variant="outline" size="lg">
          <Github weight="duotone" class="h-4 w-4" />
          GitHub 组织
        </AppButton>
      </div>
    </section>

    <!-- 关键数据看板 -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      <Card v-for="stat in stats" :key="stat.label" class="text-center p-5">
        <p class="text-2xl sm:text-3xl font-black font-mono tracking-tight text-foreground">
          {{ stat.value }}
        </p>
        <p class="text-xs text-muted-foreground mt-1 font-medium">
          {{ stat.label }}
        </p>
      </Card>
    </section>

    <!-- 精选核心代表作 -->
    <section class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-4">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-foreground">精选开源代表作</h2>
          <p class="text-sm text-muted-foreground mt-1">支撑工作室矩阵的核心系统与公共基础设施</p>
        </div>
        <AppButton as="router-link" to="/projects" variant="ghost" size="sm" class="self-start sm:self-auto">
          查看全部项目
          <ArrowRight weight="duotone" class="h-3.5 w-3.5" />
        </AppButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card
          v-for="project in featuredProjects"
          :key="project.id"
          hoverable
          class="flex flex-col justify-between space-y-4"
        >
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-bold text-foreground">{{ project.name }}</h3>
                  <Badge v-if="project.badge" variant="secondary" class="text-[10px] px-1.5 py-0">
                    {{ project.badge }}
                  </Badge>
                </div>
                <p class="text-xs font-mono text-muted-foreground mt-0.5">{{ project.tagline }}</p>
              </div>
              <div v-if="project.stars !== undefined && project.stars > 0" class="flex items-center gap-1 text-xs font-mono text-muted-foreground border border-border/60 px-2 py-0.5 rounded-full">
                <Star weight="duotone" class="h-3.5 w-3.5 text-amber-500" />
                <span>{{ project.stars }}</span>
              </div>
            </div>

            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-border/50 text-xs">
            <div class="flex items-center gap-1.5 text-muted-foreground font-mono">
              <Code weight="duotone" class="h-3.5 w-3.5" />
              <span>{{ project.language }}</span>
            </div>
            <div class="flex items-center gap-2">
              <AppButton v-if="project.siteUrl" as="a" :href="project.siteUrl" variant="outline" size="sm">
                在线体验
                <ExternalLink weight="duotone" class="h-3 w-3" />
              </AppButton>
              <AppButton as="a" :href="project.githubUrl" variant="soft" size="sm">
                源码
                <Github weight="duotone" class="h-3 w-3" />
              </AppButton>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- 生态支柱 -->
    <section class="space-y-6">
      <div class="text-center space-y-2 max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">生态发展基石</h2>
        <p class="text-sm text-muted-foreground">以工程严谨度与开源透明度驱动社区发展</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card v-for="pillar in pillars" :key="pillar.title" class="space-y-3 p-5">
          <div class="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 w-fit">
            <component :is="pillar.icon" weight="duotone" class="h-5 w-5" />
          </div>
          <h3 class="text-base font-bold text-foreground">{{ pillar.title }}</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            {{ pillar.desc }}
          </p>
        </Card>
      </div>
    </section>

    <!-- 底部号召加入 -->
    <section class="rounded-2xl border border-border/80 bg-card p-8 sm:p-10 text-center space-y-4 max-w-4xl mx-auto shadow-card">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        与我们一起，共建更好的 Minecraft 中文社区
      </h2>
      <p class="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
        无论是代码提交、文档勘误、使用反馈还是基础设施赞助，宁泽工作室始终拥抱社区的每一份支持。
      </p>
      <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
        <AppButton as="router-link" to="/community" size="md">
          进入社区与频道
        </AppButton>
        <AppButton as="a" :href="siteConfig.github" variant="outline" size="md">
          在 GitHub 上关注我们
        </AppButton>
      </div>
    </section>
  </div>
</template>
