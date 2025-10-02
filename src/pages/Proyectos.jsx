import React, { useState } from 'react';
import Card from '../components/Card&Modal/Card';
import Modal from '../components/Card&Modal/Modal';
import { proyectosData } from '../data/Proyectos';

const Proyectos = () => {
  const [modalData, setModalData] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (proyecto) => {
    setModalData(proyecto);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    // Esperar a que termine la animación antes de limpiar los datos
    setTimeout(() => {
      setModalData(null);
      setIsClosing(false);
    }, 300); // Ajusta este tiempo según la duración de tu animación
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-Goldman text-white mb-12 text-center">
          Proyectos
        </h1>

        {/* Contenedor Bento Grid con el diseño de 7x12 */}
        <div className="grid grid-cols-7 grid-rows-[repeat(12,minmax(0,1fr))] gap-2 md:gap-4 w-full">
          {/* Proyecto 1 */}
          <div className="col-span-2 row-span-3">
            <Card
              imagenes={proyectosData[0].imagenes}
              titulo={proyectosData[0].titulo}
              onCardClick={() => openModal(proyectosData[0])}
              isModalOpen={!!modalData}
            />
          </div>
          
          {/* Proyecto 2 */}
          <div className="col-span-3 row-span-4 col-start-3">
            <Card
              imagenes={proyectosData[1].imagenes}
              titulo={proyectosData[1].titulo}
              onCardClick={() => openModal(proyectosData[1])}
              isModalOpen={!!modalData}
            />
          </div>
          
          {/* Proyecto 3 */}
          <div className="col-span-2 row-span-2 col-start-6">
            <Card
              imagenes={proyectosData[2].imagenes}
              titulo={proyectosData[2].titulo}
              onCardClick={() => openModal(proyectosData[2])}
              isModalOpen={!!modalData}
            />
          </div>
          
          {/* Proyecto 4 */}
          <div className="col-span-2 row-span-6 col-start-1 row-start-4">
            <Card
              imagenes={proyectosData[3].imagenes}
              titulo={proyectosData[3].titulo}
              onCardClick={() => openModal(proyectosData[3])}
              isModalOpen={!!modalData}
            />
          </div>
          
          {/* Proyecto 5 */}
          <div className="col-span-2 row-span-3 col-start-6 row-start-3">
            <Card
              imagenes={proyectosData[4].imagenes}
              titulo={proyectosData[4].titulo}
              onCardClick={() => openModal(proyectosData[4])}
              isModalOpen={!!modalData}
            />
          </div>
          
          {/* Proyecto 6 */}
          <div className="col-span-3 row-span-3 col-start-3 row-start-5">
            <Card
              imagenes={proyectosData[5].imagenes}
              titulo={proyectosData[5].titulo}
              onCardClick={() => openModal(proyectosData[5])}
              isModalOpen={!!modalData}
            />
          </div>
          
          {/* Proyecto 7 */}
          <div className="col-span-3 row-span-5 col-start-3 row-start-8">
            <Card
              imagenes={proyectosData[6].imagenes}
              titulo={proyectosData[6].titulo}
              onCardClick={() => openModal(proyectosData[6])}
              isModalOpen={!!modalData}
            />
          </div>
          
          {/* Proyecto 8 */}
          <div className="col-span-2 row-span-2 col-start-1 row-start-10">
            <Card
              imagenes={proyectosData[7].imagenes}
              titulo={proyectosData[7].titulo}
              onCardClick={() => openModal(proyectosData[7])}
              isModalOpen={!!modalData}
            />
          </div>
          
          {/* Proyecto 9 */}
          <div className="col-span-2 row-span-6 col-start-6 row-start-6">
            <Card
              imagenes={proyectosData[8].imagenes}
              titulo={proyectosData[8].titulo}
              onCardClick={() => openModal(proyectosData[8])}
              isModalOpen={!!modalData}
            />
          </div>
        </div>
      </div>

      {/* Modal único compartido */}
      {modalData && (
        <Modal
          isOpen={!isClosing}
          onClose={closeModal}
          imagenes={modalData.imagenes}
          titulo={modalData.titulo}
          descripcion={modalData.descripcion}
          tecnologias={modalData.tecnologias}
          githubUrl={modalData.githubUrl}
          externalUrl={modalData.externalUrl}
        />
      )}
    </section>
  );
};

export default Proyectos;