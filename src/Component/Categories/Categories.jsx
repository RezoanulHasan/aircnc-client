import React, { useState } from 'react';
import Container from '../Shared/Container';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';
import { useSearchParams } from 'react-router-dom';
import { FaBuffer } from 'react-icons/fa';
import Modal from 'react-modal';
import Modals from '../Pages/Rooms/Modals';
Modal.setAppElement('#root');

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track if the modal is open

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.label}
            selected={category === item.label}
          />
        ))}

        <button className='btn btn-outline' onClick={openModal}>
          <FaBuffer />
          Filter
        </button>
      </div>

      {/* Modal */}
      <Modal
  
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Filter Modal'
      >
        <Modals></Modals>
        
      </Modal>
    </Container>
  );
};

export default Categories;
