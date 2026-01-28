'use client';

import { useId } from 'react';

// 执行差图标 - 齿轮/执行
export function ExecutionIcon() {
  const uniqueId = useId();
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <defs>
          <linearGradient id={`${uniqueId}Grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="28" fill={`url(#${uniqueId}Grad)`} opacity="0.2" />
        <path
          d="M32 8 L36 16 L44 14 L40 22 L48 26 L40 30 L44 38 L36 36 L32 44 L28 36 L20 38 L24 30 L16 26 L24 22 L20 14 L28 16 Z"
          fill={`url(#${uniqueId}Grad)`}
          stroke={`url(#${uniqueId}Grad)`}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="8" fill={`url(#${uniqueId}Grad)`} opacity="0.3" />
      </svg>
    </div>
  );
}

// 信任差图标 - 盾牌/信任
export function TrustIcon() {
  const uniqueId = useId();
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <defs>
          <linearGradient id={`${uniqueId}Grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M32 8 L20 14 L20 28 C20 36, 26 44, 32 48 C38 44, 44 36, 44 28 L44 14 Z"
          fill={`url(#${uniqueId}Grad)`}
          stroke={`url(#${uniqueId}Grad)`}
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M32 24 L28 28 L32 32 L36 28 Z"
          fill="white"
          opacity="0.8"
        />
        <circle cx="32" cy="36" r="3" fill="white" opacity="0.6" />
      </svg>
    </div>
  );
}

// 品味差图标 - 眼睛/选择
export function TasteIcon() {
  const uniqueId = useId();
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <defs>
          <linearGradient id={`${uniqueId}Grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="1" />
          </linearGradient>
        </defs>
        <ellipse cx="32" cy="32" rx="20" ry="12" fill={`url(#${uniqueId}Grad)`} opacity="0.2" />
        <ellipse cx="32" cy="32" rx="18" ry="10" fill={`url(#${uniqueId}Grad)`} opacity="0.3" />
        <circle cx="32" cy="32" r="8" fill={`url(#${uniqueId}Grad)`} />
        <circle cx="32" cy="32" r="4" fill="white" opacity="0.9" />
        <circle cx="34" cy="30" r="1.5" fill="white" />
      </svg>
    </div>
  );
}

// 注意力差图标 - 焦点/注意力
export function AttentionIcon() {
  const uniqueId = useId();
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <defs>
          <linearGradient id={`${uniqueId}Grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="1" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="1" />
          </linearGradient>
          <radialGradient id={`${uniqueId}Glow`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="24" fill={`url(#${uniqueId}Glow)`} />
        <circle cx="32" cy="32" r="16" fill={`url(#${uniqueId}Grad)`} opacity="0.3" />
        <circle cx="32" cy="32" r="12" fill={`url(#${uniqueId}Grad)`} />
        <circle cx="32" cy="32" r="6" fill="white" opacity="0.9" />
        <path
          d="M32 8 L32 16 M32 48 L32 56 M8 32 L16 32 M48 32 L56 32"
          stroke={`url(#${uniqueId}Grad)`}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

// 硬件+软件整合图标 - 连接/整合
export function IntegrationIcon() {
  const uniqueId = useId();
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <defs>
          <linearGradient id={`${uniqueId}Grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="50%" stopColor="#00D9FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* 硬件部分 - 方形 */}
        <rect x="12" y="12" width="16" height="16" rx="3" fill={`url(#${uniqueId}Grad)`} opacity="0.4" />
        <rect x="14" y="14" width="12" height="12" rx="2" fill={`url(#${uniqueId}Grad)`} />
        
        {/* 软件部分 - 圆形 */}
        <circle cx="44" cy="20" r="8" fill={`url(#${uniqueId}Grad)`} opacity="0.4" />
        <circle cx="44" cy="20" r="6" fill={`url(#${uniqueId}Grad)`} />
        
        {/* 连接线 */}
        <path
          d="M28 20 L36 20"
          stroke={`url(#${uniqueId}Grad)`}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* 整合中心 */}
        <circle cx="32" cy="40" r="10" fill={`url(#${uniqueId}Grad)`} opacity="0.3" />
        <circle cx="32" cy="40" r="6" fill={`url(#${uniqueId}Grad)`} />
        <circle cx="32" cy="40" r="3" fill="white" opacity="0.9" />
        
        {/* 连接线到中心 */}
        <path
          d="M20 28 L28 36 M36 20 L32 34 M44 20 L36 34"
          stroke={`url(#${uniqueId}Grad)`}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
