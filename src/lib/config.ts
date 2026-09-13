export interface NavItem {
  name: string
  path: string
}

export interface FriendLink {
  name: string
  url: string
  desc?: string
}

export interface SiteConfig {
  name: string
  nameEn: string
  slogan: string
  title: string
  description: string
  url: string
  beian?: string
  github: string
  email: string
  qqGroup: string
  navLinks: NavItem[]
  friendLinks: FriendLink[]
}

export const siteConfig: SiteConfig = {
  name: '柠泽工作室',
  nameEn: 'NingZe Studio',
  slogan: '以梦为基，携手共进；共建更好的 Minecraft 中文社区。',
  title: '柠泽工作室 (NingZe Studio) - 专注中文 Minecraft 生态建设',
  description: '专注中文 Minecraft 生态建设。致力于打造 LogShare、柠泽资源站、SpinYarn 等更懂中文语境的现代化开源基础设施与社区工具矩阵。',
  url: 'https://github.com/NingZeStudio',
  github: 'https://github.com/NingZeStudio',
  email: '3436464181@qq.com',
  qqGroup: 'https://qm.qq.com/q/MsDLWJTRo6',
  navLinks: [
    { name: '首页', path: '/' },
    { name: '项目矩阵', path: '/projects' },
    { name: '社区交流', path: '/community' },
    { name: '关于团队', path: '/about' }
  ],
  friendLinks: [
    { name: 'LogShare.CN', url: 'https://logshare.cn', desc: 'Minecraft 日志分享与分析平台' },
    { name: '柠泽资源站', url: 'https://miawa.cn', desc: 'Minecraft 启动器镜像分发平台' },
    { name: 'NexusMC', url: 'https://www.nexusmc.cn', desc: '优质 Minecraft 游戏服务器' }
  ]
}
