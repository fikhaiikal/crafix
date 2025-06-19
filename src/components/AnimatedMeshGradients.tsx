import React, { useEffect, useRef } from 'react';

interface GradientBlob {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const AnimatedMeshGradients: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const blobsRef = useRef<GradientBlob[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create gradient blobs
    const createBlobs = () => {
      const blobs: GradientBlob[] = [];
      const colors = [
        'rgba(0, 217, 255, 0.12)', // electric-cyan - reduced opacity
        'rgba(255, 129, 74, 0.1)', // neon-orange - reduced opacity
        'rgba(0, 217, 255, 0.06)', // lighter cyan - reduced opacity
        'rgba(255, 129, 74, 0.05)', // lighter orange - reduced opacity
      ];

      for (let i = 0; i < 8; i++) {
        blobs.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 300 + 200,
          color: colors[i % colors.length],
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.25 + 0.05, // Reduced opacity
        });
      }
      return blobs;
    };

    blobsRef.current = createBlobs();

    // Animation loop
    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobsRef.current.forEach((blob) => {
        // Update position
        blob.x += blob.speedX;
        blob.y += blob.speedY;

        // Bounce off edges
        if (blob.x < -blob.size || blob.x > canvas.width + blob.size) {
          blob.speedX *= -1;
        }
        if (blob.y < -blob.size || blob.y > canvas.height + blob.size) {
          blob.speedY *= -1;
        }

        // Create gradient
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.size
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'transparent');

        // Draw blob
        ctx.globalAlpha = blob.opacity;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset global alpha
      ctx.globalAlpha = 1;

      // Add subtle mesh effect - reduced opacity
      ctx.globalCompositeOperation = 'overlay';
      const meshGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      meshGradient.addColorStop(0, 'rgba(0, 217, 255, 0.02)');
      meshGradient.addColorStop(0.5, 'rgba(255, 129, 74, 0.015)');
      meshGradient.addColorStop(1, 'rgba(0, 217, 255, 0.02)');
      ctx.fillStyle = meshGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';

      // Add dark overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}; 