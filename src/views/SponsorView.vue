<script setup lang="ts">
import { computed } from 'vue'
import { useSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import AppButton from '@/components/ui/AppButton.vue'
import {
  sponsors,
  sponsorConfig,
  getTotalAmount,
  getSponsorCount,
  getPlatformName
} from '@/data/sponsors'
import {
  PhHeart as Heart,
  PhQrCode as QrCode,
  PhCurrencyCny as CurrencyCny,
  PhPushPin as Pin,
  PhLightning as Zap,
  PhShieldCheck as ShieldCheck,
  PhHardDrives as Server,
  PhArrowSquareOut as ExternalLink,
  PhCpu as Cpu
} from '@phosphor-icons/vue'

useSeoMeta(
  {
    title: '赞助与财务公开',
    description: sponsorConfig.description
  },
  siteConfig.name
)()

const totalAmount = computed(() => getTotalAmount())
const sponsorCount = computed(() => getSponsorCount())

const sortedSponsors = computed(() => {
  return [...sponsors].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

const costItems = [
  {
    icon: Server,
    title: '高防服务器与网络带宽',
    desc: '保障 LogShare 与资源站应对高频请求与恶意攻击，维持 7×24 小时低延迟连通。'
  },
  {
    icon: Cpu,
    title: 'AI 诊断与推理算力',
    desc: '支撑 LogShare 智能根因分析大模型 API 调用、RAG 向量嵌入与语义索引开销。'
  },
  {
    icon: ShieldCheck,
    title: '数据异地持久化备份',
    desc: '保证日志脱敏存档、Mapping 反混淆缓存及历史版本元数据的多副本高可靠存储。'
  }
]
</script>

<template>
  <div class="container mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-12">
    <!-- 标头与背景说明 -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2">
        <Badge variant="secondary" class="py-1 px-3 gap-1.5 font-mono text-xs">
          <Heart weight="duotone" class="h-3.5 w-3.5 text-rose-500" />
          <span>公益运营与财务透明</span>
        </Badge>
      </div>
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
        {{ sponsorConfig.title }}
      </h1>
      <p class="text-base text-muted-foreground leading-relaxed">
        {{ sponsorConfig.description }}
      </p>
    </div>

    <!-- 关键数据看板 -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card class="p-5 space-y-1">
        <div class="flex items-center justify-between text-muted-foreground">
          <span class="text-xs font-medium">累计赞助人次</span>
          <Heart weight="duotone" class="h-4 w-4 text-rose-500" />
        </div>
        <p class="text-2xl sm:text-3xl font-black font-mono tracking-tight text-foreground">
          {{ sponsorCount }}
        </p>
        <p class="text-[11px] text-muted-foreground">真实社区赞助收录</p>
      </Card>

      <Card class="p-5 space-y-1">
        <div class="flex items-center justify-between text-muted-foreground">
          <span class="text-xs font-medium">累计获赠资金</span>
          <CurrencyCny weight="duotone" class="h-4 w-4 text-emerald-500" />
        </div>
        <p class="text-2xl sm:text-3xl font-black font-mono tracking-tight text-foreground">
          ¥{{ totalAmount }}
        </p>
        <p class="text-[11px] text-muted-foreground">全额公示并转入专用账户</p>
      </Card>

      <Card class="p-5 space-y-1">
        <div class="flex items-center justify-between text-muted-foreground">
          <span class="text-xs font-medium">开放支持渠道</span>
          <QrCode weight="duotone" class="h-4 w-4 text-sky-500" />
        </div>
        <p class="text-2xl sm:text-3xl font-black font-mono tracking-tight text-foreground">
          3 种
        </p>
        <p class="text-[11px] text-muted-foreground">支付宝 · 微信 · 爱发电</p>
      </Card>

      <Card class="p-5 space-y-1">
        <div class="flex items-center justify-between text-muted-foreground">
          <span class="text-xs font-medium">资金使用监管</span>
          <ShieldCheck weight="duotone" class="h-4 w-4 text-primary" />
        </div>
        <p class="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
          100%
        </p>
        <p class="text-[11px] text-muted-foreground">承诺绝无商业或个人挪用</p>
      </Card>
    </section>

    <!-- 赞助渠道 -->
    <section class="space-y-6">
      <div class="border-b border-border/60 pb-3">
        <h2 class="text-xl font-bold tracking-tight text-foreground">赞助支持渠道</h2>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">
          请在转账附言中留下您的常用昵称或社交账号，以便我们收录进永久鸣谢榜单
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 支付宝 -->
        <Card class="p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  <QrCode weight="duotone" class="h-5 w-5" />
                </div>
                <h3 class="text-base font-bold text-foreground">支付宝扫码</h3>
              </div>
              <Badge variant="outline" class="font-mono text-xs">Alipay</Badge>
            </div>
            <p class="text-xs text-muted-foreground leading-relaxed">
              使用支付宝 App 扫描下方二维码进行赞助，款项直接进入运维专用账户。
            </p>
          </div>

          <div class="rounded-xl border border-border/70 bg-muted/40 p-4 flex items-center justify-center min-h-[260px]">
            <img
              :src="sponsorConfig.alipayQrCode"
              alt="支付宝赞助二维码"
              class="max-h-60 w-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          <p class="text-center text-xs text-muted-foreground">
            保存二维码或在手机端截图后长按识别
          </p>
        </Card>

        <!-- 微信支付 -->
        <Card class="p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <QrCode weight="duotone" class="h-5 w-5" />
                </div>
                <h3 class="text-base font-bold text-foreground">微信支付扫码</h3>
              </div>
              <Badge variant="outline" class="font-mono text-xs">WeChat Pay</Badge>
            </div>
            <p class="text-xs text-muted-foreground leading-relaxed">
              使用微信 App 扫描赞赏码支持我们，支持附带您的寄语和联系方式。
            </p>
          </div>

          <div class="rounded-xl border border-border/70 bg-muted/40 p-4 flex items-center justify-center min-h-[260px]">
            <img
              :src="sponsorConfig.wechatQrCode"
              alt="微信赞助二维码"
              class="max-h-60 w-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          <p class="text-center text-xs text-muted-foreground">
            长按识别或在微信中扫码完成赞赏
          </p>
        </Card>
      </div>

      <!-- 爱发电在线赞助通道 -->
      <Card
        v-if="sponsorConfig.afdianLink"
        class="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-muted/20"
      >
        <div class="space-y-1 max-w-xl">
          <div class="flex items-center gap-2">
            <Zap weight="duotone" class="h-4 w-4 text-primary" />
            <h3 class="text-sm sm:text-base font-bold text-foreground">爱发电 (Afdian) 在线赞助</h3>
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            支持按月周期赞助或单笔支持，平台自动记录订单明细，便于统一对账。
          </p>
        </div>

        <AppButton
          as="a"
          :href="sponsorConfig.afdianLink"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
          class="shrink-0"
        >
          <span>前往爱发电页面</span>
          <ExternalLink weight="duotone" class="h-3.5 w-3.5" />
        </AppButton>
      </Card>
    </section>

    <!-- 成本构成透明公示 -->
    <section class="space-y-6">
      <div class="border-b border-border/60 pb-3">
        <h2 class="text-xl font-bold tracking-tight text-foreground">基础设施成本构成</h2>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">
          公开每一份开销去向，是维持开源社区信任的唯一基石
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card v-for="item in costItems" :key="item.title" class="p-5 space-y-3">
          <div class="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 w-fit">
            <component :is="item.icon" weight="duotone" class="h-5 w-5" />
          </div>
          <h3 class="text-sm font-bold text-foreground">{{ item.title }}</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">
            {{ item.desc }}
          </p>
        </Card>
      </div>
    </section>

    <!-- 赞助者永久鸣谢列表 -->
    <section class="space-y-6">
      <div class="flex items-center justify-between border-b border-border/60 pb-3">
        <div>
          <h2 class="text-xl font-bold tracking-tight text-foreground">赞助者永久鸣谢榜</h2>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">
            铭谢每一位在工作室起步与演进历程中施以援手的同行者
          </p>
        </div>
        <Badge variant="outline" class="font-mono text-xs">
          {{ sponsorCount }} 位伙伴
        </Badge>
      </div>

      <Card class="p-0 overflow-hidden divide-y divide-border/60">
        <div
          v-for="sponsor in sortedSponsors"
          :key="sponsor.id"
          class="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 transition-colors hover:bg-muted/30"
        >
          <div class="min-w-0 flex-1 space-y-1.5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-bold text-sm sm:text-base text-foreground">
                {{ sponsor.name }}
              </span>

              <Badge
                v-if="sponsor.pinned"
                variant="secondary"
                class="gap-1 py-0 px-2 text-[11px] font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
              >
                <Pin weight="duotone" class="h-3 w-3" />
                <span>特别鸣谢</span>
              </Badge>

              <Badge variant="outline" class="text-[11px] py-0 px-2 font-mono">
                {{ getPlatformName(sponsor.platform) }}
              </Badge>
            </div>

            <p v-if="sponsor.message" class="text-xs text-muted-foreground leading-relaxed">
              “{{ sponsor.message }}”
            </p>
          </div>

          <div class="text-right shrink-0">
            <div class="font-mono font-bold text-base sm:text-lg text-foreground">
              ¥{{ sponsor.amount }}
            </div>
            <div class="text-[11px] font-mono text-muted-foreground mt-0.5">
              {{ sponsor.date }}
            </div>
          </div>
        </div>
      </Card>
    </section>

    <!-- 底部财务承诺声明 -->
    <section class="rounded-xl border border-border/80 bg-card p-6 sm:p-8 space-y-3">
      <div class="flex items-center gap-2 text-foreground font-bold text-base">
        <ShieldCheck weight="duotone" class="h-5 w-5 text-emerald-500" />
        <span>非营利与开源承诺</span>
      </div>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {{ sponsorConfig.statement }} 柠泽工作室的所有核心项目将长期维持自由开源协议，向所有玩家、服主与开发者无门槛开放。若您赞助后需要补充备注或更新公示信息，欢迎联系维护团队进行核实登记。
      </p>
    </section>
  </div>
</template>
