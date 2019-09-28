import React from 'react';
import styled from 'styled-components';
import Section from '../03_organisms/section';
import Logo from '../01_atoms/logo';
const keyhole = require('~/static/images/svg/keyhole.svg');

const StyledIntro = styled.div`
  padding: 100px 20px 100px;
`;

const StyledIntroGraphic = styled.div`
  grid-column: 9 / span 12;
  padding: 0 30px;
  img{
    display: block;
    width: 100%;
  }
  @media screen and (max-width: 768px){
    grid-column: 3 / span 24;
  }
`;

const StyledLogo = styled(Logo)`
  max-width: 170px;
  margin: 0 auto 20px;
  img{
    display:block;
    width: 100%;
  }
  @media screen and (max-width: 768px){
    max-width: 100px;
  }
`;

const StyledIntroSection = styled(Section)`
  padding-top: 50px;
`;

const Intro = () => {
  return (
    <StyledIntro>
      <StyledLogo />
      <StyledIntroSection label="Design Development Strategy" break>
        <StyledIntroGraphic>
          <img src={keyhole} alt=""/>
        </StyledIntroGraphic>
      </StyledIntroSection>
    </StyledIntro>
  )
}

export default Intro;