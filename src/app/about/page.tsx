'use client';

import { motion } from 'framer-motion';
import Card, { CardContent, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { ExecutionIcon, TrustIcon, TasteIcon, AttentionIcon, IntegrationIcon } from '@/components/ui/InfoGapIcons';

const oldInfoGaps = [
  {
    title: '会写代码',
    reason: 'Cursor/Claude 让非程序员也能写出可用代码',
  },
  {
    title: '会设计',
    reason: 'Midjourney/Canva 让设计门槛降到接近零',
  },
  {
    title: '知道某个信息',
    reason: '搜索 + AI = 任何人都能秒获答案',
  },
  {
    title: '能快速生成内容',
    reason: 'AI 生成速度是人类的 1000 倍',
  },
];

const newInfoGaps = [
  {
    title: '整合差（Integration Gap）',
    rating: 5,
    icon: '🔗',
    quote: 'AI 是原料，把原料做成菜需要厨师。',
    description: '模型人人能用，但整合进具体业务场景需要懂行业的人。同样的工具，不同人能创造出完全不同的价值。',
    advantage: '中国优势：我们有大量懂制造、懂供应链、懂具体行业的人才。当 AI 提供通用能力，行业 know-how 成为稀缺资源。',
  },
  {
    title: '速度差（Speed Gap）',
    rating: 5,
    icon: '⚡',
    quote: '谁先把新技术落地到传统行业，谁吃肉。',
    description: '一个残酷的事实：2025年百度月活超 7 亿。这意味着什么？国内 AI 远远没有开始普及。用过真正好的 AI 产品的人，不可能每个月还在用百度搜索。',
    advantage: '这是一个巨大的窗口期：有一半以上的中国网民是潜在用户池。先用 AI 重构工作流的人，效率是别人的 10 倍。这个窗口可能只有 1-2 年。',
  },
  {
    title: '执行差（Execution Gap）',
    rating: 5,
    icon: 'execution',
    quote: '知道和做到之间，隔着一万个行动。',
    description: '所有人都知道 AI 厉害，但：真正在用的人不到 10%，用得好的人不到 1%，系统化应用的人不到 0.1%。',
    advantage: '"信息差"正在变成"执行差"。你今天配置了 Clawdbot、设置了自动化、建立了个人知识系统——你已经领先 99% 的人。不是因为你知道更多，而是因为你做了。',
  },
  {
    title: '信任差（Trust Gap）',
    rating: 4,
    icon: 'trust',
    quote: 'AI 内容泛滥的时代，人格品牌变得稀缺。',
    description: '未来所有内容都可能是 AI 生成的。当内容变得廉价，什么变得昂贵？人格：真实、一致、有温度的个人品牌；信誉：经过时间验证的信任资产；关系网络：AI 无法替代的人际连接。',
    advantage: '有人在 Twitter 上说："2026 属于可解释、可审计的 AI。合规能力成为护城河。"对于一人公司来说，你就是品牌。你的信誉就是最大的资产。',
  },
  {
    title: '品味差（Taste Gap）',
    rating: 4,
    icon: 'taste',
    quote: 'AI 能生成，但选什么、怎么组合需要品味。',
    description: '生成 1000 张图免费，但选哪张需要审美；生成 100 个方案秒完成，但选哪个需要判断力；写 10000 字轻而易举，但删到精华需要品味。',
    advantage: '这就是为什么设计师不会失业，但"会用 PS"不再值钱。品味 = 知识 × 经验 × 直觉。这个公式里，AI 能提供知识，但经验和直觉是人类独有的。',
  },
  {
    title: '注意力差（Attention Gap）',
    rating: 4,
    icon: 'attention',
    quote: 'AI 能生产无限内容，但人的注意力有限。',
    description: '这是一个悖论：内容生产成本趋近于零，内容消费时间恒定（每人每天 24 小时）。结果：内容通胀 → 注意力通缩。',
    advantage: '能抓住注意力的人（网红、KOL、品牌）更值钱。一人公司的策略：不要追求"多"，追求"准"。一千个铁杆粉丝比一百万路人更有价值。',
  },
  {
    title: '硬件+软件整合（China\'s Killer Combo）',
    rating: 5,
    icon: 'integration',
    quote: '这是中国的独特优势。',
    description: '美国有模型，中国有制造。当 AI 软件能力全球平均化，硬件整合能力成为差异化来源：AI + 机器人、AI + 智能家居、AI + 可穿戴设备、AI + 工业制造。',
    advantage: '深圳 + AI = 无限可能。一人公司的机会：不做纯软件，做软硬结合的产品。',
  },
];

const opportunities = [
  {
    title: '环境与机会',
    description: '制造产能 + AI 软件 + 执行速度 = 硬件创新的黄金窗口期',
    icon: '🌟',
  },
  {
    title: '一人公司的机会',
    description: '在大公司还在开会讨论 AI 战略的时候，你已经用 AI 重构了工作流',
    icon: '💡',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" size="md" className="mb-4">
            一人公司：AI 赋能时代的新思考
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            模型在通缩，整合在溢价
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--color-text-muted)]">
            未来赚钱的不是"有 AI"的人，而是能把 AI 整合进具体场景、比别人快一步执行、建立信任壁垒的人。
          </p>
        </motion.div>

        {/* Core Insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <Card variant="gradient" glow className="p-8 lg:p-12">
            <div className="text-center">
              <div className="mb-4 text-5xl">💡</div>
              <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                一句话洞察
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-white font-medium leading-relaxed">
                <strong className="text-[var(--color-primary)]">模型在通缩，整合在溢价</strong>
                <br />
                未来赚钱的不是"有 AI"的人，而是能把 AI 整合进具体场景、比别人快一步执行、建立信任壁垒的人。
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Old Info Gaps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-white lg:text-3xl">
            正在消失的旧信息差
          </h2>
          <p className="mb-8 text-center text-[var(--color-text-muted)]">
            曾经值钱的能力正在快速贬值
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {oldInfoGaps.map((gap, index) => (
              <Card key={index} variant="default">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{gap.title}</h3>
                    <Badge variant="secondary" size="sm">贬值中</Badge>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)]">{gap.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-[var(--color-text-muted)]">
              这不是危言耸听。DeepSeek V3.1 的定价已经到了 <strong className="text-white">输入 7 分/百万 token，输出 $1.68/百万 token</strong>。
            </p>
            <p className="mt-2 text-[var(--color-text-muted)]">
              但这不是终点，而是起点。
            </p>
          </div>
        </motion.div>

        {/* New Info Gaps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
            未来的新信息差：从"知道"到"做到"
          </h2>
          <p className="mb-12 text-center text-[var(--color-text-muted)]">
            当工具越来越强大，token 越来越便宜，新的信息差在哪里？
          </p>
          <div className="space-y-6">
            {newInfoGaps.map((gap, index) => (
              <Card key={index} variant="default" glow={gap.rating === 5} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      {gap.icon === 'execution' && <ExecutionIcon />}
                      {gap.icon === 'trust' && <TrustIcon />}
                      {gap.icon === 'taste' && <TasteIcon />}
                      {gap.icon === 'attention' && <AttentionIcon />}
                      {gap.icon === 'integration' && <IntegrationIcon />}
                      {!['execution', 'trust', 'taste', 'attention', 'integration'].includes(gap.icon) && (
                        <div className="text-4xl">{gap.icon}</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{gap.title}</CardTitle>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={i < gap.rating ? 'text-yellow-400' : 'text-gray-600'}>
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-lg font-medium text-[var(--color-primary)] mb-3 italic">
                        "{gap.quote}"
                      </p>
                      <p className="text-[var(--color-text-muted)] mb-4">{gap.description}</p>
                      <div className="bg-[var(--color-bg-darker)] rounded-lg p-4 border-l-4 border-[var(--color-primary)]">
                        <p className="text-sm font-medium text-white mb-1">优势：</p>
                        <p className="text-sm text-[var(--color-text-muted)]">{gap.advantage}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Opportunities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-white lg:text-3xl">
            机会在哪里？
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {opportunities.map((opp, index) => (
              <Card key={index} variant="gradient" glow>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{opp.icon}</div>
                  <h3 className="mb-4 text-xl font-bold text-white">{opp.title}</h3>
                  <p className="text-lg text-[var(--color-text-muted)]">{opp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card variant="gradient" glow className="p-8 lg:p-12">
            <div className="text-center">
              <h2 className="mb-6 text-2xl font-bold text-white lg:text-3xl">
                总结
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
                <p>
                  未来赚钱的不是"有 AI"的人，而是：
                </p>
                <ol className="list-decimal list-inside space-y-2 text-left">
                  <li><strong className="text-white">把 AI 整合进具体场景</strong>的人</li>
                  <li><strong className="text-white">比别人快一步执行</strong>的人</li>
                  <li><strong className="text-white">建立了信任壁垒</strong>的人</li>
                </ol>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-xl font-bold text-white mb-2">环境与机会：</p>
                  <p className="text-lg">
                    制造产能 + AI 软件 + 执行速度 = <strong className="text-[var(--color-primary)]">硬件创新的黄金窗口期</strong>
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xl font-bold text-white mb-2">一人公司的机会：</p>
                  <p className="text-lg">
                    在大公司还在开会讨论 AI 战略的时候，<strong className="text-[var(--color-primary)]">你已经用 AI 重构了工作流</strong>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
