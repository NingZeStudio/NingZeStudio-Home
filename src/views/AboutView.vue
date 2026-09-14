<script setup lang="ts">
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import { teamMembers, infraNodes, studioFaqs } from '@/data/team'
import Card from '@/components/ui/Card.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Badge from '@/components/ui/Badge.vue'
import {
  PhUsersThree as UsersIcon,
  PhHardDrives as Server,
  PhCode as Code,
  PhShieldCheck as ShieldCheck,
  PhLockKey as LockKey,
  PhQuestion as QuestionIcon,
  PhEnvelopeSimple as Mail,
  PhGithubLogo as Github,
  PhChatCircleDots as ChatIcon,
  PhHandHeart as HandHeart,
  PhArrowSquareOut as ExternalLink
} from '@phosphor-icons/vue'

useSeoMeta(
  {
    title: '关于团队与架构',
    description: '了解柠泽工作室背后的团队成员、基础设施拓扑、开发者接入规范与非营利公益承诺。'
  },
  siteConfig.name
)()
</script>

<template>
  <div class="container mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-16">
    <!-- 顶部概览 -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2">
        <Badge variant="secondary" class="py-1 px-3 font-mono text-xs">
          关于柠泽 · Team & Infrastructure
        </Badge>
      </div>
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
        专注 Minecraft 本土化基础设施的非营利开源团队
      </h1>
      <p class="text-base text-muted-foreground leading-relaxed">
        由 Minecraft 中文社区独立开发者与系统管理员自发组建。我们聚焦国内复杂网络环境与崩溃排障断层，提供 LogShare 日志诊断分析、资源站 GitHub Releases 镜像加速代理，以及自研轻量级边缘中间件。
      </p>
    </div>

    <!-- 团队成员与分工 -->
    <section class="space-y-6">
      <div class="flex items-center justify-between gap-4 border-b border-border/60 pb-3">
        <div class="flex items-center gap-2">
          <UsersIcon weight="duotone" class="h-5 w-5 text-primary" />
          <div>
            <h2 class="text-xl font-bold tracking-tight text-foreground">团队成员与职责分工</h2>
            <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">核心研发、基础设施运维与社区协同</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Card
          v-for="member in teamMembers"
          :key="member.id"
          hoverable
          class="space-y-4 p-5 flex flex-col justify-between"
        >
          <div class="space-y-3">
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
                <h3 class="text-sm sm:text-base font-bold text-foreground truncate">{{ member.name }}</h3>
                <p class="text-xs text-muted-foreground font-mono truncate">{{ member.role }}</p>
              </div>
            </div>

            <p class="text-xs text-muted-foreground leading-relaxed">
              {{ member.description }}
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tech in member.techStack"
                :key="tech"
                class="rounded-md bg-muted px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
              >
                {{ tech }}
              </span>
            </div>
          </div>

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

    <!-- 公网基础设施与集群拓扑 -->
    <section class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
        <div class="flex items-center gap-2">
          <Server weight="duotone" class="h-5 w-5 text-primary" />
          <div>
            <h2 class="text-xl font-bold tracking-tight text-foreground">公网基础设施与拓扑</h2>
            <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">全线服务自托管部署，保障高可用与低延迟</p>
          </div>
        </div>
        <div class="flex items-center gap-2 text-xs">
          <a
            href="https://api.logshare.cn/security"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>WAF 监控大屏</span>
            <ExternalLink weight="duotone" class="h-3 w-3" />
          </a>
          <span class="text-border">·</span>
          <a
            href="https://api.logshare.cn/stats"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>访问统计大屏</span>
            <ExternalLink weight="duotone" class="h-3 w-3" />
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card v-for="node in infraNodes" :key="node.name" class="p-5 flex flex-col justify-between space-y-4">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-sm font-bold text-foreground">{{ node.name }}</h3>
              <span class="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {{ node.metrics }}
              </span>
            </div>
            <p class="text-xs text-primary font-mono">{{ node.type }}</p>
            <p class="text-xs text-muted-foreground leading-relaxed">
              {{ node.description }}
            </p>
          </div>

          <div class="pt-3 border-t border-border/50">
            <div class="text-[11px] font-mono text-muted-foreground mb-1.5">常驻运行组件</div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="svc in node.services"
                :key="svc"
                class="rounded-md bg-muted px-2 py-0.5 text-[11px] font-mono text-foreground"
              >
                {{ svc }}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- 开发者与生态集成指南 -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 border-b border-border/60 pb-3">
        <Code weight="duotone" class="h-5 w-5 text-primary" />
        <div>
          <h2 class="text-xl font-bold tracking-tight text-foreground">第三方接入与生态规范</h2>
          <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">面向启动器作者与下游开发者的技术指引</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card class="p-5 space-y-3">
          <div class="text-xs font-mono font-bold text-primary">01. 启动器日志 API</div>
          <h3 class="text-sm font-bold text-foreground">LogShare 日志解析与直链</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            标准 RESTful / OpenAPI 规范，支持多文件、压缩包批量上传与纯文本解析。已深度集成至 Zalith Launcher 2、Fold Craft Launcher、Axolotl Launcher、PiLauncher 及 AMCL 等主流启动器。
          </p>
          <div class="pt-1">
            <AppButton as="router-link" to="/projects" variant="soft" size="sm" class="w-full justify-center">
              查看项目与接口
            </AppButton>
          </div>
        </Card>

        <Card class="p-5 space-y-3">
          <div class="text-xs font-mono font-bold text-primary">02. 镜像资源代理</div>
          <h3 class="text-sm font-bold text-foreground">miawa 自动化加速网关</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            针对国内网络优化的 GitHub Releases 高速反向代理。支持 HTTP Range 规范与多节点并发续传，终端用户无需复杂代理工具即可极速下载最新启动器发布包。
          </p>
          <div class="pt-1">
            <AppButton as="a" href="https://miawa.cn" target="_blank" rel="noopener noreferrer" variant="soft" size="sm" class="w-full justify-center">
              访问资源站
              <ExternalLink weight="duotone" class="h-3.5 w-3.5" />
            </AppButton>
          </div>
        </Card>

        <Card class="p-5 space-y-3">
          <div class="text-xs font-mono font-bold text-primary">03. 宽松开源与自托管</div>
          <h3 class="text-sm font-bold text-foreground">MIT / Apache 协议保障</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            全线核心软件均基于宽松开源协议。官方提供 Docker 与 Docker Compose 完整编排文件，支持社区服主与技术团队 100% 独立部署自托管实例，代码完全可控。
          </p>
          <div class="pt-1">
            <AppButton as="a" :href="siteConfig.github" target="_blank" rel="noopener noreferrer" variant="soft" size="sm" class="w-full justify-center">
              浏览 GitHub 仓库
              <ExternalLink weight="duotone" class="h-3.5 w-3.5" />
            </AppButton>
          </div>
        </Card>
      </div>
    </section>

    <!-- 非营利承诺与数据隐私保护 -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 border-b border-border/60 pb-3">
        <LockKey weight="duotone" class="h-5 w-5 text-primary" />
        <div>
          <h2 class="text-xl font-bold tracking-tight text-foreground">非营利公益承诺与数据安全</h2>
          <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">明确数据权属，守护社区信任</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Card class="p-5 space-y-2.5">
          <div class="flex items-center gap-2 text-foreground font-bold text-sm">
            <ShieldCheck weight="duotone" class="h-4 w-4 text-emerald-500" />
            <span>永久免费与零强制广告</span>
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            全线公共服务面向广大 Minecraft 玩家与开发者永久免费开放，绝不植入弹窗、推广或强制商业广告；服务器与网络成本由团队自筹及赞助承担，账目明细实时公开。
          </p>
        </Card>

        <Card class="p-5 space-y-2.5">
          <div class="flex items-center gap-2 text-foreground font-bold text-sm">
            <LockKey weight="duotone" class="h-4 w-4 text-emerald-500" />
            <span>严格日志脱敏与 TTL 物理销毁</span>
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            上传日志前自动过滤 Token、身份凭证与本地绝对路径；数据库由 MariaDB 定时事件严格按照 TTL 生命周期执行不可逆物理删除，绝不违规持久化或售卖用户日志。
          </p>
        </Card>
      </div>
    </section>

    <!-- 常见问题速查 (FAQ) -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 border-b border-border/60 pb-3">
        <QuestionIcon weight="duotone" class="h-5 w-5 text-primary" />
        <div>
          <h2 class="text-xl font-bold tracking-tight text-foreground">常见问题速查 (FAQ)</h2>
          <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">针对高频关注问题的直接解答</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card v-for="faq in studioFaqs" :key="faq.q" class="p-5 space-y-2">
          <h3 class="text-sm font-bold text-foreground">{{ faq.q }}</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            {{ faq.a }}
          </p>
        </Card>
      </div>
    </section>

    <!-- 联系与合作入口 -->
    <section class="rounded-xl border border-border/70 bg-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-soft">
      <div class="space-y-2 max-w-xl">
        <div class="flex items-center gap-2 text-foreground font-bold text-base">
          <ShieldCheck weight="duotone" class="h-5 w-5 text-emerald-500" />
          <span>联系与商务/开源合作</span>
        </div>
        <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          如果您有启动器生态接入需求、技术联调或希望提供算力/网络赞助，随时欢迎通过下方渠道与团队取得联系。
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 shrink-0">
        <AppButton as="router-link" to="/sponsor" variant="primary" size="md">
          <HandHeart weight="duotone" class="h-4 w-4" />
          赞助支持与账目
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
