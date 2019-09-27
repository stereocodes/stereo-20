import React from 'react';
import styled, { keyframes } from 'styled-components';


const StyledTickerElement = styled.span`
  text-transform: uppercase;
  font-family: 'glacial', sans-serif;
  color: var(--color-SECONDARY);
  font-size: 10.0rem;
  white-space: nowrap;
  display: block;
  padding: 0 20px;
  opacity: .1;
`;

const tickerScrolling = (start:number) => {
  
  return keyframes`
    0%{
      transform: translateX(${start}px);
    }
    50%{
      transform: translate(${start * 2}px);
    }
    100%{
      transform: translate(${start}px);
    }`
  }
;

interface IStyledTickerContainer {
  start: number
}

const StyledTickerContainer = styled.p`
  display: flex;
  position: relative;
  animation: ${(p:IStyledTickerContainer) => tickerScrolling(p.start)} 200s linear infinite;
`;



const tickerString = 'HTML5, css3, JS/17/18/Edge, PHP, Python, Ruby, XML, XSLT, Go, Drupal, Wordpress, Laravel, Zend FW, Django 1.x/2.x, Rails, Angular 1.x, Backbone, React, Underscore/lodash, Prototype(the web framework), Digital Ocean, Rackspace, AWS, EC2/S3/Lambda, GCP, Ubuntu, Apache, Nginx, Firebase, Dialogflow/Actions, CSSinJS, styled-components, BEM, Atomic Design/Development, PS, AI, Sketch, Phase, Invision Studio, Framer-x, Docker, Vagrant, Virtualenv, Pyenv';
const Ticker = () => {
  const createTickers = () => {
    return tickerString.split(',').map((str:any, i:number) => (
      <StyledTickerElement key={i}>
        {str}
      </StyledTickerElement>
    ))
  }
  return (
    <>
      <StyledTickerContainer start={-9000}>
        {createTickers()}
      </StyledTickerContainer>
      <StyledTickerContainer start={-2000}>
        {createTickers()}
      </StyledTickerContainer>
    </>
  )
}

export default Ticker;