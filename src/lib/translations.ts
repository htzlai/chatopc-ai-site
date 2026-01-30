export type Language = 'zh' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    products: string;
    about: string;
    blog: string;
    contact: string;
    getStarted: string;
  };

  // Home Page
  home: {
    badge: string;
    badgeSubtitle: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      conversion: string;
      conversionLabel: string;
      cycle: string;
      cycleLabel: string;
      savings: string;
      savingsLabel: string;
      languages: string;
      languagesLabel: string;
    };
    services: {
      title: string;
      subtitle: string;
      marketInsight: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      smartOutreach: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      dataSync: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      industry: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
    };
    advantages: {
      title: string;
      ai: {
        title: string;
        description: string;
      };
      global: {
        title: string;
        description: string;
      };
      efficient: {
        title: string;
        description: string;
      };
      data: {
        title: string;
        description: string;
      };
    };
    about: {
      badge: string;
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      learnMore: string;
      stats: {
        conversion: string;
        conversionLabel: string;
        cycle: string;
        cycleLabel: string;
        savings: string;
        savingsLabel: string;
        languages: string;
        languagesLabel: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      description: string;
      industries: string;
      features: string;
      primary: string;
      secondary: string;
      location: string;
      tagline: string;
    };
  };

  // Footer
  footer: {
    product: string;
    company: string;
    resources: string;
    legal: string;
    links: {
      product: {
        services: string;
        marketInsight: string;
        smartOutreach: string;
        dataSync: string;
      };
      company: {
        about: string;
        blog: string;
        careers: string;
        contact: string;
      };
      resources: {
        industry: string;
        solutions: string;
        support: string;
        cases: string;
      };
      legal: {
        privacy: string;
        terms: string;
        cookies: string;
      };
    };
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      home: '首页',
      products: '工具箱',
      about: '理念',
      blog: '博客',
      contact: '联系我们',
      getStarted: '开始使用',
    },
    home: {
      badge: '一人公司，不再是一个人',
      badgeSubtitle: 'One Person Company, Not Alone.',
      title: 'ChatOPC',
      titleHighlight: '你的 AI 联合创始人',
      subtitle: '模型在进化，工具在增多。\n真正拉开差距的，是能否把 AI 组织成可执行、可复用、可扩展的系统。',
      ctaPrimary: '了解解决方案',
      ctaSecondary: '联系我们',
      stats: {
        conversion: '10x',
        conversionLabel: '效率提升',
        cycle: '1-2年',
        cycleLabel: '窗口期',
        savings: '99%',
        savingsLabel: '领先执行者',
        languages: '7个',
        languagesLabel: '新信息差',
      },
      services: {
        title: '一人公司的实战工具箱',
        subtitle: '从信息采集到执行落地，用 AI 重构你的工作流',
        marketInsight: {
          title: '信息采集层',
          subtitle: '监控与抓取',
          description: 'BlogWatcher、Bird (Twitter CLI)、Web Search + Fetch、Summarize - 追踪行业动态、热点话题、快速消化内容',
          badge: '信息采集',
          link: '了解详情',
        },
        smartOutreach: {
          title: '知识积累层',
          subtitle: '第二大脑',
          description: 'Obsidian、Notion、Apple Notes、Memory 系统 - 建立个人知识库，让 AI 记住你的偏好',
          badge: '知识积累',
          link: '了解详情',
        },
        dataSync: {
          title: '效率提升层',
          subtitle: '自动化执行',
          description: 'Cron 定时任务、Things/Reminders、GitHub CLI、Coding Agent - 自动执行、任务管理、代码协作',
          badge: '效率提升',
          link: '了解详情',
        },
        industry: {
          title: '执行落地层',
          subtitle: '跨平台枢纽',
          description: 'TTS 语音、Browser 自动化、消息系统 - 播客制作、数据抓取、多平台通讯统一入口',
          badge: '执行落地',
          link: '了解详情',
        },
      },
      advantages: {
        title: '未来的新信息差：从"知道"到"做到"',
        ai: {
          title: '整合差',
          description: 'AI 是原料，把原料做成菜需要厨师。同样的工具，不同人能创造出完全不同的价值。',
        },
        global: {
          title: '速度差',
          description: '谁先把新技术落地到传统行业，谁吃肉。先用 AI 重构工作流的人，效率是别人的 10 倍。',
        },
        efficient: {
          title: '执行差',
          description: '知道和做到之间，隔着一万个行动。真正在用 AI 的人不到 10%，系统化应用的人不到 0.1%。',
        },
        data: {
          title: '信任差',
          description: 'AI 内容泛滥的时代，人格品牌变得稀缺。你的信誉就是最大的资产。',
        },
      },
      about: {
        badge: '魔力奇出海智能体',
        title: '一人公司：不再是一个人的新思考',
        paragraph1: '当工具越来越强大，token 越来越便宜，中国拥有全球最大的制造产能与人才产能，未来的赚钱逻辑与信息差会发生什么变化？',
        paragraph2: '正在消失的旧信息差：会英语、会写代码、会设计、知道某个信息、能快速生成内容——这些曾经值钱的能力正在快速贬值。但这不是终点，而是起点。',
        paragraph3: '未来的新信息差：整合差、速度差、执行差、信任差、品味差、注意力差、硬件+软件整合。未来赚钱的不是"有 AI"的人，而是能把 AI 整合进具体场景、比别人快一步执行、建立信任壁垒的人。',
        learnMore: '了解更多',
        stats: {
          conversion: '7个',
          conversionLabel: '新信息差',
          cycle: '1-2年',
          cycleLabel: '窗口期',
          savings: '99%',
          savingsLabel: '领先执行者',
          languages: '无限',
          languagesLabel: '可能',
        },
      },
      cta: {
        title: '让一人公司拥有无限可能',
        subtitle: '在大公司还在开会讨论 AI 战略的时候，你已经用 AI 重构了工作流',
        description: '',
        industries: '适用于所有有副业、兼职、可以自动化一部分工作的人',
        features: '信息采集 · 知识积累 · 效率提升 · 执行落地',
        primary: '查看工具箱',
        secondary: '了解更多',
        location: '一人公司，不再是一个人',
        tagline: '模型在通缩，整合在溢价',
      },
    },
    footer: {
      product: '产品服务',
      company: '社区',
      resources: '资源',
      legal: '法律',
      links: {
        product: {
          services: '核心服务',
          marketInsight: '市场洞察',
          smartOutreach: '智能拓客',
          dataSync: '数据协同',
        },
        company: {
          about: '魔力奇出海智能体',
          blog: '博客',
          careers: '加入我们',
          contact: '联系我们',
        },
        resources: {
          industry: '行业应用',
          solutions: '典型方案',
          support: '技术支持',
          cases: '案例研究',
        },
        legal: {
          privacy: '隐私政策',
          terms: '服务条款',
          cookies: 'Cookie政策',
        },
      },
      copyright: 'ChatOPC',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Toolbox',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact Us',
      getStarted: 'Get Started',
    },
    home: {
      badge: 'One Person Company, Not Alone.',
      badgeSubtitle: 'One Person Company, Not Alone.',
      title: 'ChatOPC',
      titleHighlight: 'Your AI Co-Founder',
      subtitle: 'Models are evolving, tools are multiplying.\nWhat really sets you apart is whether you can turn AI into an executable, reusable, and scalable system.',
      ctaPrimary: 'Explore Solutions',
      ctaSecondary: 'Contact Us',
      stats: {
        conversion: '10x',
        conversionLabel: 'Efficiency Gain',
        cycle: '1-2 Years',
        cycleLabel: 'Window',
        savings: '99%',
        savingsLabel: 'Early Movers',
        languages: '7',
        languagesLabel: 'New Information Gaps',
      },
      services: {
        title: 'The One-Person Company Toolbox',
        subtitle: 'From information capture to execution—rebuild your workflow with AI',
        marketInsight: {
          title: 'Information Capture Layer',
          subtitle: 'Monitor & Scrape',
          description: 'BlogWatcher, Bird (Twitter CLI), Web Search + Fetch, Summarize—track industry trends, hot topics, and digest content quickly',
          badge: 'Information Capture',
          link: 'Learn More',
        },
        smartOutreach: {
          title: 'Knowledge Layer',
          subtitle: 'Second Brain',
          description: 'Obsidian, Notion, Apple Notes, Memory—build a personal knowledge base and let AI remember your preferences',
          badge: 'Knowledge',
          link: 'Learn More',
        },
        dataSync: {
          title: 'Efficiency Layer',
          subtitle: 'Automated Execution',
          description: 'Cron, Things/Reminders, GitHub CLI, Coding Agent—automate tasks, manage work, and collaborate on code',
          badge: 'Efficiency',
          link: 'Learn More',
        },
        industry: {
          title: 'Execution Layer',
          subtitle: 'Cross-Platform Hub',
          description: 'TTS, Browser automation, messaging—podcast production, data scraping, unified multi-platform communication',
          badge: 'Execution',
          link: 'Learn More',
        },
      },
      advantages: {
        title: 'The New Information Gaps: From "Knowing" to "Doing"',
        ai: {
          title: 'Integration Gap',
          description: 'AI is the raw material; turning it into value takes a "chef." The same tools create entirely different value in different hands.',
        },
        global: {
          title: 'Speed Gap',
          description: 'Those who land new tech in traditional industries first get the upside. Those who rebuild their workflow with AI first can be 10x more efficient.',
        },
        efficient: {
          title: 'Execution Gap',
          description: 'Between knowing and doing there are ten thousand steps. Fewer than 10% use AI in practice; fewer than 0.1% use it systematically.',
        },
        data: {
          title: 'Trust Gap',
          description: 'In an age of AI content overload, personal brand is scarce. Your reputation is your biggest asset.',
        },
      },
      about: {
        badge: 'Molycure Global Expansion AI Agent',
        title: 'One-Person Company: A New Take on Not Going It Alone',
        paragraph1: 'As tools get more powerful and tokens get cheaper, with China\'s manufacturing and talent capacity, how will the logic of value and information gaps change?',
        paragraph2: 'The old information gaps are fading: English, coding, design, knowing a fact, producing content fast—these once-valuable skills are depreciating. But that\'s not the end; it\'s the starting line.',
        paragraph3: 'The new information gaps: integration, speed, execution, trust, taste, attention, hardware+software. The future doesn\'t belong to those who "have AI," but to those who integrate AI into real scenarios, move faster, and build trust.',
        learnMore: 'Learn More',
        stats: {
          conversion: '7',
          conversionLabel: 'New Information Gaps',
          cycle: '1-2 Years',
          cycleLabel: 'Window',
          savings: '99%',
          savingsLabel: 'Early Movers',
          languages: 'Unlimited',
          languagesLabel: 'Possibilities',
        },
      },
      cta: {
        title: 'Unlock the Possibilities of a One-Person Company',
        subtitle: 'While big companies are still in meetings about AI strategy, you\'ve already rebuilt your workflow with AI',
        description: '',
        industries: 'For everyone with a side project, part-time work, or work that can be partly automated',
        features: 'Information Capture · Knowledge · Efficiency · Execution',
        primary: 'View Toolbox',
        secondary: 'Learn More',
        location: 'One Person Company, Not Alone',
        tagline: 'Models are commoditized; integration commands a premium',
      },
    },
    footer: {
      product: 'Products & Services',
      company: 'Community',
      resources: 'Resources',
      legal: 'Legal',
      links: {
        product: {
          services: 'Core Services',
          marketInsight: 'Market Insights',
          smartOutreach: 'Smart Outreach',
          dataSync: 'Data Collaboration',
        },
        company: {
          about: 'Molycure Global Expansion AI Agent',
          blog: 'Blog',
          careers: 'Join Us',
          contact: 'Contact Us',
        },
        resources: {
          industry: 'Industries',
          solutions: 'Solutions',
          support: 'Support',
          cases: 'Case Studies',
        },
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          cookies: 'Cookie Policy',
        },
      },
      copyright: 'ChatOPC',
    },
  },
};
