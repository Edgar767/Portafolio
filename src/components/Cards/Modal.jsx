import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import TechCarousel from './TechCarousel';
import GitHubIcon from '../../assets/icons/GitHubIcon';
import VisitIcon from '../../assets/icons/VisitIcon';

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
    return () => document.body.classList.remove('modal-open');
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
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence 
      mode="wait"
      onExitComplete={() => document.body.classList.remove('modal-open')}
    >
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black/50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ zIndex: 49 }}
          />
          
          <motion.div
            layoutId={`expandable-card-${titulo}`}
            className="fixed inset-0 flex justify-center items-center pointer-events-none"
            style={{ zIndex: 50 }}
          >
            <motion.div
              className="bg-gray-900/30 border border-gray-600/30 shadow-lg shadow-black/30 p-8 rounded-lg max-w-7xl w-full h-[90vh] flex relative pointer-events-auto bg-opacity-60 backdrop-blur-md text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                layoutId={`card-image-container-${titulo}`}
                className="w-3/5 mr-8 flex items-center"
              >
                {imagenes && imagenes.length > 0 ? (
                  <motion.div 
                    layoutId={`card-image-${titulo}`}
                    className="w-full h-96"
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

              <motion.div className="w-2/4 flex flex-col h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <motion.h2 
                    layoutId={`card-title-${titulo}`}
                    className="text-4xl font-bold mb-6 text-white"
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
                  >
                    {descripcion}
                  </motion.p>
                </div>

                {(githubUrl || externalUrl) && (
                  <motion.div 
                    className="flex gap-4 justify-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
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
                        <GitHubIcon className="w-5 h-5 text-white" />
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
                        <VisitIcon className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300 relative z-10" />
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
              </motion.div>

              <motion.button
                className="absolute top-1 right-4 text-5xl text-gray-400 hover:text-white transition-colors"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
