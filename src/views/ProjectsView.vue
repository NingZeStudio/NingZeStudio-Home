<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import { projects, projectCategories, type ProjectCategory } from '@/data/projects'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import AppButton from '@/components/ui/AppButton.vue'
import {
  PhMagnifyingGlass as Search,
  PhStar as Star,
  PhGithubLogo as Github,
  PhArrowSquareOut as ExternalLink,
  PhCode as Code,
  PhFolderOpen as FolderOpen,
  PhPlugsConnected as ConnectIcon
} from '@phosphor-icons/vue'

useSeoMeta({
  title: '项目矩阵',
  description: '浏览柠泽工作室在云端基础设施、客户端工具、工程模板与社区文档领域的全部开源项目。'
}, siteConfig.name)()

const currentCategory = ref<ProjectCategory | 'all'>('all')
const searchQuery = ref('')

const filteredProjects = computed(() => {
  return projects.filter(item => {
    const matchCategory =
      currentCategory.value === 'all' || item.category === currentCategory.value
    const query = searchQuery.value.trim().toLowerCase()
    const matchSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.tagline.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.language.toLowerCase().includes(query)
    return matchCategory && matchSearch
  })
})
</script>

<template>
  <div class="container mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-10">
    <div class="space-y-2 border-b border-border/60 pb-6">
      <h1 class="text-3xl font-extrabold tracking-tight text-foreground">开源项目矩阵</h1>
      <p class="text-sm text-muted-foreground leading-relaxed">
        涵盖云端高性能分析服务、自动化版本镜像、边缘安全防护与现代化前端模板。
      </p>
    </div>

    <!-- 筛选与搜索控制栏 -->
    <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
      <!-- 分类切换标签 -->
      <div class="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/60 w-fit">
        <button
          v-for="cat in projectCategories"
          :key="cat.id"
          type="button"
          class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
          :class="
            currentCategory === cat.id
              ? 'bg-card text-foreground shadow-sm font-semibold'
              : 'text-muted-foreground hover:text-foreground'
          "
          @click="currentCategory = cat.id"
        >
          {{ cat.name }}
        </button>
      </div>

      <!-- 搜索输入框 -->
      <div class="relative max-w-xs w-full">
        <Search weight="duotone" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索项目或技术栈..."
          class="w-full h-9 pl-9 pr-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </div>

    <!-- 项目卡片列表 -->
    <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Card
        v-for="project in filteredProjects"
        :key="project.id"
        hoverable
        class="flex flex-col justify-between space-y-4"
      >
        <div class="space-y-3">
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="flex items-center gap-1.5 flex-wrap">
                <h3 class="text-base font-bold text-foreground">{{ project.name }}</h3>
                <Badge v-if="project.badge" variant="secondary" class="text-[10px] px-1.5 py-0">
                  {{ project.badge }}
                </Badge>
              </div>
              <p class="text-xs text-muted-foreground font-mono mt-0.5 leading-snug">{{ project.tagline }}</p>
            </div>
            <div v-if="project.stars !== undefined && project.stars > 0" class="flex items-center gap-1 text-[11px] font-mono text-muted-foreground border border-border/60 px-2 py-0.5 rounded-full shrink-0">
              <Star weight="duotone" class="h-3 w-3 text-amber-500" />
              <span>{{ project.stars }}</span>
            </div>
          </div>

          <p class="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {{ project.description }}
          </p>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-border/50 text-xs">
          <div class="flex items-center gap-1 text-muted-foreground font-mono">
            <Code weight="duotone" class="h-3 w-3" />
            <span>{{ project.language }}</span>
          </div>

          <div class="flex items-center gap-2">
            <AppButton v-if="project.siteUrl" as="a" :href="project.siteUrl" variant="outline" size="sm">
              访问
              <ExternalLink weight="duotone" class="h-3 w-3" />
            </AppButton>
            <AppButton as="a" :href="project.githubUrl" variant="soft" size="sm">
              代码
              <Github weight="duotone" class="h-3 w-3" />
            </AppButton>
          </div>
        </div>
      </Card>
    </div>

    <!-- 空搜索状态 -->
    <div v-else class="py-16 text-center space-y-3">
      <div class="inline-flex p-3 rounded-xl bg-muted/60 text-muted-foreground">
        <FolderOpen weight="duotone" class="h-8 w-8" />
      </div>
      <p class="text-sm font-medium text-foreground">未检索到匹配的开源项目</p>
      <p class="text-xs text-muted-foreground">请尝试更换关键字或切换至“全部开源项目”分类</p>
      <AppButton size="sm" variant="outline" @click="searchQuery = ''; currentCategory = 'all'">
        重置筛选
      </AppButton>
    </div>

    <!-- 开发者与生态接入指引 -->
    <section class="rounded-xl border border-border/70 bg-card p-6 sm:p-8 space-y-4 shadow-soft">
      <div class="flex items-center gap-2 text-foreground font-bold text-lg">
        <ConnectIcon weight="duotone" class="h-5 w-5 text-primary" />
        <h2>开发者与启动器生态接入</h2>
      </div>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
        LogShare.CN 与柠泽资源站全线提供无供应商绑定的标准 RESTful API 及 OpenAPI 文档。如果您正在开发 Minecraft 启动器、模组管理工具或服务器诊断面板，欢迎将诊断直传与镜像接口集成至您的客户端中。
      </p>
      <div class="flex flex-wrap items-center gap-3 pt-1">
        <AppButton as="a" href="https://api.logshare.cn/docs" target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
          查看 LogShare API 文档
          <ExternalLink weight="duotone" class="h-3.5 w-3.5" />
        </AppButton>
        <AppButton as="router-link" to="/community" variant="soft" size="sm">
          加入下游开发者群交流
        </AppButton>
      </div>
    </section>
  </div>
</template>
