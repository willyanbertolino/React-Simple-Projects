import React from 'react';
import sidebarCSS from './sidebar.module.css';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${sidebarCSS.modalOverlay} ${
        isModalOpen && sidebarCSS.showModal
      }`}
    >
      <div className={sidebarCSS.modalContainer}>
        <h3>modal content</h3>
        <button className={sidebarCSS.closeModalBtn} onClick={closeModal}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
