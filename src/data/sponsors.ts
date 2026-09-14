export interface Sponsor {
  id: number
  name: string
  avatar?: string
  amount: number
  currency: 'CNY' | 'USD'
  date: string
  message?: string
  platform: 'alipay' | 'wechat' | 'afdian' | 'anonymous'
  pinned?: boolean
}

export interface SponsorConfig {
  afdianLink?: string
  alipayQrCode?: string
  wechatQrCode?: string
  title: string
  description: string
  statement: string
}

export const sponsorConfig: SponsorConfig = {
  title: '赞助与财务公开',
  description:
    '柠泽工作室是由社区开发者共同构建的非营利技术组织。所有捐助将全额公开、专款专用，定向用于高防服务器租赁、千兆公网带宽、智能分析模型调用及多节点数据备份。',
  statement:
    '所有赞助款项严格用于基础设施运营与硬件支出，财务定期公示，绝无任何形式的资金私用或商业挪用。',
  afdianLink: 'https://afdian.com/a/lemwood',
  alipayQrCode: new URL('@/assets/img/支付宝.jpg', import.meta.url).href,
  wechatQrCode: new URL('@/assets/img/微信.png', import.meta.url).href
}

export const sponsors: Sponsor[] = [
  {
    id: 4,
    name: 'Swung 0x48',
    amount: 1000,
    currency: 'CNY',
    date: '2026-04-26',
    platform: 'wechat',
    message: 'MobileGlues 开发者，感谢为社区基础设施做出的贡献',
    pinned: true
  },
  {
    id: 1,
    name: 'ksgf452',
    amount: 40,
    currency: 'CNY',
    date: '2026-03-08',
    platform: 'alipay'
  },
  {
    id: 2,
    name: '@习习中',
    amount: 34,
    currency: 'CNY',
    date: '2026-03-08',
    platform: 'wechat'
  },
  {
    id: 3,
    name: '@WZW_王宗王',
    amount: 50,
    currency: 'CNY',
    date: '2026-03-22',
    platform: 'wechat',
    message: 'Bilibili UP 主 UID: 504274118'
  },
  {
    id: 5,
    name: '菜花',
    amount: 10,
    currency: 'CNY',
    date: '2026-04-26',
    platform: 'wechat'
  },
  {
    id: 6,
    name: '懵逼的兔子',
    amount: 5,
    currency: 'CNY',
    date: '2026-04-26',
    platform: 'wechat'
  },
  {
    id: 7,
    name: '我的世界良心君',
    amount: 5,
    currency: 'CNY',
    date: '2026-04-26',
    platform: 'wechat',
    message: 'Baidu 博主'
  },
  {
    id: 9,
    name: '苦瓜',
    amount: 10,
    currency: 'CNY',
    date: '2026-05-02',
    platform: 'wechat'
  },
  {
    id: 10,
    name: 'Janson',
    amount: 10,
    currency: 'CNY',
    date: '2026-05-02',
    platform: 'wechat'
  },
  {
    id: 8,
    name: '马铃薯_potato',
    amount: 1,
    currency: 'CNY',
    date: '2026-05-02',
    platform: 'wechat'
  },
  {
    id: 11,
    name: '@夜长梦多的小狗',
    amount: 15,
    currency: 'CNY',
    date: '2026-08-31',
    platform: 'wechat'
  },
  {
    id: 12,
    name: '@ink',
    amount: 40,
    currency: 'CNY',
    date: '2026-08-31',
    platform: 'alipay'
  },
  {
    id: 13,
    name: '@吃苦瓜加麻加辣个头啊喵喵',
    amount: 30,
    currency: 'CNY',
    date: '2026-08-31',
    platform: 'wechat'
  }
]

export function getTotalAmount(): number {
  return sponsors.reduce((sum, sponsor) => sum + sponsor.amount, 0)
}

export function getSponsorCount(): number {
  return sponsors.length
}

export function getPlatformName(platform: Sponsor['platform']): string {
  switch (platform) {
    case 'alipay':
      return '支付宝'
    case 'wechat':
      return '微信支付'
    case 'afdian':
      return '爱发电'
    default:
      return '匿名支持'
  }
}
