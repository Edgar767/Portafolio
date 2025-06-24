import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, autoPlay = true, interval = 5000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setProgress(0);
  }, [images.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      // Reset any existing timers
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);

      // Set up progress bar updates
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / (interval / 100);
          return Math.min(newProgress, 100);
        });
      }, 100);

      // Set up slide transition
      timerRef.current = setTimeout(goToNext, interval);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, autoPlay, interval, images.length, goToNext]);

  // Stop autoplay when user interacts
  const handleUserInteraction = (callback) => {
    return (e) => {
      e.stopPropagation();
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      setProgress(0);
      callback();
    };
  };

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
      <div className="relative w-full h-5/6">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-contain"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Image Counter - En su posición original */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Navigation - Centrado verticalmente en el espacio reservado */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1/6 flex items-center justify-center pt-5">
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-600/50">
            {/* Previous Arrow */}
            <button
              className="h-6 w-6 p-0 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-colors"
              onClick={handleUserInteraction(goToPrevious)}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-3 w-3 text-white" />
            </button>

            {/* Progress Indicators - Centrados verticalmente con las flechas */}
            <div className="flex items-center gap-1.5 w-16 justify-center">
              {Array.from({ length: Math.min(3, images.length) }, (_, i) => {
                let displayIndex;
                if (images.length <= 3) {
                  displayIndex = i;
                } else {
                  // Para más de 3 imágenes, mostrar ventana deslizante centrada en currentIndex
                  const start = Math.max(0, Math.min(currentIndex - 1, images.length - 3));
                  displayIndex = start + i;
                }
                
                return (
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
                      {displayIndex === currentIndex && autoPlay && (
                        <div
                          className="absolute inset-0 bg-white transition-all duration-500 ease-out rounded-full"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  </div>
                );
              })}
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
    </div>
  );
};

export default ImageCarousel;