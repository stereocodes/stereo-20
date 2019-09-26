import React from 'react';
import styled from 'styled-components';
import Section from '../03_organisms/section';
const keyhole = require('~/static/images/svg/keyhole.svg');

const StyledIntro = styled.section`

`;

const Intro = () => {
  return (
    <Section label="Design Development Strategy" break>
      <img src={keyhole} alt=""/>
    </Section>
  )
}

export default Intro;