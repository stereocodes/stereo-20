import React from 'react';
import styled from 'styled-components';
import Header from '../01_atoms/header';
import Gallery from './gallery';
import Section from './section';
import { string } from 'prop-types';
const image1 = require('~/static/images/content/work-thumbnail-hq.jpg');
const image2 = require('~/static/images/content/work-thumbnail-tarot.jpg');
const image3 = require('~/static/images/content/work-thumbnail-stereo.jpg');
const image4 = require('~/static/images/content/work-thumbnail-spotify.jpg');

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

const StyledSection = styled(Section)`
  padding: 80px 0;
  align-items: center;
  div:first-child{
    grid-column: 4 / span 10;
  }
  div:last-child{
    grid-column: 16 / span 10;
  }
`;

interface IModal {
  images: string[]
  copy: string
  title: string
  brand: string
}

const Modal = (props:IModal) => {
  return (
    <StyledModal>
      <StyledSection color="var(--color-SECONDARY)">
        <div>
          <StyledModalHeader label="hello world" break/>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, odit ducimus accusantium, quidem libero aspernatur earum laborum officia reiciendis quo illo sequi eos iste, fugit dolor eligendi optio voluptate ipsum.</p>
          </div>
        </div>
        <div>
          <Gallery
            play={true}
            images={[image1, image2, image3, image4]}
          />
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