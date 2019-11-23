import React from "react";
import styled from "styled-components";

const exitIcon = require("~/static/images/svg/icon-exit.svg");

interface IModalNav {
  brand: string;
  callback: () => void;
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 30px 0;
  background: none;
  @media screen and (max-width: 1000px) {
    background: var(--color-SECONDARY);
  }
  & > div {
    display: grid;
    grid-template-columns: repeat(28, 1fr);
    grid-auto-flow: dense;
    align-items: center;
    h3 {
      grid-column: 2 / span 10;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    a {
      grid-column: 27;
      align-self: end;
      img {
        display: block;
        width: 100%;
        max-width: 100px;
      }
      @media screen and (max-width: 1000px) {
        grid-column: 26 / span 2;
      }
      @media screen and (max-width: 768px) {
        grid-column: 25 / span 3;
      }
    }
  }
`;

const ModalNav = (props: IModalNav) => {
  function handleClick(e: any) {
    props.callback();
    e.preventDefault();
  }
  return (
    <StyledNav>
      <div>
        <h3>{props.brand}</h3>
        <a href="#" onClick={e => handleClick(e)}>
          <img src={exitIcon} alt="" />
        </a>
      </div>
    </StyledNav>
  );
};

export default ModalNav;
