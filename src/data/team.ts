export interface Milestone {
  year: string
  title: string
  desc: string
}

export interface ValueItem {
  title: string
  desc: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  title: string
  avatar?: string
  description: string
  techStack: string[]
  email?: string
  qq?: string
  github?: string
}

export interface UrgentRecruitment {
  title: string
  badge: string
  description: string
  requirements: string[]
  benefits: string[]
  actionText: string
  actionUrl: string
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

export const teamMembers: TeamMember[] = [
  {
    id: 'lemwood',
    name: '柠枺 (Lemwood)',
    role: '财务资助 · 生态开拓 · AI 研发',
    title: '生态主理人 & 算力赞助',
    avatar: new URL('@/assets/img/avatar-lemwood.png', import.meta.url).href,
    description:
      '全线高防服务器集群与网络带宽全额资助者。统筹工作室财务运营、开发者人脉拓展与外部启动器生态联动，主导 Golang 服务研发与 LogShare 智能诊断模型。',
    techStack: ['财务', 'Golang', '生态', '人脉', 'AI'],
    email: '3436464181@qq.com',
    qq: '3436464181',
    github: 'https://github.com/leemwood'
  },
  {
    id: 'yansui',
    name: '燕随 (YanSui)',
    role: '系统工程 · 全栈架构 · 界面规范',
    title: '核心系统架构师',
    avatar: new URL('@/assets/img/avatar-yansui.png', import.meta.url).href,
    description:
      '主导全线系统的底层架构与工程落地。负责 PHP 协程常驻服务、Rust 堆栈反混淆引擎、Vue 3 界面设计范式及 Docker / Linux 容器化与网络 BGP 路由调优。',
    techStack: ['Docker', 'Linux', 'BGP', 'PHP', 'Vue', 'Rust'],
    email: 'lyl518@outlook.com',
    github: 'https://github.com/qitry'
  }
]

export const urgentRecruitment: UrgentRecruitment = {
  title: '急聘：Minecraft 游戏日志排查管理员 / 技术答疑志愿者',
  badge: '急缺加入 · 长期招募',
  description:
    '随着 LogShare.CN 与官方答疑社区的高速发展，平台每日承载成千上万份玩家与服主的报错求助。我们急需精通 Minecraft 游戏运行机制与异常堆栈分析的技术高手加入管理团队，共同守护友善高效的中文互助生态！',
  requirements: [
    '熟练读懂 Minecraft Crash-Report 与 Latest.log 运行日志，能快速定位 Caused by 根因堆栈与异常类',
    '熟悉主流 Mod 加载器（Forge / NeoForge / Fabric / Quilt）运行机制，对常见模组冲突与 Mixin Apply 报错有诊断经验',
    '了解常见服务端核心（Paper / Purpur / Leaves 等）报错日志排障者优先',
    '具备耐心与社区友善沟通素养，愿意在空余时间为求助玩家答疑指引'
  ],
  benefits: [
    '直通核心开发与运维团队，深度参与 LogShare 智能诊断特征库与 RAG 知识体系建设',
    '永久收录进柠泽工作室官方贡献者名人堂，享有全线自研工具最高级权限',
    '颁发官方认证群管理员身份，共同制定社区互助守则'
  ],
  actionText: '加入答疑群直接自荐',
  actionUrl: 'https://qm.qq.com/q/8T2lK9jX7a' // LogShare 答疑解惑群
}
