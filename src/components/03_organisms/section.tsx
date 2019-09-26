import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../01_atoms/header';


interface IStyledSection {
  color: string
}

const StyledSection = styled.section`
  background: ${(p:IStyledSection) => p.color};
  display: grid;
  grid-template-columns: repeat(28, 1fr);
`;


interface ISection {
  label: string
  break?: boolean
  color?: string
  children?: ReactNode
}

const Section = (props: ISection) => {
  return (
    <StyledSection color={props.color}>
      <Header 
        break={props.break} 
        label={props.label}
      />
      {props.children}
    </StyledSection>
  )
}

Section.defaultProps = {
  color: 'var(--color-PRIMARY)'
}


export default Section;