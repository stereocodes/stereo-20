import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';


interface IGalleryBrandLabel {
  label: string
}

interface IStyledSVG {
  swidth: number
  sheight: number
}

const StyledSVG = styled.svg`
  position: absolute;
  z-index: 999;
  top: calc(50% - ${(p:IStyledSVG) => p.sheight / 2}px);
  left: calc(50% - ${(p:IStyledSVG) => p.swidth / 2}px);
  transform-origin: center center;
  transform: rotate(-90deg) translateY(-100%);
  text{
    font-family: 'glacial', sans-serif;
    text-transform: uppercase;
    stroke: var(--color-PRIMARY);
  }
`;

const GalleryBrandLabel = (props: IGalleryBrandLabel) => {
  const textRef = useRef(null);
  const [viewBoxRect, setViewBoxRect] = useState({w: 0, h: 0, x: 0, y:0});
  
  useEffect(() => {
    const textBBox = textRef.current.getBBox();
    setViewBoxRect({w: textBBox.width, h: textBBox.height, x: textBBox.x, y: textBBox.y})
  }, [])
  return (
    <StyledSVG
      width={viewBoxRect.w}
      height={viewBoxRect.h}
      swidth={viewBoxRect.w}
      sheight={viewBoxRect.h}
      viewBox={`0 0 ${viewBoxRect.w} ${viewBoxRect.h}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >      
      <g width={viewBoxRect.w} height={viewBoxRect.h}>
        <text
          ref={textRef}
          x="0"
          y={viewBoxRect.y * -1}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
          fillOpacity="0"
          fontSize="150"
          fontWeight="bold"
          letterSpacing="10"
        >
            {props.label}
        </text>
      </g>
      
    </StyledSVG>
  )
}

export default GalleryBrandLabel;