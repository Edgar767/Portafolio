import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, autoPlay = true, interval = 5000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  // Limpiar timers de forma optimizada
  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    startTimeRef.current = null;
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(autoPlay), 100);
  }, [images.length, autoPlay]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(autoPlay), 100);
  }, [autoPlay]);

  // Calcular imágenes visibles (solo las necesarias en el DOM)
  const visibleImages = useMemo(() => {
    if (images.length <= 1) return [0];
    
    const prev = (currentIndex - 1 + images.length) % images.length;
    const next = (currentIndex + 1) % images.length;
    return [prev, currentIndex, next];
  }, [currentIndex, images.length]);

  // Calcular índices de indicadores de forma optimizada
  const indicatorIndices = useMemo(() => {
    if (images.length <= 3) {
      return Array.from({ length: images.length }, (_, i) => i);
    }
    const start = Math.max(0, Math.min(currentIndex - 1, images.length - 3));
    return Array.from({ length: 3 }, (_, i) => start + i);
  }, [currentIndex, images.length]);

  // Optimizar autoplay
  useEffect(() => {
    if (isPlaying && images.length > 1) {
      clearTimers();
      startTimeRef.current = Date.now();
      
      timerRef.current = setTimeout(goToNext, interval);
    }

    return clearTimers;
  }, [currentIndex, isPlaying, interval, images.length, goToNext, clearTimers]);

  // Pausar/reanudar autoplay al cambiar la prop
  useEffect(() => {
    setIsPlaying(autoPlay);
  }, [autoPlay]);

  const handleUserInteraction = useCallback((callback) => {
    return (e) => {
      e.stopPropagation();
      clearTimers();
      setIsPlaying(false);
      callback();
      
      // Reanudar autoplay después de la interacción si estaba habilitado
      if (autoPlay) {
        setTimeout(() => setIsPlaying(true), 1000);
      }
    };
  }, [clearTimers, autoPlay]);

  if (!images || images.length === 0) {
    return (
      <div className={`w-full h-full bg-gray-800/50 flex items-center justify-center rounded ${className}`}>
        <p className="text-gray-400">No images available</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Contenedor del carrusel de imágenes */}
      <div className="relative w-full h-5/6 overflow-hidden">
        {/* Solo renderizar imágenes visibles */}
        {images.map((image, index) => {
          const shouldRender = visibleImages.includes(index);
          if (!shouldRender) return null;

          return (
            <div
              key={image.id || `${image.url}-${index}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-contain"
                loading={Math.abs(index - currentIndex) <= 1 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          );
        })}

        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white border border-gray-600/50">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1/6 flex items-center justify-center pt-5">
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-600/50">
            {/* Previous Arrow */}
            <button
              className="h-6 w-6 p-0 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-colors"
              onClick={handleUserInteraction(goToPrevious)}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-3 w-3 text-white" />
            </button>

            {/* Progress Indicators */}
            <div className="flex items-center gap-1.5 w-16 justify-center">
              {indicatorIndices.map((displayIndex) => (
                <div key={displayIndex} className="relative flex items-center">
                  <button
                    className={`h-1.5 rounded-full transition-all duration-300 ease-out relative overflow-hidden ${
                      displayIndex === currentIndex
                        ? 'w-6 bg-white/40'
                        : 'w-1.5 bg-gray-400/40 hover:bg-gray-400/60'
                    }`}
                    onClick={handleUserInteraction(() => goToSlide(displayIndex))}
                    aria-label={`Go to slide ${displayIndex + 1}`}
                  >
                    {/* Barra de progreso con CSS Animation */}
                    {displayIndex === currentIndex && isPlaying && (
                      <div
                        className="absolute inset-0 bg-white rounded-full origin-left"
                        style={{
                          animation: `progressBar ${interval}ms linear`,
                          animationFillMode: 'forwards'
                        }}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              className="h-6 w-6 p-0 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-colors"
              onClick={handleUserInteraction(goToNext)}
              aria-label="Next image"
            >
              <ChevronRight className="h-3 w-3 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* CSS Animation para la barra de progreso */}
      <style>{`
        @keyframes progressBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;