import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  imagenes, 
  titulo, 
  onCardClick,
  isModalOpen = false
}) => {
  const primeraImagen = imagenes && imagenes.length > 0 ? imagenes[0] : null;
  const [isHovered, setIsHovered] = useState(false);
  
  // Resetear el estado de hover cuando el modal se abre o cierra
  useEffect(() => {
    if (isModalOpen) {
      setIsHovered(false);
    }
  }, [isModalOpen]);

  const handleMouseEnter = () => {
    if (!isModalOpen) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isModalOpen) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isModalOpen) return;
    onCardClick();
  };

  return (
    <motion.div
      className="w-full h-full rounded-xl overflow-hidden bg-gray-900/30 border cursor-pointer relative"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layoutId={`expandable-card-${titulo}`}
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)',
        borderColor: (isHovered && !isModalOpen) ? 'rgba(79, 70, 229, 0.6)' : 'rgba(156, 163, 175, 0.3)',
        boxShadow: (isHovered && !isModalOpen)
          ? `0 0 0 2px rgba(79, 70, 229, 0.5), 0 0 40px rgba(79, 70, 229, 0.4), 0 0 80px rgba(79, 70, 229, 0.3), 0 0 120px rgba(79, 70, 229, 0.2)`
          : '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // Sin transición cuando el modal está abierto, transición normal cuando no lo está
        transition: isModalOpen ? 'none' : 'border-color 0.6s ease, box-shadow 0.6s ease',
        pointerEvents: isModalOpen ? 'none' : 'auto'
      }}
      initial={false}
    >
      <div className="backdrop-blur-md bg-opacity-60 absolute inset-0 rounded-xl"></div>

      {primeraImagen && (
        <motion.img 
          layoutId={`card-image-${titulo}`}
          className="w-full h-full object-cover relative z-10" 
          src={primeraImagen.url} 
          alt={primeraImagen.alt || titulo}
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
      )}
      
      {/* Degradado overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-20 rounded-xl"
      />
      
      <motion.div 
        layoutId={`card-content-${titulo}`}
        className="absolute bottom-0 left-0 right-0 p-4 z-30"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      >
        <motion.div 
          layoutId={`card-title-${titulo}`}
          className="font-Goldman text-white text-2xl md:text-3xl font-bold drop-shadow-2xl"
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)'
          }}
        >
          {titulo}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;