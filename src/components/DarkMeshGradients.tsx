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

export const DarkMeshGradients: React.FC = () => {
  const [orbs, setOrbs] = useState<GradientOrb[]>([]);

  useEffect(() => {
    const createOrbs = () => {
      const newOrbs: GradientOrb[] = [];
      const colors = [
        'rgba(0, 217, 255, 0.08)', // electric-cyan - very subtle
        'rgba(255, 129, 74, 0.06)', // neon-orange - very subtle
        'rgba(0, 217, 255, 0.04)', // lighter cyan - very subtle
        'rgba(255, 129, 74, 0.03)', // lighter orange - very subtle
        'rgba(0, 184, 204, 0.05)', // darker cyan - very subtle
        'rgba(230, 115, 61, 0.04)', // darker orange - very subtle
      ];

      for (let i = 0; i < 12; i++) {
        newOrbs.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 500 + 300,
          color: colors[i % colors.length],
          opacity: Math.random() * 0.15 + 0.02, // Very low opacity
          animationDelay: Math.random() * 15,
          animationDuration: Math.random() * 25 + 20,
        });
      }
      return newOrbs;
    };

    setOrbs(createOrbs());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-navy to-black"></div>
      
      {/* Subtle mesh orbs */}
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

      {/* Very subtle gradient overlays */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-electric-cyan/3 via-transparent to-neon-orange/3 animate-pulse"
          style={{ animationDuration: '15s' }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tl from-neon-orange/2 via-transparent to-electric-cyan/2 animate-pulse"
          style={{ animationDuration: '20s', animationDelay: '5s' }}
        />
      </div>

      {/* Minimal mesh overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 25% 35%, rgba(0, 217, 255, 0.02) 0%, transparent 60%),
              radial-gradient(circle at 75% 65%, rgba(255, 129, 74, 0.015) 0%, transparent 60%),
              radial-gradient(circle at 45% 85%, rgba(0, 217, 255, 0.01) 0%, transparent 60%),
              radial-gradient(circle at 85% 25%, rgba(255, 129, 74, 0.008) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* Subtle mesh lines */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dark-mesh-line-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 217, 255, 0.015)" />
              <stop offset="50%" stopColor="rgba(255, 129, 74, 0.008)" />
              <stop offset="100%" stopColor="rgba(0, 217, 255, 0.015)" />
            </linearGradient>
            <linearGradient id="dark-mesh-line-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 129, 74, 0.012)" />
              <stop offset="50%" stopColor="rgba(0, 217, 255, 0.006)" />
              <stop offset="100%" stopColor="rgba(255, 129, 74, 0.012)" />
            </linearGradient>
          </defs>
          
          {/* Very subtle mesh lines */}
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            stroke="url(#dark-mesh-line-1)"
            strokeWidth="0.3"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '25s' }}
          />
          <path
            d="M0,30 Q50,10 100,30"
            stroke="url(#dark-mesh-line-2)"
            strokeWidth="0.2"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '30s', animationDelay: '8s' }}
          />
          <path
            d="M0,70 Q50,90 100,70"
            stroke="url(#dark-mesh-line-1)"
            strokeWidth="0.25"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '28s', animationDelay: '4s' }}
          />
        </svg>
      </div>

      {/* Minimal floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-electric-cyan rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
              opacity: Math.random() * 0.1 + 0.05, // Very low opacity
            }}
          />
        ))}
      </div>

      {/* Additional dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/40"></div>
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20"></div>
    </div>
  );
}; 