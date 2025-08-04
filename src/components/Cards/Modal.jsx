import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import TechCarousel from './TechCarousel';

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
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
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
        document.body.classList.remove('modal-open');
      }}
    >
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black/50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ 
              willChange: 'opacity',
              zIndex: 49
            }}
          />
          
          <motion.div
            className="fixed inset-0 flex justify-center items-center pointer-events-none"
            style={{ 
              zIndex: 50,
            }}
          >
            <motion.div
              className="bg-gray-900/30 border border-gray-600/30 shadow-lg shadow-black/30 p-8 rounded-lg max-w-7xl w-full h-[90vh] flex relative pointer-events-auto bg-opacity-60 backdrop-blur-md text-white"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ 
                willChange: 'transform, opacity',
              }}
            >
              <div className="w-3/5 mr-8 flex items-center">
                {imagenes && imagenes.length > 0 ? (
                  <div className="w-full h-96">
                    <ImageCarousel 
                      images={imagenes}
                      autoPlay={true}
                      interval={4000}
                      className="h-full rounded-lg overflow-hidden"
                    />
                  </div>
                ) : (
                  <div className="w-full h-96 bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">No hay imágenes disponibles</p>
                  </div>
                )}
              </div>

              <div className="w-2/4 flex flex-col h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    {titulo}
                  </h2>
                  <motion.p 
                    className="text-xl mb-8 text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {descripcion}
                  </motion.p>
                </div>

                {(githubUrl || externalUrl) && (
                  <motion.div 
                    className="flex gap-4 justify-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {githubUrl && (
                      <motion.a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border border-gray-700/50 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-white font-medium">GitHub</span>
                      </motion.a>
                    )}

                    {externalUrl && (
                      <motion.a
                        href={externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white border border-white/10 px-6 py-3 rounded-full 
                                 hover:bg-indigo-400 hover:border-indigo-400 hover:shadow-2xl 
                                 hover:shadow-indigo-500/60 hover:ring-8 hover:ring-indigo-500/50 
                                 transition-all duration-300 group relative overflow-hidden"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ 
                          boxShadow: "0 0 40px rgba(99, 102, 241, 0.6), 0 0 80px rgba(99, 102, 241, 0.3)"
                        }}
                      >
                        <svg 
                          className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300 relative z-10"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                        <span className="text-black group-hover:text-white font-medium transition-colors duration-300 relative z-10">Visitar</span>
                      </motion.a>
                    )}
                  </motion.div>
                )}

                {tecnologias.length > 0 && (
                  <div className="mt-auto">
                    <TechCarousel tecnologias={tecnologias} />
                  </div>
                )}
              </div>

              <motion.button
                className="absolute top-1 right-4 text-5xl text-gray-400 hover:text-white transition-colors"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
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