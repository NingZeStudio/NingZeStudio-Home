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
    title: '专注中文生态',
    desc: '紧扣国内网络环境与中文语境痛点，为 Minecraft 中文玩家和服主打造低延迟、易理解的本土化基础设施。'
  },
  {
    title: '坚持开源自托管',
    desc: '所有核心产品代码完全开放，不绑定封闭生态，架构上支持完全自建部署与社区共建。'
  },
  {
    title: '克制工程美学',
    desc: '坚守 Zinc / Slate 冷灰低饱和度视觉规范，全链路物理回弹阻尼动效，拒绝廉价高饱和渐变与 Emoji 堆叠。'
  },
  {
    title: '公益透明运营',
    desc: '所有捐助全额用于服务器硬件与带宽开销，提供长期稳定的公共镜像与智能分析节点。'
  }
]

export const studioMilestones: Milestone[] = [
  {
    year: '2026.02',
    title: '柠泽工作室正式成立',
    desc: '立足于「以梦为基，携手共进」理念，开启中文 Minecraft 开发者工具与镜像基础设施矩阵建设。'
  },
  {
    year: '2026.05',
    title: '柠泽资源站 (miawa) 全新上线',
    desc: '实现 GitHub Release 自动化高速镜像分发，引入 PBKDF2 PoW 智能门控防御爬虫。'
  },
  {
    year: '2026.08',
    title: 'LogShare.CN 架构大版本演进',
    desc: '自研 SpinYarn Rust 反混淆引擎上线，引入 OpenLiteWaf 与 OpenLiteStats 边缘防护中间件。'
  },
  {
    year: '2026.09',
    title: '全线统一设计体系与模板蒸馏',
    desc: '全站对齐 LogShare 设计范式，发布 LogShare-Front-Template 与 ElementsPlus-Admin-Template 模板。'
  }
]
