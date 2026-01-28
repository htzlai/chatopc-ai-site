'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="rounded-full px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:text-white hover:bg-white/5"
      aria-label="切换语言"
    >
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  );
}
