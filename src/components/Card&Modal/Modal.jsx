import React, { useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import TechCarousel from './TechCarousel';
import ExternalLinks from './ExternalLinks';

// Variants reutilizables
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

const Modal = React.memo(({
  isOpen,
  onClose,
  imagenes = [],
  titulo,
  descripcion,
  tecnologias = [],
  githubUrl,
  externalUrl
}) => {
  // Memoizar props complejas
  const memoizedImagenes = useMemo(() => imagenes, [imagenes]);
  const memoizedTecnologias = useMemo(() => tecnologias, [tecnologias]);

  // Cerrar modal con Escape
  const handleKeyDown = useCallback(
    (event) => event.key === 'Escape' && onClose(),
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Memoizar el contenido del modal
  const modalContent = useMemo(() => (
    <AnimatePresence mode="wait" onExitComplete={() => document.body.classList.remove('modal-open')}>
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
          <motion.div className="fixed inset-0 flex justify-center items-center z-50" role="dialog" aria-modal="true">
            <motion.div
              layoutId={`expandable-card-${titulo}`}
              className="bg-gray-900/30 border border-gray-600/30 shadow-lg shadow-black/30 
                         p-6 md:p-8 rounded-lg max-w-7xl w-full h-[90vh] 
                         flex flex-col md:flex-row relative pointer-events-auto 
                         bg-opacity-60 backdrop-blur-md text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen - Solo mantener layoutId esencial */}
              <div className="w-full md:w-3/5 md:mr-8 flex items-center mb-6 md:mb-0">
                {memoizedImagenes.length > 0 ? (
                  <motion.div layoutId={`card-image-${titulo}`} className="w-full h-64 md:h-96">
                    <ImageCarousel images={memoizedImagenes} autoPlay interval={4000} className="h-full rounded-lg overflow-hidden" />
                  </motion.div>
                ) : (
                  <div className="w-full h-64 md:h-96 bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">No hay imágenes disponibles</p>
                  </div>
                )}
              </div>

              {/* Contenido - Sin layoutId */}
              <div className="w-full md:w-2/4 flex flex-col h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white"
                    variants={slideUpVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: 0.2 }}
                  >
                    {titulo}
                  </motion.h2>

                  <motion.p
                    className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300 leading-relaxed"
                    variants={slideUpVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: 0.3 }}
                  >
                    {descripcion}
                  </motion.p>
                </div>

                {/* Links */}
                {(githubUrl || externalUrl) && (
                  <motion.div
                    variants={slideUpVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: 0.4 }}
                  >
                    <ExternalLinks githubUrl={githubUrl} externalUrl={externalUrl} />
                  </motion.div>
                )}

                {/* Tecnologías */}
                {memoizedTecnologias.length > 0 && (
                  <motion.div 
                    className="mt-4 md:mt-auto" 
                    variants={slideUpVariant} 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit" 
                    transition={{ delay: 0.4 }}
                  >
                    <TechCarousel tecnologias={memoizedTecnologias} />
                  </motion.div>
                )}
              </div>

              {/* Botón Cerrar */}
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
  ), [isOpen, onClose, memoizedImagenes, titulo, descripcion, memoizedTecnologias, githubUrl, externalUrl]);

  return modalContent;
});

export default Modal;