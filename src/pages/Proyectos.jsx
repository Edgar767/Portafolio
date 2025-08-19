import React from 'react';
import CardxModal from '../components/Cards/CardxModal';
import { proyectosData } from '../data/Proyectos';

const Proyectos = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-Goldman text-white mb-12 text-center">
          Proyectos
        </h1>

        {/* Contenedor Bento Grid con el nuevo diseño de 7x12 */}
        <div className="grid grid-cols-7 grid-rows-[repeat(12,minmax(0,1fr))] gap-2 md:gap-4 w-full">
          {/* Proyecto 1: div1 */}
          <div className="col-span-2 row-span-3">
            <CardxModal
              imagenes={proyectosData[0].imagenes}
              titulo={proyectosData[0].titulo}
              descripcion={proyectosData[0].descripcion}
              githubUrl={proyectosData[0].githubUrl}
              externalUrl={proyectosData[0].externalUrl}
              tecnologias={proyectosData[0].tecnologias}
            />
          </div>
          
          {/* Proyecto 2: div2 */}
          <div className="col-span-3 row-span-4 col-start-3">
            <CardxModal
              imagenes={proyectosData[1].imagenes}
              titulo={proyectosData[1].titulo}
              descripcion={proyectosData[1].descripcion}
              githubUrl={proyectosData[1].githubUrl}
              externalUrl={proyectosData[1].externalUrl}
              tecnologias={proyectosData[1].tecnologias}
            />
          </div>
          
          {/* Proyecto 3: div3 */}
          <div className="col-span-2 row-span-2 col-start-6">
            <CardxModal
              imagenes={proyectosData[2].imagenes}
              titulo={proyectosData[2].titulo}
              descripcion={proyectosData[2].descripcion}
              githubUrl={proyectosData[2].githubUrl}
              externalUrl={proyectosData[2].externalUrl}
              tecnologias={proyectosData[2].tecnologias}
            />
          </div>
          
          {/* Proyecto 4: div4 */}
          <div className="col-span-2 row-span-6 col-start-1 row-start-4">
            <CardxModal
              imagenes={proyectosData[3].imagenes}
              titulo={proyectosData[3].titulo}
              descripcion={proyectosData[3].descripcion}
              githubUrl={proyectosData[3].githubUrl}
              externalUrl={proyectosData[3].externalUrl}
              tecnologias={proyectosData[3].tecnologias}
            />
          </div>
          
          {/* Proyecto 5: div5 */}
          <div className="col-span-2 row-span-3 col-start-6 row-start-3">
            <CardxModal
              imagenes={proyectosData[4].imagenes}
              titulo={proyectosData[4].titulo}
              descripcion={proyectosData[4].descripcion}
              githubUrl={proyectosData[4].githubUrl}
              externalUrl={proyectosData[4].externalUrl}
              tecnologias={proyectosData[4].tecnologias}
            />
          </div>
          
          {/* Proyecto 6: div6 */}
          <div className="col-span-3 row-span-3 col-start-3 row-start-5">
            <CardxModal
              imagenes={proyectosData[5].imagenes}
              titulo={proyectosData[5].titulo}
              descripcion={proyectosData[5].descripcion}
              githubUrl={proyectosData[5].githubUrl}
              externalUrl={proyectosData[5].externalUrl}
              tecnologias={proyectosData[5].tecnologias}
            />
          </div>
          
          {/* Proyecto 7: div7 */}
          <div className="col-span-3 row-span-5 col-start-3 row-start-8">
            <CardxModal
              imagenes={proyectosData[6].imagenes}
              titulo={proyectosData[6].titulo}
              descripcion={proyectosData[6].descripcion}
              githubUrl={proyectosData[6].githubUrl}
              externalUrl={proyectosData[6].externalUrl}
              tecnologias={proyectosData[6].tecnologias}
            />
          </div>
          
          {/* Proyecto 8: div8 */}
          <div className="col-span-2 row-span-2 col-start-1 row-start-10">
            <CardxModal
              imagenes={proyectosData[7].imagenes}
              titulo={proyectosData[7].titulo}
              descripcion={proyectosData[7].descripcion}
              githubUrl={proyectosData[7].githubUrl}
              externalUrl={proyectosData[7].externalUrl}
              tecnologias={proyectosData[7].tecnologias}
            />
          </div>
          
          {/* Proyecto 9: div9 */}
          <div className="col-span-2 row-span-6 col-start-6 row-start-6">
            <CardxModal
              imagenes={proyectosData[8].imagenes}
              titulo={proyectosData[8].titulo}
              descripcion={proyectosData[8].descripcion}
              githubUrl={proyectosData[8].githubUrl}
              externalUrl={proyectosData[8].externalUrl}
              tecnologias={proyectosData[8].tecnologias}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;