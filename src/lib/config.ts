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
  beian: '萌ICP备20260001号',
  github: 'https://github.com/NingZeStudio',
  email: '3436464181@qq.com',
  qqGroup: 'https://qun.qq.com/universal-share/share?ac=1&authKey=4tb0yflRdC0FjWZGhKHxfTxijnNc0crs399pxm782Lipx%2BoV6xmV%2BoA8%2BcQBUn7m&busi_data=eyJncm91cENvZGUiOiIxMTA0NjkwODM3IiwidG9rZW4iOiIrU2owaDFCMDRmVjJKaUdmdXA5M1RZNHlpVXZaYkZRTUh1bVA4V0ZVNlpGcUpuRjBrbHFRei9CeHI3NXZFb2xBIiwidWluIjoiMzQzNjQ2NDE4MSJ9&data=wr1XZ8qxXdkFazXoz2cuv1qBridVSJ8kVaDYI3vpZxTBbZNezhedFRTuCSeM_-GlzZRIeUHhE36zD5VXan3JqA&svctype=4&tempid=h5_group_info',
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
