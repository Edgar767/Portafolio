import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import TechCarousel from './TechCarousel';
import ExternalLinks from './ExternalLinks';

// 🔹 Variants reutilizables
const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

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
  // 🔹 Manejar tecla Escape
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence 
      mode="wait"
      onExitComplete={() => {
        document.body.classList.remove('modal-open');
      }}
    >
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/50 z-40"
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            role="presentation"
          />

          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Content */}
            <motion.div
              layoutId={`expandable-card-${titulo}`}
              className="bg-gray-900/30 border border-gray-600/30 shadow-lg shadow-black/30 
                         p-6 md:p-8 rounded-lg max-w-7xl w-full h-[90vh] 
                         flex flex-col md:flex-row relative pointer-events-auto 
                         bg-opacity-60 backdrop-blur-md text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <motion.div 
                layoutId={`card-image-container-${titulo}`}
                className="w-full md:w-3/5 md:mr-8 flex items-center mb-6 md:mb-0"
              >
                {imagenes?.length > 0 ? (
                  <motion.div 
                    layoutId={`card-image-${titulo}`}
                    className="w-full h-64 md:h-96"
                  >
                    <ImageCarousel 
                      images={imagenes}
                      autoPlay={true}
                      interval={4000}
                      className="h-full rounded-lg overflow-hidden"
                    />
                  </motion.div>
                ) : (
                  <div className="w-full h-64 md:h-96 bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">No hay imágenes disponibles</p>
                  </div>
                )}
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="w-full md:w-2/4 flex flex-col h-full"
              >
                <div className="flex-1 flex flex-col justify-center">
                  <motion.h2 
                    layoutId={`card-title-${titulo}`}
                    className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white"
                  >
                    {titulo}
                  </motion.h2>

                  <motion.p 
                    layoutId={`card-description-${titulo}`}
                    className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300 leading-relaxed"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: 0.2 }}
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
                    className="mt-4 md:mt-auto"
                    variants={slideUpVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: 0.4 }}
                  >
                    <TechCarousel tecnologias={tecnologias} />
                  </motion.div>
                )}
              </motion.div>

              {/* Close Button */}
              <motion.button
                className="absolute top-2 right-4 text-4xl md:text-5xl text-gray-400 hover:text-white transition-colors"
                onClick={onClose}
                variants={fadeVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: 0.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Cerrar modal"
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