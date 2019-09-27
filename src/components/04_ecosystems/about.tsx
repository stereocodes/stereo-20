import React from 'react';
import styled from 'styled-components';
import Section from '../03_organisms/section';

const box = require('~/static/images/svg/box.svg');


const StyledAboutContainer = styled.div`
  grid-column: 9 / span 12;
  padding: 0 30px;
  img{
    display: block; 
    width: 100%;
    max-width: 280px;
    margin: 0 auto 50px;
    @media screen and (max-width: 768px) {
      max-width: 150px;
    }
  }
  p{
    font-size: 2.2rem;
    line-height: 40px;
    text-align: center;
    margin-bottom: 100px;
    font-family: 'nunito', sans-serif;
    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
      line-height: 35px;
    }
  }
  @media screen and (max-width: 1200px) {
    grid-column: 6 / span 18;
  }
  @media screen and (max-width: 768px) {
    grid-column: 2 / span 26;
  }
`;


const About = () => {
  return (
    <Section label="Who Dis." color="var(--color-SECONDARY)">
      <StyledAboutContainer>
        <p>This site and all it's works are a culmination of over 10 years of professional web development and design. I have built marketing sites, web apps, CLI's, custom frameworks, and servers. My knowledge spans the full gamut of web technology and then some. I have designed, strategized, coded, and deployed on the best of what the web has to offer. My experience ranges from Wordpress, Django, and React; to Sketch, Invision Studio, and Photoshop.</p>
        <img src={box} alt=""/>
      </StyledAboutContainer>
    </Section>
  )
}

export default About;