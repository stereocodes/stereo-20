import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../01_atoms/header';


interface IStyledSection {
  color: string
}

const StyledSection = styled.section`
  padding: 100px 0;
  background: ${(p:IStyledSection) => p.color};
  display: grid;
  grid-template-columns: repeat(28, 1fr);
  color: ${(p:IStyledSection) => p.color === 'var(--color-SECONDARY)' ? 'var(--color-PRIMARY)' : 'var(--color-SECONDARY)'};
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