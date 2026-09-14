<script setup lang="ts">
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import { projects } from '@/data/projects'
import { launchers } from '@/data/launchers'
import { teamMembers, urgentRecruitment } from '@/data/team'
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
  PhCode as Code,
  PhRocketLaunch as Rocket,
  PhHeart as Heart,
  PhShieldCheck as ShieldCheck,
  PhEnvelopeSimple as Mail,
  PhChatCircleDots as ChatIcon,
  PhUserPlus as UserPlus,
  PhCheckCircle as CheckCircle,
  PhWarningCircle as WarningIcon
} from '@phosphor-icons/vue'

useSeoMeta(
  {
    title: '首页',
    description: siteConfig.description
  },
  siteConfig.name
)()

const featuredProjects = projects.filter(p => p.featured)

const pillars = [
  {
    icon: CloudCheck,
    title: '自建与高可用基础设施',
    desc: '聚焦国内网络环境痛点，自研 LogShare 日志分析与 miawa Release 高速镜像，支持全量私有化自部署与无缝容灾。'
  },
  {
    icon: Cpu,
    title: '常驻并发与系统级性能',
    desc: '以 PHP 8.4+ Swoole 协程常驻服务与 Go / Rust 编译型系统为核心底座，极致压榨硬件吞吐，杜绝性能损耗。'
  },
  {
    icon: PaintBrush,
    title: '克制内敛的工程美学',
    desc: '坚持低饱和度 Zinc 色系与物理阻尼微动效，沉淀标准化通用前端工程模板，拒绝无意义的视觉喧嚣。'
  },
  {
    icon: UsersThree,
    title: '开放标准与生态协同',
    desc: '提供标准化 REST API 与 MCP 协议支持，与主流启动器及社区团队深度互联，共建透明健康的中文技术生态。'
  }
]

const techHighlights = [
  { label: '核心后端语言', value: 'PHP 8.4+ · Go · Rust', note: '多语言协程与原生编译' },
  { label: '高并发底座', value: 'Swoole 6.2 Resident', note: '常驻内存进程池与微队列' },
  { label: '边缘防护与分析', value: 'OpenResty · LuaJIT', note: '自研 WAF 拦截与轻量遥测' },
  { label: '开源与部署原则', value: '100% Self-Hostable', note: '零供应商绑定与协议开放' }
]
</script>

<template>
  <div class="container mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-20">
    <!-- Hero 核心视觉区 -->
    <section class="text-center space-y-6 max-w-3xl mx-auto pt-2 sm:pt-6">
      <div class="inline-flex items-center gap-2">
        <Badge variant="secondary" class="py-1 px-3.5 gap-1.5 font-mono text-xs">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span>开源与自托管技术工坊</span>
        </Badge>
        <Badge variant="outline" class="py-1 px-3 font-mono text-xs">
          <span>NingZe Studio</span>
        </Badge>
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.15]">
        专注中文 Minecraft<br />
        <span class="text-muted-foreground font-extrabold">生态与基础设施建设</span>
      </h1>

      <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        针对中文社区复杂的网络环境与本地报错排查痛点，研发高可用崩溃诊断、GitHub Releases 镜像分发、堆栈反混淆与边缘防护中间件。
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3 pt-3">
        <AppButton as="router-link" to="/projects" size="lg">
          浏览开源项目矩阵
          <ArrowRight weight="duotone" class="h-4 w-4" />
        </AppButton>
        <AppButton as="router-link" to="/sponsor" variant="secondary" size="lg">
          <Heart weight="duotone" class="h-4 w-4 text-rose-500" />
          赞助支持
        </AppButton>
        <AppButton as="a" :href="siteConfig.github" target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
          <Github weight="duotone" class="h-4 w-4" />
          GitHub 组织
        </AppButton>
      </div>
    </section>

    <!-- 技术指标与架构底座 -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card v-for="item in techHighlights" :key="item.label" class="p-5 space-y-1">
        <p class="text-xs text-muted-foreground font-medium">{{ item.label }}</p>
        <p class="text-base sm:text-lg font-bold font-mono tracking-tight text-foreground truncate">
          {{ item.value }}
        </p>
        <p class="text-[11px] text-muted-foreground font-mono">{{ item.note }}</p>
      </Card>
    </section>

    <!-- 精选核心开源代表作 -->
    <section class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-4">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-foreground">精选核心代表作</h2>
          <p class="text-sm text-muted-foreground mt-1">
            承载工作室技术矩阵的高可用系统与自研基础设施
          </p>
        </div>
        <AppButton as="router-link" to="/projects" variant="ghost" size="sm" class="self-start sm:self-auto">
          查看全部开源仓库
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
                  <Badge v-if="project.badge" variant="secondary" class="text-[10px] px-1.5 py-0 font-medium">
                    {{ project.badge }}
                  </Badge>
                </div>
                <p class="text-xs font-mono text-muted-foreground mt-0.5">{{ project.tagline }}</p>
              </div>
              <div
                v-if="project.stars !== undefined && project.stars > 0"
                class="flex items-center gap-1 text-xs font-mono text-muted-foreground border border-border/60 px-2 py-0.5 rounded-full shrink-0"
              >
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
              <AppButton v-if="project.siteUrl" as="a" :href="project.siteUrl" target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
                在线访问
                <ExternalLink weight="duotone" class="h-3 w-3" />
              </AppButton>
              <AppButton as="a" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" variant="soft" size="sm">
                开源源码
                <Github weight="duotone" class="h-3 w-3" />
              </AppButton>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- 核心团队与维护者（移植自资源站关于界面的成员卡片） -->
    <section class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-4">
        <div>
          <div class="flex items-center gap-2">
            <UsersThree weight="duotone" class="h-5 w-5 text-primary" />
            <h2 class="text-2xl font-bold tracking-tight text-foreground">核心团队与维护者</h2>
          </div>
          <p class="text-sm text-muted-foreground mt-1">
            由 Minecraft 社区开发者与系统运维人员用业余时间打造的开源工程团队
          </p>
        </div>
        <AppButton as="router-link" to="/about" variant="ghost" size="sm" class="self-start sm:self-auto">
          了解团队理念与历程
          <ArrowRight weight="duotone" class="h-3.5 w-3.5" />
        </AppButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card
          v-for="member in teamMembers"
          :key="member.id"
          hoverable
          class="p-6 flex flex-col justify-between space-y-4"
        >
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3.5">
                <img
                  v-if="member.avatar"
                  :src="member.avatar"
                  :alt="member.name"
                  class="h-12 w-12 rounded-xl object-cover border border-border/80 shadow-soft bg-muted shrink-0"
                  loading="lazy"
                />
                <div
                  v-else
                  class="h-12 w-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold shrink-0"
                >
                  {{ member.name.charAt(0) }}
                </div>
                <div class="min-w-0">
                  <h3 class="text-base font-bold text-foreground truncate">{{ member.name }}</h3>
                  <p class="text-xs text-muted-foreground font-mono truncate">{{ member.role }} · {{ member.title }}</p>
                </div>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {{ member.description }}
            </p>

            <!-- 技术栈标签 -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tech in member.techStack"
                :key="tech"
                class="rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- 联系信息与外链 -->
          <div class="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <div class="flex items-center gap-3">
              <span v-if="member.email" class="inline-flex items-center gap-1">
                <Mail weight="duotone" class="h-3.5 w-3.5" />
                <span>{{ member.email }}</span>
              </span>
              <span v-if="member.qq" class="inline-flex items-center gap-1">
                <ChatIcon weight="duotone" class="h-3.5 w-3.5" />
                <span>QQ: {{ member.qq }}</span>
              </span>
            </div>

            <a
              v-if="member.github"
              :href="member.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 font-mono text-foreground hover:underline"
            >
              <Github weight="duotone" class="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </Card>
      </div>
    </section>

    <!-- 【急需】MC 游戏日志排障管理员招募专区 -->
    <section class="rounded-2xl border-2 border-primary/30 bg-card p-6 sm:p-8 space-y-6 shadow-card relative overflow-hidden">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div class="space-y-1.5">
          <div class="inline-flex items-center gap-2">
            <Badge variant="secondary" class="gap-1.5 py-1 px-3 text-xs font-bold text-primary">
              <WarningIcon weight="duotone" class="h-4 w-4" />
              <span>{{ urgentRecruitment.badge }}</span>
            </Badge>
          </div>
          <h2 class="text-xl sm:text-2xl font-black tracking-tight text-foreground">
            {{ urgentRecruitment.title }}
          </h2>
        </div>

        <AppButton
          as="a"
          :href="urgentRecruitment.actionUrl"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
          class="shrink-0"
        >
          <UserPlus weight="duotone" class="h-4 w-4" />
          <span>{{ urgentRecruitment.actionText }}</span>
        </AppButton>
      </div>

      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {{ urgentRecruitment.description }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
        <!-- 期待您的技能 -->
        <div class="space-y-3">
          <h3 class="text-sm font-bold text-foreground flex items-center gap-2">
            <CheckCircle weight="duotone" class="h-4 w-4 text-emerald-500" />
            <span>我们需要您具备：</span>
          </h3>
          <ul class="space-y-2 text-xs text-muted-foreground leading-relaxed">
            <li
              v-for="(req, idx) in urgentRecruitment.requirements"
              :key="idx"
              class="flex items-start gap-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
              <span>{{ req }}</span>
            </li>
          </ul>
        </div>

        <!-- 社区回馈与专属权益 -->
        <div class="space-y-3">
          <h3 class="text-sm font-bold text-foreground flex items-center gap-2">
            <Heart weight="duotone" class="h-4 w-4 text-rose-500" />
            <span>我们将为您提供：</span>
          </h3>
          <ul class="space-y-2 text-xs text-muted-foreground leading-relaxed">
            <li
              v-for="(ben, idx) in urgentRecruitment.benefits"
              :key="idx"
              class="flex items-start gap-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
              <span>{{ ben }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="rounded-xl bg-muted/40 p-3.5 sm:p-4 text-xs text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span>自荐或咨询：请直接点击上方加群，入群后联系管理员注明「日志排查自荐」，或发送自荐信至 <strong class="text-foreground font-mono">3436464181@qq.com</strong>。</span>
        <span class="shrink-0 font-mono text-[11px] text-muted-foreground">欢迎广大热心开发者与服主加入</span>
      </div>
    </section>

    <!-- 已接入与协同生态（主流启动器矩阵） -->
    <section class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-4">
        <div>
          <div class="flex items-center gap-2">
            <Rocket weight="duotone" class="h-5 w-5 text-primary" />
            <h2 class="text-2xl font-bold tracking-tight text-foreground">已接入的生态伙伴与启动器</h2>
          </div>
          <p class="text-sm text-muted-foreground mt-1">
            主流 Minecraft 启动器已深度集成 LogShare 日志诊断与崩溃分析生态
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          v-for="launcher in launchers"
          :key="launcher.id"
          hoverable
          class="p-5 flex flex-col justify-between space-y-4"
        >
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <img
                  v-if="launcher.logo"
                  :src="launcher.logo"
                  :alt="launcher.name"
                  class="h-10 w-10 rounded-xl object-contain border border-border/80 shadow-soft bg-background shrink-0 p-0.5"
                  loading="lazy"
                />
                <div
                  v-else
                  class="h-10 w-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold shrink-0 text-sm font-mono"
                >
                  {{ launcher.shortName.charAt(0) }}
                </div>
                <div class="min-w-0">
                  <h3 class="text-base font-bold text-foreground truncate">{{ launcher.name }}</h3>
                  <p class="text-xs text-muted-foreground font-mono truncate">{{ launcher.shortName }}</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-1 justify-end shrink-0">
                <Badge
                  v-for="plat in launcher.platforms"
                  :key="plat"
                  variant="outline"
                  class="text-[10px] px-1.5 py-0 font-mono"
                >
                  {{ plat }}
                </Badge>
              </div>
            </div>

            <p class="text-xs text-muted-foreground leading-relaxed">
              {{ launcher.description }}
            </p>
          </div>

          <div class="space-y-3 pt-2 border-t border-border/50 text-xs">
            <div class="rounded bg-muted/40 p-2 text-[11px] text-muted-foreground">
              <span class="font-semibold text-foreground">对接特性：</span>{{ launcher.integrationFeature }}
            </div>
            <div class="flex items-center justify-end gap-2">
              <AppButton
                v-if="launcher.github"
                as="a"
                :href="launcher.github"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="sm"
              >
                <Github weight="duotone" class="h-3 w-3" />
                开源
              </AppButton>
              <AppButton
                as="a"
                :href="launcher.website"
                target="_blank"
                rel="noopener noreferrer"
                variant="soft"
                size="sm"
              >
                官网
                <ExternalLink weight="duotone" class="h-3 w-3" />
              </AppButton>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- 生态研发基石与哲学 -->
    <section class="space-y-6">
      <div class="text-center space-y-2 max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">研发理念与工程底线</h2>
        <p class="text-sm text-muted-foreground">以工程严谨度、性能极限与开源透明度驱动社区发展</p>
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

    <!-- 底部行动与社区共建 -->
    <section class="rounded-2xl border border-border/80 bg-card p-8 sm:p-10 text-center space-y-4 max-w-4xl mx-auto shadow-card">
      <div class="inline-flex items-center gap-2">
        <ShieldCheck weight="duotone" class="h-5 w-5 text-emerald-500" />
        <span class="text-sm font-bold text-foreground">与我们携手共建</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        开放、包容、务实的中文 Minecraft 技术圈
      </h2>
      <p class="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
        无论是提交代码、修复文档、报告缺陷，还是为服务器硬件与带宽提供赞助支持，柠泽工作室真诚期待与每一位开发者携手同行。
      </p>
      <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
        <AppButton as="router-link" to="/community" size="md">
          加入认证交流群聊
        </AppButton>
        <AppButton as="router-link" to="/sponsor" variant="secondary" size="md">
          <Heart weight="duotone" class="h-4 w-4 text-rose-500" />
          查看赞助公示
        </AppButton>
        <AppButton as="a" :href="siteConfig.github" target="_blank" rel="noopener noreferrer" variant="outline" size="md">
          <Github weight="duotone" class="h-4 w-4" />
          关注 GitHub 组织
        </AppButton>
      </div>
    </section>
  </div>
</template>
