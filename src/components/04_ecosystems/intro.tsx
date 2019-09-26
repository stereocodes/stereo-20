import React from 'react';
import styled from 'styled-components';
import Section from '../03_organisms/section';
import Logo from '../01_atoms/logo';
const keyhole = require('~/static/images/svg/keyhole.svg');

const StyledIntro = styled.div`
  padding: 120px 20px 100px;
`;

const StyledIntroGraphic = styled.div`
  grid-column: 9 / span 12;
  padding: 0 30px;
  img{
    display: block; 
    width: 100%;
  }
`;

const StyledLogo = styled(Logo)`
  max-width: 200px;
  margin: 50px auto;
  img{
    display:block;
    width: 100%;
  }
`;

const Intro = () => {
  return (
    <StyledIntro>
      <StyledLogo />
      <Section label="Design Development Strategy" break>
        <StyledIntroGraphic>
          <img src={keyhole} alt=""/>
        </StyledIntroGraphic>
      </Section>
    </StyledIntro>
  )
}

export default Intro;