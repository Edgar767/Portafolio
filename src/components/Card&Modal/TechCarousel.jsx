import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const TechCarousel = ({ tecnologias = [] }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);

  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);
  const progressRef = useRef(0);

  // Recalcular anchos cuando cambien tecnologías o ventana
  const updateWidths = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    if (itemsRef.current.length > 0) {
      const width = itemsRef.current.reduce((acc, el) => {
        if (!el) return acc;
        return acc + el.offsetWidth + 12; // 12 = gap
      }, 0);
      setTotalWidth(width);
    }
  }, []);

  useEffect(() => {
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [updateWidths]);

  // Animación infinita
  useEffect(() => {
    let animationFrame;
    const duration = 20000; // 20s ciclo completo
    let lastTimestamp;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;

      if (containerWidth > 0 && totalWidth > 0) {
        progressRef.current = (progressRef.current + deltaTime / duration) % 1;
        const x = -(progressRef.current * totalWidth);

        if (carouselRef.current) {
          carouselRef.current.style.transform = `translateX(${x}px)`;
        }
      }

      lastTimestamp = timestamp;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [containerWidth, totalWidth]);

  if (!tecnologias.length) return null;

  const multipliedTechs = [...tecnologias, ...tecnologias, ...tecnologias];

  return (
    <motion.div
      className="mt-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <motion.h3
        className="text-2xl text-center font-semibold text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Tecnologías Utilizadas
      </motion.h3>

      <div
        ref={containerRef}
        className="relative overflow-hidden h-14"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div
          ref={carouselRef}
          className="flex gap-3 items-center h-full will-change-transform"
        >
          {multipliedTechs.map((tech, index) => (
            <div
              ref={(el) => {
                if (index < tecnologias.length) itemsRef.current[index] = el;
              }}
              key={`${tech.nombre}-${index}`}
              className="flex items-center gap-2 bg-gray-800/50 border border-gray-600/50 px-4 py-2 rounded-full backdrop-blur-sm flex-shrink-0"
            >
              {tech.logo && (
                <img
                  src={tech.logo}
                  alt={tech.nombre}
                  className="w-5 h-5 object-contain"
                />
              )}
              <span className="text-white text-sm font-medium whitespace-nowrap">
                {tech.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechCarousel;