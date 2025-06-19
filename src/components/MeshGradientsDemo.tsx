import React, { useState } from 'react';
import { AnimatedMeshGradients } from './AnimatedMeshGradients';
import { SVGMeshGradients } from './SVGMeshGradients';
import { AdvancedMeshGradients } from './AdvancedMeshGradients';
import { DarkMeshGradients } from './DarkMeshGradients';

type GradientType = 'canvas' | 'svg' | 'advanced' | 'dark';

export const MeshGradientsDemo: React.FC = () => {
  const [activeGradient, setActiveGradient] = useState<GradientType>('dark');

  const gradients = [
    { id: 'canvas', name: 'Canvas Mesh', component: AnimatedMeshGradients },
    { id: 'svg', name: 'SVG Mesh', component: SVGMeshGradients },
    { id: 'advanced', name: 'Advanced Mesh', component: AdvancedMeshGradients },
    { id: 'dark', name: 'Dark Mesh', component: DarkMeshGradients },
  ];

  const ActiveComponent = gradients.find(g => g.id === activeGradient)?.component || DarkMeshGradients;

  return (
    <div className="fixed inset-0 z-50">
      {/* Gradient Background */}
      <ActiveComponent />
      
      {/* Controls */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg">
          <h3 className="text-white font-sora font-semibold mb-3">Mesh Gradients Demo</h3>
          <div className="space-y-2">
            {gradients.map((gradient) => (
              <button
                key={gradient.id}
                onClick={() => setActiveGradient(gradient.id as GradientType)}
                className={`w-full px-3 py-2 rounded-md text-sm font-inter transition-all duration-200 ${
                  activeGradient === gradient.id
                    ? 'bg-electric-cyan text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {gradient.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg max-w-sm">
          <h3 className="text-white font-sora font-semibold mb-2">About Mesh Gradients</h3>
          <p className="text-gray-300 text-sm font-inter leading-relaxed">
            {activeGradient === 'canvas' && 
              "Canvas-based mesh gradients using HTML5 Canvas API. Features smooth animations with bouncing blobs and overlay effects."
            }
            {activeGradient === 'svg' && 
              "SVG-based mesh gradients with dynamic gradient creation. Uses SVG radial gradients for crisp, scalable effects."
            }
            {activeGradient === 'advanced' && 
              "Advanced CSS-based mesh gradients with multiple layers, animated orbs, mesh lines, and floating particles for rich visual effects."
            }
            {activeGradient === 'dark' && 
              "Dark-themed mesh gradients with subtle effects. Perfect for professional websites with minimal, elegant animations and dark background."
            }
          </p>
        </div>
      </div>

      {/* Performance Info */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg">
          <div className="text-white text-sm font-inter">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
              <span>Live Animation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 