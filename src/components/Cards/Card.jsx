import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  imagenes, 
  titulo, 
  onCardClick 
}) => {
  const primeraImagen = imagenes && imagenes.length > 0 ? imagenes[0] : null;

  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden bg-gray-900/30 border border-gray-600/30
              shadow-lg shadow-black/30 hover:shadow-xl bg-opacity-60 backdrop-blur-md cursor-pointer relative"
      onClick={onCardClick}
      layoutId={`expandable-card-${titulo}`}
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      {primeraImagen && (
        <motion.img 
          layoutId={`card-image-${titulo}`}
          className="w-full h-48 object-cover" 
          src={primeraImagen.url} 
          alt={primeraImagen.alt || titulo}
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
      )}
      
      {/* Degradado overlay para mejorar legibilidad del texto */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
      
      <motion.div 
        layoutId={`card-content-${titulo}`}
        className="absolute bottom-0 left-0 right-0 p-4 z-10"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      >
        <motion.div 
          layoutId={`card-title-${titulo}`}
          className="font-Goldman text-white text-3xl md:text-4xl font-bold drop-shadow-2xl"
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