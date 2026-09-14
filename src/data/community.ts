export interface QqGroup {
  name: string
  description?: string
  url: string
}

export interface CommunitySection {
  title: string
  description: string
  groups: QqGroup[]
}

// 官方群聊矩阵共四个：NingZe资源站官方群、LogShare 官方交流群、LogShare 答疑解惑群、柠泽工作室下游开发者群
export const officialGroups: QqGroup[] = [
  {
    name: 'NingZe 资源站官方群',
    description: 'NingZe 资源站镜像分发、API 服务与使用交流',
    url: 'https://qun.qq.com/universal-share/share?ac=1&authKey=4tb0yflRdC0FjWZGhKHxfTxijnNc0crs399pxm782Lipx%2BoV6xmV%2BoA8%2BcQBUn7m&busi_data=eyJncm91cENvZGUiOiIxMTA0NjkwODM3IiwidG9rZW4iOiIrU2owaDFCMDRmVjJKaUdmdXA5M1RZNHlpVXZaYkZRTUh1bVA4V0ZVNlpGcUpuRjBrbHFRei9CeHI3NXZFb2xBIiwidWluIjoiMzQzNjQ2NDE4MSJ9&data=wr1XZ8qxXdkFazXoz2cuv1qBridVSJ8kVaDYI3vpZxTBbZNezhedFRTuCSeM_-GlzZRIeUHhE36zD5VXan3JqA&svctype=4&tempid=h5_group_info'
  },
  {
    name: 'LogShare 官方交流群',
    description: 'LogShare 平台迭代公告、新功能体验与技术探讨',
    url: 'https://qm.qq.com/q/FOGt99aayY'
  },
  {
    name: 'LogShare 答疑解惑群',
    description: '崩溃报错解析、日志脱敏诊断与社区互助答疑',
    url: 'https://qm.qq.com/q/gZ2El58RVe'
  },
  {
    name: '柠泽工作室下游开发者群',
    description: '基于柠泽开源基建二次开发、集成对接与技术交流',
    url: 'https://qm.qq.com/q/MsDLWJTRo6'
  }
]

export const communitySections: CommunitySection[] = [
  {
    title: '官方交流与答疑群',
    description: '与开发者及核心团队面对面交流，获得官方技术支持与互助答疑',
    groups: officialGroups
  }
]
