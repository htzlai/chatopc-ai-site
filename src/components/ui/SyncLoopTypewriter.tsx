'use client';

import { useState, useEffect, useRef } from 'react';

interface SyncLoopTypewriterProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  syncKey: string; // 同步键，相同键的组件会同步
}

// 全局同步状态管理
const syncStates: Record<string, {
  currentIndex: number;
  isDeleting: boolean;
  isPaused: boolean;
  textLength: number;
  listeners: Set<() => void>;
  timerRunning: boolean;
  timerId: NodeJS.Timeout | null;
}> = {};

export default function SyncLoopTypewriter({ 
  text,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = '',
  syncKey
}: SyncLoopTypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const updateRef = useRef<() => void | undefined>(undefined);

  // 确保 text 存在
  if (!text) {
    return <span className={className}></span>;
  }

  // 初始化同步状态
  if (!syncStates[syncKey]) {
    syncStates[syncKey] = {
      currentIndex: 0,
      isDeleting: false,
      isPaused: false,
      textLength: text.length,
      listeners: new Set(),
      timerRunning: false,
      timerId: null
    };
  }

  const state = syncStates[syncKey];
  
  // 更新 textLength 如果文本长度不同（取最大值）
  if (text.length > state.textLength) {
    state.textLength = text.length;
  }

  useEffect(() => {
    // 注册更新函数
    updateRef.current = () => {
      setDisplayedText(text.slice(0, state.currentIndex));
    };
    
    state.listeners.add(updateRef.current);

    // 立即更新一次
    updateRef.current();

    return () => {
      if (updateRef.current) {
        state.listeners.delete(updateRef.current);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [text, syncKey]);

  useEffect(() => {
    // 启动循环（如果还没启动）
    if (!state.timerRunning) {
      state.timerRunning = true;
      
      const updateDisplay = () => {
        if (state.isPaused) {
          // 暂停阶段
          state.timerId = setTimeout(() => {
            state.isPaused = false;
            state.isDeleting = true;
            state.currentIndex = state.textLength;
            // 通知所有监听者
            state.listeners.forEach(listener => listener());
            updateDisplay();
          }, pauseTime);
          return;
        }

        if (state.isDeleting) {
          // 删除阶段
          if (state.currentIndex > 0) {
            state.currentIndex -= 1;
            // 通知所有监听者
            state.listeners.forEach(listener => listener());
            
            state.timerId = setTimeout(() => {
              updateDisplay();
            }, deleteSpeed);
          } else {
            // 删除完成，重新开始打字
            state.timerId = setTimeout(() => {
              state.isDeleting = false;
              state.currentIndex = 0;
              // 通知所有监听者
              state.listeners.forEach(listener => listener());
              updateDisplay();
            }, 300);
          }
        } else {
          // 打字阶段
          if (state.currentIndex < state.textLength) {
            const baseSpeed = speed;
            const variation = Math.random() * 30 - 15;
            const actualSpeed = Math.max(50, baseSpeed + variation);
            
            state.currentIndex += 1;
            // 通知所有监听者
            state.listeners.forEach(listener => listener());
            
            state.timerId = setTimeout(() => {
              updateDisplay();
            }, actualSpeed);
          } else {
            // 打字完成，进入暂停阶段
            state.isPaused = true;
            updateDisplay();
          }
        }
      };

      // 开始循环
      updateDisplay();
    }

    return () => {
      // 清理时，如果是最后一个监听者，停止定时器
      if (state.listeners.size === 1 && state.timerId) {
        clearTimeout(state.timerId);
        state.timerRunning = false;
        state.timerId = null;
      }
    };
  }, [text, speed, deleteSpeed, pauseTime, syncKey]);

  return (
    <span className={className}>
      {displayedText}
      <span 
        className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle opacity-80 animate-[typewriter-blink_1s_infinite]" 
      />
    </span>
  );
}
