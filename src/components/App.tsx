import React from 'react';
import Intro from './04_ecosystems/intro';
import About from './04_ecosystems/about';
import Capabilites from './04_ecosystems/capabilities';
import Work from './04_ecosystems/work';
import {createGlobalStyle} from 'styled-components';
import '../static/fonts/fonts.css';
import Modal from './03_organisms/modal';
import Gallery from './03_organisms/gallery';
const image1 = require('~/static/images/content/work-thumbnail-hq.jpg');
const image2 = require('~/static/images/content/work-thumbnail-tarot.jpg');
const image3 = require('~/static/images/content/work-thumbnail-stereo.jpg');
const image4 = require('~/static/images/content/work-thumbnail-spotify.jpg');

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
  h1,h2,h3{
    font-family: 'glacial', sans-serif;
  }
  h4,h5,h6{font-family: 'nunito', sans-serif;}
  p{
    font-family: 'nunito', sans-serif;
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
      {/* <Modal /> */}
      <Gallery play={true} images={[image1, image2, image3, image4]}/>
    </>
  )
}

export default App;