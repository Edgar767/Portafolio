import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] md:min-h-[60vh] flex items-center px-4 sm:px-6 lg:px-8 py-20 md:py-40">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Texto directo sin contenedor */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Hola, Soy <span className="text-indigo-500">Edgar</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          Desarrollador web frontend. Diseño y construyo interfaces modernas, optimizadas y funcionales para la mejor experiencia de usuario.
          </p>
        </div>

        {/* Imagen limpia sin efectos de hover */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-indigo-500">
          <img 
            src="/images/perfil.png"
            alt="Edgar Desarrollador Front End" 
            className="w-full h-full object-cover object-center"
            loading="lazy"
            style={{ 
              objectPosition: 'center -10%'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;