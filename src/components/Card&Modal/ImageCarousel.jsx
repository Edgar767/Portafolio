import React, { useState, useEffect, useRef, useCallback } from 'react';

const ImageCarousel = ({ images, autoPlay = true, interval = 5000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const timerRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const nextSlide = useCallback(() => setCurrentIndex((i) => (i + 1) % images.length), [images.length]);
  const prevSlide = useCallback(() => setCurrentIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const goToSlide = useCallback((i) => setCurrentIndex(i), []);

  const handleInteraction = useCallback(
    (callback) => (e) => {
      e.stopPropagation();
      clearTimer();
      setIsPlaying(false);
      callback();
      if (autoPlay) setTimeout(() => setIsPlaying(true), 1000);
    },
    [clearTimer, autoPlay]
  );

  useEffect(() => {
    if (isPlaying && images.length > 1) {
      clearTimer();
      timerRef.current = setTimeout(nextSlide, interval);
    }
    return clearTimer;
  }, [currentIndex, isPlaying, nextSlide, interval, images.length, clearTimer]);

  useEffect(() => setIsPlaying(autoPlay), [autoPlay]);

  if (!images || images.length === 0)
    return (
      <div className={`w-full h-full bg-gray-800/50 flex items-center justify-center rounded ${className}`}>
        <p className="text-gray-400">No images available</p>
      </div>
    );

  // Solo renderizamos imágenes previas, actual y siguiente para optimizar
  const visibleIndices = [
    (currentIndex - 1 + images.length) % images.length,
    currentIndex,
    (currentIndex + 1) % images.length,
  ];

  // Indicadores: máximo 3, centrados en la imagen actual
  const startIdx = Math.min(Math.max(currentIndex - 1, 0), images.length - 3);
  const indicators = images.length <= 3 ? images.map((_, i) => i) : [startIdx, startIdx + 1, startIdx + 2];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="relative w-full h-5/6 overflow-hidden">
        {images.map((img, idx) =>
          visibleIndices.includes(idx) ? (
            <div
              key={img.id || `${img.url}-${idx}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img src={img.url} alt={img.alt} className="w-full h-full object-contain" loading="lazy" decoding="async" />
            </div>
          ) : null
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white border border-gray-600/50">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1/6 flex items-center justify-center pt-5">
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-600/50">
            <button
              className="h-6 w-6 p-0 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-colors"
              onClick={handleInteraction(prevSlide)}
              aria-label="Previous image"
            >
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5 w-16 justify-center">
              {indicators.map((i) => (
                <div key={i} className="relative flex items-center">
                  <button
                    className={`h-1.5 rounded-full relative overflow-hidden transition-all duration-300 ${
                      i === currentIndex ? 'w-6 bg-white/40' : 'w-1.5 bg-gray-400/40 hover:bg-gray-400/60'
                    }`}
                    onClick={handleInteraction(() => goToSlide(i))}
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    {i === currentIndex && isPlaying && (
                      <div
                        className="absolute inset-0 bg-white rounded-full origin-left"
                        style={{ animation: `progressBar ${interval}ms linear`, animationFillMode: 'forwards' }}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <button
              className="h-6 w-6 p-0 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-colors"
              onClick={handleInteraction(nextSlide)}
              aria-label="Next image"
            >
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;