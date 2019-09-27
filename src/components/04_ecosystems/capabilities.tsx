import React from 'react';
import styled from 'styled-components';
import Section from '../03_organisms/section';
const eye = require('~/static/images/svg/eye.svg');

const StyledEye = styled.div`
  grid-column: 6 / span 18;
  img{
    display: block;
    width: 100%;
  }   
`;

const Capabilites = () => {
  return (
    <Section label="">
      <StyledEye>
        <img src={eye} alt=""/>
      </StyledEye>
    </Section>
  )
}


export default Capabilites;