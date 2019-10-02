import React, { useContext } from 'react';
import Intro from './04_ecosystems/intro';
import About from './04_ecosystems/about';
import Capabilites from './04_ecosystems/capabilities';
import Work from './04_ecosystems/work';
import styled, {createGlobalStyle} from 'styled-components';
import '../static/fonts/fonts.css';
import Modal from './03_organisms/modal';
import ModalContextProvider, {modalContext} from '../context/modalContext';

const CSSGlobals = createGlobalStyle`
  :root{
    --color-PRIMARY: #FAAC2A;
    --color-SECONDARY: #123131;
  }
  *{
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    background: var(--color-PRIMARY);
    overflow-x: hidden;
  }
  h1{
    font-size: 14.0rem;
  }
  h1,h2,h3{
    font-family: 'glacial', sans-serif;
    text-transform:uppercase;
  }
  h4,h5,h6{font-family: 'nunito', sans-serif;}
  p{
    font-family: 'nunito', sans-serif;
  }
`;

interface IStyledMain {
  modalOpen: boolean
}
const StyledMain = styled.section`
  pointer-events: ${(p:IStyledMain) => p.modalOpen ? 'none' : 'auto'};
`;

const App = () => {
  const {modalContextState} = useContext(modalContext)
  return (
    <ModalContextProvider>
      <StyledMain modalOpen={modalContextState}>
        <CSSGlobals />
        <Intro />
        <About />
        <Capabilites />
        <Work />
      </StyledMain>
      <Modal />

    </ModalContextProvider>
  )
}

export default App;