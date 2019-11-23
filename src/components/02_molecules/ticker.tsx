import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import debounce from "lodash/debounce";
import { shuffle } from "../../lib/shuffle";

const StyledTickerElement = styled.span`
  text-transform: uppercase;
  font-family: "glacial", sans-serif;
  color: var(--color-SECONDARY);
  font-size: 10rem;
  white-space: nowrap;
  display: block;
  padding: 0 20px;
  opacity: 0.1;
  transition: all 2s;
  &.active {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
`;

const tickerScrolling = (start: number, reverse: boolean) => {
  const directionKeys = keyframes`
    0%{transform: translateX(${reverse ? start : 0}px);}
    50%{transform: translateX(${reverse ? 0 : start}px);}
    100%{transform: translateX(${reverse ? start : 0}px);}
    `;
  return css`
    animation: ${directionKeys} 450s linear infinite;
  `;
};

interface IStyledTickerContainer {
  start: number;
  topLocation: number;
  reverse: boolean;
}

const StyledTickerContainer = styled.p`
  display: flex;
  position: absolute;
  z-index: 0;
  top: ${(p: IStyledTickerContainer) => p.topLocation}px;
  ${(p: IStyledTickerContainer) => tickerScrolling(p.start, p.reverse)};
`;

const tickerString =
  "HTML5, css3, JS/17/18/Edge, PHP, Python, Ruby, XML, XSLT, Go, Drupal, Wordpress, Laravel, Zend FW, Django 1.x/2.x, Rails, Angular 1.x, Backbone, React, Underscore/lodash, Prototype(the web framework), Digital Ocean, Rackspace, AWS, EC2/S3/Lambda, GCP, Ubuntu, Apache, Nginx, Firebase, Dialogflow/Actions, CSSinJS, styled-components, BEM, Atomic Design/Development, PS, AI, Sketch, Phase, Invision Studio, Framer-x, Docker, Vagrant, Virtualenv, Pyenv";
const Ticker = () => {
  const tickersCount = 12;
  const tickers = Array.from({ length: tickersCount }, a => useRef(null));
  const [tickerWidth, setTickerWidth] = useState(12000);
  const [tickerTop, setTickerTop] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      const theWidth = tickers[0].current.offsetWidth - window.outerWidth;
      setTickerWidth(-theWidth);
    }, 500);
    handleResize();
    window.addEventListener("resize", debounce(handleResize, 100));
  }, []);

  const handleResize = () => {
    if (window.outerWidth <= 768) {
      setTickerTop(40);
    } else {
      setTickerTop(100);
    }
  };

  const createTickers = () => {
    return shuffle(tickerString.split(",")).map((str: any, i: number) => (
      <StyledTickerElement key={i}>{str}</StyledTickerElement>
    ));
  };

  useEffect(() => {
    window.setInterval(updateTickers, 5000);
  }, []);

  const updateTickers = () => {
    for (let ticker of tickers) {
      const tickerChildren = ticker.current.children;
      let childrenSelect = [];

      for (let tickerElement of tickerChildren) {
        const whereElement = tickerElement.getBoundingClientRect().left;

        tickerElement.classList.remove("active");

        if (
          whereElement <= window.outerWidth - tickerElement.offsetWidth &&
          whereElement >= 0
        ) {
          childrenSelect.push(tickerElement);
        }
      }

      let randomChild = Math.floor(Math.random() * childrenSelect.length);

      if (childrenSelect.length) {
        childrenSelect[randomChild].classList.add("active");
      }
    }
  };

  return (
    <>
      {Array.from({ length: tickersCount }).map((item: any, i: number) => (
        <StyledTickerContainer
          start={Math.floor(tickerWidth)}
          ref={tickers[i]}
          topLocation={i * tickerTop}
          reverse={i % 2 === 0 ? true : false}
          key={i}
          style={{ animationDuration: 300 + Math.random() * 1200 + "s" }}
        >
          {createTickers()}
        </StyledTickerContainer>
      ))}
    </>
  );
};

export default Ticker;
