import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const Card = React.memo(({ imagenes = [], titulo, onCardClick, isModalOpen = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Primera imagen
  const primeraImagen = imagenes[0] || null;

  // Reset hover al abrir modal
  useEffect(() => {
    if (isModalOpen && isHovered) setIsHovered(false);
  }, [isModalOpen, isHovered]);

  // Memoizar handlers
  const handleClick = useCallback(() => {
    if (!isModalOpen && onCardClick) {
      onCardClick();
    }
  }, [isModalOpen, onCardClick]);

  const handleMouseEnter = useCallback(() => {
    if (!isModalOpen) setIsHovered(true);
  }, [isModalOpen]);

  const handleMouseLeave = useCallback(() => {
    if (!isModalOpen) setIsHovered(false);
  }, [isModalOpen]);

  return (
    <motion.div
      className="w-full h-full rounded-xl overflow-hidden bg-gray-900/30 border border-gray-400/30 cursor-pointer relative"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layoutId={`expandable-card-${titulo}`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        pointerEvents: isModalOpen ? 'none' : 'auto'
      }}
      initial={false}
    >
      {primeraImagen && (
        <motion.img
          layoutId={`card-image-${titulo}`}
          className="w-full h-full object-cover relative z-10"
          src={primeraImagen.url}
          alt={primeraImagen.alt || titulo}
          loading="lazy"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
      )}

      {/* Overlay degradado */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-20 rounded-xl" />

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
        <div className="font-Goldman text-white text-2xl md:text-3xl font-bold drop-shadow-2xl relative inline-block">
          {titulo}
          
          {/* Barra animada debajo del título */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isHovered && !isModalOpen ? '100%' : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ 
              willChange: 'transform', 
              transform: 'translateZ(0)',
              top: 'calc(100% + 0px)',
              filter: 'drop-shadow(0 0 6px rgba(99, 102, 241, 0.8))'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
});

export default Card;