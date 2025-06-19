import React, { useEffect, useRef } from 'react';

interface MeshPoint {
  x: number;
  y: number;
  color: string;
  radius: number;
}

export const SVGMeshGradients: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<MeshPoint[]>([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      svg.setAttribute('width', width.toString());
      svg.setAttribute('height', height.toString());
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Create mesh points
    const createMeshPoints = () => {
      const points: MeshPoint[] = [];
      const colors = [
        '#00D9FF', // electric-cyan
        '#FF814A', // neon-orange
        '#00B8CC', // darker cyan
        '#E6733D', // darker orange
      ];

      for (let i = 0; i < 12; i++) {
        points.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          color: colors[i % colors.length],
          radius: Math.random() * 400 + 200,
        });
      }
      return points;
    };

    pointsRef.current = createMeshPoints();

    // Create SVG defs with gradients
    const createGradients = () => {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      
      // Create mesh gradient
      const meshGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
      meshGradient.setAttribute('id', 'mesh-gradient');
      meshGradient.setAttribute('gradientUnits', 'userSpaceOnUse');

      pointsRef.current.forEach((point, index) => {
        const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop.setAttribute('offset', `${(index / pointsRef.current.length) * 100}%`);
        stop.setAttribute('stop-color', point.color);
        stop.setAttribute('stop-opacity', '0.15');
        meshGradient.appendChild(stop);
      });

      defs.appendChild(meshGradient);
      return defs;
    };

    // Clear existing content and add new gradients
    svg.innerHTML = '';
    svg.appendChild(createGradients());

    // Create animated background
    const createBackground = () => {
      const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      background.setAttribute('width', '100%');
      background.setAttribute('height', '100%');
      background.setAttribute('fill', 'url(#mesh-gradient)');
      background.setAttribute('opacity', '0.3');
      return background;
    };

    svg.appendChild(createBackground());

    // Add dark overlay
    const darkOverlay = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    darkOverlay.setAttribute('width', '100%');
    darkOverlay.setAttribute('height', '100%');
    darkOverlay.setAttribute('fill', 'rgba(0, 0, 0, 0.4)');
    svg.appendChild(darkOverlay);

    // Animation loop
    const animate = () => {
      // Update mesh points positions
      pointsRef.current.forEach((point) => {
        point.x += (Math.random() - 0.5) * 2;
        point.y += (Math.random() - 0.5) * 2;

        // Keep points within bounds
        point.x = Math.max(0, Math.min(window.innerWidth, point.x));
        point.y = Math.max(0, Math.min(window.innerHeight, point.y));
      });

      // Recreate gradients with new positions
      svg.innerHTML = '';
      svg.appendChild(createGradients());
      svg.appendChild(createBackground());

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}; 