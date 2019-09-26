import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.h1`
  text-transform: uppercase;
  font-family: 'glacial', sans-serif;
  font-size: 15.0rem;
  color: var(--color-SECONDARY);
  text-align: center;
  letter-spacing: -5px;
  line-height: 140px;
  grid-column: 1 / span 28;
  span{
    display: block;
    width: 100%;
    text-align: center;
  }
`;

interface IHeader {
  label: string
  break?: boolean
}

const Header = (props: IHeader) => {
  const breakAll = (label:string) => {
    return label.split(' ').map((str, i) => (<span key={i}>{str}</span>));
  }
  return (
    <StyledHeader>{props.break ? breakAll(props.label) : props.label}</StyledHeader>
  )
}

Header.defaultProps = {
  label: "Header Title"
}


export default Header;