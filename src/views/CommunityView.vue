<script setup lang="ts">
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import { communitySections } from '@/data/community'
import Card from '@/components/ui/Card.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Badge from '@/components/ui/Badge.vue'
import {
  PhChatCircleDots as ChatIcon,
  PhArrowSquareOut as ExternalLink,
  PhInfo as Info,
  PhGithubLogo as Github,
  PhBug as Bug
} from '@phosphor-icons/vue'

useSeoMeta(
  {
    title: '社区交流',
    description: '加入柠泽工作室官方交流群、答疑互助群与下游开发者群，第一时间获取更新资讯与技术支持。'
  },
  siteConfig.name
)()
</script>

<template>
  <div class="container mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-12">
    <!-- 页面标头 -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2">
        <Badge variant="secondary" class="py-1 px-3 font-mono text-xs">
          官方认证 · Verified Channels
        </Badge>
      </div>
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
        官方社群与技术交流渠道
      </h1>
      <p class="text-base text-muted-foreground leading-relaxed">
        涵盖资源站用户交流、LogShare 官方技术探讨、新手日志排错答疑，以及针对启动器与衍生工具作者的下游开发者群。
      </p>
    </div>

    <!-- 交流规范指引 -->
    <div class="rounded-xl border border-border/70 bg-card p-5 sm:p-6 flex items-start gap-4 shadow-soft">
      <div class="p-2.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 shrink-0">
        <Info weight="duotone" class="h-5 w-5" />
      </div>
      <div class="text-xs sm:text-sm text-muted-foreground space-y-1.5 leading-relaxed">
        <p class="font-bold text-foreground">技术答疑与交流指引</p>
        <p>
          交流时请遵循开源社区友善准则。进行 Minecraft 崩溃报错求助时，请勿直接向群内粘贴数百行未格式化的原始文本，建议优先使用
          <a href="https://logshare.cn" target="_blank" rel="noopener noreferrer" class="text-foreground underline font-semibold">LogShare.CN</a>
          上传并生成智能诊断直链，以便协作者快速定位错误行与堆栈因果。
        </p>
      </div>
    </div>

    <!-- 官方群聊列表 -->
    <div class="space-y-10">
      <section
        v-for="section in communitySections"
        :key="section.title"
        class="space-y-4"
      >
        <div class="flex items-center gap-2 border-b border-border/60 pb-3">
          <ChatIcon weight="duotone" class="h-5 w-5 text-primary" />
          <h2 class="text-xl font-bold tracking-tight text-foreground">{{ section.title }}</h2>
          <span class="text-xs text-muted-foreground font-mono">({{ section.groups.length }})</span>
        </div>
        <p class="text-xs text-muted-foreground -mt-2">{{ section.description }}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            v-for="group in section.groups"
            :key="group.name"
            hoverable
            class="flex items-center justify-between gap-4 p-4 sm:p-5"
          >
            <div class="min-w-0 flex-1 space-y-1">
              <div class="flex items-center gap-2">
                <h3 class="text-sm font-bold text-foreground truncate">{{ group.name }}</h3>
                <Badge variant="outline" class="text-[10px] px-1.5 py-0 font-mono shrink-0">QQ 群</Badge>
              </div>
              <p class="text-xs text-muted-foreground truncate">{{ group.description || '官方认证技术交流通道' }}</p>
            </div>

            <AppButton
              as="a"
              variant="soft"
              size="sm"
              :href="group.url"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0"
            >
              <span>一键加群</span>
              <ExternalLink weight="duotone" class="h-3 w-3" />
            </AppButton>
          </Card>
        </div>
      </section>
    </div>

    <!-- 异步协作与缺陷反馈 -->
    <section class="rounded-xl border border-border/70 bg-card p-6 sm:p-8 space-y-4">
      <div class="flex items-center gap-2 text-foreground font-bold text-lg">
        <Github weight="duotone" class="h-5 w-5 text-primary" />
        <h2>代码仓库与缺陷反馈渠道</h2>
      </div>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
        对于确凿的程序 Bug、明确的功能提案或长篇技术讨论，建议优先通过对应开源仓库的 GitHub Issues 提交，便于维护团队沉淀上下文、跟踪修复进度并纳入自动化持续集成。
      </p>
      <div class="flex flex-wrap items-center gap-3 pt-1">
        <AppButton as="a" :href="siteConfig.github" target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
          <Github weight="duotone" class="h-3.5 w-3.5" />
          前往 GitHub 组织仓库
        </AppButton>
        <AppButton as="a" href="https://github.com/NingZeStudio/LogShare/issues" target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
          <Bug weight="duotone" class="h-3.5 w-3.5" />
          LogShare Issue 提交
        </AppButton>
      </div>
    </section>
  </div>
</template>
