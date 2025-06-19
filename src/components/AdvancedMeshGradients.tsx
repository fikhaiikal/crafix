import React, { useState, useEffect } from 'react';

interface GradientOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  animationDelay: number;
  animationDuration: number;
}

export const AdvancedMeshGradients: React.FC = () => {
  const [orbs, setOrbs] = useState<GradientOrb[]>([]);

  useEffect(() => {
    const createOrbs = () => {
      const newOrbs: GradientOrb[] = [];
      const colors = [
        'rgba(0, 217, 255, 0.15)', // electric-cyan - reduced opacity
        'rgba(255, 129, 74, 0.12)', // neon-orange - reduced opacity
        'rgba(0, 217, 255, 0.08)', // lighter cyan - reduced opacity
        'rgba(255, 129, 74, 0.06)', // lighter orange - reduced opacity
        'rgba(0, 184, 204, 0.1)', // darker cyan - reduced opacity
        'rgba(230, 115, 61, 0.08)', // darker orange - reduced opacity
      ];

      for (let i = 0; i < 15; i++) {
        newOrbs.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 400 + 200,
          color: colors[i % colors.length],
          opacity: Math.random() * 0.3 + 0.05, // Reduced opacity range
          animationDelay: Math.random() * 10,
          animationDuration: Math.random() * 20 + 15,
        });
      }
      return newOrbs;
    };

    setOrbs(createOrbs());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark overlay layer */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Primary mesh layer */}
      <div className="absolute inset-0">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full blur-3xl animate-pulse"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              backgroundColor: orb.color,
              opacity: orb.opacity,
              animationDelay: `${orb.animationDelay}s`,
              animationDuration: `${orb.animationDuration}s`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Secondary animated layer - reduced opacity */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 via-transparent to-neon-orange/5 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tl from-neon-orange/4 via-transparent to-electric-cyan/4 animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        />
      </div>

      {/* Mesh overlay effect - reduced opacity */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 129, 74, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(0, 217, 255, 0.025) 0%, transparent 50%),
              radial-gradient(circle at 90% 20%, rgba(255, 129, 74, 0.02) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Animated mesh lines - reduced opacity */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mesh-line-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 217, 255, 0.04)" />
              <stop offset="50%" stopColor="rgba(255, 129, 74, 0.02)" />
              <stop offset="100%" stopColor="rgba(0, 217, 255, 0.04)" />
            </linearGradient>
            <linearGradient id="mesh-line-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 129, 74, 0.03)" />
              <stop offset="50%" stopColor="rgba(0, 217, 255, 0.015)" />
              <stop offset="100%" stopColor="rgba(255, 129, 74, 0.03)" />
            </linearGradient>
          </defs>
          
          {/* Animated mesh lines */}
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            stroke="url(#mesh-line-1)"
            strokeWidth="0.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '15s' }}
          />
          <path
            d="M0,30 Q50,10 100,30"
            stroke="url(#mesh-line-2)"
            strokeWidth="0.3"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '20s', animationDelay: '5s' }}
          />
          <path
            d="M0,70 Q50,90 100,70"
            stroke="url(#mesh-line-1)"
            strokeWidth="0.4"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '18s', animationDelay: '3s' }}
          />
        </svg>
      </div>

      {/* Floating particles - reduced opacity */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-cyan rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.2 + 0.1, // Reduced opacity
            }}
          />
        ))}
      </div>

      {/* Additional dark overlay for extra darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30"></div>
    </div>
  );
}; 