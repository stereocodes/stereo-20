import React, { ReactNode, MutableRefObject } from "react";
import styled from "styled-components";
import Header from "../01_atoms/header";
import IntObserverWrap from "../../lib/intersectionObserver";

interface IStyledSection {
  color: string;
}

const StyledSection = styled.section`
  padding: 100px 0;
  background: ${(p: IStyledSection) => p.color};
  display: grid;
  grid-template-columns: repeat(28, 1fr);
  color: ${(p: IStyledSection) =>
    p.color === "var(--color-SECONDARY)"
      ? "var(--color-PRIMARY)"
      : "var(--color-SECONDARY)"};
  overflow: hidden;
  width: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

interface ISection {
  label?: string;
  break?: boolean;
  color?: string;
  children?: ReactNode;
  className?: string;
}

const Section = (props: ISection) => {
  return (
    <IntObserverWrap>
      <StyledSection color={props.color} className={props.className}>
        {props.label && <Header break={props.break} label={props.label} />}
        {props.children}
      </StyledSection>
    </IntObserverWrap>
  );
};

Section.defaultProps = {
  color: "var(--color-PRIMARY)"
};

export default Section;
