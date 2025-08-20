import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import TechCarousel from './TechCarousel';
import ExternalLinks from './ExternalLinks';

const Modal = ({ 
  isOpen,
  onClose,
  imagenes, 
  titulo, 
  descripcion, 
  tecnologias = [], 
  githubUrl, 
  externalUrl 
}) => {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence 
      mode="wait"
      onExitComplete={() => {
        // Asegurar que el body se limpie después de la animación de salida
        document.body.classList.remove('modal-open');
      }}
    >
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ 
              willChange: 'opacity',
              backfaceVisibility: 'hidden',
              zIndex: 49
            }}
          />
          
          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 flex justify-center items-center pointer-events-none"
            style={{ 
              zIndex: 50,
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            {/* Modal Content */}
            <motion.div
              layoutId={`expandable-card-${titulo}`}
              className="bg-gray-900/30 border border-gray-600/30 shadow-lg shadow-black/30 p-8 rounded-lg max-w-7xl w-full h-[90vh] flex relative pointer-events-auto bg-opacity-60 backdrop-blur-md text-white"
              onClick={(e) => e.stopPropagation()}
              style={{ 
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Image Section */}
              <motion.div 
                layoutId={`card-image-container-${titulo}`}
                className="w-3/5 mr-8 flex items-center"
                style={{ 
                  willChange: 'transform',
                  transform: 'translateZ(0)'
                }}
              >
                {imagenes && imagenes.length > 0 ? (
                  <motion.div 
                    layoutId={`card-image-${titulo}`}
                    className="w-full h-96"
                    style={{ 
                      willChange: 'transform',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <ImageCarousel 
                      images={imagenes}
                      autoPlay={true}
                      interval={4000}
                      className="h-full rounded-lg overflow-hidden"
                    />
                  </motion.div>
                ) : (
                  <div className="w-full h-96 bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">No hay imágenes disponibles</p>
                  </div>
                )}
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="w-2/4 flex flex-col h-full"
                style={{ 
                  willChange: 'transform',
                  transform: 'translateZ(0)'
                }}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <motion.h2 
                    layoutId={`card-title-${titulo}`}
                    className="text-4xl font-bold mb-6 text-white"
                    style={{ 
                      willChange: 'transform',
                      transform: 'translateZ(0)'
                    }}
                  >
                    {titulo}
                  </motion.h2>
                  <motion.p 
                    layoutId={`card-description-${titulo}`}
                    className="text-xl mb-8 text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ 
                      willChange: 'opacity',
                      transform: 'translateZ(0)'
                    }}
                  >
                    {descripcion}
                  </motion.p>
                </div>

                {/* Action Buttons */}
                {(githubUrl || externalUrl) && (
                  <ExternalLinks githubUrl={githubUrl} externalUrl={externalUrl} />
                )}

                {/* Tech Carousel */}
                {tecnologias.length > 0 && (
                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                  >
                    <TechCarousel tecnologias={tecnologias} />
                  </motion.div>
                )}
              </motion.div>

              {/* Close Button */}
              <motion.button
                className="absolute top-1 right-4 text-5xl text-gray-400 hover:text-white transition-colors z-50"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ 
                  willChange: 'opacity',
                  transform: 'translateZ(0)'
                }}
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;