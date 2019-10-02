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
  overflow: scroll;
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
`;

const StyledSection = styled(Section)`
  padding: 80px 0;
  align-items: center;
  div:first-child{
    grid-column: 4 / span 10;
  }
  div:last-child{
    grid-column: 17 / span 10;
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
          <StyledModalHeader label="GDC Interactive Kiosk" break/>
          <div>
            <p>A large scale multitouch interactive kiosk to educate streamers on the Twitch platform. The kiosk technology consisted of a React/Electron application deployed to work on a windows PC to be interacted with on multiple 60 inch capacitive touch displays. The application being a single piece of software could be separated into three different experiences to educate the streamer along the three main topics of development, launch, and live.</p>
            <p>The displays were showcased at the Game Developers Conference(GDC) in San Francisco in March of this year(2019). As I was the sole developer of the application I was sent to the conference to assist Twitch in any issues and to help in a successful launch of the application to booth displays.</p>
          </div>
        </div>
        <div>
          <Gallery
            label="TWITCH"
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