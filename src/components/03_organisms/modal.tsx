import React, {useContext} from 'react';
import styled from 'styled-components';
import Header from '../01_atoms/header';
import Gallery from './gallery';
import Section from './section';
import ModalNav from '../02_molecules/modalNav';
import { string } from 'prop-types';
import {modalContext} from '../../context/modalContext';
import {work} from '../../store/work';
import ReactHtmlParser from 'react-html-parser';


interface IStyledModal {
  open: boolean
}

const StyledModal = styled.div`
  position:fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--color-SECONDARY);
  z-index: 1;
  color: var(--color-PRIMARY);
  overflow-y: auto;
  opacity: ${(p:IStyledModal) => p.open ? '1' : '0'};
  pointer-events: ${(p:IStyledModal) => p.open ? 'auto' : 'none'};
  transition: all .5s;
  p{
    font-family: 'nunito', sans-serif;
    font-size: 1.6rem;
    letter-spacing: 0.16px;
    line-height: 40px;
    margin-bottom:40px;
  }
`;

const StyledModalHeader = styled(Header)`
  font-size: 8.0rem;
  text-align: left;
  line-height: 80px;
  margin-bottom:70px;
  span{
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    font-size: 5.0rem;
    line-height: 50px;
  }
`;

const StyledSection = styled(Section)`
  padding-top: 120px;
  padding-bottom:80px;
  align-items: center;
  div:first-child{
    grid-column: 4 / span 10;
  }
  div:last-child{
    grid-column: 18 / span 10;
  }
  @media screen and (max-width: 768px) {
    display: block;
    padding: 120px 20px;
  }
`;


interface IModal {
  images: string[]
  copy: string
  title: string
  brand: string
}

const Modal = (props:IModal) => {
  const {modalContextState, setModalContextState} = useContext(modalContext);

  function selectedWork():any {
    return work
    .filter((item:any) => item.filter((subItem:any) => subItem.workId === modalContextState.id).length)[0]
    .filter((item:any) => item.workId === modalContextState.id)[0];
  }
  console.log(modalContextState.open);
  return (
    <StyledModal open={modalContextState.open}>
      <ModalNav brand={selectedWork().brand} callback={() => setModalContextState({open: false, id: modalContextState.id})}/>
      <StyledSection color="var(--color-SECONDARY)">
        <div>
          <StyledModalHeader label={selectedWork().title} break/>
          <div>
            {ReactHtmlParser(selectedWork().copy)}
          </div>
        </div>
        <div>
          {
            modalContextState.open && 
            <Gallery
              label={selectedWork().brand}
              play={true}
              images={selectedWork().slides}
            />
          }
          
        </div>
      </StyledSection>
    </StyledModal>
  )
}

Modal.defaultProps = {
  images: [],
  copy: string,
  title: string,
  brand: string 
}

export default Modal;