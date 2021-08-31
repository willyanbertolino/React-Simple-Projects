import React from 'react';
import { useGlobalContext } from './context';
import quizCSS from './quiz.module.css';

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${isModalOpen && quizCSS.isOpen} ${quizCSS.modalContainer}`}
    >
      <div className={quizCSS.modalContent}>
        <h2>congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button className={quizCSS.closeBtn} onClick={closeModal}>
          play again
        </button>
      </div>
      Modal
    </div>
  );
};

export default Modal;
