<script setup lang="ts">
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import { communitySections } from '@/data/community'
import Card from '@/components/ui/Card.vue'
import AppButton from '@/components/ui/AppButton.vue'
import {
  PhChatCircleDots as ChatIcon,
  PhBroadcast as Broadcast,
  PhArrowSquareOut as ExternalLink,
  PhInfo as Info
} from '@phosphor-icons/vue'

useSeoMeta({
  title: '社区交流',
  description: '加入柠泽工作室官方交流群、各启动器官方频道与玩家社区，第一时间获取更新资讯与技术答疑。'
}, siteConfig.name)()
</script>

<template>
  <div class="container mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-12">
    <div class="space-y-2 border-b border-border/60 pb-6">
      <h1 class="text-3xl font-extrabold tracking-tight text-foreground">社区交流与官方频道</h1>
      <p class="text-sm text-muted-foreground leading-relaxed">
        涵盖各启动器官方交流频道、核心答疑群与玩家互助社区。点击即可加入群聊或进入频道。
      </p>
    </div>

    <!-- 交流规范温馨提示 -->
    <div class="rounded-xl border border-border/70 bg-card p-4 sm:p-5 flex items-start gap-3 shadow-soft">
      <div class="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 shrink-0">
        <Info weight="duotone" class="h-5 w-5" />
      </div>
      <div class="text-xs text-muted-foreground space-y-1 leading-relaxed">
        <p class="font-semibold text-foreground text-sm">友好互助交流指引</p>
        <p>频道专供更新通知与单向资讯同步，入群交流请遵守群规。寻求日志诊断与崩溃排查时，建议优先使用 <a href="https://logshare.cn" target="_blank" class="text-foreground underline font-medium">LogShare.CN</a> 生成日志脱敏分享链接并提供完整错误堆栈。</p>
      </div>
    </div>

    <!-- 分区列表（严格遵循：频道置顶第一，官方群第二） -->
    <div class="space-y-10">
      <section
        v-for="section in communitySections"
        :key="section.title"
        class="space-y-4"
      >
        <div class="flex items-center gap-2">
          <component
            :is="section.isChannel ? Broadcast : ChatIcon"
            weight="duotone"
            class="h-5 w-5 text-primary"
          />
          <h2 class="text-xl font-bold tracking-tight text-foreground">{{ section.title }}</h2>
          <span class="text-xs text-muted-foreground">({{ section.groups.length }})</span>
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
              <h3 class="text-sm font-bold text-foreground truncate">{{ group.name }}</h3>
              <p class="text-xs text-muted-foreground truncate">{{ group.description || '官方社区认证渠道' }}</p>
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
              <span>{{ section.isChannel ? '进入频道' : '加入群聊' }}</span>
              <ExternalLink weight="duotone" class="h-3 w-3" />
            </AppButton>
          </Card>
        </div>
      </section>
    </div>
  </div>
</template>
