import React, { useEffect, useState } from 'react';

const DarkVoidGradient = () => {
  const [particles, setParticles] = useState([]);
  const bounceMargin = 450; // Extender el área de rebote aún más fuera de la pantalla

  const initializeParticles = () => {
    const numParticles = 4;
    return Array.from({ length: numParticles }).map(() => ({
      id: crypto.randomUUID(),
      x: Math.random() * (window.innerWidth + 2 * bounceMargin) - bounceMargin,
      y: Math.random() * (window.innerHeight + 2 * bounceMargin) - bounceMargin,
      size: Math.random() * 200 + 100,
      velocityX: (Math.random() - 0.5) * 5, // Aumentar la velocidad en X
      velocityY: (Math.random() - 0.5) * 5, // Aumentar la velocidad en Y
    }));
  };

  useEffect(() => {
    setParticles(initializeParticles());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.velocityX;
          let newY = particle.y + particle.velocityY;

          const minX = -bounceMargin;
          const maxX = window.innerWidth + bounceMargin;
          const minY = -bounceMargin;
          const maxY = window.innerHeight + bounceMargin;

          if (newX <= minX || newX + particle.size >= maxX) {
            particle.velocityX = -particle.velocityX;
            newX = Math.max(minX, Math.min(newX, maxX - particle.size));
          }
          if (newY <= minY || newY + particle.size >= maxY) {
            particle.velocityY = -particle.velocityY;
            newY = Math.max(minY, Math.min(newY, maxY - particle.size));
          }

          return { ...particle, x: newX, y: newY };
        })
      );
    }, 33);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 left-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]" />
      <div
        className="absolute inset-0 bg-[length:60px_60px] opacity-20"
        style={{
          backgroundImage: `
               linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
             `,
        }}
      />
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-indigo-400 rounded-full blur-[70px] transition-transform duration-[100ms]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            boxShadow: '0 0 30px rgba(99, 102, 241, 0.8)',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/30 to-transparent blur-[100px] opacity-50" />
      
      {/* Gradiente en la parte inferior para conectar con la siguiente página */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent to-black" />
    </div>
  );
};

export default DarkVoidGradient;
