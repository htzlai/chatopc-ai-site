'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const toolCategories = [
  { id: 'all', name: '全部', icon: '🔧' },
  { id: 'info', name: '信息采集', icon: '📡' },
  { id: 'knowledge', name: '知识积累', icon: '🧠' },
  { id: 'efficiency', name: '效率提升', icon: '⚡' },
  { id: 'execution', name: '执行落地', icon: '🚀' },
];

const tools = [
  {
    id: 1,
    name: 'BlogWatcher',
    category: 'info',
    description: '监控博客/RSS，追踪行业动态、竞品更新',
    features: ['RSS 监控', '自动抓取', '更新通知', '内容摘要'],
    useCase: '追踪目标博客、行业动态、竞品更新',
    popular: true,
  },
  {
    id: 2,
    name: 'Bird (Twitter CLI)',
    category: 'info',
    description: '监控推文，跟踪关键人物、热点话题',
    features: ['关键词监控', '用户追踪', '实时通知', '数据导出'],
    useCase: '跟踪关键人物、热点话题、行业趋势',
    popular: false,
  },
  {
    id: 3,
    name: 'Web Search + Fetch',
    category: 'info',
    description: '搜索+抓取，市场调研、竞品分析',
    features: ['智能搜索', '内容抓取', '数据整理', '报告生成'],
    useCase: '市场调研、竞品分析、信息收集',
    popular: false,
  },
  {
    id: 4,
    name: 'Summarize',
    category: 'info',
    description: '内容摘要，快速消化长视频、播客',
    features: ['视频摘要', '播客转录', '文章总结', '要点提取'],
    useCase: '快速消化长视频、播客、长文章',
    popular: true,
  },
  {
    id: 5,
    name: 'Obsidian',
    category: 'knowledge',
    description: '本地知识库，建立个人第二大脑',
    features: ['双向链接', '图谱视图', '本地存储', '插件生态'],
    useCase: '建立个人知识库、知识图谱、长期积累',
    popular: true,
  },
  {
    id: 6,
    name: 'Notion',
    category: 'knowledge',
    description: '云端协作，项目管理、知识共享',
    features: ['数据库', '协作编辑', '模板库', 'API 集成'],
    useCase: '项目管理、知识共享、团队协作',
    popular: false,
  },
  {
    id: 7,
    name: 'Apple Notes',
    category: 'knowledge',
    description: '快速记录，碎片想法捕捉',
    features: ['快速记录', '语音输入', '图片标注', 'iCloud 同步'],
    useCase: '碎片想法捕捉、快速记录、临时笔记',
    popular: false,
  },
  {
    id: 8,
    name: 'Memory 系统',
    category: 'knowledge',
    description: 'AI 记忆，让 AI 助手记住你的偏好',
    features: ['偏好记忆', '上下文保持', '个性化', '长期学习'],
    useCase: '让 AI 记住你的工作习惯、偏好设置',
    popular: true,
  },
  {
    id: 9,
    name: 'Cron 定时任务',
    category: 'efficiency',
    description: '自动执行，晨间简报、定期检查',
    features: ['定时执行', '自动化流程', '通知推送', '日志记录'],
    useCase: '晨间简报、定期检查、自动化工作流',
    popular: true,
  },
  {
    id: 10,
    name: 'Things/Reminders',
    category: 'efficiency',
    description: '任务管理，GTD、项目跟踪',
    features: ['任务分类', '优先级', '提醒通知', '项目分组'],
    useCase: 'GTD 工作法、项目跟踪、任务管理',
    popular: false,
  },
  {
    id: 11,
    name: 'GitHub CLI',
    category: 'efficiency',
    description: '代码协作，PR 监控、CI 状态',
    features: ['PR 管理', 'CI 监控', '代码审查', '自动化'],
    useCase: '代码协作、PR 监控、CI 状态跟踪',
    popular: false,
  },
  {
    id: 12,
    name: 'Coding Agent',
    category: 'efficiency',
    description: '代码辅助，快速开发、调试',
    features: ['代码生成', '错误修复', '代码审查', '重构建议'],
    useCase: '快速开发、代码调试、重构优化',
    popular: true,
  },
  {
    id: 13,
    name: 'TTS 语音',
    category: 'execution',
    description: '文字转语音，播客制作、语音简报',
    features: ['多语言', '自然语音', '批量转换', '格式导出'],
    useCase: '播客制作、语音简报、内容创作',
    popular: false,
  },
  {
    id: 14,
    name: 'Browser 自动化',
    category: 'execution',
    description: '网页操作，表单填写、数据抓取',
    features: ['自动化操作', '数据抓取', '表单填写', '截图录制'],
    useCase: '表单填写、数据抓取、网页自动化',
    popular: true,
  },
  {
    id: 15,
    name: '消息系统',
    category: 'execution',
    description: '多平台通讯，客户沟通、团队协作',
    features: ['统一入口', '多平台', '消息同步', '智能回复'],
    useCase: '客户沟通、团队协作、统一消息管理',
    popular: true,
  },
];

const valueModels = [
  {
    title: '晨间/晚间智能简报',
    rating: 5,
    description: '信息碎片化只会加剧，你永远需要一个帮你过滤噪音的系统',
    implementation: 'Cron 定时任务 → 拉取天气 + 日历 + 邮件 + 新闻 → 整理后推送到 Telegram/微信',
    why: '为什么不过时：信息碎片化只会加剧，你永远需要一个帮你过滤噪音的系统',
  },
  {
    title: '个人知识库管理',
    rating: 5,
    description: '知识积累是复利，5年后你会感谢今天的自己',
    implementation: '文章/视频/播客 → Summarize 摘要 → 存入 Obsidian/Notion → 建立双向链接的知识图谱',
    why: '为什么不过时：知识积累是复利，5年后你会感谢今天的自己',
  },
  {
    title: '内容监控 + 智能通知',
    rating: 4,
    description: '信息差永远值钱，早知道一天就是竞争优势',
    implementation: 'BlogWatcher 监控目标博客 → Bird 监控 Twitter 关键词 → 有更新时自动通知',
    why: '为什么不过时：信息差永远值钱，早知道一天就是竞争优势',
  },
  {
    title: '任务收集箱 + 智能整理',
    rating: 5,
    description: 'GTD 理念存在了几十年，核心需求不变',
    implementation: '随时语音/文字输入待办 → AI 自动分类、设置提醒 → 同步到 Things/Todoist/Reminders',
    why: '为什么不过时：GTD 理念存在了几十年，核心需求不变',
  },
  {
    title: '跨平台信息枢纽',
    rating: 5,
    description: '这是最核心的价值——一个大脑，多个入口',
    implementation: 'Telegram/WhatsApp/Signal/Slack 任选入口 → 统一的 AI 助手响应 → 数据和记忆互通',
    why: '为什么不过时：这是最核心的价值——一个大脑，多个入口',
  },
];

export default function ProductsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = activeCategory === 'all'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Badge variant="secondary" size="md" className="mb-4">
            一人公司的实战工具箱
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            用 AI 重构你的工作流
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-text-muted)]">
            从信息采集到执行落地，一套完整的 AI 工具链，让一个人也能拥有团队级别的能力
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {toolCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                rounded-full px-5 py-2 text-sm font-medium transition-all flex items-center gap-2
                ${activeCategory === category.id
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-bg-card-hover)]'
                }
              `}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16"
          >
            {filteredTools.map((tool) => (
              <Card 
                key={tool.id} 
                variant="default"
                glow={tool.popular}
                className="relative overflow-hidden"
              >
                {tool.popular && (
                  <div className="absolute right-4 top-4">
                    <Badge variant="primary">推荐</Badge>
                  </div>
                )}
                <CardHeader>
                  <Badge variant="secondary" size="sm" className="mb-3 w-fit">
                    {toolCategories.find(c => c.id === tool.category)?.name}
                  </Badge>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-white mb-2">应用场景：</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{tool.useCase}</p>
                  </div>
                  <ul className="space-y-2">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                        <svg className="h-4 w-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant={tool.popular ? 'primary' : 'secondary'} className="w-full">
                    了解详情
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Long-term Value Models */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Badge variant="primary" size="md" className="mb-4">
              长期价值模式
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              经得起时间考验的应用模式
            </h2>
            <p className="mx-auto max-w-2xl text-[var(--color-text-muted)]">
              这些模式不会因为 AI 技术的迭代而过时，它们解决的是根本性的需求
            </p>
          </div>

          <div className="space-y-6">
            {valueModels.map((model, index) => (
              <Card key={index} variant="default" glow={model.rating === 5} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{model.title}</CardTitle>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={i < model.rating ? 'text-yellow-400' : 'text-gray-600'}>
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[var(--color-text-muted)] mb-4">{model.description}</p>
                    </div>
                  </div>
                  <div className="bg-[var(--color-bg-darker)] rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-white mb-2">实现方式：</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{model.implementation}</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm text-[var(--color-primary)] font-medium">{model.why}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card variant="gradient" className="text-center">
            <div className="py-8">
              <h2 className="mb-4 text-2xl font-bold text-white">
                开始用 AI 重构你的工作流
              </h2>
              <p className="mb-6 text-[var(--color-text-muted)]">
                在大公司还在开会讨论 AI 战略的时候，你已经用 AI 重构了工作流
              </p>
              <Button size="lg">立即开始</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
