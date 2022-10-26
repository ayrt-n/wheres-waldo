import React from 'react';
import '../styles/Modal.css';

function Modal({ children }) {
  return (
    <div className="Modal-container">
      { children }
    </div>
  );
}

export default Modal;
