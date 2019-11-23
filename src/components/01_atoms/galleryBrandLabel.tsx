import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface IGalleryBrandLabel {
  label: string;
  pwidth: number;
}

interface IStyledSVG {
  swidth: number;
  sheight: number;
  pwidth: number;
}

const GalleryBrandLabel = (props: IGalleryBrandLabel) => {
  let resizeListener: any = null;
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const [viewBoxRect, setViewBoxRect] = useState({ w: 0, h: 0, x: 0, y: 0 });
  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    if (props.pwidth > 0) {
      getParentWidth();
    }
    resizeListener = window.addEventListener("resize", getParentWidth);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [props.pwidth, textRef]);

  function getParentWidth() {
    const parentWidth = props.pwidth;
    try {
      const textBBox = textRef.current.getBBox();
      setViewBoxRect({
        w: textBBox.width,
        h: textBBox.height,
        x: textBBox.x,
        y: textBBox.y
      });
      setParentWidth(parentWidth);
    } catch {}
  }

  return (
    <StyledSVG
      width={viewBoxRect.w}
      height={viewBoxRect.h}
      swidth={viewBoxRect.w}
      sheight={viewBoxRect.h}
      pwidth={parentWidth}
      viewBox={`0 0 ${viewBoxRect.w} ${viewBoxRect.h}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      ref={svgRef}
    >
      <g width={viewBoxRect.w} height={viewBoxRect.h}>
        <text ref={textRef} x="0" y="130">
          {props.label}
        </text>
      </g>
    </StyledSVG>
  );
};

export default GalleryBrandLabel;

const StyledSVG = styled.svg`
  position: absolute;
  z-index: 999;
  top: calc(50% - ${(p: IStyledSVG) => p.sheight / 2}px);
  left: calc(50% - ${(p: IStyledSVG) => p.swidth / 2}px);
  transform-origin: center center;
  transform: rotate(-90deg) translateY(-${(p: IStyledSVG) => p.pwidth / 2}px);
  text {
    font-family: "glacial", sans-serif;
    text-transform: uppercase;
    stroke: var(--color-PRIMARY);
    stroke-width: 2;
    font-size: 13rem;
    letter-spacing: 10px;
    fill: none;
    fill-rule: evenodd;
    fill-opacity: 0;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
