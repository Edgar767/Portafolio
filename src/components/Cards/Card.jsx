import React, { useState } from 'react';

const Card = ({ 
  imagenes, 
  titulo, 
  onCardClick,
  isModalOpen = false
}) => {
  const primeraImagen = imagenes && imagenes.length > 0 ? imagenes[0] : null;
  const [isHovered, setIsHovered] = useState(false);
  
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
    <div
      className="w-full h-full rounded-xl overflow-hidden bg-gray-900/30 border cursor-pointer relative"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        borderColor: isHovered ? 'rgba(79, 70, 229, 0.6)' : 'rgba(156, 163, 175, 0.3)',
        boxShadow: isHovered
          ? `0 0 0 2px rgba(79, 70, 229, 0.5), 0 0 40px rgba(79, 70, 229, 0.4), 0 0 80px rgba(79, 70, 229, 0.3), 0 0 120px rgba(79, 70, 229, 0.2)`
          : '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'border-color 0.6s ease, box-shadow 0.6s ease',
        pointerEvents: isModalOpen ? 'none' : 'auto'
      }}
    >
      <div className="backdrop-blur-md bg-opacity-60 absolute inset-0 rounded-xl"></div>

      {primeraImagen && (
        <img 
          className="w-full h-full object-cover relative z-10" 
          src={primeraImagen.url} 
          alt={primeraImagen.alt || titulo}
        />
      )}
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-20 rounded-xl" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
        <div 
          className="font-Goldman text-white text-2xl md:text-3xl font-bold drop-shadow-2xl"
          style={{ 
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)'
          }}
        >
          {titulo}
        </div>
      </div>
    </div>
  );
};

export default Card;