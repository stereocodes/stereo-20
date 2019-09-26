import React from 'react';
import Intro from './04_ecosystems/intro';
import About from './04_ecosystems/about';
import Capabilites from './04_ecosystems/capabilities';
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
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    background: var(--color-PRIMARY);
  }
`;

const App = () => {
  return (
    <>
      <CSSGlobals />
      <Intro />
      <About />
      <Capabilites />
    </>
  )
}

export default App;