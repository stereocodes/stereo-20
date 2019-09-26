import React from 'react';
import Button from './01_atoms/button';
import Logo from './01_atoms/logo';
import Header from './01_atoms/header';
import Intro from './04_ecosystems/intro';
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
      
      <Logo/>
      <Intro />
    </>
  )
}

export default App;