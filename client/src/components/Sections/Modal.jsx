import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'; // Importing the cross icon from react-icons

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <img src={imageSrc} alt="Modal" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 50%;
    max-height: 50%;
    object-fit: contain;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: white;
  z-index: 1001; // Ensure it is above the image

  &:hover {
    color: #ddd;
  }
`;
