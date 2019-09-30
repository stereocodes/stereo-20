import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.h1`
  text-transform: uppercase;
  font-family: 'glacial', sans-serif;
  font-size: 15.0rem;
  text-align: center;
  letter-spacing: -5px;
  line-height: 140px;
  grid-column: 1 / span 28;
  margin-bottom: 100px;
  span{
    display: block;
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 5.0rem;
    line-height:50px;
    letter-spacing: -1.75px;
    margin-bottom:50px;
  }
`;

interface IHeader {
  label: string
  break?: boolean
  className?: string
}

const Header = (props: IHeader) => {
  const breakAll = (label:string) => {
    return label.split(' ').map((str, i) => (<span key={i}>{str}</span>));
  }
  return (
    <StyledHeader className={props.className}>{props.break ? breakAll(props.label) : props.label}</StyledHeader>
  )
}

Header.defaultProps = {
  label: "Header Title"
}


export default Header;