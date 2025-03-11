import React from 'react';
import { motion } from 'framer-motion';

const DarkVoidGradient = () => {
  // Partículas más grandes con parámetros ajustados
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2, // Tamaño aumentado (2-6px)
    delay: Math.random() * 2
  }));

  return (
    <div className="w-full h-screen absolute top-0 left-0 z-[-1] overflow-hidden">
      {/* Fondo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]" />
      
      {/* Cuadrícula más grande y visible */}
      <div className="absolute inset-0 bg-[length:60px_60px] opacity-20" // Tamaño aumentado y opacidad incrementada
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
             `
           }} />
      
      {/* Partículas más grandes y brillantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-indigo-400 rounded-full blur-[3px]" // Blur aumentado
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)' // Sombra más intensa
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0], // Escala aumentada
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Efecto de brillo central más pronunciado */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-indigo-500/30 to-transparent blur-[100px]"
        animate={{
          opacity: [0.4, 0.6, 0.4] // Opacidad aumentada
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default DarkVoidGradient;