import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  imagenes, 
  titulo, 
  onCardClick,
  isModalOpen = false
}) => {
  const primeraImagen = imagenes && imagenes.length > 0 ? imagenes[0] : null;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  // Efecto para manejar cuándo ocultar la card
  React.useEffect(() => {
    if (isModalOpen) {
      // Ocultar después de que comience la animación de apertura
      const timer = setTimeout(() => {
        setShouldHide(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // Mostrar inmediatamente cuando se cierra el modal
      setShouldHide(false);
    }
  }, [isModalOpen]);

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    setIsClicked(true);
    setIsHovered(false);
    onCardClick();
    
    // Resetear el estado después de un delay más largo para asegurar que el modal esté completamente abierto
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden bg-gray-900/30 border cursor-pointer relative"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layoutId={`expandable-card-${titulo}`}
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)',
        borderColor: (isHovered && !isClicked) ? 'rgba(79, 70, 229, 0.6)' : 'rgba(156, 163, 175, 0.3)',
        boxShadow: (isHovered && !isClicked)
          ? `0 0 0 2px rgba(79, 70, 229, 0.5), 0 0 40px rgba(79, 70, 229, 0.4), 0 0 80px rgba(79, 70, 229, 0.3), 0 0 120px rgba(79, 70, 229, 0.2)`
          : '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: isClicked ? 'none' : 'border-color 0.6s ease, box-shadow 0.6s ease',
        opacity: shouldHide ? 0 : 1,
        pointerEvents: isModalOpen ? 'none' : 'auto'
      }}
    >
      <div className="backdrop-blur-md bg-opacity-60 absolute inset-0 rounded"></div>

      {primeraImagen && (
        <motion.img 
          layoutId={`card-image-${titulo}`}
          className="w-full h-48 object-cover relative z-10" 
          src={primeraImagen.url} 
          alt={primeraImagen.alt || titulo}
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
      )}
      
      {/* Degradado overlay para mejorar legibilidad del texto */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-20" />
      
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