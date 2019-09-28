import React,{useEffect, useRef, useState} from 'react';
import styled, { keyframes, css } from 'styled-components';


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


const tickerScrolling = (start:number, reverse:boolean) => {
  const directionKeys = keyframes`
    0%{transform: translateX(${reverse ? start : 0}px);}
    50%{transform: translateX(${reverse ? 0 : start}px);}
    100%{transform: translateX(${reverse ? start : 0}px);}
    `;
  return css`
    animation:  ${directionKeys} 450s linear infinite;
  `;
};

interface IStyledTickerContainer {
  start: number
  topLocation: number
  reverse: boolean
}

const StyledTickerContainer = styled.p`
  display: flex;
  position: absolute;
  z-index: 0;
  top: ${(p:IStyledTickerContainer) => p.topLocation}px;
  ${(p:IStyledTickerContainer) => tickerScrolling(p.start, p.reverse)};
`;

const tickerString = 'HTML5, css3, JS/17/18/Edge, PHP, Python, Ruby, XML, XSLT, Go, Drupal, Wordpress, Laravel, Zend FW, Django 1.x/2.x, Rails, Angular 1.x, Backbone, React, Underscore/lodash, Prototype(the web framework), Digital Ocean, Rackspace, AWS, EC2/S3/Lambda, GCP, Ubuntu, Apache, Nginx, Firebase, Dialogflow/Actions, CSSinJS, styled-components, BEM, Atomic Design/Development, PS, AI, Sketch, Phase, Invision Studio, Framer-x, Docker, Vagrant, Virtualenv, Pyenv';
const Ticker = () => {
  const tickersCount = 10;
  const tickers = Array.from({length: tickersCount}, a => useRef(null));
  const [tickerWidth, setTickerWidth] = useState(0);

  useEffect(() => {
    const theWidth = tickers[0].current.getBoundingClientRect().width - window.innerWidth;
    setTickerWidth(-theWidth)
  },[]);

  const createTickers = () => {
    return tickerString.split(',').map((str:any, i:number) => (
      <StyledTickerElement key={i}>
        {str}
      </StyledTickerElement>
    ))
  }

  return (
    <>
      {Array.from({length: tickersCount})
        .map(
          (item:any, i:number) => (
            <StyledTickerContainer 
              start={Math.floor(tickerWidth)} 
              ref={tickers[i]}
              topLocation={i*100}
              reverse={i%2 === 0 ? true : false}
              key={i}
              style={{animationDuration: 200 + (Math.random() * 200) + 'px'}}
            >
              {createTickers()}
            </StyledTickerContainer>
          )
        )
      }
    </>
  )
}

export default Ticker;