# ChatOPC - 一人公司的 AI 伙伴

一个专为一人公司（One Person Company）打造的 AI 对话聊天平台。**模型在通缩，整合在溢价**。未来赚钱的不是"有 AI"的人，而是能把 AI 整合进具体场景、比别人快一步执行、建立信任壁垒的人。

让一个人也能拥有团队级别的能力，用 AI 重构工作流，建立信任壁垒。采用 NVIDIA 风格的动态星云粒子背景设计，基于 Next.js 14+、Tailwind CSS 和 Framer Motion 构建。

## 核心理念

### 一句话洞察
**模型在通缩，整合在溢价** —— 未来赚钱的不是"有 AI"的人，而是能把 AI 整合进具体场景、比别人快一步执行、建立信任壁垒的人。

### 7 个新信息差
1. **整合差（Integration Gap）** ⭐⭐⭐⭐⭐ - AI 是原料，把原料做成菜需要厨师
2. **速度差（Speed Gap）** ⭐⭐⭐⭐⭐ - 谁先把新技术落地到传统行业，谁吃肉
3. **执行差（Execution Gap）** ⭐⭐⭐⭐⭐ - 知道和做到之间，隔着一万个行动
4. **信任差（Trust Gap）** ⭐⭐⭐⭐ - AI 内容泛滥的时代，人格品牌变得稀缺
5. **品味差（Taste Gap）** ⭐⭐⭐⭐ - AI 能生成，但选什么、怎么组合需要品味
6. **注意力差（Attention Gap）** ⭐⭐⭐⭐ - AI 能生产无限内容，但人的注意力有限
7. **硬件+软件整合** ⭐⭐⭐⭐⭐ - 这是中国的独特优势

## Features

- **Dynamic Nebula Background** - Canvas-based particle animation system with:
  - Floating particles with varying sizes and opacity
  - Subtle twinkling/pulsing effects
  - Particle connection lines for network effect
  - Performance-optimized with requestAnimationFrame

- **一人公司的实战工具箱**:
  - **信息采集层** - BlogWatcher、Bird、Web Search、Summarize
  - **知识积累层** - Obsidian、Notion、Apple Notes、Memory 系统
  - **效率提升层** - Cron、Things、GitHub CLI、Coding Agent
  - **执行落地层** - TTS、Browser 自动化、消息系统

- **长期价值模式**:
  - 晨间/晚间智能简报
  - 个人知识库管理
  - 内容监控 + 智能通知
  - 任务收集箱 + 智能整理
  - 跨平台信息枢纽

- **5 Complete Pages**:
  - **Home** - Hero section with core insight, features grid, stats, CTA
  - **Products** - One Person Company toolbox with tools and value models
  - **About** - 7 new information gaps and opportunities
  - **Contact** - Form with validation
  - **Blog** - Article cards with search

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

### Brand Colors

Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --color-primary: #00D9FF;      /* Main brand color - 青蓝色 */
  --color-accent: #8B5CF6;       /* Secondary accent - 紫色 */
  --color-bg-dark: #000000;      /* Background - 纯黑 */
  --color-bg-card: #0A0A0F;      /* Card background */
}
```

### Particle Configuration

Modify `src/lib/particles.ts`:

```typescript
const defaultConfig = {
  count: 75,              // Number of particles (reduced for performance)
  minRadius: 2,           // Min particle size
  maxRadius: 5,           // Max particle size
  colors: ['#00D9FF', '#8B5CF6', '#06B6D4'],  // Particle colors
  connectionDistance: 200, // Max distance for connection lines
  glowIntensity: 8,       // Glow intensity (reduced)
};
```

### Target Audience

This website is designed for **One Person Company (OPC)** - people who:
- Have side businesses or part-time jobs
- Want to automate part of their work
- Need to leverage AI to achieve team-level capabilities
- Want to stay ahead in the AI era

### Key Message

**模型在通缩，整合在溢价** - The future belongs to those who can integrate AI into specific scenarios, execute faster than others, and build trust barriers.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with background
│   ├── page.tsx            # Home page
│   ├── products/page.tsx   # Products page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── blog/page.tsx       # Blog page
├── components/
│   ├── backgrounds/
│   │   ├── NebulaCanvas.tsx    # Particle animation
│   │   └── GradientMask.tsx    # Gradient overlays
│   ├── layout/
│   │   ├── NavBar.tsx          # Navigation
│   │   └── Footer.tsx          # Footer
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       ├── Typewriter.tsx
│       ├── LoopTypewriter.tsx
│       ├── SyncLoopTypewriter.tsx
│       └── InfoGapIcons.tsx
├── lib/
│   ├── particles.ts        # Particle system class
│   └── translations.ts     # Multi-language support
└── styles/
    └── globals.css         # Design tokens & utilities
```

## Performance

- Particle count auto-scales based on screen size
- Uses `requestAnimationFrame` for smooth 60fps animation
- Static page generation for fast initial load
- Optimized images with Next.js Image component

## License

MIT License - Feel free to use for personal or commercial projects.

---

**项目地址**: https://github.com/htzlai/chatopc-ai-site

Built with ❤️ inspired by NVIDIA's design language.
