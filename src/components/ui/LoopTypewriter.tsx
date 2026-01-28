'use client';

import { useState, useEffect } from 'react';

interface LoopTypewriterProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number; // 完整显示后的暂停时间
  className?: string;
}

export default function LoopTypewriter({ 
  text, 
  speed = 100,
  deleteSpeed = 50, // 删除速度通常更快
  pauseTime = 2000, // 完整显示后暂停 2 秒
  className = ''
}: LoopTypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      // 暂停阶段
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
        setCurrentIndex(text.length);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      // 删除阶段
      if (currentIndex > 0) {
        const timer = setTimeout(() => {
          setCurrentIndex(currentIndex - 1);
          setDisplayedText(text.slice(0, currentIndex - 1));
        }, deleteSpeed);
        return () => clearTimeout(timer);
      } else {
        // 删除完成，短暂延迟后重新开始打字
        const restartTimer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex(0);
          setDisplayedText('');
        }, 300); // 删除完成后短暂停顿
        return () => clearTimeout(restartTimer);
      }
    } else {
      // 打字阶段
      if (currentIndex < text.length) {
        const baseSpeed = speed;
        const variation = Math.random() * 30 - 15;
        const actualSpeed = Math.max(50, baseSpeed + variation);
        
        const timer = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, actualSpeed);
        return () => clearTimeout(timer);
      } else {
        // 打字完成，进入暂停阶段
        setIsPaused(true);
      }
    }
  }, [currentIndex, text, speed, deleteSpeed, pauseTime, isDeleting, isPaused]);

  return (
    <span className={className}>
      {displayedText}
      <span 
        className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle opacity-80 animate-[typewriter-blink_1s_infinite]" 
      />
    </span>
  );
}
