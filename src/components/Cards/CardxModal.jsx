import React, { useState } from 'react';
import Card from './Card';
import Modal from '../Modal/Modal';

const CardxModal = ({ imagenes, titulo, descripcion, tecnologias = [], githubUrl, externalUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative h-full">
      <Card
        imagenes={imagenes}
        titulo={titulo}
        onCardClick={() => setIsModalOpen(true)}
        isModalOpen={isModalOpen}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imagenes={imagenes}
        titulo={titulo}
        descripcion={descripcion}
        tecnologias={tecnologias}
        githubUrl={githubUrl}
        externalUrl={externalUrl}
      />
    </div>
  );
};

export default CardxModal;