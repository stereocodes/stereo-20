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
  left: 30%;
  height: 100%;
  width: 80%;
  border-radius: 5px;
  overflow: hidden;
  opacity: 0;
  background-size: cover;
  background-position: center;
  transform: scale(.6) translate3d(0,0,0);
  transition: all .8s;
  z-index: ${zdepth('lowest')};
  pointer-events: none;
  background-image: url(${(p:IStyledSlide) => p.image});
  transition-duration: 0s;
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 110%;
    width: 110%;
    opacity: 1;
    background: rgb(var(--snow));
    transition: all .8s;
  }
  &.out{
    left: -10%;
    opacity: 0;
    z-index: 99;
    transform: scale(1.1) translate3d(0,0,0);
    transition-duration: .8s;
  }
  &.current{
    left: 0;
    z-index: ${zdepth('high')};
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
    box-shadow: 10px 10px 30px rgba(0,0,0,.3);
    &:before{ opacity: 0; }
    transition-duration: .8s;
  }
  &.next{
    left: 10%;
    opacity: 1;
    box-shadow: 10px 10px 30px rgba(0,0,0,.1);
    transform: scale(.9) translate3d(0,0,0);
    z-index: ${zdepth('mid')};
    &:before{ opacity: .4; }
    transition-duration: .8s;
  }
  &.last{
    left: 20%;
    opacity: 1;
    transform: scale(.8) translate3d(0,0,0);
    z-index: ${zdepth('low')};
    &:before{ opacity: .8; }
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
  console.log(getClasses(props.slideState));
  return (
    <StyledSlide
      className={`slide ${getClasses(props.slideState)}`}
      image={props.image}
      ref={slideRef}
    ></StyledSlide>
  )
}


export default GallerySlide;