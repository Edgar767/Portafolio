import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal/Modal';

const CardxModal = ({ 
  imagenes, 
  titulo, 
  descripcion, 
  tecnologias = [], 
  githubUrl, 
  externalUrl 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-full">
      <Card 
        imagenes={imagenes}
        titulo={titulo}
        onCardClick={handleCardClick}
        isModalOpen={isModalOpen}
      />
      
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
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