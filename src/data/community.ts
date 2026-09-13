export interface QqGroup {
  name: string
  description?: string
  url: string
}

export interface CommunitySection {
  title: string
  description: string
  isChannel?: boolean
  groups: QqGroup[]
}

// 严格遵守规范：频道置顶排在首位
export const channelGroups: QqGroup[] = [
  {
    name: 'Axolotl Launcher 官方频道',
    description: 'Axolotl Launcher 开发者与玩家交流频道',
    url: 'https://pd.qq.com/s/4xe7332s1?b=9'
  },
  {
    name: 'FCL 启动器交流社区',
    description: 'Fold Craft Launcher 官方交流讨论频道',
    url: 'https://pd.qq.com/s/4vs7c2b90?b=9'
  },
  {
    name: 'FCL 玩家社区',
    description: 'Fold Craft Launcher 活跃玩家交流聚集地',
    url: 'https://pd.qq.com/s/376rxtu6p'
  },
  {
    name: 'FCL Fold Craft Launcher 玩家社区',
    description: 'FCL 启动器综合互动与反馈频道',
    url: 'https://pd.qq.com/s/ard1mse4a'
  },
  {
    name: 'Zalith Launcher 玩家社区',
    description: 'Zalith Launcher 官方频道与使用答疑',
    url: 'https://pd.qq.com/s/4xdpxmsnk?b=9'
  }
]

export const officialGroups: QqGroup[] = [
  {
    name: '柠泽工作室官方交流群',
    description: '群号：1077373741 · 工作室最新动态与全线服务交流',
    url: 'https://qun.qq.com/universal-share/share?ac=1&authKey=4tb0yflRdC0FjWZGhKHxfTxijnNc0crs399pxm782Lipx%2BoV6xmV%2BoA8%2BcQBUn7m&busi_data=eyJncm91cENvZGUiOiIxMTA0NjkwODM3IiwidG9rZW4iOiIrU2owaDFCMDRmVjJKaUdmdXA5M1RZNHlpVXZaYkZRTUh1bVA4V0ZVNlpGcUpuRjBrbHFRei9CeHI3NXZFb2xBIiwidWluIjoiMzQzNjQ2NDE4MSJ9&data=wr1XZ8qxXdkFazXoz2cuv1qBridVSJ8kVaDYI3vpZxTBbZNezhedFRTuCSeM_-GlzZRIeUHhE36zD5VXan3JqA&svctype=4&tempid=h5_group_info'
  },
  {
    name: 'LogShare 答疑解惑群',
    description: '日志排查、报错解析、提问技巧与技术答疑交流',
    url: 'https://qm.qq.com/q/gZ2El58RVe'
  },
  {
    name: 'LogShare 官方交流群',
    description: '版本迭代更新发布、问题反馈与技术探讨',
    url: 'https://qm.qq.com/q/FOGt99aayY'
  }
]

export const launcherGroups: QqGroup[] = [
  {
    name: 'Axolotl Launcher 官方交流①群',
    description: 'Axolotl Launcher 官方交流群',
    url: 'https://qm.qq.com/q/W26huQFZym'
  },
  {
    name: 'Axolotl Launcher 官方交流②群',
    description: 'Axolotl Launcher 官方交流群',
    url: 'https://qm.qq.com/q/EZX7wHdNgk'
  },
  {
    name: 'Fold Craft Launcher 玩家交流群①',
    description: 'Fold Craft Launcher 官方交流群',
    url: 'https://qm.qq.com/q/PK6I2gIB0c'
  },
  {
    name: 'fcl、zl2 启动器交流群',
    description: 'FCL 与 Zalith Launcher 玩家交流讨论',
    url: 'https://qm.qq.com/q/4bov8ZSweI'
  }
]

export const communityGroups: QqGroup[] = [
  {
    name: '公益玩家社服务器综合交流群',
    description: 'Minecraft 玩家社群与联机服务器交流',
    url: 'https://qm.qq.com/q/9jzheyfi36'
  }
]

export const communitySections: CommunitySection[] = [
  {
    title: '各官方频道',
    description: '无需验证即刻加入，订阅最新启动器构建、功能公告与社区话题',
    isChannel: true,
    groups: channelGroups
  },
  {
    title: '官方群与答疑群',
    description: '与开发者及核心团队面对面交流，获得快速技术答疑支持',
    groups: officialGroups
  },
  {
    title: '各启动器交流群',
    description: '主流启动器玩家社群，探讨配置调优、模组兼容与启动疑难',
    groups: launcherGroups
  },
  {
    title: '玩家综合社区',
    description: '跨平台联机互助与 Minecraft 游戏文化爱好者聚集地',
    groups: communityGroups
  }
]
