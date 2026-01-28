'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  delay?: number;
}

export default function Typewriter({ 
  text, 
  speed = 100, // 默认速度，更像真实打字
  className = '',
  onComplete,
  delay = 0
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // 延迟开始
    if (delay > 0 && !hasStarted) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    }

    // 打字效果
    if (hasStarted && currentIndex < text.length) {
      // 模拟真实打字速度变化（有些字符快，有些慢）
      const baseSpeed = speed;
      const variation = Math.random() * 30 - 15; // -15 到 +15 的变化
      const actualSpeed = Math.max(50, baseSpeed + variation);
      
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, actualSpeed);

      return () => clearTimeout(timer);
    } else if (hasStarted && !isComplete && currentIndex >= text.length) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, isComplete, onComplete, delay, hasStarted]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && hasStarted && (
        <span 
          className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle opacity-80 animate-[typewriter-blink_1s_infinite]" 
        />
      )}
    </span>
  );
}
