import React from 'react';
import BGParticles from '../components/BGParticles';

const Acerca = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[60vh] flex items-center justify-center bg-black -z-2">
      <BGParticles />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Acerca de <span className="text-indigo-500">Mí</span>
        </h1>
        <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
          La programación ha sido parte de mi vida desde que tengo memoria, me encanta aprender cosas nuevas y siempre estoy en busca de nuevos retos.
        </p>
      </div>
    </section>
  );
};

export default Acerca;