export interface Milestone {
  year: string
  title: string
  desc: string
}

export interface ValueItem {
  title: string
  desc: string
}

export const studioValues: ValueItem[] = [
  {
    title: '专注中文生态痛点',
    desc: '紧扣国内网络环境与中文技术语境，持续打造无门槛、低延迟、高可用的本土化公共基础设施。'
  },
  {
    title: '坚持开源与自托管架构',
    desc: '所有核心系统代码完全开源，协议透明，架构设计原生支持单机容器化与多节点集群自建部署。'
  },
  {
    title: '克制严谨的工程美学',
    desc: '恪守 Zinc / Slate 低饱和度视觉层级与微阻尼物理动效，剔除视觉噪音，专注于信息密度与交互效率。'
  },
  {
    title: '公开透明的公益运营',
    desc: '所有社会赞助款项专款专用，定向承担独立高防算力与高速带宽支出，定期对外公示财务明细。'
  }
]

export const studioMilestones: Milestone[] = [
  {
    year: '2026.02',
    title: '柠泽工作室正式发起成立',
    desc: '汇聚社区一线开发者与系统运维力量，开启 Minecraft 本土化基础设施与实用开发者工具矩阵的长期研发工程。'
  },
  {
    year: '2026.05',
    title: '柠泽资源站 (miawa) 正式上线',
    desc: '实现 GitHub Release 自动化高速镜像加速，首创引入 PBKDF2 工作量证明（PoW）智能门控防爬机制。'
  },
  {
    year: '2026.08',
    title: 'LogShare.CN 架构重大版本演进',
    desc: '自研 SpinYarn 堆栈反混淆引擎与 PHP 原生扩展，并自研 OpenLiteWaf 与 OpenLiteStats 边缘中间件支撑全线服务。'
  },
  {
    year: '2026.09',
    title: '启动器生态深度互通与工程模板开源',
    desc: '与 Zalith Launcher 2、Fold Craft Launcher 等主流启动器达成生态深度集成；蒸馏开源 LogShare-Front-Template 模板。'
  }
]
