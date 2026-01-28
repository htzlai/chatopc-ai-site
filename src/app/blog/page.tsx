'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const categories = ['All', 'AI & ML', '一人公司', '自动化', '工具推荐'];

const blogPosts = [
  {
    id: 1,
    title: 'How to Start a One-Person Business',
    excerpt: 'Paul Graham 的经典文章：如何从零开始建立一人公司，从想法到执行的关键步骤。',
    category: '一人公司',
    author: 'Paul Graham',
    date: '2024',
    readTime: '12 min read',
    featured: true,
    url: 'http://www.paulgraham.com/start.html',
    source: 'Paul Graham',
  },
  {
    id: 2,
    title: 'The Future of AI Agents',
    excerpt: '深入探讨 AI Agent 的发展趋势，以及如何将 AI 整合到具体业务场景中。',
    category: 'AI & ML',
    author: 'Andrew Ng',
    date: '2024',
    readTime: '15 min read',
    featured: true,
    url: 'https://www.deeplearning.ai/the-batch/',
    source: 'DeepLearning.AI',
  },
  {
    id: 3,
    title: 'Building a Second Brain',
    excerpt: 'Tiago Forte 的经典方法论：如何用工具建立个人知识管理系统，让 AI 成为你的第二大脑。',
    category: '工具推荐',
    author: 'Tiago Forte',
    date: '2024',
    readTime: '10 min read',
    featured: false,
    url: 'https://www.buildingasecondbrain.com/',
    source: 'Building a Second Brain',
  },
  {
    id: 4,
    title: 'The Indie Hacker Movement',
    excerpt: '一人公司如何通过独立开发实现财务自由，真实案例和实用建议。',
    category: '一人公司',
    author: 'Courtland Allen',
    date: '2024',
    readTime: '8 min read',
    featured: false,
    url: 'https://www.indiehackers.com/',
    source: 'Indie Hackers',
  },
  {
    id: 5,
    title: 'Automating Your Workflow with AI',
    excerpt: '如何用 AI 工具自动化重复性工作，提升效率 10 倍的实战指南。',
    category: '自动化',
    author: 'Various',
    date: '2024',
    readTime: '6 min read',
    featured: false,
    url: 'https://www.make.com/',
    source: 'Make (formerly Integromat)',
  },
  {
    id: 6,
    title: 'The Age of AI Agents',
    excerpt: 'AI Agent 如何改变工作方式，从工具使用者到系统设计者的转变。',
    category: 'AI & ML',
    author: 'Various',
    date: '2024',
    readTime: '9 min read',
    featured: false,
    url: 'https://www.anthropic.com/research',
    source: 'Anthropic Research',
  },
  {
    id: 7,
    title: 'Productivity Tools for Solo Founders',
    excerpt: '一人公司必备的生产力工具推荐，从任务管理到知识库的完整工具链。',
    category: '工具推荐',
    author: 'Various',
    date: '2024',
    readTime: '7 min read',
    featured: false,
    url: 'https://www.producthunt.com/',
    source: 'Product Hunt',
  },
  {
    id: 8,
    title: 'The Solopreneur\'s Guide to AI',
    excerpt: '一人公司如何利用 AI 实现规模化，从个人到系统的完整转型路径。',
    category: '一人公司',
    author: 'Various',
    date: '2024',
    readTime: '11 min read',
    featured: false,
    url: 'https://www.indiehackers.com/',
    source: 'Indie Hackers',
  },
  {
    id: 9,
    title: 'Building AI-Powered Automation',
    excerpt: '从零开始构建 AI 自动化系统，实战案例和代码示例。',
    category: '自动化',
    author: 'Various',
    date: '2024',
    readTime: '14 min read',
    featured: false,
    url: 'https://zapier.com/blog/',
    source: 'Zapier Blog',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            Blog
          </Badge>
          <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            精选资源
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-text-muted)]">
            精选一人公司和 AI 领域的高质量内容，帮助你用 AI 重构工作流，建立信任壁垒。
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-full px-4 py-2 text-sm font-medium transition-all
                    ${activeCategory === category
                      ? 'bg-gradient-primary text-white'
                      : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="w-full md:w-64">
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">精选推荐</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card variant="gradient" glow className="group cursor-pointer h-full hover:scale-[1.02] transition-transform">
                    <CardHeader>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="primary">{post.category}</Badge>
                        <Badge variant="secondary">精选</Badge>
                      </div>
                      <CardTitle className="text-xl transition-colors group-hover:text-[var(--color-primary)]">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span className="text-[var(--color-primary)]">{post.source}</span>
                      </div>
                      <span className="text-sm text-[var(--color-text-dim)]">{post.readTime}</span>
                    </CardFooter>
                  </Card>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="mb-6 text-xl font-semibold text-white">
            {activeCategory === 'All' ? '全部文章' : activeCategory}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <Card className="py-12 text-center">
              <CardContent>
                <div className="mb-4 text-4xl">🔍</div>
                <h3 className="mb-2 text-lg font-semibold text-white">未找到文章</h3>
                <p className="text-[var(--color-text-muted)]">
                  尝试调整搜索或筛选条件来找到你想要的内容。
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group cursor-pointer h-full hover:scale-[1.02] transition-transform">
                    <CardHeader>
                      <Badge variant="secondary" className="mb-3 w-fit">{post.category}</Badge>
                      <CardTitle className="transition-colors group-hover:text-[var(--color-primary)]">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[var(--color-text-dim)]">{post.date}</span>
                        <span className="text-xs text-[var(--color-primary)]">• {post.source}</span>
                      </div>
                      <span className="text-sm text-[var(--color-text-dim)]">{post.readTime}</span>
                    </CardFooter>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card variant="gradient" className="text-center">
            <div className="py-8">
              <h2 className="mb-4 text-2xl font-bold text-white">
                订阅精选内容
              </h2>
              <p className="mb-6 text-[var(--color-text-muted)]">
                获取最新的一人公司和 AI 工具相关的高质量内容推送。
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
