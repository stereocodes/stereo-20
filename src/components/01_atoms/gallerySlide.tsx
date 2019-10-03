import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { zdepth } from '../../lib/zdepth';


interface IGallerySlide {
  slideState: number
  image: string
}

interface IStyledSlide {
  image: string
}

const StyledSlide = styled.div`
  position: absolute;
  top: 0;
  left:100%;
  height: 100%;
  width: 80%;
  opacity: 0;
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
  transform: scale(.8) translate3d(0,0,0);
  transition: all .8s;
  z-index: ${zdepth('lowest')};
  background-image: url(${(p:IStyledSlide) => p.image});
  transition-duration: 0s;
  @media screen and (max-width: 768px) {width: 100%;}
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 110%;
    width: 110%;
    opacity: 1;
    background: var(--color-SECONDARY);
    transition: all .8s;
  }
  &.out{
    left: -100%;
    opacity: 0;
    z-index: 99;
    transform: scale(1) translate3d(0,0,0);
    transition-duration: .8s;
    transition-delay: 0s;
  }
  &.current{
    left: 0;
    z-index: ${zdepth('high')};
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
    /* box-shadow: 10px 10px 30px rgba(0,0,0,.3); */
    &:before{ opacity: 0; }
    transition-duration: .8s;
    transition-delay: .2s;
  }
  &.next{
    left: 100%;
    opacity: 1;
    /* box-shadow: 10px 10px 30px rgba(0,0,0,.1); */
    transform: scale(1) translate3d(0,0,0);
    z-index: ${zdepth('mid')};
    &:before{ opacity: 0; }
    transition-duration: .8s;
    transition-delay: .4s;
  }
  &.last{
    left: 200%;
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
    z-index: ${zdepth('low')};
    &:before{ opacity: 0; }
    transition-duration: .8s;

  }
`;

const GallerySlide = (props: IGallerySlide) => {
  const slideRef = useRef(null);

  useEffect(() => {
    
    if (props.slideState === 4) {
      setTimeout(() => {
        slideRef.current.classList.remove('out');
      }, 1000);
    }
  },[props.slideState]);


  function getClasses(index:number) {
    switch(index) {
      case 1:
        return 'current';
      case 2:
        return 'next';
      case 3:
        return 'last';
      case 4:
        return 'out';
      default:
        return '';
    }
  }
  return (
    <StyledSlide
      className={`slide ${getClasses(props.slideState)}`}
      image={props.image}
      ref={slideRef}
    ></StyledSlide>
  )
}


export default GallerySlide;