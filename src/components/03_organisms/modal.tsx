import React from 'react';
import styled from 'styled-components';
import Header from '../01_atoms/header';

const StyledModal = styled.div`
  position:fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--color-SECONDARY);
  z-index: 1;
  color: var(--color-PRIMARY);
`;

const StyledModalHeader = styled(Header)`
  font-size: 8.0rem;
  text-align: left;
  line-height: 80px;
  span{
    text-align: left;
  }
`;



const Modal = () => {
  return (
    <StyledModal>
      <StyledModalHeader label="hello world" break/>
      
    </StyledModal>
  )
}

export default Modal;