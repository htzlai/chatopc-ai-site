'use client';

import { useEffect, useRef } from 'react';
import { ParticleSystem } from '@/lib/particles';

export default function NebulaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const systemRef = useRef<ParticleSystem | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 设置 canvas 尺寸
    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();

    // 创建粒子系统
    const system = new ParticleSystem({
      count: 75, // 已降低一半
      glowIntensity: 8, // 已减弱发光
    });

    system.init(canvas);
    system.start();
    systemRef.current = system;

    // 处理窗口大小变化
    const handleResize = () => {
      if (canvas && systemRef.current) {
        setCanvasSize();
        systemRef.current.resize(canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (systemRef.current) {
        systemRef.current.stop();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full"
      style={{ background: 'transparent' }}
    />
  );
}
