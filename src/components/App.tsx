import React from 'react';
import Intro from './04_ecosystems/intro';
import About from './04_ecosystems/about';
import Capabilites from './04_ecosystems/capabilities';
import Work from './04_ecosystems/work';
import {createGlobalStyle} from 'styled-components';
import '../static/fonts/fonts.css';

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
`;

const App = () => {
  return (
    <>
      <CSSGlobals />
      <Intro />
      <About />
      <Capabilites />
      <Work />
    </>
  )
}

export default App;