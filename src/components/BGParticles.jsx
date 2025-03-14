import React, { useEffect, useRef, useState } from 'react';

const BGParticles = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  // Configuración de las partículas
  const particleCount = 100;
  const particleSize = 2;
  const particleSpeed = 0.3;

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Inicializar dimensiones
    handleResize();

    // Añadir evento de resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Inicializar partículas
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * particleSize + 1,
      speedX: (Math.random() - 0.5) * particleSpeed,
      speedY: (Math.random() - 0.5) * particleSpeed,
      opacity: Math.random() * 0.5 + 0.3
    }));

    const drawParticles = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      ctx.fillStyle = 'white';

      particlesRef.current.forEach(particle => {
        // Mover partícula
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.speedY = -particle.speedY;
        }

        // Dibujar partícula
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Dibujar conexiones entre partículas cercanas
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            ctx.globalAlpha = (1 - distance / 80) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed top-0 left-0 w-full h-full -z-2"
    />
  );
};

export default BGParticles;
