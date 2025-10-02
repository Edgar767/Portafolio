import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Card = React.memo(({ imagenes = [], titulo, onCardClick, isModalOpen = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Primera imagen
  const primeraImagen = imagenes[0] || null;

  // Reset hover al abrir modal
  useEffect(() => {
    if (isModalOpen && isHovered) setIsHovered(false);
  }, [isModalOpen, isHovered]);

  // Estilos dinámicos del contenedor (sin efectos índigo)
  const containerStyle = {
    willChange: 'transform',
    transform: 'translateZ(0)',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -1px rgba(0,0,0,0.06)',
    pointerEvents: isModalOpen ? 'none' : 'auto'
  };

  const titleStyle = {
    willChange: 'transform',
    transform: 'translateZ(0)',
    textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)'
  };

  return (
    <motion.div
      className="w-full h-full rounded-xl overflow-hidden bg-gray-900/30 border border-gray-400/30 cursor-pointer relative"
      onClick={() => !isModalOpen && onCardClick?.()}
      onMouseEnter={() => !isModalOpen && setIsHovered(true)}
      onMouseLeave={() => !isModalOpen && setIsHovered(false)}
      layoutId={`expandable-card-${titulo}`}
      style={containerStyle}
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
      <motion.div
        layoutId={`card-content-${titulo}`}
        className="absolute bottom-0 left-0 right-0 p-4 z-30"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <motion.div
          layoutId={`card-title-${titulo}`}
          className="font-Goldman text-white text-2xl md:text-3xl font-bold drop-shadow-2xl relative inline-block"
          style={titleStyle}
        >
          {titulo}
          
          {/* Barra animada debajo del título */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isHovered && !isModalOpen ? '100%' : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ 
              willChange: 'transform, filter', 
              transform: 'translateZ(0)',
              top: 'calc(100% + 0px)',
              filter: 'drop-shadow(0 0 6px rgba(99, 102, 241, 0.8)) drop-shadow(0 0 12px rgba(99, 102, 241, 0.4))'
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default Card;